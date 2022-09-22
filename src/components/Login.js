import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import  employee  from '../database/Data'
import { ErrorMessage, Field } from 'formik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Errortext from './Errortext'
import  pojectList from '../database/ProjectData'
import {useNavigate} from "react-router-dom"
let initialValues = {
    // esme key ka name input value m string k name se same hona chaiye
    password: '',
    email: ''
}

const validationSchema = Yup.object({
    password: Yup.string().required('required'),
    email: Yup.string().email('invalid input').required('required')
})

function Login() {

       
    const [mentordata, setMentordata] = useState([{}])

    
    const history = useNavigate()

    function handlelogindata() {
        
        pojectList.map((e) => {
            let arr = e.access;
            arr.map((ele) => {
                if (ele === "ajay") {
                    // console.log("e data is",e);
                    setMentordata([{ ...mentordata, ...e }])
                }
            })
        })
        console.log("mentor data", mentordata);

    }


    let onSubmit = (values) => {
        console.log("values", values);
        
        let filterlogindata = employee.filter((e) => e.email === values.email && e.password === values.password)
        console.log("filter chalu h", filterlogindata[0].role);
        if (filterlogindata) {
            if (filterlogindata[0].role === "mentor") {
                history(`/mentordata`)
            } else{
                history(`/employee`)
            }
        }
    
    window.localStorage.setItem("userEmail",JSON.stringify(values.email))
    
    }

    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {
                formik => {
                    // console.log("formik is here", formik);
                    return (

                        <Form className='form'>

                            <div className='action'>
                                <div><h3>Login Here</h3></div>
                                <div className='form-control'>
                                    <Field type="email" id="email" name="email" placeholder='Enter Your Mail' />
                                    <ErrorMessage name='email' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="password" id="password" name="password" placeholder='Enter Your Password' />
                                    <ErrorMessage name='password' component={Errortext} />
                                </div>
                               
                                <button type='submit' onClick={handlelogindata}>Login</button>
                                <div className='span'>Don't Have Account? <Link to='/signup'><span>Signup</span></Link></div>
                            </div>

                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default Login

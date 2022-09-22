import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field,} from 'formik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Errortext from './Errortext'
import './signup.css'
import Employee from '../database/Data'
import employee from '../database/Data'
let initialValues = {
    // esme key ka name input value m string k name se same hona chaiye
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    firstname: Yup.string().required('required'),
    lastname: Yup.string().required('required'),
    password: Yup.string().required('required'),
    email: Yup.string().email('invalid input').required('required')
})
function Signup() {
    const [uservalue, setUservalue] = useState('')
    let onSubmit = (values) => {

        let signupdata ={
            name : values.firstname,
            lastname : values.lastname,
            email : values.email,
            password : values.password,
            role : uservalue,
            id : new Date().getTime(),
        }
        employee.push(signupdata)
        console.log("employee data", employee)
      
    }
    console.log("uservalues", uservalue)
    

   
    return (
        <Formik 
        initialValues={ initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {
                formik => {
                    return (
                        <Form>
                            <div className="page">
                          
                                <h1>Sign Up</h1>
                                <div className='form-control'>
                                    <Field type="text" placeholder="First Name" name='firstname' className="input" />
                                    <ErrorMessage name='firstname' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="text" placeholder="Last Name" name='lastname' className="input" />
                                    <ErrorMessage name='lastname' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="email"  name="email" placeholder='Enter Your Mail' className='input' />
                                    <ErrorMessage name='email' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="password"  name="password" placeholder='Enter Your Password' className='input'/>
                                    <ErrorMessage name='password' component={Errortext} />
                                </div>
                                <div className='radio'>
                                    <select  className = "selectusertype" onChange={(e) => setUservalue(e.target.value)}>
                                        <option value='employee'>Employee</option>
                                        <option value='mentor'>Mentor</option>
                                    </select>
                                </div>

                                <div><p>Already Have a Account <Link to='/'><span>Login</span></Link></p></div>

                                <button type='submit' className='Signbtn'  >SignUp</button>

                            </div>
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default Signup
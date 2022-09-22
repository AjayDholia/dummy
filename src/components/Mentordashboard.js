import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pojectList from '../database/ProjectData'
import './mentordashboard.css'
function Userdashboard() {

    const params = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem("projectData"));
        if (!oldData) {
          oldData = []
        }
        
        let projectDetail = oldData.filter((ele) => {
            return ele.id == params.id
        })
        console.log(projectDetail);

        setProject(projectDetail[0])

    }, [params])

    console.log("project", project)


    return (
        <div className='main'>
            <div className='div1'>
                <label for="text" className='label1'> Project Name</label>
                <input type='text' className='textinput1' value={project.name}></input>
            </div>
            <div className='div2'>
                <label for="status" className='label2'> Status</label>
                <input type='text' className='textinput2' value={project.status}></input>
            </div>
            <div className='div3'>
                <label for="text" className='label3'> Final time</label>
                <input type='text' className='textinput3' value={project.finalTime}></input>
            </div>
            <div className='div4'>
                <label for="Comments" className='label4'> Comments</label>
                <input type='textbox' className='textinput4' value={project.comment}></input>
            </div>

            <div className='div5'>
                <label for="reply" className='label5'> Reply</label>
                <input type='textbox' className='textinput5' value={project.reply}></input>
            </div>
            <div className='div6'>
                <label for="qa" className='label6'> QA</label>
                <input type='textbox' className='textinput6' value={project.QA}></input>
            </div>
            <div className='div7'>
                <label for="code" className='label7'> Code Quality</label>
                <input type='text' className='textinput7' value={project.code}></input>
            </div>
            <div className='div8'>
                <label for="code" className='label8' > Approved</label>
                <input type='text' className='textinput8' value={project.Approved}></input>
            </div>
            <div className='div9'>
                <label for="developer" className='label9'> Developer</label>
                <input type='text' className='textinput9' value={project?.access?.join(",")}></input>
            </div>
            <div className='div10'>
                <label for="last" className='label10'>Last Date</label>
                <input type='Date' className='textinput10' value={project.date} ></input>
            </div>

        </div>
    )
}

export default Userdashboard
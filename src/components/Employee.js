import { List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import employee from '../database/Data'
function Employee() {
    const [employeedata, setEmployeedata] = useState([])
    const history = useNavigate()
    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem("projectData"));
        let userEmail = JSON.parse(localStorage.getItem("userEmail"));
        let emp = employee.find(ele => ele.email === userEmail);

        console.log("employee data",{ emp,oldData: oldData[0].access})

        if (!oldData) {
            oldData = []
        }
        oldData=oldData.filter((ele)=>{
            console.log({ele:ele.access});
            return ele.access.includes(emp.id)
        })

        setEmployeedata(oldData)
    }, [])

    return (
                  
        <div>
        <table style={{marginTop: "5%",
        marginLeft: "5%",
        height:"50vh",
        width:"18vw",
        borderRadius:"12px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        boxSizing:"border-box",
        padding:"1rem"}}>
              <tr style={{width:"30%",
            backgroundColor:"gray",
            borderRadius:"10px"}}>
                <th >Project Names</th>
                <th>Project ID</th>
              </tr>
              {
                employeedata?.map((ele)=>{
                  return(
                    <tr  style={{width:"40%",
                    backgroundColor:"lightgray",
                    borderRadius:"10px",
                  textAlign:"center",
                cursor:"pointer"}}  onClick={()=>{
                      history(`/mentordashboard/${ele.id}`)
                    }}>
                      <td>{ele.name}</td>
                      <td>{ele.id}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        
    )
}

export default Employee
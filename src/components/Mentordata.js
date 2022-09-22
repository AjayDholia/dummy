import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { useState } from 'react'
import Project from './Project';
import Technologies from './Technologies'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import  './mentor.css'
import {  List, ListItem, ListItemText } from '@mui/material';


function Mentordata() {
  const [technologydisplay, setTechnologydisplay] = useState(false)
  const [displayproject, setDisplayproject] = useState(false);
  const [projectListLocal, setProjectListLocal] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useNavigate()

  const handleClick = (event) => {
  
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("projectData"));
    if (!oldData) {
      oldData = []
    }
    console.log()
    setProjectListLocal(oldData)
  },[displayproject])
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <div> 
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300
          }}
        >
          {
            technologydisplay === true ?
              <Technologies />
              : null
          }
          {
            displayproject === true ?
              <Project setDisplayproject= {setDisplayproject} />
              : null
          }

        </Box>
      </Popover>
    <div className='btnclass'>

    <Button className='btn-cont' aria-describedby={id} variant="contained" onClick={(e) => {
          setTechnologydisplay(true)
          setDisplayproject(false)
          handleClick(e)
        }} >
          Add Technology
        </Button>
        <Button className='btn-cont' aria-describedby={"name"} variant="contained" onClick={(e) => {
          handleClick(e)
          setTechnologydisplay(false)
          setDisplayproject(true)
        }} >
          Add Project
        </Button>


    </div>
        
      </div>
      <div>

        {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {projectListLocal?.map((ele) => {
            return (<ListItem alignItems="flex-start" onClick={() => {
              history(`/mentordashboard/${ele.id}`)
            }}> <ListItemText   
            primary={ele.name}
  /></ListItem>) */}
          {/* })}
        </List> */}
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
            projectListLocal?.map((ele)=>{
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
    </div >
  )
}

export default Mentordata
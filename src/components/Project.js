import React, { useEffect, useState, useParam } from 'react';
import './project.css'
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { fabClasses } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import employee from '../database/Data';
var val
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'javaScript',
  'html',
  'CSS',
  'React',
  'Angular',
  'Andriod',
  'TypeScript',
  'SQL',
  'Mongodb',
  'Express',
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function Project({setDisplayproject}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChanges =(event)=>{
    setTechselect(event.target.value)
    console.log("techselect",event.target.value);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

  }

  const handleChange = (event) => {
    setNameselect(event.target.value)
    console.log("nameselect",nameselect);
     val =event.target.value.map((e)=>{
      console.log("e.split is here",e.split(" "))
      return parseInt(e.split(" ")[0])
    }) 
    console.log("val",val);
  }
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [memberList, setMemberList] = useState([])

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("chal rha h ");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    let employe = employee
    setMemberList(employe.map((ele) => {
      return `${ele.id}  ${ele.name}`
    }))
  }, [])
  console.log(memberList)

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  }

  const[projectname,setProjectname] = useState('')
  const [startdate, setStartdate] = useState(null);
  const [enddate, setenddate] = useState(null);
  const [nameselect, setNameselect] = useState([]);
  const [techselect, setTechselect] = useState('');


  function savedata() {
    console.log("project name", projectname)
    console.log("startdate", startdate);
    console.log("enddate", enddate);
    console.log("nameselect", nameselect);
    let finaldata = {
      name:projectname,
      estimateTime: "",
      finalTime: enddate,
      status: "not started",
      comment: [],
      reply: [],
      QA: [],
      codeQuality: 'good',
      Approved: 'False',
      access:val,
      date: startdate,
      id: new Date().getTime(),
    }

    let oldData = JSON.parse(localStorage.getItem("projectData"));
    if (!oldData) {
      oldData = []
    }
    oldData.push(finaldata)

    setDisplayproject(false);

    let finalDt = [...oldData]

    window.localStorage.setItem("projectData", JSON.stringify(finalDt))
  }

  return (
    <div className='projectmain' style={{ borderRadius:"12px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    boxSizing:"border-box",
    padding:"1rem"}}>
      <div className='requiremtns'>
        <h3>Requirements</h3>
      </div>
      <div className="inputname">
        <input type="text" placeholder="Project Name" className='inputprojectname'  onChange={(e)=>setProjectname(e.target.value)}/>
      </div>
      <div className='timeline'>
        <label for="stardate">StartDate:</label>
        <input type="date" id="Startdate" name="startdate" onChange={(e) => setStartdate(e.target.value)} />
      </div>
      <div className='timeline'>
        <label for="enddate">EndDate:</label>
        <input type="date" id="enddate" name="enddate" onChange={(e) => setenddate(e.target.value)} />
      </div>
      <div className='filedocument'>
      
        <input type="file" name="file" className='addfile' onChange={() => { changeHandler() }} />
      </div>
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : null
      }
      <div className='addmember'>
        
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label" sx={{marginLeft:"9%"}}>Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={nameselect}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              sx={{height:"23%",width:"80%",marginLeft:"13%",borderRadius:"12px"}}
            >
              {memberList.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

      </div>
      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label" sx={{marginLeft:"9%"}}>Technology</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChanges}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          sx={{height:"23%",width:"80%",marginLeft:"13%",borderRadius:"12px"}}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div>
        <button className='savebtn' onClick={savedata}>save project</button>
      </div>

    </div>
  )
}
export default Project
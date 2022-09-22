import React,{useState} from 'react'
import './technologies.css'
function Technologies() {
  const[name,setName] = useState('')
  const[textbox,settextbox] = useState("");
  const[select,setSelect]  = useState('')
 
  function handleall(){
    console.log("here is all data",name+"",textbox
    +"",select);
    let technicalfinaldata ={
      name : name,
      comment:textbox,
      status:select
    }
  }
  return ( 
    <div className='technologies' style={{ borderRadius:"12px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    boxSizing:"border-box",
    padding:"1rem"}} >
        <div className='inputname'>
          <input type ='text' placeholder='Name' className='techinput' onChange={(e)=>setName(e.target.value)}/>

        </div>
        <div className='file' >
            <input type='file' className='techinput1'/>
        </div>
        <div className='textbox'>
            <input type ='textbox' className='techinput2' placeholder='text Area' onChange={(e)=>settextbox(e.target.value)}/>
        </div>
        <div className='selector' onChange={(e)=>setSelect(e.target.value)}>
            <select className='miniselector'>
              <option value="notStarted">not Started</option>
              <option value="inprogress">Inprogress</option>
              <option value="completed">Completed</option>
            </select>
        </div>
<div className='savebtn'>
  <button style={{height: "5vh",
    width: "9vw",
    marginLeft:"-50%"}}
    
    onClick={handleall}>save</button>
</div>
    </div>
  )
}

export default Technologies 
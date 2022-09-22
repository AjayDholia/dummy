import React from 'react'

function Errortext(props) {
  return (
    <div className='Error'  style={{color:"red"}}>
       {props.children}
        </div>
  )
}

export default Errortext

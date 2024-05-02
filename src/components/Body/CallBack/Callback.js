import React from 'react'
import "./callback.css"
function Callback() {
  return (
    <div>
      <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem", margin:"3vw"}}></div>
      <div className='callback-main'>
          <div className='callback-left'>
            <div className='fonsiz'>HOW WE WORK</div>
            <div className='fonsiz1'>Looking For The Right Talent For Your Organization?</div>
          </div>
          <div style={{width:"0", borderLeft:"1.5px solid", marginLeft:"2rem", marginRight:"2rem"}}></div>
          <div className='callback-right'>
            <span className='fonsiz2'>submit your details and we'll connect with you!</span>
            <span ><button>REQUEST A CALL BACK</button></span>
          </div>
      </div>
          <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem", margin:"3vw"}}></div>
    </div>
  )
}

export default Callback
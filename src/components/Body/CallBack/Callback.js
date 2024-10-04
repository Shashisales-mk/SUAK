import React, { useState } from "react";
import "./callback.css"
import PopForm from "../../Pop-up Form/Popup";
function Callback() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

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
            <span ><button onClick={handleGetStarted}>REQUEST A CALL BACK</button></span>
          </div>
      </div>
          <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem", margin:"3vw"}}></div>
        {/* Render the PopForm only when showForm is true */}
      {showForm && <PopForm onClose={handleCloseForm} />}
    </div>
  )
}

export default Callback
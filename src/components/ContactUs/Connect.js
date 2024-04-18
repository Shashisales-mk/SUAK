import React from 'react'
import "./connect.css"
import contact_a from "../../images/contact_a.png"
function Connect() {
  return (
    <div>
        <div className='connect-main'>
            <div className='lef'>
                <div style={{fontSize:"6rem"}}>CONNECT WITH <span style={{ color: "#ff7000" }}>SUAK</span></div>
                <div style={{fontSize:"1.7rem", marginRight:"2rem"}}>Thank you for considering our services. Whether you are a job seeker looking for apportunities or a company seeking talent, we're here to assist you. Please find the relevant contact informaation below for your inquiries:</div>
            </div>
            <div className='rig'><img src={contact_a} alt='contact_a' style={{width:"22rem"}}></img></div>
        </div>
    </div>
  )
}

export default Connect
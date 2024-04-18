import React from 'react'
import "./visitus.css"
import visit1 from "../../images/visit1.png"
import visit2 from "../../images/visit2.png"
import i1 from "../../images/i1.png"
import i2 from "../../images/i2.png"
import i3 from "../../images/i3.png"
function Visitus() {
  return (
    <div>
        <div className='visit-main'>
            <div className='v1'>
                <div className='v11'>
                <div className='v1_in'>
                    <div><img src={i1} alt='i1'></img></div>
                    <div style={{fontSize:"1.7rem", marginTop:"1rem"}}>JOB SEEKERS</div>
                    <div style={{marginRight:"3rem", marginTop:"1rem", fontSize:"1.3rem"}}>Are you looking for exciting career opportunities? Our team is dedicated to helping you find the perfect match for your skills ans aspirations. Contact our recruitment specialists at hello@suak.in or give us a call at [phone number] to explore the possibilities.</div>
                </div>
                <div className='v1_in'>
                    <div><img src={i2} alt='i2'></img></div>
                    <div style={{fontSize:"1.7rem", marginTop:"1rem"}}>PARTNERSHIPS AND COLLABORATIONS</div>
                    <div style={{marginRight:"3rem", marginTop:"1rem", fontSize:"1.3rem"}}>Interested in collaborating with us or exploring partnership opportunities? We're always open to new partnerships that align with hello@suak.in to start the conversation.</div>
                </div>
                <div className='v1_in'>
                    <div><img src={i3} alt='i3'></img></div>
                    <div style={{fontSize:"1.7rem", marginTop:"1rem"}}>VISIT US</div>
                    <div style={{marginRight:"3rem", marginTop:"1rem", fontSize:"1.3rem"}}>If you prefer face-to-face interaction, you're welcome to visit our office during business hours. Our team will be delighted to meet you and discuss how we can support your needs.</div>
                </div>
                </div>
            </div>
            <div className='v2'>
                <img src={visit1} alt='visit1'></img>
                <img src={visit2} alt='visit2'></img>
            </div>
        </div>
    </div>
  )
}

export default Visitus
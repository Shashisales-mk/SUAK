import React from 'react'
import "./visitus.css"
import visit1 from "../../images/visit1.png"
import visit2 from "../../images/visit2.png"
import i1 from "../../images/ii1.png"
import i2 from "../../images/ii2.png"
import i3 from "../../images/ii3.png"
function Visitus() {
  return (
    <div>
        <div className='visit-main'>
            <div className='v1'>
                <div className='v11'>
                <div className='v1_in'>
                    <div className='img-siz'><img src={i1} loading="lazy" alt='i1'></img></div>
                    <div className='title-siz'>JOB SEEKERS</div>
                    <div className='desc-siz'>Are you looking for exciting career opportunities? Our team is dedicated to helping you find the perfect match for your skills ans aspirations. Contact our recruitment specialists at hello@suak.in or give us a call at [phone number] to explore the possibilities.</div>
                </div>
                <div className='v1_in'>
                    <div className='img-siz'><img src={i2} loading="lazy" alt='i2'></img></div>
                    <div className='title-siz'>PARTNERSHIPS AND COLLABORATIONS</div>
                    <div className='desc-siz'>Interested in collaborating with us or exploring partnership opportunities? We're always open to new partnerships that align with hello@suak.in to start the conversation.</div>
                </div>
                <div className='v1_in'>
                    <div className='img-siz'><img src={i3} loading="lazy" alt='i3'></img></div>
                    <div className='title-siz'>VISIT US</div>
                    <div className='desc-siz'>If you prefer face-to-face interaction, you're welcome to visit our office during business hours. Our team will be delighted to meet you and discuss how we can support your needs.</div>
                </div>
                </div>
            </div>
            <div className='v2'>
                <img src={visit1} loading="lazy" alt='visit1'></img>
                <img src={visit2} loading="lazy" alt='visit2'></img>
            </div>
        </div>
    </div>
  )
}

export default Visitus
import React from 'react'
import "./leadership.css"
import about_b from "../../images/about_b.png"
function Leadership() {
  return (
    <div>
        <div className='out-cont'>
            <div className='in-cont'>
                <div className='part1'>
                    <ul>
                        <li className='sze'>OUR LEADERSHIP</li>
                        <li className='d-sz'>Anoop gupta A visionary leader with a background in relevant field, Anoop gupta founded suak with a mission-driven approach, leaveraging his experience to drive growth.</li>
                        <li className='d-sz'>As president, [President's Name] brings extensive experience in [relevant industry], spearheading strategic initiatives that propel [Company Name] towards continued success.</li>
                        <li className='d-sz'>Together, their leadership ensures suak's commitment to excellence and innovation in corporates sector.</li>
                    </ul>
                </div>
                <div className='part2'>
                    <img src={about_b} loading="lazy" alt='about_b'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Leadership
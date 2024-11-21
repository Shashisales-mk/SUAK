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
                        <li className='d-sz'>Our company is led by two visionary founders, Akash Sonkar & Sushant Singh, each bringing extensive experience across diverse business fields.</li>
                        <li className='d-sz'>With a strong background in entrepreneurship, operations, and market development, they have successfully managed ventures in industries such as Textile , Healthcare, consultancy, retail , supply chain management . Their combined expertise and innovative thinking have been instrumental in building a dynamic, customer-centric organization.</li>
                        <li className='d-sz'>Together, they are committed to driving growth, fostering innovation, and delivering high-quality solutions that meet evolving market needs. Their shared vision continues to guide the company towards new heights of success and sustainability.</li>
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
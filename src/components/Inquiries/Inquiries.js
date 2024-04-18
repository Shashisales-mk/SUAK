import React from 'react'
import "./inquiries.css"
function Inquiries() {
  return (
    <div>
        <div className='out'>
            <div className='l1'>
                <div>
                    <ul>
                        <li className='gre'>Email</li>
                        <li>=</li>
                    </ul>
                </div>
                <div>
                    <ul>
                            <li className='gre'>PHONE NUMBER</li>
                            <li>57893458690</li>
                    </ul>
                </div>
                <div>
                    <ul>
                            <li className='gre'>ADDRESS</li>
                            <li>RR-2 VIPIN GARDEN , DWARKA.DELHI</li>
                    </ul>
                </div>
                <div>
                    <ul>
                            <li className='gre'>WEBSITE</li>
                            <li>www.suak.io</li>
                    </ul>
                </div>
            </div>

            <div className='l2'>
                <div style={{borderLeft:"1px solid"}}>
                    <div style={{marginLeft:"2rem", display:"grid", gap:"1rem"}}>
                        <div style={{fontSize:"3rem"}}>GENERAL INQUIRIES</div>
                        <div style={{marginRight:"15rem", fontSize:"1.2rem"}}>For any general questions or information about our services, feel free to reach out team at out email address or call us. We strive to respond promptly to all inquiries and look forward to assisting you.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inquiries
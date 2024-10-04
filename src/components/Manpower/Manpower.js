import React from 'react'
import "./manpower.css"
import manImg from "../../images/man-img.png"
function Manpower() {
  return (
    <div>
        <div className='manpower-cont'>
            <div className='manpower-cont-2'>Recruitment & Manpower Solutions Provider</div>
            <div className='manpower-cont-3'>
                <div className='m-left'>
                    <p className='fs09'>Suak, a leading HR firm in Delhi NCR, India, delivers specialized recruitment solutions spanning various sectors including IT, BPO/KPO, Fintech, Logistics, and FMCG. Our streamlined recruitment process begins with comprehending your business and hiring requirements. We then tailor our search strategy, conduct initial candidate screenings, and validate selected candidates' credentials through thorough reference checks</p>
                </div>
                <div className='m-right'>
                    <img src={manImg} loading="lazy" alt='manImg'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manpower
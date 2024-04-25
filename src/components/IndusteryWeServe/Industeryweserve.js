import React from 'react'
import "./industeryweserve.css"
import ip1 from "../../images/ip1.png"
import ip2 from "../../images/ip2.png"
import ip3 from "../../images/ip3.png"
import ip4 from "../../images/ip4.png"
import ip5 from "../../images/ip5.png"
import ip6 from "../../images/ip6.png"
import ip7 from "../../images/ip7.png"
import ip8 from "../../images/ip8.png"
function Industeryweserve() {
  return (
    <div>
        <div className='industry-comp'>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>

                <div className='asd'>Industry We Serve</div>

            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>

            <div className='industry-in-cont fs13'>
                <div className='dis-gri'>
                    <div><img src={ip1} alt='ip1'></img></div>
                    <div>IT Industry</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip2} alt='ip2'></img></div>
                    <div>Real Estate</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip3} alt='ip3'></img></div>
                    <div>Fintech</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip4} alt='ip4'></img></div>
                    <div>FMCG</div>
                </div>
            </div>

            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>

            <div className='industry-in-cont fs13'>
                <div className='dis-gri'>
                    <div><img src={ip5} alt='ip5'></img></div>
                    <div>Health Care</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip6} alt='ip6'></img></div>
                    <div>BPO/KPO/LPO</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip7} alt='ip7'></img></div>
                    <div>Education</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip8} alt='ip8'></img></div>
                    <div>Logistic</div>
                </div>
            </div>

            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>
        </div>
    </div>
  )
}

export default Industeryweserve
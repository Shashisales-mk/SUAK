import React from 'react'
import "./industeryweserve.css"
import ip1 from "../../images/iip1.png"
import ip2 from "../../images/iip2.png"
import ip3 from "../../images/iip3.png"
import ip4 from "../../images/iip4.png"
import ip5 from "../../images/iip5.png"
import ip6 from "../../images/iip6.png"
import ip7 from "../../images/iip7.png"
import ip8 from "../../images/iip8.png"
function Industeryweserve() {
  return (
    <div>
        <div className='industry-comp'>
            <div className='bor-lin'></div>

                <div className='asd'>Industry We Serve</div>

            <div className='bor-lin'></div>

            <div className='industry-in-cont fs13'>
                <div className='dis-gri'>
                    <div><img src={ip1} loading="lazy" alt='ip1'></img></div>
                    <div>IT Industry</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip2} loading="lazy" alt='ip2'></img></div>
                    <div>Real Estate</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip3} loading="lazy" alt='ip3'></img></div>
                    <div>Fintech</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip4} loading="lazy" alt='ip4'></img></div>
                    <div>FMCG</div>
                </div>
            </div>

            <div className='bor-lin'></div>

            <div className='industry-in-cont fs13'>
                <div className='dis-gri'>
                    <div><img src={ip5} loading="lazy" alt='ip5'></img></div>
                    <div>Health Care</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip6} loading="lazy" alt='ip6'></img></div>
                    <div>BPO/KPO/LPO</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip7} loading="lazy" alt='ip7'></img></div>
                    <div>Education</div>
                </div>
                <div className='dis-gri'>
                    <div><img src={ip8} loading="lazy" alt='ip8'></img></div>
                    <div>Logistic</div>
                </div>
            </div>

            <div className='bor-lin'></div>
        </div>
    </div>
  )
}

export default Industeryweserve
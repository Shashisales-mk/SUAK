import React from 'react'
import "./faq.css"
import faq1 from "../../images/faq1.png"


function Faq() {
  return (
    <div>
        <div className='faq-cont'>
            <div className='faq-left'>
                <div>
                    <div className='hed-sm'>FAQ</div>
                    <div className='hed-lg'>Common Questions</div>
                </div>
                <div className='bt'><button>GET IN TOUCH</button></div>
            </div>

            <div style={{width:"0", borderRight:"1px solid", marginRight:"0.5rem", marginLeft:"0.5rem"}}></div>

            <div className='faq-right'>
                <div>
                    <div className='ri1'>
                        <div className='fon-bold fs106'>How long does the branding process usually take?</div>
                        <div><img src={faq1} alt='faq1'></img></div>
                    </div>
                    <div className='hed-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.</div>
                </div>
                <div className='bor-lin'></div>

                <div>
                    <div className='ri1'>
                            <div className='fon-bold fs106'>What is the importance of branding for a business?</div>
                            <div><img src={faq1} alt='faq1'></img></div>
                        </div>
                        <div className='hed-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.</div>
                </div>

                <div className='bor-lin'></div>

                <div>
                    <div className='ri1'>
                            <div className='fon-bold fs106'>Can you help with both visual design and brand strategy?</div>
                            <div><img src={faq1} alt='faq1'></img></div>
                        </div>
                        <div className='hed-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.</div>
                </div>

                <div className='bor-lin'></div>

                <div>
                    <div className='ri1'>
                            <div className='fon-bold fs106'>How involved will I be in the branding process?</div>
                            <div><img src={faq1} alt='faq1'></img></div>
                        </div>
                        <div className='hed-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Faq
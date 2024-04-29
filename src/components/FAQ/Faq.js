import React, { useState } from 'react';
import "./faq.css";
import faq1 from "../../images/faq1.png";

function Faq() {
    const [isVisible, setIsVisible] = useState({
        p1: false,
        p2: false,
        p3: false,
        p4: false
    });

    const toggleVisibility = (id) => {
        setIsVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

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

                <div style={{ width: "0", borderRight: "1px solid", marginRight: "0.5rem", marginLeft: "0.5rem" }}></div>

                <div className='faq-right'>
                    <div>
                        <div>
                            <div className='ri1' onClick={() => toggleVisibility('p1')}>
                                <div className='fon-bold fs106'>How long does the branding process usually take?</div>
                                <div><img src={faq1} alt='faq1' /></div>
                            </div>
                            <div id='p1' className='hed-m' style={{ display: isVisible.p1 ? 'block' : 'none' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.
                            </div>
                        </div>
                    </div>
                    <div className='bor-lin'></div>

                    <div>
                        <div className='ri1' onClick={() => toggleVisibility('p2')}>
                            <div className='fon-bold fs106'>What is the importance of branding for a business?</div>
                            <div><img src={faq1} alt='faq1' /></div>
                        </div>
                        <div id='p2' className='hed-m' style={{ display: isVisible.p2 ? 'block' : 'none' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.
                        </div>
                    </div>

                    <div className='bor-lin'></div>

                    <div>
                        <div className='ri1' onClick={() => toggleVisibility('p3')}>
                            <div className='fon-bold fs106'>Can you help with both visual design and brand strategy?</div>
                            <div><img src={faq1} alt='faq1' /></div>
                        </div>
                        <div id='p3' className='hed-m' style={{ display: isVisible.p3 ? 'block' : 'none' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.
                        </div>
                    </div>

                    <div className='bor-lin'></div>

                    <div>
                        <div className='ri1' onClick={() => toggleVisibility('p4')}>
                            <div className='fon-bold fs106'>How involved will I be in the branding process?</div>
                            <div><img src={faq1} alt='faq1' /></div>
                        </div>
                        <div id='p4' className='hed-m' style={{ display: isVisible.p4 ? 'block' : 'none' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;

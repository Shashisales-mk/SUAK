import React from 'react'
import "./servicesforclient.css"
function Servicesforclient() {
  return (
    <div>
        <div className='serv-cont'>
            <div className='bor-lin'></div>
            <div className='asd'>Our Services For Client</div>
            <div className='bor-lin'></div>

            <div className='serv-inner-cont'>
                <div className='hiring-card'>
                    <div className='hed-siz'>Bulk Hiring</div>
                    <div className='desc-siz'>Suak has a dedicated team of experienced Bulk hiring recruitment experts with the defined process to attract a large pool of talent.</div>
                    {/* <div><button>READ MORE</button></div> */}
                </div>

                <div style={{width:"0", borderRight:"1px solid", marginRight:"0.5rem", marginLeft:"0.5rem"}}></div>

                <div className='hiring-card'>
                <div className='hed-siz'>Permanent Hiring</div>
                    <div className='desc-siz'>Suak extensive scope of service offerings gives the best option to our clients to select one or a combination of our permanent workforce solutions.</div>
                    {/* <div><button>READ MORE</button></div> */}
                </div>

                <div style={{width:"0", borderRight:"1px solid", marginRight:"0.5rem", marginLeft:"0.5rem"}}></div>

                <div className='hiring-card'>
                <div className='hed-siz'>C2H Hiring</div>
                    <div className='desc-siz'>Suak offer the Contract To Hire(C2H) hiring services with a relatively new strategy that benefits organizations by helping them assess an employee</div>
                    {/* <div><button>READ MORE</button></div> */}
                </div>
            </div>
                
            <div className='bor-lin'></div>

            <div className='serv-inner-cont'>
                <div className='hiring-card'>
                    <div className='hed-siz'>Temperory Hiring</div>
                    <div className='desc-siz'>Our Company offers flexible temporary staffing services to your organization that fits perfectly according to your requirements.</div>
                    {/* <div><button>READ MORE</button></div> */}
                </div>

                <div style={{width:"0", borderRight:"1px solid", marginRight:"0.5rem", marginLeft:"0.5rem"}}></div>

                <div className='hiring-card'>
                <div className='hed-siz'>Executive Headhunting</div>
                    <div className='desc-siz'>Suak Bizaccenknnect is one of the leading Headhunting and Executive Search service providers in India. We are offering Quality Services .</div>
                    {/* <div><button>READ MORE</button></div> */}
                </div>

                <div style={{width:"0", borderRight:"1px solid", marginRight:"0.5rem", marginLeft:"0.5rem"}}></div>

                <div className='hiring-card'>
                <div className='hed-siz'>Technical Staffing</div>
                    <div className='desc-siz'>Suak offer top-notch IT recruitment services and HR recruitment services along with the IT staffing companies.</div>
                    {/* <div><button>READ MORE</button></div> */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Servicesforclient
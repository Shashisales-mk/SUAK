import React from 'react'
import "./servicesforclient.css"
import ser1 from "../../images/ser1.png"
function Forstudent() {
  return (
    <div>
      <div style={{height:"0", borderBottom:"1px solid", margin:"3vw"}}></div>
      <div className='stu-comp'>


        <div className='stu-l'>
                <div className='hiring-card'>
                    <div className='hed-siz'>GLOBAL HIRING</div>
                    <div className='desc-size'>souk provides professional global hire HR services to the human resource organization for the corporate world.</div>
                    <div><button>READ MORE</button></div>
                </div>
                <div className='hiring-card'>
                    <div className='hed-siz'>RESUME WRITING</div>
                    <div className='desc-size'>souk provides a professional HR resume writer that will highlight your skills in staff recruitment, budgeting, training, benefits, and payroll management.</div>
                    <div><button>READ MORE</button></div>
                </div>
                <div className='hiring-card'>
                    <div className='hed-siz'>CAREER CONSULTATION</div>
                    <div className='desc-size'>souk has a line of work where consultants provide one or more categories of HR-related career consultation.</div>
                    <div><button>READ MORE</button></div>
                </div>
        </div>

        <div style={{width:"0", borderRight:"1px solid", marginRight:"0.5rem", marginLeft:"0.5rem"}}></div>

        <div className='stu-2'>
          <div className='fs3'>FOR STUDENT</div>
          <div>
            <img src={ser1} alt='ser1'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forstudent
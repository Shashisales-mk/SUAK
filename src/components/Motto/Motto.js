import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./motto.css"
import PopForm from '../Pop-up Form/Popup';
function Motto() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div>
        <div className='motto-container'>
            <div className='motto'>
              <div className='motto1'><span style={{ color: "#ff7000" }}>Beyond Business</span> Our Motto</div>
              <div className='motto3'>We provide specialized HR solutions and recruitment services for the widest range of skill sets and business sectors.</div>
            </div>
            <div className='motto2'>
                <div className='motto4'>
                    <button onClick={handleGetStarted} className='box1'>HIRING</button>
                    <button className='box2'><Link to="/careers" style={{textDecoration:"none", color:"#000"}}>SEEKER</Link></button>
                </div>
            </div>
            <div className='bor-lin'></div>
        </div>
        {/* Render the PopForm only when showForm is true */}
      {showForm && <PopForm onClose={handleCloseForm} />}
    </div>
  )
}

export default Motto
import React from 'react'
import "./motto.css"
function Motto() {
  return (
    <div>
        <div className='motto-container'>
            <div className='motto1'><span style={{ color: "#ff7000" }}>Beyond Business</span> Our Motto</div>
            <div className='motto2'>
                <div className='motto3'>Explore our curated collection of unique products to express your induviduality.</div>
                <div className='motto4'>
                    <button>HIRING</button>
                    <button>SEEKER</button>
                </div>
            </div>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>
        </div>
    </div>
  )
}

export default Motto
import React from "react";
import "./aboutstart.css"
import about_a from "../../images/about_a.png";
function Aboutstart() {
  return (
    <div>
      <div className="about-main-container">
        <div className="about-left">
          <img src={about_a} alt="about_a"></img>
        </div>

        <div className="about-right">
          <ul>
            <li>ABOUT US</li>
            <li style={{fontSize:"6rem"}}>About Suak</li>
            <li style={{fontSize:"1.5rem", marginRight:"5rem"}}>
              At Suak, we link takent with fitting roles, empowering business to
              achieve their goals. Our approach blends management tools and
              principles within a sustainability framework: People, Planet,
              Profit.
            </li>
            <li>
              <button>GET IN TOUCH</button>
            </li>
            <li style={{height:"0", borderBottom:"1px solid", marginRight:"8rem"}}></li>
            <li style={{marginRight:"8rem", fontSize:"1.2rem"}}>
              We provide specialized HR solutions and recruitment services for
              the widest range of skill sets and business sectors. We have a
              global footprint that is powered by our local expertise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutstart;

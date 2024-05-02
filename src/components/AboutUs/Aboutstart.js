import React from "react";
import "./aboutstart.css"
import about_a from "../../images/about_a.png";
function Aboutstart() {
  return (
    <div>
      <div className="about-main-container">
        <div className="about-left">
          <img src={about_a} loading="lazy" alt="about_a"></img>
        </div>

        <div className="about-right">
          <ul>
            <li className="fon-title">About Suak</li>
            <li className="fon-desc">
              At Suak, we link takent with fitting roles, empowering business to
              achieve their goals. Our approach blends management tools and
              principles within a sustainability framework: People, Planet,
              Profit.
            </li>
            <li>
              <button>GET IN TOUCH</button>
            </li>
            <li style={{height:"0", borderBottom:"1px solid", marginRight:"3vw"}}></li>
            <li className="fon2">
              We provide specialized HR solutions and recruitment services for
              the widest range of skill sets and business sectors. We have a
              global footprint that is powered by our local expertise.
            </li>
          </ul>
        </div>
      </div>
      <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem", margin:"3vw"}}></div>
    </div>
  );
}

export default Aboutstart;

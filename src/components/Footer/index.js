import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo2 from "../../images/logo2.png";
import Badge3 from "../../images/Badge-3.png"
import Badge4 from "../../images/Badge-4.png"
import Badge5 from "../../images/Badge-5.png"
export default function Footer() {
  return (
    <div>
      <div className="main-container">
        <div className="left">
          <div>
            <img src={logo2} loading="lazy" alt="logo2" className="logo2"></img>
          </div>
          <div className="foot-desc" style={{marginRight:"2rem"}}>
            Let us help you build your dream team. Contact us today to find the
            perfect match for your company's success
          </div>
          <div style={{display:"flex", gap:"1rem"}}>
            <img className="badge-w" loading="lazy" src={Badge3} alt="Badge3"></img>
            <img className="badge-w" loading="lazy" src={Badge4} alt="Badge4"></img>
            <img className="badge-w" loading="lazy" src={Badge5} alt="Badge5"></img>
          </div>
        </div>
        <div className="right">
          <div className="pages">
            <div className="fsze">Pages</div>
            <div className="styl"><li><Link to="/">HOME</Link></li></div>
            <div className="styl"><li><Link to="/about">ABOUT US</Link></li></div>
            <div className="styl"><li><Link to="/contact">CONTACT US</Link></li></div>
          </div>
          <div className="pages footer-services">
            <div className="fsze">Service</div>
            <div className="styl"><li><Link to="/services">BUSINESS PROCESS SERVICES</Link></li></div>
            <div className="styl"><li><Link to="/services">TALENT SERVICES</Link></li></div>
            <div className="styl"><li><Link to="/services">STARTUP SERVICES</Link></li></div>
            <div className="styl"><li><Link to="/services">CONSULTING</Link></li></div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="styl">
          COPYRIGHT @2024 | ALL RIGHT BY SUAK | SITEMAP
        </div>
        <div className="styl" style={{ display: "flex", gap: "10px" }}>
          <div>PRIVACY</div>
          <div>IMPRINT</div>
        </div>
      </div>
    </div>
  );
}

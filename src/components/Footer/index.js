import React from "react";
import "./footer.css";
import logo2 from "../../images/logo2.png";
// import socials from "../../images/Socials.png";
import Badge3 from "../../images/Badge3.png"
import Badge4 from "../../images/Badge4.png"
import Badge5 from "../../images/Badge5.png"
export default function Footer() {
  return (
    <div>
      <div className="main-container">
        <div className="left">
          <div>
            <img src={logo2} alt="logo2"></img>
          </div>
          <div style={{marginRight:"2rem"}}>
            Let us help you build your dream team. Contact us today to find the
            perfect match for your company's success
          </div>
          <div style={{display:"flex", gap:"1rem"}}>
            <img src={Badge3} alt="Badge3"></img>
            <img src={Badge4} alt="Badge4"></img>
            <img src={Badge5} alt="Badge5"></img>
          </div>
        </div>
        <div className="right">
          <div className="pages">
            <div>Pages</div>
            <div className="styl">HOME</div>
            <div className="styl">ABOUT US</div>
            <div className="styl">CONTACT US</div>
          </div>
          <div className="pages footer-services">
            <div>Service</div>
            <div className="styl">BUSINESS PROCESS SERVICES</div>
            <div className="styl">TALENT SERVICES</div>
            <div className="styl">STARTUP SERVICES</div>
            <div className="styl">CONSULTING</div>
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

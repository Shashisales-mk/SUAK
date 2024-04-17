import React from "react";
import "./footer.css";
import logo2 from "../../images/logo2.png";
import socials from "../../images/Socials.png"
export default function Footer() {
  return (
    <div>
      <div className="main-container">
        <div className="left">
          <div><img src={logo2} alt="logo2"></img></div>
          <div>
            Let us help you build your dream team. Contact us today to find the
            perfect match for your company's success
          </div>
          <div><img src={socials} alt="Socials"></img></div>
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
        <div className="styl">COPYRIGHT @2024 | ALL RIGHT BY SUAK LIVING | SITEMAP</div>
        <div className="styl" style={{display: "flex", gap: "10px"}}>
            <div>PRIVACY</div>
            <div>IMPRINT</div>
        </div>
      </div>
    </div>
  );
}

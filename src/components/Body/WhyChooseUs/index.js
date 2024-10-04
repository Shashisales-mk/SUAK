import React from "react";
import "./choose.css";
import home_b from "../../../images/home_b.png";
import badge1 from "../../../images/Badge-1.png";
import badge2 from "../../../images/Badge-2.png";
export default function Choose() {
  return (
    <div>
      <div className="heading2">Why Choose Us</div>
      <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem", margin:"3vw"}}></div>
      <div className="contai">
        <div className="contai-left">
          <div className="img2">
            <img src={home_b} loading="lazy" alt="home_b"></img>
          </div>
        </div>
        <div className="mgn-lin-1"></div>
        <div className="contai-right">
          <div className="contai-right-1">
            <div><img src={badge1} loading="lazy" alt="badge1" className="badge-sze"></img></div>
            <div>
              <ul>
                <li className="siz1">VISION</li>
                <li className="siz2">To revolutionize human resource solutions by empowering businesses with innovative staffing and HR services, driven by cutting-edge technology and unmatched expertise, ensuring sustainable growth and exceptional workforce management.</li>
              </ul>
            </div>
          </div>

          <div className="mgn-lin-2"></div>

          <div className="contai-right-2">
            <div><img src={badge2} loading="lazy" alt="badge2" className="badge-sze"></img></div>
            <div>
              <ul>
                  <li className="siz1">INNOVATION</li>
                  <li className="siz2">At SUAK, innovation is at the heart of everything we do. We continuously explore new technologies and approaches to streamline staffing and HR processes, ensuring that businesses not only find the best talent but also stay ahead in a competitive landscape.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

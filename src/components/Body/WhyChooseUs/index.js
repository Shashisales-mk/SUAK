import React from "react";
import "./choose.css";
import home_b from "../../../images/home_b.png";
import badge1 from "../../../images/Badge1.png";
import badge2 from "../../../images/Badge2.png";
export default function Choose() {
  return (
    <div>
      <div className="heading2">Why Choose Us</div>
      <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem", margin:"3vw"}}></div>
      <div className="contai">
        <div className="contai-left">
          <div className="img2">
            <img src={home_b} alt="home_b"></img>
          </div>
        </div>
        <div style={{width:"0", borderLeft:"1px solid", marginLeft:"2rem", marginRight:"2rem"}}></div>
        <div className="contai-right">
          <div className="contai-right-1">
            <div><img src={badge1} alt="badge1" style={{ width: "2rem" }}></img></div>
            <div>
              <ul>
                <li className="siz1">VISION</li>
                <li className="siz2">Our commitment to integrity, transparency, and excellence fuels
                our vision of reshaping the future of work. We strive to
                cultivate meaningful connections, nurture talent, and foster
                sustainable growth for business and individuals worldwide.</li>
              </ul>
            </div>
          </div>

          <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>

          <div className="contai-right-2">
            <div><img src={badge2} alt="badge2" style={{ width: "2rem" }}></img></div>
            <div>
              <ul>
                  <li className="siz1">INNOVATION</li>
                  <li className="siz2">Our commitment to innovation extends beyond the confines of
                traditional recruitment methods. We envision a holistic
                ecosystem where continuous learning, upskilling, and reskilling
                are seamlessly integrated into the employment journey, ensuring
                that both employers and employees thrive in an ever-changing
                landscape.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="box1 cont-size">
          <div className="img2">
            <img src={home_b} alt="home_b"></img>
          </div>
        </div>
        <div className="box2 cont-size">
          <div className="inner-box">
          <div className="services-items">
            <div>
              <img src={badge1} alt="badge1" style={{ width: "2rem" }}></img>
            </div>
            <div className="item">
              <div style={{ fontSize: "2rem" }}>VISION</div>
              <div style={{ color: "grey", width: "30rem" }}>
                Our commitment to integrity, transparency, and excellence fuels
                our vision of reshaping the future of work. We strive to
                cultivate meaningful connections, nurture talent, and foster
                sustainable growth for business and individuals worldwide.
              </div>
            </div>
          </div>

        <div style={{height: "0", borderBottom: "1px solid"}}></div>

          <div className="services-items">
            <div>
              <img src={badge2} alt="badge2" style={{ width: "2rem" }}></img>
            </div>
            <div className="item">
              <div style={{ fontSize: "2rem" }}>INNOVATION</div>
              <div style={{ color: "grey", width: "30rem" }}>
                Our commitment to innovation extends beyond the confines of
                traditional recruitment methods. We envision a holistic
                ecosystem where continuous learning, upskilling, and reskilling
                are seamlessly integrated into the employment journey, ensuring
                that both employers and employees thrive in an ever-changing
                landscape.
              </div>
            </div>
          </div>
        </div>
          </div>
        </div> */}
    </div>
  );
}

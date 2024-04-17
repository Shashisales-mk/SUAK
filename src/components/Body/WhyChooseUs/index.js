import React from "react";
import "./choose.css";
import home_b from "../../../images/home_b.png";
import badge1 from "../../../images/Badge1.png";
import badge2 from "../../../images/Badge2.png";
export default function Choose() {
  return (
    <div>
      <div className="heading2">Why Choose Us</div>

      <div className="container">
        <div className="box1 cont-size">
          <div className="img2">
            <img src={home_b} alt="home_b"></img>
          </div>
        </div>
        <div className="box2 cont-size">
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
      <div className="sec" style={{ margin: "2rem" }}>
        <div
          className="services-items"
          style={{
            borderRight: "1.5px solid",
            display: "grid",
            width: "50%",
          }}
        >
          <div>HOW WE WORK</div>
          <div style={{ fontSize: "2rem" }}>
            Looking for the right talent for your organization?
          </div>
        </div>
        <div
          className="services-items"
          style={{
            width: "50%",
            display: "grid",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div style={{ width: "33rem", fontSize: "3rem" }}>
            submit your details and we'll connect with you!
          </div>
          <div style={{ width: "5rem" }}>
            <button className="request-button">REQUEST A CALL BACK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

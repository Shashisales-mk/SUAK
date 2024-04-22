import React from "react";
import "./services.css";
import barchart from "../../../images/bar-chart.gif";
import businessplan from "../../../images/business-plan.gif";
import startup from "../../../images/startup.gif";
import strategicconsulting from "../../../images/strategic-consulting.gif";
export default function Services() {
  return (
    <div>
      <div className="service-container">
        <div className="heading">Services.</div>

        <div className="sec">
          <div className="services-items border-right">
            <div>
              <img src={barchart} alt="bar-chart"></img>
            </div>
            <div className="item">
              <div className="item-heading">BUSINESS PROCESS SERVICES</div>
              <div className="item-desc">
                Looking for high performance, cost effective and multi-cultured
                customer engagement process or just-in-time technical support
              </div>
              <div>
                <button className="item-button">Discover more</button>
              </div>
            </div>
          </div>
          <div className="services-items" style={{ marginLeft: "1rem" }}>
            <div>
              <img src={businessplan} alt="business-plan"></img>
            </div>
            <div className="item">
              <div className="item-heading">TALENT SERVICES</div>
              <div className="item-desc">
                360 degree human capital management services with global
                delivery experience, diverse engagement models, and dedicated
                practices for optimizing HR operations and processes
              </div>
              <div>
                <button className="item-button">Discover more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="sec" style={{marginBottom:"3vw"}}>
          <div className="services-items border-right">
            <div>
              <img src={startup} alt="startup"></img>
            </div>
            <div className="item">
              <div className="item-heading">STARTUP SERVICES</div>
              <div className="item-desc">
                We help in making your startup journeys smoother and seamless so
                that you can focus on your vision and leave everything else on
                us, we know execution is more critical than idea
              </div>
              <div>
                <button className="item-button">Discover more</button>
              </div>
            </div>
          </div>
          <div className="services-items" style={{ marginLeft: "1rem" }}>
            <div>
              <img src={strategicconsulting} alt="strategic-consulting"></img>
            </div>
            <div className="item">
              <div className="item-heading">CONSULTING</div>
              <div className="item-desc">
                With strong delivery mechanism and global footprints in IT
                projects, we know we have the capabilities to expand our horizon
                across industries.
              </div>
              <div>
                <button className="item-button">Discover more</button>
              </div>
            </div>
          </div>
        </div>
{/* ----------------------------------------------------------------------------------------------------- */}
        <div className="dis">
        <div className="sec">
          <div
            className="services-items2"
            style={{
              borderRight: "1.5px solid",
              display: "grid",
              width: "50%",
            }}
          >
            <div>HOW YOU FIND WORK</div>
            <div className="find-cont">
              are you a job <span style={{ color: "red" }}>seeker?</span> choose
              the appropriate option based on your needs
            </div>
          </div>
          <div
            className="services-items2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="items-cont"
              style={{ display: "grid", gap: "3rem" }}
            >
              <div className="opt-cont">
                <div style={{ width: "13rem" }}>
                  <span style={{ textDecoration: "underline" }}>
                    apply for trending jobs
                  </span>
                </div>
                <div style={{ width: "13rem" }}>
                  <span style={{ textDecoration: "underline" }}>
                    view all current job openings
                  </span>
                </div>
              </div>

              <div className="opt-cont">
                <div style={{ width: "13rem" }}>
                  <span style={{ textDecoration: "underline" }}>
                    submit your resume
                  </span>
                </div>
                <div style={{ width: "13rem" }}>
                  <span style={{ textDecoration: "underline" }}>
                    refer a freind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:"0", borderBottom:"1px solid", marginTop:"3vw", marginBottom:"3vw"}}></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="dis-non">
        <div style={{height:"0", borderBottom:"1px solid", marginTop:"3vw", marginBottom:"3vw"}}></div>
        <div className="seeker-cont">
            <div>How You Find Work</div>
            <div className="f-size">
            are you a job <span style={{ color: "red" }}>seeker?</span> choose
              the appropriate option based on your needs
            </div>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"1vw", marginBottom:"0vw"}}></div>
            <div className="opt-cont">
                <div className="w-c">
                  <span className="f-s" style={{ textDecoration: "underline" }}>
                    apply for trending jobs
                  </span>
                </div>
                <div className="w-c">
                  <span className="f-s" style={{ textDecoration: "underline" }}>
                    view all current job openings
                  </span>
                </div>
              </div>
            
              <div className="opt-cont">
                <div className="w-c">
                  <span className="f-s" style={{ textDecoration: "underline" }}>
                    submit your resume
                  </span>
                </div>
                <div className="w-c">
                  <span className="f-s" style={{ textDecoration: "underline" }}>
                    refer a freind
                  </span>
                </div>
              </div>
        </div>
        <div style={{height:"0", borderBottom:"1px solid", marginTop:"3vw", marginBottom:"3vw"}}></div>
        </div>
      </div>
    </div>
  );
}

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
              <div style={{ fontSize: "2rem" }}>BUSINESS PROCESS SERVICES</div>
              <div style={{ color: "grey", width: "28rem" }}>
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
              <div style={{ fontSize: "2rem" }}>TALENT SERVICES</div>
              <div style={{ color: "grey", width: "28rem" }}>
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

        <div className="sec">
          <div className="services-items border-right">
            <div>
              <img src={startup} alt="startup"></img>
            </div>
            <div className="item">
              <div style={{ fontSize: "2rem" }}>STARTUP SERVICES</div>
              <div style={{ color: "grey", width: "28rem" }}>
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
              <div style={{ fontSize: "2rem" }}>CONSULTING</div>
              <div style={{ color: "grey", width: "28rem" }}>
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

        <div className="sec">
          <div
            className="services-items"
            style={{
              borderRight: "1.5px solid",
              display: "grid",
              width: "50%",
            }}
          >
            <div>HOW YOU FIND WORK</div>
            <div style={{ fontSize: "3.5rem" }}>
              are you a job <span style={{ color: "red" }}>seeker?</span> choose
              the appropriate option based on your needs
            </div>
          </div>
          <div
            className="services-items"
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
              <div style={{ display: "flex", gap: "2rem" }}>
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

              <div style={{ display: "flex", gap: "2rem" }}>
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
      </div>
    </div>
  );
}

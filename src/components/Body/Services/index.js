import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./services.css";
import barchart from "../../../images/bar-chart.gif";
import businessplan from "../../../images/business-plan.gif";
import startup from "../../../images/startup.gif";
import strategicconsulting from "../../../images/strategic-consulting.gif";
export default function Services() {
  const [activeShareIndex, setActiveShareIndex] = useState(false); // Use a boolean since there's only one option

  const handleFriendClick = () => {
    setActiveShareIndex(!activeShareIndex); // Toggle between true/false
  };

  const handleReferFriendClick = (action) => {
    const currentUrl = window.location.href;

    if (action === "copy") {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      console.log("Link was not fetched");
    }
  };

  return (
    <div>
      <div className="service-container">
        <div className="heading">Services.</div>

        <div className="sec">
          <div className="services-items">
            <div>
              <img src={barchart} loading="lazy" alt="bar-chart"></img>
            </div>
            <div className="item">
              <div className="item-heading">BUSINESS PROCESS</div>
              <div className="item-desc">
                Looking for high performance, cost effective and multi-cultured
                customer engagement process or just-in-time technical support
              </div>
              <div>
                {/* <button className="item-button">Discover more</button> */}
                <p className="item-button">
                  <Link to="/business-process">Discover More</Link>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ width: "0", borderRight: "1px solid", margin: "2vw" }}
          ></div>

          <div className="services-items" style={{ marginLeft: "1rem" }}>
            <div>
              <img src={businessplan} loading="lazy" alt="business-plan"></img>
            </div>
            <div className="item">
              <div className="item-heading">TALENT SERVICES</div>
              <div className="item-desc">
                360 degree human capital management services with global
                delivery experience, diverse engagement models, and dedicated
                practices for optimizing HR operations and processes
              </div>
              <div>
                {/* <button className="item-button">Discover more</button> */}
                <p className="item-button">
                  <Link to="/talent-services">Discover More</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sec" style={{ marginBottom: "3vw" }}>
          <div className="services-items">
            <div>
              <img src={startup} loading="lazy" alt="startup"></img>
            </div>
            <div className="item">
              <div className="item-heading">STARTUP SERVICES</div>
              <div className="item-desc">
                We help in making your startup journeys smoother and seamless so
                that you can focus on your vision and leave everything else on
                us, we know execution is more critical than idea
              </div>
              <div>
                {/* <button className="item-button">Discover more</button> */}
                <p className="item-button">
                  <Link to="/startup-services">Discover More</Link>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ width: "0", borderRight: "1px solid", margin: "2vw" }}
          ></div>

          <div className="services-items" style={{ marginLeft: "1rem" }}>
            <div>
              <img
                src={strategicconsulting}
                loading="lazy"
                alt="strategic-consulting"
              ></img>
            </div>
            <div className="item">
              <div className="item-heading">CONSULTING</div>
              <div className="item-desc">
                With a proven global presence in IT projects, we specialize in
                turning ideas into reality. Our free pre-purchase consultation
                ensures tailored support, backed by expertise in end-to-end
                project execution across industries.
              </div>
              <div>
                {/* <button className="item-button">Discover more</button> */}
                <p className="item-button">
                  <Link to="/contact">Discover More</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------- */}
        <div className="dis">
          <div className="sec" style={{ borderBottom: "0" }}>
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
                are you a job <span style={{ color: "#ff7000" }}>seeker?</span>{" "}
                choose the appropriate option based on your needs
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
                      <Link className="colr" to="/careers">
                        apply for trending jobs
                      </Link>
                    </span>
                  </div>
                  <div style={{ width: "13rem" }}>
                    <span style={{ textDecoration: "underline" }}>
                      <Link className="colr" to="/careers">
                        view all current job openings
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="opt-cont">
                  <span style={{ textDecoration: "underline", position: "relative" }}>
                  <Link style={{ color:"#000" }} to="mailto:shreyashmeshram76@gmail.com?subject=Job%20Application&body=Dear%20HR%20Team,%0D%0A%0D%0A[FILL%20IN%20YOUR%20DETAILS%20%26%20SEND%20MAIL]%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20Please%20find%20the%20details%20below%20along%20with%20my%20attached%20resume%20for%20your%20consideration.%0D%0A%0D%0AName:%20%0D%0AJob%20Title:%20%0D%0ATotal%20Experience:%20%0D%0ARelevant%20Experience:%20%0D%0ACurrent%20CTC:%20%0D%0AExpected%20CTC:%20%0D%0ANotice%20Period:%20%0D%0ALast%20Working%20Day:%20%20(if%20applicable)%0D%0A%0D%0AI%20look%20forward%20to%20hearing%20from%20you%20regarding%20any%20relevant%20opportunities.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]">submit your resume</Link>
                  </span>
                  <div style={{ width: "13rem" }}>
                    <span
                      className="apply-bt"
                      onClick={handleFriendClick} // No need to pass an index if there's only one option
                      style={{ textDecoration: "underline" }}
                    >
                      refer a friend
                    </span>

                    <div
                      className="share-options setpos"
                      style={{
                        display: activeShareIndex ? "flex" : "none",
                        marginTop: "5px",
                      }}
                    >
                      <div
                        className="share-option"
                        data-action="copy"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReferFriendClick("copy");
                        }}
                      >
                        Copy link
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "0",
              borderBottom: "1px solid",
              marginTop: "3vw",
              marginBottom: "3vw",
            }}
          ></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="dis-non">
          <div
            style={{
              height: "0",
              borderBottom: "1px solid",
              marginTop: "3vw",
              marginBottom: "3vw",
            }}
          ></div>
          <div className="seeker-cont">
            <div>How You Find Work</div>
            <div className="f-size">
              are you a job <span style={{ color: "#ff7000" }}>seeker?</span>{" "}
              choose the appropriate option based on your needs
            </div>
            <div
              style={{
                height: "0",
                borderBottom: "1px solid",
                marginTop: "1vw",
                marginBottom: "0vw",
              }}
            ></div>
            <div className="opt-cont">
              <div className="w-c">
                <span className="f-s" style={{ textDecoration: "underline" }}>
                <Link className="colr" to="/careers">
                apply for trending jobs
                      </Link>
                </span>
              </div>
              <div className="w-c">
                <span className="f-s" style={{ textDecoration: "underline" }}>
                <Link className="colr" to="/careers">
                        view all current job openings
                      </Link>
                </span>
              </div>
            </div>

            <div className="opt-cont">
              <div className="w-c">
                <span className="f-s" style={{ textDecoration: "underline" }}>
                <Link style={{ color:"#000" }} to="mailto:shreyashmeshram76@gmail.com?subject=Job%20Application&body=Dear%20HR%20Team,%0D%0A%0D%0A[FILL%20IN%20YOUR%20DETAILS%20%26%20SEND%20MAIL]%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20Please%20find%20the%20details%20below%20along%20with%20my%20attached%20resume%20for%20your%20consideration.%0D%0A%0D%0AName:%20%0D%0AJob%20Title:%20%0D%0ATotal%20Experience:%20%0D%0ARelevant%20Experience:%20%0D%0ACurrent%20CTC:%20%0D%0AExpected%20CTC:%20%0D%0ANotice%20Period:%20%0D%0ALast%20Working%20Day:%20%20(if%20applicable)%0D%0A%0D%0AI%20look%20forward%20to%20hearing%20from%20you%20regarding%20any%20relevant%20opportunities.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]">submit your resume</Link>
                </span>
              </div>
              <div className="w-c">
                <span className="f-s" onClick={handleFriendClick} style={{ textDecoration: "underline" }}>
                  refer a friend
                </span>
                <div
                      className="share-options setposmob"
                      style={{
                        display: activeShareIndex ? "flex" : "none",
                        marginTop: "5px",
                      }}
                    >
                      <div
                        className="share-option"
                        data-action="copy"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReferFriendClick("copy");
                        }}
                      >
                        Copy link
                      </div>
                    </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "0",
              borderBottom: "1px solid",
              marginTop: "3vw",
              marginBottom: "3vw",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

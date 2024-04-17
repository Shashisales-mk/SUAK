import React from "react";
import "./start.css";
import home_a from "../../../images/home_a.jpg";
export default function Start() {
  return (
    <div>
      <div className="start">
        <div className="start1">
          <div className="gap">
            <div className="a">
              Experience our comprehensive range of services tailored to
              highlight your
            </div>
            <div className="b">Talent Services.</div>
            <div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="start2">
          <div className="box">
            <img src={home_a} alt="home_a"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

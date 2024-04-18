import React from "react";
import "./newjobs.css";
function Newjobs() {
  return (
    <div>
      <div className="outer-container">
        <div className="inner-container">
          <div>NEW JOBS</div>
          <div>
            <ul className="fle">
              <li style={{ width: "39rem", fontSize: "4rem" }}>
                find a job that fits you. search for jobs in specific locations.
              </li>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  listStyle:"none",
                  borderRadius: "1px solid",
                }}
              >
                <li>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                  />
                </li>
                <li>
                  <button>SEARCH JOB</button>
                </li>
              </ul>
            </ul>
          </div>
          <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem"}}></div>
        </div>
      </div>
    </div>
  );
}

export default Newjobs;

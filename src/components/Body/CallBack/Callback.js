import React from 'react'

function Callback() {
  return (
    <div>
        <div className="sec" style={{ margin: "3vw" }}>
        <div
          className="services-items"
          style={{
            borderRight: "1.5px solid",
            display: "grid",
            width: "50%",
            margin: "2rem",
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
  )
}

export default Callback
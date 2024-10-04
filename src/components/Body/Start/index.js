import React, { useState } from "react";
import "./start.css";
import home_a from "../../../images/home_a.jpg";
import PopForm from "../../Pop-up Form/Popup";

export default function Start() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

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
              <button onClick={handleGetStarted}>Get Started</button>
            </div>
          </div>
        </div>
        <div className="start2">
          <div className="box">
            <img src={home_a} loading="lazy" alt="home_a" />
          </div>
        </div>
      </div>

      {/* Render the PopForm only when showForm is true */}
      {showForm && <PopForm onClose={handleCloseForm} />}
    </div>
  );
}

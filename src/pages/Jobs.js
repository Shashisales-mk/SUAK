import React from "react";
import ScrollToTop from "../ScrollToTop";
const Jobs = ({ job }) => {
  const handleApplyClick = () => {
    alert("Application submitted!");
  };

  const handleShareClick = () => {
    alert("Share functionality not implemented in this demo.");
  };

  // Check if job data is available
  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-container">
      <ScrollToTop></ScrollToTop>
      <header className="job-header">
        <a href="#" className="back-button">
          <span className="back-arrow">&#8592;</span> Back to jobs search
        </a>
        <img
          src="/assets/images/black-logo.png"
          alt="Shashi sales and marketing"
          className="job-logo"
        />
      </header>

      <h1 className="job-title">{job.title}</h1>

      <div className="job-meta">
        <img
          src="https://www.gstatic.com/images/icons/material/system/1x/place_grey600_24dp.png"
          alt="Location"
        />
        {job.location}
        <img
          src="/assets/images/job-le.png"
          alt="Job type"
          style={{ marginLeft: "20px" }}
        />
        {job.jobType}
      </div>

      <div className="apply-share">
        <a className="apply-btn" href={`/apply/${job._id}`}>
          Apply
        </a>
        <div className="share-icon">
          <button className="action-button share-btn" onClick={handleShareClick}>
            Share
          </button>
          <img src="/assets/images/share.svg" alt="Share" />
        </div>
      </div>

      <div className="section">
        <h2 className="second-title">Minimum qualifications:</h2>
        <ul className="requirements">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="second-title">Preferred qualifications:</h2>
        <ul className="requirements">
          {job.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="second-title">About the job</h2>
        <p>{job.description}</p>
      </div>

      <div className="section">
        <h2 className="second-title">Responsibilities</h2>
        <ul className="requirements">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="apply-share bottom-cont">
        <button className="apply-btn" onClick={handleApplyClick}>
          Apply
        </button>
        <div className="share-icon">
          <button className="action-button share-btn" onClick={handleShareClick}>
            Share
          </button>
          <img src="/assets/images/share.svg" alt="Share" />
        </div>
      </div>

      <div className="section">
        <h2 className="second-title">Other Job Opportunities</h2>
        <div className="other-jobs">
          <div className="job-card">
            <h3>Senior UX Researcher, gTech Users and Products</h3>
            <p>
              <strong>Location:</strong> Boulder, CO, USA; Atlanta, GA, USA
            </p>
            <p>
              <strong>Qualifications:</strong> Bachelor's degree, 7 years of
              experience
            </p>
          </div>
          <div className="job-card">
            <h3>Chip Package Signal and Power Integrity Engineer</h3>
            <p>
              <strong>Location:</strong> Sunnyvale, CA, USA
            </p>
            <p>
              <strong>Qualifications:</strong> Bachelor's degree, 2 years of
              experience
            </p>
          </div>
          <div className="job-card">
            <h3>Digital Business Marketing Apprenticeship, March 2025 Start (English)</h3>
            <p>
              <strong>Location:</strong> Hyderabad, Telangana, India; Gurugram, Haryana, India
            </p>
            <p>
              <strong>Qualifications:</strong> Currently pursuing Bachelor's degree
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

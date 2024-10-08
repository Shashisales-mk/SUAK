import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jobimg1 from "../images/job-p.png";
import jobimg3 from "../images/job-le.png";
import shareImg from "../images/shareImg.svg";

const JobDetails = () => {
  const [jobsData, setJobsData] = useState([]);
  const navigate = useNavigate(); // Use navigate for navigation
  // const isProduction = window.location.hostname === 'suak.in';
  // const baseURL = isProduction ? 'https://suak.in/' : 'http://localhost:5000/';
  const baseurl = "https://suak.in/api";
  useEffect(() => {
    fetch(`${baseurl}/jobsdata/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setJobsData(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  const { id } = useParams();
  const jobIndex = parseInt(id);

  if (jobIndex < 0 || jobIndex >= jobsData.length) {
    return <div>Job not found</div>;
  }

  const job = jobsData[jobIndex];

  // Function to handle Apply button click
  const handleApplyClick = () => {
    navigate(`/apply/${job._id}`);
  };

  return (
    <>
      <Navbar />
      <div className="job-container">
        <header className="job-header">
          <a href="/career" className="back-button">
            <span className="back-arrow">&#8592;</span>
            Back to jobs search
          </a>
          <img src={jobimg1} alt="Shashi sales and marketing" className="job-logo" />
        </header>

        <h1 className="job-title">{job.title}</h1>

        <div className="job-meta">
          <p>
          <img src="https://www.gstatic.com/images/icons/material/system/1x/place_grey600_24dp.png" alt="Location" />
          {job.location}
          </p>
          <p>
          <img src={jobimg3} alt="Job type" className="job-type-icon" />
          {job.type}
          </p>
        </div>

        <div className="apply-share">
          <button className="apply-btn" onClick={handleApplyClick}>Apply</button>
          <div className="share-icon">
            <button className="action-button share-btn">Share</button>
            <img src={shareImg} alt="Share icon" />
          </div>
        </div>

        <section className="section">
          <h2 className="second-title">Minimum qualifications:</h2>
          <ul className="requirements">
            {job.qualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="second-title">Preferred qualifications:</h2>
          <ul className="requirements">
            {job.preferedqualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="second-title">About the job</h2>
          <ul className="requirements">
            {job.aboutthejob.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="second-title">Responsibilities</h2>
          <ul className="requirements">
            {job.responsibilities.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </section>

        <div className="apply-share bottom-cont">
          <button className="apply-btn" onClick={handleApplyClick}>Apply</button>
          <div className="share-icon">
            <button className="action-button share-btn">Share</button>
            <img src={shareImg} alt="Share icon" />
          </div>
        </div>

        <section className="section">
          <h2 className="second-title">Other Job Opportunities</h2>
          <div className="other-jobs">
            {/* Example other jobs */}
            <div className="job-card">
              <h3>Senior UX Researcher, gTech Users and Products</h3>
              <p><strong>Location:</strong> Boulder, CO, USA; Atlanta, GA, USA</p>
              <p><strong>Qualifications:</strong> Bachelor's degree, 7 years of experience</p>
            </div>
            <div className="job-card">
              <h3>Chip Package Signal and Power Integrity Engineer</h3>
              <p><strong>Location:</strong> Sunnyvale, CA, USA</p>
              <p><strong>Qualifications:</strong> Bachelor's degree, 2 years of experience</p>
            </div>
            <div className="job-card">
              <h3>Digital Business Marketing Apprenticeship, March 2025 Start (English)</h3>
              <p><strong>Location:</strong> Hyderabad, Telangana, India; Gurugram, Haryana, India</p>
              <p><strong>Qualifications:</strong> Currently pursuing Bachelor's degree</p>
            </div>
          </div>
        </section>
      </div>
      <div className="bor-lin pst"></div>
      <Footer />
    </>
  );
};

export default JobDetails;

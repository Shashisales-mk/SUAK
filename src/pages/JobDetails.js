import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jobimg1 from "../images/logo.png";
import jobimg3 from "../images/job-le.png";
import shareImg from "../images/shareImg.svg";
// import jobimg4 from "../images/logo2.png";
import shareIcon1 from "../images/shareIcon1.png";
import shareIcon2 from "../images/shareIcon2.png";
import "./JobDetails.css";

const JobDetails = () => {
  const [jobsData, setJobsData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); // Always call hooks at the top level
  const [activeShareIndex, setActiveShareIndex] = useState(null); // Track which share option is active

  const baseurl = "https://suak.in/api";

  useEffect(() => {
    fetch(`${baseurl}/jobsdata/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setJobsData(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const jobIndex = parseInt(id);

  // Check if the job exists early in the render
  if (!jobsData.length || jobIndex < 0 || jobIndex >= jobsData.length) {
    return <div>Job not found</div>;
  }

  const job = jobsData[jobIndex];

  // Function to handle Apply button click
  const handleApplyClick = () => {
    navigate(`/apply/${job._id}`);
  };

  const handleShareClick = (index) => {
    setActiveShareIndex(activeShareIndex === index ? null : index); // Toggle the share options visibility
  };

  const handleShareOptionClick = (action) => {
    const currentUrl = window.location.href;
  
    if (action === "copy") {
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else if (action === "email") {
      const subject = encodeURIComponent("Check out this job opportunity!");
      const body = encodeURIComponent(`I found this interesting job on SUAK: ${currentUrl}`);
  
      // Construct the mailto link
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
  
      // Open mailto link using window.open
      // window.open(mailtoLink);
    }
  
    setActiveShareIndex(null); 
  };
  
  
  

  return (
    <>
      <Navbar />
      <div className="job-container">
        <header className="job-header">
          <a href="/careers" className="back-button">
            <span className="back-arrow">&#8592;</span>
            Back to jobs search
          </a>
          <img
            src={jobimg1}
            alt="Shashi sales and marketing"
            className="job-logo"
          />
        </header>

        <h1 className="job-title">{job.title}</h1>

        <div className="job-meta">
          <p>
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/place_grey600_24dp.png"
              alt="Location"
            />
            {job.location}
          </p>
          <p>
            <img src={jobimg3} alt="Job type" className="job-type-icon" />
            {job.type}
          </p>
          <p>
            <img src={jobimg3} alt="suak" />
            {job.experience}
          </p>
        </div>

        <div className="apply-share">
          <button className="apply-btn" onClick={handleApplyClick}>
            Apply
          </button>
          {/* <div className="share-icon">
            <button
              className="action-button share-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleShareClick(0);
              }}
            >
              Share
            </button>
            <img src={shareImg} alt="Share icon" />
          </div> */}
        </div>

        <section className="section">
          <h2 className="second-title">Role Description:</h2>
          <ul
            className="requirements"
            dangerouslySetInnerHTML={{ __html: job.aboutthejob }}
          />
        </section>

        <section className="section">
          <h2 className="second-title">Eligibility Criteria:</h2>
          <ul
            className="requirements"
            dangerouslySetInnerHTML={{ __html: job.preferedqualifications }}
          />
        </section>

        <section className="section">
          <h2 className="second-title">Responsibilities</h2>
          <ul
            className="requirements"
            dangerouslySetInnerHTML={{ __html: job.responsibilities }}
          />
        </section>

        <section className="section">
          <h2 className="second-title">Special Benefits:</h2>
          <ul
            className="requirements"
            dangerouslySetInnerHTML={{ __html: job.qualifications }}
          />
        </section>

        <div className="apply-share bottom-cont">
          <button className="apply-btn" onClick={handleApplyClick}>
            Apply
          </button>

          <div className="share-icon">
            <button
              className="action-button share-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleShareClick(0);
              }}
            >
              Share
            </button>
            <img src={shareImg} alt="Share icon" />
            <div
            className="share-options"
            style={{ display: activeShareIndex === 0 ? "flex" : "none", marginTop: "5px" }}
          >
            <div
              className="share-option"
              data-action="copy"
              onClick={(e) => {
                e.stopPropagation();
                handleShareOptionClick("copy");
              }}
            >
              <img src={shareIcon1} alt="Share icon" /> Copy link
            </div>

            <div
              className="share-option"
              data-action="email"
              onClick={(e) => {
                e.stopPropagation();
                handleShareOptionClick("email");
              }}
            >
              <img src={shareIcon2} alt="Share icon" /> Email
            </div>
          </div>
          </div>

          
        </div>

        <section className="section">
          <h2 className="second-title">Other Job Opportunities</h2>
          <div className="other-jobs">
            {/* Example other jobs */}
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
              <h3>
                Digital Business Marketing Apprenticeship, March 2025 Start
                (English)
              </h3>
              <p>
                <strong>Location:</strong> Hyderabad, Telangana, India;
                Gurugram, Haryana, India
              </p>
              <p>
                <strong>Qualifications:</strong> Currently pursuing Bachelor's
                degree
              </p>
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

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jobimg1 from "../images/logo.png";
import jobimg3 from "../images/job-le.png";
import shareImg from "../images/shareImg.svg";
import shareIcon1 from "../images/shareIcon1.png";
import shareIcon2 from "../images/shareIcon2.png";
import "./JobDetails.css";

const JobDetails = () => {
  const [jobsData, setJobsData] = useState([]);
  const [otherJobs, setOtherJobs] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeShareIndex, setActiveShareIndex] = useState(null);

  const baseurl = "https://suak.in/api";

  useEffect(() => {
    // Fetch all jobs
    fetch(`${baseurl}/jobsdata/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJobsData(data);
        // Get three random jobs for "Other Job Opportunities"
        const randomJobs = getRandomJobs(data, 3, parseInt(id));
        setOtherJobs(randomJobs);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, [id]);

  const getRandomJobs = (jobs, count, currentJobId) => {
    const filteredJobs = jobs.filter((job, index) => index !== currentJobId);
    const shuffled = filteredJobs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const jobIndex = parseInt(id);

  if (!jobsData.length || jobIndex < 0 || jobIndex >= jobsData.length) {
    return <div>Job not found</div>;
  }

  const job = jobsData[jobIndex];

  const handleApplyClick = () => {
    navigate(`/apply/${job._id}`);
  };

  const handleShareClick = (index) => {
    setActiveShareIndex(activeShareIndex === index ? null : index);
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
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
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
            {otherJobs.map((otherJob, index) => (
              <div className="job-card" key={index}>
                <h3>{otherJob.title}</h3>
                <p>
                  <strong>Location:</strong> {otherJob.location}
                </p>
                <p>
                  <strong>Qualifications:</strong> {otherJob.experience}
                </p>
                <p>
                  <strong>Minimum Qualifications:</strong>
                  <small dangerouslySetInnerHTML={{ __html: job.preferedqualifications }}></small>
                  {/* {otherJob.preferedqualifications} */}
                </p>
                <button onClick={() => navigate(`/job/${jobsData.indexOf(otherJob)}`)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bor-lin pst"></div>
      <Footer />
    </>
  );
};

export default JobDetails;

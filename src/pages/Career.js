import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./career.css";

const Career = () => {
  const jobsData = [
    {
      title: "Senior UX Researcher, gTech Users and Products",
      company: "SSM",
      location: "Boulder, CO, USA; Atlanta, GA, USA",
      type: "Mid",
      qualifications: [
        "Bachelor's degree or equivalent practical experience.",
        "5 years of experience in an applied research setting, or similar.",
        "Experience with research design utilizing various methods (e.g., usability studies, contextual inquiry, surveys, etc.)."
      ]
    },
    {
      title: "Sales Specialist, YouTube (Fixed-Term Contract)",
      company: "YouTube",
      location: "Copenhagen, Denmark",
      type: "Mid",
      qualifications: [
        "Bachelor's degree or equivalent practical experience.",
        "8 years of experience in digital media, sales, marketing, or product roles."
      ]
    },
    {
      title: "Software Engineer, Machine Learning",
      company: "SSM",
      location: "Mountain View, CA, USA",
      type: "Full-time",
      qualifications: [
        "Bachelor's degree in Computer Science, related technical field, or equivalent practical experience.",
        "3 years of experience in software development.",
        "Experience in machine learning or artificial intelligence."
      ]
    },
    {
      title: "Software Engineer, Machine Learning",
      company: "SSM",
      location: "Mountain View, CA, USA",
      type: "Full-time",
      qualifications: [
        "Bachelor's degree in Computer Science, related technical field, or equivalent practical experience.",
        "3 years of experience in software development.",
        "Experience in machine learning or artificial intelligence."
      ]
    }
  ];

  const [jobs, setJobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null); // Keep track of which dropdown is active

  // Filtering jobs based on search input
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
  };

  // Toggle dropdown visibility based on activeDropdown state
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Render job cards
  const renderJobs = () => {
    return filteredJobs.map((job, index) => (
      <div className="job-card" key={index}>
        <h3 className="jtitle">{job.title}</h3>
        <div className="job-details">
          <div><img src="/assets/images/job-p.png" alt="" /> {job.company}</div>
          <div><img src="/assets/images/job-l.png" alt="" /> {job.location}</div>
          <div><img src="/assets/images/job-le.png" alt="" /> {job.type}</div>
        </div>
        <div className="job-qualifications">
          <strong>Minimum qualifications:</strong>
          <ul>
            {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </div>
        <div className="action-buttons">
          <a href="job" className="learn-more">Learn more</a>
          <div className="share-icon">
            <button className="action-button share-btn" onClick={() => alert('Sharing functionality would be implemented here.')}>Share</button>
            <img src="/assets/images/share.svg" alt="Share icon" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Navbar />

      <div className="career-container">
        {/* Sidebar with filters */}
        <div className="filter-sidebar">
          <h2>Filters</h2>
          <div className="filter-option" onClick={() => toggleDropdown('locations')}>
            Locations <span>▼</span>
          </div>
          {activeDropdown === 'locations' && (
            <div className="filter-content">
              <a href="#">All locations</a>
              <a href="#">Remote</a>
              <a href="#">United States</a>
              <a href="#">Europe</a>
            </div>
          )}
          
          <div className="filter-option" onClick={() => toggleDropdown('experience')}>
            Experience <span>▼</span>
          </div>
          {activeDropdown === 'experience' && (
            <div className="filter-content">
              <a href="#">All levels</a>
              <a href="#">Entry level</a>
              <a href="#">Mid level</a>
              <a href="#">Senior level</a>
            </div>
          )}

          <div className="filter-option" onClick={() => toggleDropdown('jobType')}>
            Job types <span>▼</span>
          </div>
          {activeDropdown === 'jobType' && (
            <div className="filter-content">
              <a href="#">All types</a>
              <a href="#">Full-time</a>
              <a href="#">Part-time</a>
              <a href="#">Contract</a>
            </div>
          )}
        </div>

        {/* Main content with job listings */}
        <div className="main-content">
          <div className="top-bar">
            <div className="job-count">
              <span>{filteredJobs.length}</span> jobs matched
            </div>
            <button className="clear-filters" onClick={clearFilters}>Clear filters</button>
            <div className="job-alerts">
              Turn on job alerts for this search
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="career-slider"></span>
              </label>
            </div>
          </div>

          <input
            type="text"
            className="search-bar"
            placeholder="What do you want to do?"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* Job listings */}
          <div id="job-listings">
            {renderJobs()}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Career;

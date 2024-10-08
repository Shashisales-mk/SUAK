import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './career.css';
import jobimg1 from '../images/job-p.png';
import jobimg2 from '../images/job-l.png';
import jobimg3 from '../images/job-le.png';
import shareImg from '../images/shareImg.svg';

const Career = () => {
  const [jobs, setJobsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    experience: '',
    jobType: '',
    sortBy: '',
  });
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  const isProduction = window.location.hostname === 'suak.in';
  const baseURL = isProduction ? 'https://suak.in/' : 'http://localhost:5000/';
  useEffect(() => {
    // Fetch data from the backend
    fetch(`${baseURL}api/jobsdata/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setJobsData(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  // Filter and sort jobs
  const filteredJobs = jobs
    .filter((job) => {
      return (
        (filters.location
          ? job.location?.toLowerCase().includes(filters.location.toLowerCase())
          : true) &&
        (filters.experience
          ? job.experience?.toLowerCase().includes(filters.experience.toLowerCase())
          : true) &&
        (filters.jobType
          ? job.type?.toLowerCase().includes(filters.jobType.toLowerCase())
          : true) &&
        (searchTerm ? job.title?.toLowerCase().includes(searchTerm.toLowerCase()) : true)
      );
    })
    .sort((a, b) => {
      if (filters.sortBy === 'latest') {
        return new Date(b.postedDate) - new Date(a.postedDate); // Sort by date, assuming 'postedDate' field
      }
      return 0;
    });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      location: '',
      experience: '',
      jobType: '',
      sortBy: '',
    });
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleFilterChange = (value, filterType) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const renderJobs = () => {
    return filteredJobs.map((job, index) => (
      <div className="job-card" key={index}>
        <h3 className="jtitle">{job.title}</h3>
        <div className="job-details">
          <div>
            <img src={jobimg1} alt="" /> {job.company}
          </div>
          <div>
            <img src={jobimg2} alt="" /> {job.location}
          </div>
          <div>
            <img src={jobimg3} alt="" /> {job.type}
          </div>
        </div>
        <div className="job-qualifications">
          <strong>Minimum qualifications:</strong>
          <ul>
            {job.qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
        <div className="action-buttons">
          <a href="#" onClick={() => navigate(`/job/${index}`)} className="learn-more">
            Learn more
          </a>
          <div className="share-icon">
            <button
              className="action-button share-btn"
              onClick={() => alert('Sharing functionality would be implemented here.')}
            >
              Share
            </button>
            <img src={shareImg} alt="Share icon" />
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

          {/* Location Filter */}
          <div className="filter-option" onClick={() => toggleDropdown('locations')}>
            Locations <span>▼</span>
          </div>
          {activeDropdown === 'locations' && (
            <div className="filter-content">
              <input
                type="text"
                placeholder="Location"
                onChange={(e) => handleFilterChange(e.target.value, 'location')}
              />
              <a href="#" onClick={() => handleFilterChange('', 'location')}>
                All Locations
              </a>
              <a href="#" onClick={() => handleFilterChange('Remote', 'location')}>
                Remote
              </a>
              <a href="#" onClick={() => handleFilterChange('United States', 'location')}>
                United States
              </a>
              <a href="#" onClick={() => handleFilterChange('Europe', 'location')}>
                Europe
              </a>
            </div>
          )}

          {/* Experience Filter */}
          <div className="filter-option" onClick={() => toggleDropdown('experience')}>
            Experience <span>▼</span>
          </div>
          {activeDropdown === 'experience' && (
            <div className="filter-content">
              <input
                type="text"
                placeholder="Experience"
                onChange={(e) => handleFilterChange(e.target.value, 'experience')}
              />
              <a href="#" onClick={() => handleFilterChange('Entry level', 'experience')}>
                Entry level
              </a>
              <a href="#" onClick={() => handleFilterChange('Mid level', 'experience')}>
                Mid level
              </a>
              <a href="#" onClick={() => handleFilterChange('Senior level', 'experience')}>
                Senior level
              </a>
            </div>
          )}

          {/* Job Type Filter */}
          <div className="filter-option" onClick={() => toggleDropdown('jobType')}>
            Job types <span>▼</span>
          </div>
          {activeDropdown === 'jobType' && (
            <div className="filter-content">
              <input
                type="text"
                placeholder="Job Type"
                onChange={(e) => handleFilterChange(e.target.value, 'jobType')}
              />
              <a href="#" onClick={() => handleFilterChange('Full-time', 'jobType')}>
                Full-time
              </a>
              <a href="#" onClick={() => handleFilterChange('Part-time', 'jobType')}>
                Part-time
              </a>
              <a href="#" onClick={() => handleFilterChange('Contract', 'jobType')}>
                Contract
              </a>
            </div>
          )}

          {/* Sort By Filter */}
          <div className="filter-option" onClick={() => toggleDropdown('sortBy')}>
            Sort By <span>▼</span>
          </div>
          {activeDropdown === 'sortBy' && (
            <div className="filter-content">
              <a href="#" onClick={() => handleFilterChange('latest', 'sortBy')}>
                Latest
              </a>
              <a href="#" onClick={() => handleFilterChange('', 'sortBy')}>
                Default
              </a>
            </div>
          )}

          <button className="clear-filters" onClick={clearFilters}>
            Clear All Filters
          </button>
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          <h1>Find Your Job</h1>
          <input
            type="text"
            placeholder="Search by job title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="job-cards">{renderJobs()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
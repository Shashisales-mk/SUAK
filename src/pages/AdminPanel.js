import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminPanel.css";
import Navbar from '../components/Navbar';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    experience: '',
    skills: '',
    qualifications: '',
    preferedqualifications: '',
    aboutthejob: '',
    responsibilities: '',
    degree: '',
    organization: '',
  });
  const [editJobId, setEditJobId] = useState(null);

  // New state to manage the active section
  const [activeSection, setActiveSection] = useState('add-jobs');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchJobs();
    }
  }, [navigate]);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:4000/jobsdata');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const fetchApplications = async (jobId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/job-applications/${jobId}`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = jobs.length ? Math.max(...jobs.map(job => job.id)) + 1 : 1;

    const jobData = {
      id: newId,
      title: jobForm.title,
      company: jobForm.company,
      location: jobForm.location,
      type: jobForm.type,
      experience: jobForm.experience,
      skills: jobForm.skills.split(',').map((skill) => skill.trim()),
      qualifications: jobForm.qualifications.split(',').map((q) => q.trim()),
      preferedqualifications: jobForm.preferedqualifications
        ? jobForm.preferedqualifications.split(',').map((pq) => pq.trim())
        : [],
      aboutthejob: jobForm.aboutthejob.split(',').map((atj) => atj.trim()),
      responsibilities: jobForm.responsibilities.split(',').map((r) => r.trim()),
      degree: jobForm.degree,
      organization: jobForm.organization,
    };

    try {
      const response = await fetch(editJobId
        ? `http://localhost:4000/jobsdata/${editJobId}`
        : 'http://localhost:4000/jobsdata', {
        method: editJobId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(editJobId ? 'Job updated!' : 'Job added!', result);
        fetchJobs();
        resetForm();
      } else {
        const errorData = await response.json();
        console.error('Error submitting job:', errorData);
      }
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  const handleEdit = (job) => {
    setJobForm({
      ...job,
      skills: job.skills.join(', '),
      qualifications: job.qualifications.join(', '),
      preferedqualifications: job.preferedqualifications.join(', '),
      aboutthejob: job.aboutthejob.join(', '),
      responsibilities: job.responsibilities.join(', '),
    });
    setEditJobId(job._id);
    setActiveSection('add-jobs'); // Switch to add-jobs section when editing
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/jobsdata/${id}`, {
        method: 'DELETE',
      });
      console.log('Job deleted!');
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const resetForm = () => {
    setJobForm({
      title: '',
      company: '',
      location: '',
      type: '',
      skills: '',
      qualifications: '',
      preferedqualifications: '',
      aboutthejob: '',
      responsibilities: '',
      degree: '',
      organization: '',
    });
    setEditJobId(null);
  };

  // Function to handle viewing applications for a job
  const handleViewApplications = (jobId) => {
    setSelectedJobId(jobId);
    setActiveSection('view-applications');
    fetchApplications(jobId);
  };

  return (
    <>
    <Navbar></Navbar>
      <h1 style={styles.heading}>Welcome To SUAK Admin Panel</h1>
      {/* <p style={styles.subheading}>Manage your dashboard and perform administrative tasks.</p> */}

      <div className='main-admin-cont'>
        
        <div className='left-admin-cont'>
          <ul>
            <li 
              className='add-jobs' 
              onClick={() => setActiveSection('add-jobs')} // Toggle to 'add-jobs' section
            >
              Add Jobs
            </li>
            <li 
              className='view-applications' 
              onClick={() => setActiveSection('view-applications')} // Toggle to 'view-applications' section
            >
              View Applications
            </li>
            <li>
              <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className='right-admin-cont' style={styles.container}>
          {activeSection === 'add-jobs' && ( // Conditionally render the 'Add Jobs' section
            <div className='show-add-jobs'>
              <h2 style={styles.formHeading}>{editJobId ? 'Edit Job' : 'Add New Job'}</h2>
              <form onSubmit={handleSubmit} style={styles.form}>
                <input name="title" placeholder="Job Title" value={jobForm.title} onChange={handleChange} required style={styles.input} />
                <input name="company" placeholder="Company" value={jobForm.company} onChange={handleChange} required style={styles.input} />
                <input name="location" placeholder="Location" value={jobForm.location} onChange={handleChange} required style={styles.input} />
                <input name="type" placeholder="Job Type" value={jobForm.type} onChange={handleChange} required style={styles.input} />
                <input name="experience" placeholder="Experience (All levels, Entry level, Mid level, Senior level)" value={jobForm.experience} onChange={handleChange} required style={styles.input} />
                <input name="skills" placeholder="Skills (comma-separated)" value={jobForm.skills} onChange={handleChange} required style={styles.input} />
                <input name="qualifications" placeholder="Qualifications (comma-separated)" value={jobForm.qualifications} onChange={handleChange} required style={styles.input} />
                <input name="preferedqualifications" placeholder="Preferred Qualifications (optional)" value={jobForm.preferedqualifications} onChange={handleChange} style={styles.input} />
                <textarea name="aboutthejob" placeholder="About the Job" value={jobForm.aboutthejob} onChange={handleChange} required style={styles.textarea} />
                <textarea name="responsibilities" placeholder="Responsibilities" value={jobForm.responsibilities} onChange={handleChange} required style={styles.textarea} />
                <input name="degree" placeholder="Degree" value={jobForm.degree} onChange={handleChange} required style={styles.input} />
                <input name="organization" placeholder="Organization" value={jobForm.organization} onChange={handleChange} required style={styles.input} />
                <button type="submit" style={styles.submitButton}>{editJobId ? 'Update Job' : 'Add Job'}</button>
              </form>

              <h2 style={styles.jobListHeading}>Job Listings</h2>
              <ul style={styles.jobList}>
                {jobs.map((job) => (
                  <li key={job._id} style={styles.jobItem}>
                    <strong>{job.title}</strong> at {job.company} in {job.location}
                    <div style={styles.buttonContainer}>
                      <button onClick={() => handleEdit(job)} style={styles.editButton}>Edit</button>
                      <button onClick={() => handleDelete(job._id)} style={styles.deleteButton}>Delete</button>
                      <button onClick={() => handleViewApplications(job._id)} style={styles.viewButton}>View Applications</button> {/* View Applications button */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === 'view-applications' && ( // Conditionally render the 'View Applications' section
            <div className='show-view-applications'>
              <h2 style={styles.applicationsHeading}>Applications for Job ID: {selectedJobId}</h2>
              {applications.length > 0 ? (
                <ul style={styles.applicationsList}>
                  {applications.map((app) => (
                    <li key={app._id} style={styles.applicationItem}>
                      <p><strong>Name:</strong> {app.name}</p>
                      <p><strong>Email:</strong> {app.email}</p>
                      <p><strong>Phone:</strong> {app.phone}</p>
                      <p><strong>Experience:</strong> {app.experience}</p>
                      <p><strong>Skills:</strong> {app.skills.join(', ')}</p>
                      <p><strong>CTC:</strong> {app.currentCTC}</p>
                      <p><strong>Expected CTC:</strong> {app.expectedCTC}</p>
                      {/* Additional fields can be displayed here */}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No applications found for this job.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
    paddingTop: '30px',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#666',
    marginBottom: '30px',
    textAlign: 'center',
  },
  container: {
    padding: '20px',
  },
  formHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    marginBottom: '40px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  jobListHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  jobList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  jobItem: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  editButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  viewButton: {
    padding: '5px 10px',
    backgroundColor: '#17a2b8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  applicationsHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  applicationsList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  applicationItem: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
  },
};

export default AdminPanel;

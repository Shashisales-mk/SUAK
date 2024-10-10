import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import Navbar from "../components/Navbar";
import JoditEditor from "jodit-pro-react";
const AdminPanel = () => {
  const editor = useRef(null);
  // let [content, setContent] = useState("")
  const isProduction = window.location.hostname === "suak.in";
  const baseURL = isProduction ? "https://suak.in/" : "http://localhost:5000/";

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    experience: "",
    skills: "",
    qualifications: "",
    preferedqualifications: "",
    aboutthejob: "",
    responsibilities: "",
  });
  const [editJobId, setEditJobId] = useState(null);

  // New state to manage the active section
  const [activeSection, setActiveSection] = useState("add-jobs");

  const fetchJobs = useCallback(async () => {
    console.log("Fetching jobs...");
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(`${baseURL}api/jobsdata`, { signal });
      const data = await response.json();
      setJobs(data);
      console.log("Fetched jobs:", data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }

    return () => {
      controller.abort();
    };
  }, [baseURL]);

  const fetchApplications = async (jobId) => {
    const abortController = new AbortController(); // Create a new AbortController
    try {
      const response = await fetch(`${baseURL}api/job-application/${jobId}`, {
        signal: abortController.signal, // Pass the signal to the fetch request
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error fetching applications:", error);
      }
    }
    return () => abortController.abort(); // Clean up by aborting the fetch request
  };
  // useEffect to check for the token and navigate if missing, or fetch jobs
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const abortController = new AbortController(); // Create an AbortController for the jobs fetch
      fetchJobs(abortController); // Pass the controller to the fetch function
      return () => abortController.abort(); // Clean up by aborting the fetch request
    }
  }, [navigate, fetchJobs]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = jobs.length ? Math.max(...jobs.map((job) => job.id)) + 1 : 1;

    const jobData = {
      id: newId,
      title: jobForm.title,
      company: jobForm.company,
      location: jobForm.location,
      type: jobForm.type,
      experience: jobForm.experience,
      skills: jobForm.skills.split(",").map((skill) => skill.trim()),
      qualifications: jobForm.qualifications.split(",").map((q) => q.trim()),
      preferedqualifications: jobForm.preferedqualifications
        ? jobForm.preferedqualifications.split(",").map((pq) => pq.trim())
        : [],
      aboutthejob: jobForm.aboutthejob.split(",").map((atj) => atj.trim()),
      responsibilities: jobForm.responsibilities
        .split(",")
        .map((r) => r.trim()),
    };

    try {
      const response = await fetch(
        editJobId
          ? `${baseURL}api/jobsdata/${editJobId}`
          : `${baseURL}api/jobsdata`,
        {
          method: editJobId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(editJobId ? "Job updated!" : "Job added!", result);
        fetchJobs();
        resetForm();
      } else {
        const errorData = await response.json();
        console.error("Error submitting job:", errorData);
      }
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  const handleEdit = (job) => {
    setJobForm({
      ...job,
      skills: job.skills.join(", "),
      qualifications: job.qualifications.join(", "),
      preferedqualifications: job.preferedqualifications.join(", "),
      aboutthejob: job.aboutthejob.join(", "),
      responsibilities: job.responsibilities.join(", "),
    });
    setEditJobId(job._id);
    setActiveSection("add-jobs"); // Switch to add-jobs section when editing
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${baseURL}api/jobsdata/${id}`, {
        method: "DELETE",
      });
      console.log("Job deleted!");
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const resetForm = () => {
    setJobForm({
      title: "",
      company: "",
      location: "",
      type: "",
      skills: "",
      experience: "",
      qualifications: "",
      preferedqualifications: "",
      aboutthejob: "",
      responsibilities: "",
    });
    setEditJobId(null);
  };

  // Function to handle viewing applications for a job
  const handleViewApplications = (jobId) => {
    setSelectedJobId(jobId);
    setActiveSection("view-applications");
    fetchApplications(jobId);
  };

  const handleHire = async (applicationId) => {
    try {
      await fetch(`${baseURL}api/job-application/hire/${applicationId}`, {
        method: "POST",
      });
      console.log("Application hired!");
      fetchApplications(selectedJobId); // Refresh applications
    } catch (error) {
      console.error("Error hiring application:", error);
    }
  };

  const handleReject = async (applicationId) => {
    try {
      await fetch(`${baseURL}api/job-application/reject/${applicationId}`, {
        method: "POST",
      });
      console.log("Application rejected!");
      fetchApplications(selectedJobId); // Refresh applications
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };

  const handleShortlist = async (applicationId) => {
    try {
      await fetch(`${baseURL}api/job-application/shortlist/${applicationId}`, {
        method: "POST",
      });
      console.log("Application shortlisted!");
      fetchApplications(selectedJobId); // Refresh applications
    } catch (error) {
      console.error("Error shortlisting application:", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <h1 style={styles.heading}>Welcome To SUAK Admin Panel</h1>
      {/* <p style={styles.subheading}>Manage your dashboard and perform administrative tasks.</p> */}

      <div className="main-admin-cont">
        <div className="left-admin-cont">
          <ul>
            <li
              className="add-jobs"
              onClick={() => setActiveSection("add-jobs")} // Toggle to 'add-jobs' section
            >
              Add Jobs
            </li>
            <li
              className="view-applications"
              onClick={() => setActiveSection("view-applications")} // Toggle to 'view-applications' section
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

        <div className="right-admin-cont" style={styles.container}>
          {activeSection === "add-jobs" && ( // Conditionally render the 'Add Jobs' section
            <div className="show-add-jobs">
              <h2 style={styles.formHeading}>
                {editJobId ? "Edit Job" : "Add New Job"}
              </h2>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div className="admsec">
                  <label
                    htmlFor="company"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Company
                  </label>
                  <input
                    name="company"
                    placeholder="SUAK"
                    value={jobForm.company}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                <div className="admsec">
                  <label
                    htmlFor="title"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Job Title
                  </label>
                  <input
                    name="title"
                    placeholder="Job Title"
                    value={jobForm.title}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                <div className="admsec">
                  <label
                    htmlFor="location"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Job Location
                  </label>
                  <input
                    name="location"
                    placeholder="Location"
                    value={jobForm.location}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                <div className="admsec">
                  <label
                    htmlFor="type"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Job Type
                  </label>
                  <select
                    name="type"
                    value={jobForm.type}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  >
                    <option value="">Select Job Type</option>{" "}
                    {/* Default empty option */}
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div className="admsec">
                  <label
                    htmlFor="experience"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Experience
                  </label>
                  <select
                    name="experience"
                    value={jobForm.experience}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  >
                    <option value="">Select Experience Level</option>{" "}
                    {/* Default empty option */}
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                  </select>
                </div>

                <div className="admsec">
                  <label
                    htmlFor="aboutthejob"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Role Description:
                  </label>
                  <JoditEditor
                    name="aboutthejob"
                    ref={editor}
                    value={jobForm.aboutthejob}
                    tabIndex={1}
                    onChange={(newContent) =>
                      setJobForm({ ...jobForm, aboutthejob: newContent })
                    }
                  />
                </div>

                <div className="admsec">
                  <label
                    htmlFor="preferedqualifications"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Eligibility Criteria
                  </label>
                  <JoditEditor
                    name="preferedqualifications"
                    ref={editor}
                    value={jobForm.preferedqualifications}
                    tabIndex={1}
                    onChange={(newContent) =>
                      setJobForm({
                        ...jobForm,
                        preferedqualifications: newContent,
                      })
                    }
                  />
                </div>

                <div className="admsec">
                  <label
                    htmlFor="responsibilities"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Responsibilities:
                  </label>
                  <JoditEditor
                    name="responsibilities"
                    ref={editor}
                    value={jobForm.responsibilities}
                    tabIndex={1}
                    onChange={(newContent) =>
                      setJobForm({ ...jobForm, responsibilities: newContent })
                    }
                  />
                </div>

                <div className="admsec">
                  <input
                    name="skills"
                    placeholder="Skills (comma-separated)"
                    value={jobForm.skills}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                <div className="admsec">
                  <label
                    htmlFor="qualifications"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block",
                    }}
                  >
                    Special Benefits:
                  </label>
                  <JoditEditor
                    name="qualifications"
                    ref={editor}
                    value={jobForm.qualifications}
                    tabIndex={1}
                    onChange={(newContent) =>
                      setJobForm({ ...jobForm, qualifications: newContent })
                    }
                  />
                </div>
                {/* <input name="qualifications" placeholder="Qualifications (comma-separated)" value={jobForm.qualifications} onChange={handleChange} required style={styles.input} /> */}
                <button type="submit" style={styles.submitButton}>
                  {editJobId ? "Update Job" : "Add Job"}
                </button>
              </form>

              <h2 style={styles.jobListHeading}>Job Listings</h2>
              <ul style={styles.jobList}>
                {jobs.map((job) => (
                  <li key={job._id} style={styles.jobItem}>
                    <strong>{job.title}</strong> at {job.company} in{" "}
                    {job.location}
                    <div style={styles.buttonContainer}>
                      <button
                        onClick={() => handleEdit(job)}
                        style={styles.editButton}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job._id)}
                        style={styles.deleteButton}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleViewApplications(job._id)}
                        style={styles.viewButton}
                      >
                        View Applications
                      </button>{" "}
                      {/* View Applications button */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === "view-applications" && ( // Conditionally render the 'View Applications' section
            <div className="show-view-applications">
              <h2 style={styles.applicationsHeading}>
                Applications for Job ID: {selectedJobId}
              </h2>
              {applications.length > 0 ? (
                <ul style={styles.applicationsList}>
                  {applications.map((app) => (
                    <li key={app._id} style={styles.applicationItem}>
                      <p>
                        <strong>Name:</strong> {app.firstName} {app.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {app.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {app.phone}
                      </p>
                      <p>
                        <strong>Experience:</strong> {app.address}
                      </p>
                      <p>
                        <strong>Skills:</strong>{" "}
                        {app.skills ? app.skills.join(", ") : "N/A"}
                      </p>{" "}
                      {/* Check if skills exist */}
                      <p>
                        <strong>CTC:</strong> {app.city}
                      </p>
                      <p>
                        <strong>Expected CTC:</strong> {app.state}
                      </p>
                      {/* Additional fields can be displayed here */}
                      <div className="application-actions">
                        <button
                          onClick={() => handleHire(app._id)}
                          style={styles.hireButton}
                        >
                          Hire
                        </button>
                        <button
                          onClick={() => handleReject(app._id)}
                          style={styles.rejectButton}
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleShortlist(app._id)}
                          style={styles.shortlistButton}
                        >
                          Shortlist
                        </button>
                      </div>
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
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
    paddingTop: "30px",
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#666",
    marginBottom: "30px",
    textAlign: "center",
  },
  container: {
    padding: "20px",
  },
  formHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "40px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "2vw",
  },
  jobListHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  jobList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  jobItem: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  viewButton: {
    padding: "5px 10px",
    backgroundColor: "#17a2b8",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  applicationsHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  applicationsList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  applicationItem: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

export default AdminPanel;

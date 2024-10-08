import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ApplyForm.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ApplyForm = () => {
  const { id } = useParams(); // Extract job ID from URL
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    additionalInfo: "",
    resume: null, // For resume upload
    workExperience: [{
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      currentCTC: "",
      expectedCTC: "",
      skills: ""
    }]
  });
  const [successMessage, setSuccessMessage] = useState(false); // State to manage the success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] }); // Handle file upload
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index] = { ...updatedWorkExperience[index], [name]: value };
    setFormData({ ...formData, workExperience: updatedWorkExperience });
  };

  const addWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        { company: "", jobTitle: "", startDate: "", endDate: "", currentCTC: "", expectedCTC: "", skills: "" }
      ]
    });
  };
  const isProduction = window.location.hostname === 'suak.in';
  const baseURL = isProduction ? 'https://suak.in:5000/' : 'http://localhost:5000/';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      ...formData,
      jobId: id, // Include jobId in the submission data
    };

    console.log("Application Data:", applicationData); // Log to check jobId

    const formDataToSend = new FormData();
    for (const key in applicationData) {
      if (Array.isArray(applicationData[key])) {
        applicationData[key].forEach((item, index) => {
          for (const subKey in item) {
            formDataToSend.append(`workExperience[${index}][${subKey}]`, item[subKey]);
          }
        });
      } else {
        formDataToSend.append(key, applicationData[key]);
      }
    }

    try {
      const response = await axios.post(`${baseURL}api/job-application`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Application submitted successfully:", response.data);
      setSuccessMessage(true); // Show success message

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        additionalInfo: "",
        resume: null,
        workExperience: [{ company: "", jobTitle: "", startDate: "", endDate: "", currentCTC: "", expectedCTC: "", skills: "" }]
      });

      // Automatically hide the success message after 3 seconds
      setTimeout(() => setSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Error submitting application:", error.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="apply-form">
        {successMessage && (
          <div className="popup-message">
            Your application has been submitted!
          </div>
        )}
        <h1>Apply for Job</h1>
        <form onSubmit={handleSubmit} className="form">
            <p className="upl-res">Upload your resume</p>
            <div className="resume-upload">
                <input type="file" name="resume" onChange={handleFileChange} required />
            </div>
          <div className="apply-form-d">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <div className="apply-form-d">
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
          </div>
          
          <div className="work-experience">
            <h2>Work Experience</h2>
            {formData.workExperience.map((work, index) => (
              <div key={index} className="apply-fo">
                <div className="apply-form-d">
                    <input type="text" name="company" placeholder="Company" value={work.company} onChange={(e) => handleWorkExperienceChange(index, e)} required />
                    <input type="text" name="jobTitle" placeholder="Job Title" value={work.jobTitle} onChange={(e) => handleWorkExperienceChange(index, e)} required />
                </div>
                <div className="apply-form-d">
                    <input type="date" name="startDate" placeholder="Start Date" value={work.startDate} onChange={(e) => handleWorkExperienceChange(index, e)} required />
                    <input type="date" name="endDate" placeholder="End Date" value={work.endDate} onChange={(e) => handleWorkExperienceChange(index, e)} />
                </div>
                <div className="apply-form-d">
                    <input type="text" name="currentCTC" placeholder="Current CTC" value={work.currentCTC} onChange={(e) => handleWorkExperienceChange(index, e)} required />
                    <input type="text" name="expectedCTC" placeholder="Expected CTC" value={work.expectedCTC} onChange={(e) => handleWorkExperienceChange(index, e)} required />
                </div>
                <div className="apply-form-d">
                    <input type="text" name="skills" placeholder="Skills" value={work.skills} onChange={(e) => handleWorkExperienceChange(index, e)} required />
                </div>
              </div>
            ))}
            <button type="button" onClick={addWorkExperience}>Add Work Experience</button>
          </div>
          <textarea name="additionalInfo" placeholder="Additional Information" value={formData.additionalInfo} onChange={handleChange} />
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
      <div className="bor-lin pst"></div>
      <Footer />
    </>
  );
};

export default ApplyForm;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ApplyForm.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ApplyForm = () => {
  const { id } = useParams(); // Extract job ID from URL
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // Will be cast to a number
    address: "",
    city: "",
    state: "",
    zip: "", // Will be cast to a number
    additionalInfo: "",
    resume: null, // For resume upload
    workExperience: [
      {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        currentCTC: "", // Will be cast to a number
        expectedCTC: "", // Will be cast to a number
        skills: "",
        lastworkingday: "",
        noticeperiod: "",
        totalexperience: "",
      },
    ],
  });
  const [successMessage, setSuccessMessage] = useState(false); // State to manage the success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "phone" || name === "zip" ? Number(value) : value, // Cast phone and zip to numbers
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] }); // Handle file upload
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [name]:
        name === "currentCTC" || name === "expectedCTC" ? Number(value) : value, // Cast CTC fields to numbers
    };
    setFormData({ ...formData, workExperience: updatedWorkExperience });
  };

  // const addWorkExperience = () => {
  //   setFormData({
  //     ...formData,
  //     workExperience: [
  //       ...formData.workExperience,
  //       { company: "", jobTitle: "", startDate: "", endDate: "", currentCTC: "", expectedCTC: "", skills: "" }
  //     ]
  //   });
  // };

  const isProduction = window.location.hostname === "suak.in";
  const baseURL = isProduction ? "https://suak.in/" : "http://localhost:5000/";
  const navigate = useNavigate();

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
            formDataToSend.append(
              `workExperience[${index}][${subKey}]`,
              item[subKey]
            );
          }
        });
      } else {
        formDataToSend.append(key, applicationData[key]);
      }
    }

    try {
      // First, submit the job application data
      const response = await axios.post(
        `${baseURL}api/job-application`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Application submitted successfully:", response.data);
      setSuccessMessage(true); // Show success message

      // Reset form fields after successful submission
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
        workExperience: [
          {
            company: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            currentCTC: "",
            expectedCTC: "",
            skills: "",
            lastworkingday: "",
            noticeperiod: "",
            totalexperience: "",
          },
        ],
      });

      // Automatically hide the success message after 3 seconds
      setTimeout(() => setSuccessMessage(false), 3000);

      // Then, submit the contact form data (if needed)
      const contactFormData = {
        name: formData.name,
        contactNumber: formData.contactNumber,
        email: formData.email,
        message: formData.message,
      };

      const contactResponse = await fetch(`${baseURL}api/get-started`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormData),
      });

      // Check if the response is JSON
      const contentType = contactResponse.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await contactResponse.json();
        if (result.success) {
          console.log("Lead successfully submitted!");
          setFormData({
            name: "",
            contactNumber: "",
            email: "",
            message: "",
          });
          navigate("/thank-you"); // Redirect to Thank You page
        } else {
          alert("There was an error submitting the contact form.");
        }
      } else {
        console.error("Response is not JSON:", contactResponse);
        alert("There was an error processing your request.");
      }
    } catch (error) {
      console.error(
        "Error submitting application:",
        error.response ? error.response.data : error
      );
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
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="apply-form-d">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />{" "}
          {/* Updated */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <div className="apply-form-d">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              required
            />{" "}
            {/* Updated */}
          </div>
          <div className="work-experience">
            <h2>Work Experience</h2>
            {formData.workExperience.map((work, index) => (
              <div key={index} className="apply-fo">
                <div className="apply-form-d">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={work.company}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={work.jobTitle}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />
                </div>
                <div className="apply-form-d">
                  <p>
                    <label
                      htmlFor="startDate"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      placeholder="Start Date"
                      value={work.startDate}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      required
                    />
                  </p>
                  <p>
                    <label
                      htmlFor="endDate"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      placeholder="End Date"
                      value={work.endDate}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                    />
                  </p>
                </div>
                <div className="apply-form-d">
                  <input
                    type="number"
                    name="currentCTC"
                    placeholder="Current CTC"
                    value={work.currentCTC}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />{" "}
                  {/* Updated */}
                  <input
                    type="number"
                    name="expectedCTC"
                    placeholder="Expected CTC"
                    value={work.expectedCTC}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />{" "}
                  <input
                    type="number"
                    name="totalexperience"
                    placeholder="Total Experience {in years}"
                    value={work.totalexperience}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />{" "}
                  {/* Updated */}
                </div>
                <div className="apply-form-d">
                <p>
                    <label
                      htmlFor="lastworkingday"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Last Working Day
                    </label>
                    <input
                      type="date"
                      name="lastworkingday"
                      placeholder="Last working Day"
                      value={work.lastworkingday}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      required
                    />
                  </p>
                  <p>
                    <label
                      htmlFor="noticeperiod"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Notice Period
                    </label>
                    <input
                      type="number"
                      name="noticeperiod"
                      placeholder="Notice Period (in days)"
                      value={work.startDate}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      required
                    />
                  </p>
                </div>
                <div className="apply-form-d">
                  <input
                    type="text"
                    name="skills"
                    placeholder="Skills"
                    value={work.skills}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    required
                  />
                </div>
              </div>
            ))}
            {/* <button type="button" onClick={addWorkExperience}>Add Work Experience</button> */}
          </div>
          <textarea
            name="additionalInfo"
            placeholder="Additional Information"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
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

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Job() {
  return (
    <>
      <Navbar />
      <div className="job-container">
        <header className="job-header">
          <a href="/career" className="back-button">
            <span className="back-arrow">&#8592;</span>
            Back to jobs search
          </a>
          <img src="/assets/images/black-logo.png" alt="Shashi sales and marketing" className="job-logo" />
        </header>

        <h1 className="job-title">Sales Specialist, YouTube (Fixed-Term Contract)</h1>

        <div className="job-meta">
          <img src="https://www.gstatic.com/images/icons/material/system/1x/place_grey600_24dp.png" alt="Location" />
          Copenhagen, Denmark
          <img src="/assets/images/job-le.png" alt="Job type" className="job-type-icon" />
          Mid
        </div>

        <div className="apply-share">
          <button className="apply-btn">Apply</button>
          <div className="share-icon">
            <button className="action-button share-btn">Share</button>
            <img src="/assets/images/share.svg" alt="Share icon" />
          </div>
        </div>

        <section className="section">
          <h2 className="second-title">Minimum qualifications:</h2>
          <ul className="requirements">
            <li>Bachelor's degree or equivalent practical experience.</li>
            <li>8 years of experience in digital media, sales, marketing, or product roles.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="second-title">Preferred qualifications:</h2>
          <ul className="requirements">
            <li>Experience working with media agencies of large global brands.</li>
            <li>Knowledge of digital advertising landscape, Video, and Social Media marketing.</li>
            <li>Ability to lead and manage multiple projects with internal and external stakeholders.</li>
            <li>Proven track record of closing the media's business agreements.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="second-title">About the job</h2>
          <ul className="requirements">
            <li>Help customers grow their brands and reach business goals with YouTube and position YouTube as a reliable media platform for advertisers.</li>
            <li>Drive the shift from TV and Social Media to YouTube via key accelerators (e.g., measurement, experiments, cases) and build long-term executive relationships with key budget owners, advertisers, and agencies.</li>
            <li>Take ownership of YouTube business development on a subset of advertisers and work seamlessly with account owners and surrounding teams.</li>
            <li>Design, deliver, and implement mid/long-term advertiser marketing and media strategies around Video/YouTube.</li>
            <li>Work cross-functionally to help develop scalable advertising solutions around YouTube (e.g., scalable activities, events, etc.).</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="second-title">Responsibilities</h2>
          <ul className="requirements">
            <li>Help customers grow their brands and reach business goals with YouTube and position YouTube as a reliable media platform for advertisers.</li>
            <li>Drive the shift from TV and Social Media to YouTube via key accelerators (e.g., measurement, experiments, cases) and build long-term executive relationships with key budget owners, advertisers, and agencies.</li>
            <li>Take ownership of YouTube business development on a subset of advertisers and work seamlessly with account owners and surrounding teams.</li>
            <li>Design, deliver, and implement mid/long-term advertiser marketing and media strategies around Video/YouTube.</li>
            <li>Work cross-functionally to help develop scalable advertising solutions around YouTube (e.g., scalable activities, events, etc.).</li>
          </ul>
        </section>

        <div className="apply-share bottom-cont">
          <button className="apply-btn">Apply</button>
          <div className="share-icon">
            <button className="action-button share-btn">Share</button>
            <img src="/assets/images/share.svg" alt="Share icon" />
          </div>
        </div>

        <section className="section">
          <h2 className="second-title">Other Job Opportunities</h2>
          <div className="other-jobs">
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
}

export default Job;

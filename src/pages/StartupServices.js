import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../ScrollToTop";
function StartupServices() {
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <Navbar />
      <main className="business-process">
        <section className="intro">
          <h1>
            Suak <span>Startup</span> Services
          </h1>
          <p>
            We are committed to helping you bring your startup vision to life
            with transparency and organization. Our goal is to keep you focused
            on your passion while we handle all the surrounding tasks.
          </p>
        </section>

        <section className="next-gen">
          <h2>Comprehensive Startup Services</h2>
          <p>
            Our end-to-end startup solutions cover every aspect, from business
            registration to regulatory compliance, and preparing your venture
            for investors or VCs. We guide you through each critical phase of
            your startup journey.
          </p>
        </section>
        <section className="next-gen">
          <h2>A True Partner, Not Just a Vendor</h2>
          <p>
            We don't see ourselves as just service providers; we become your
            partners in success. We share your enthusiasm for bringing your
            ideas to life. With our extensive pool of skilled technical
            professionals, modern workspace solutions, cutting-edge technology
            infrastructure, and project management expertise, we are
            well-positioned to support your growth.
          </p>
        </section>
        <section className="services">
          <h2>Company Formation Services:</h2>
          <ul>
            <li>Digital Signature Certificate (DSC) and Director Identification Number (DIN)</li>
            <li>Company Name Registration</li>
            <li>Memorandum and Articles of Association (MoA and AoA)</li>
            <li>SPICe/INC-32 Approval</li>
            <li>Certificate of Incorporation</li>
            <li>Company PAN and TAN</li>
          </ul>
        </section>

        <section className="services">
          <h2>Financial Solutions:</h2>
          <ul>
            <li>Bookkeeping and Reporting</li>
            <li>Management Information Systems (MIS)</li>
            <li>Financial Audits</li>
            <li>Tax Filing and Compliance</li>
            <li>GST and Professional Tax Registration</li>
            <li>GST Return Filing</li>
            <li>Importer-Exporter Code (IEC)</li>
            <li>SSI/MSME Registration</li>
          </ul>
        </section>

        <section className="services">
          <h2>Financial Solutions:</h2>
          <ul>
            <li>Bookkeeping and Reporting</li>
            <li>Management Information Systems (MIS)</li>
            <li>Financial Audits</li>
            <li>Tax Filing and Compliance</li>
            <li>GST and Professional Tax Registration</li>
            <li>GST Return Filing</li>
            <li>Importer-Exporter Code (IEC)</li>
            <li>SSI/MSME Registration</li>
          </ul>
        </section>

        <section className="industry-focus">
          <h3>Marketing & Branding:</h3>
          <ul>
            <li>Market Research & Strategy</li>
            <li>Lead Generation</li>
            <li>Branding Services</li>
            <li>Graphic Design</li>
            <li>Digital Marketing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing (SMM)</li>
            <li>Content Marketing (Blogs, Articles)</li>
            <li>Website Content Creation</li>
            <li>Customer Acquisition & Engagement</li>
          </ul>
        </section>

        <section className="industry-focus">
          <h3>Funding & Networking:</h3>
          <ul>
            <li>Seed Funding Support</li>
            <li>Idea Validation & Refinement</li>
            <li>Brainstorming Sessions</li>
            <li>Product Design & Development</li>
            <li>Go-to-Market Strategy</li>
            <li>Fundraising Assistance (Accelerator/Series A)</li>
            <li>Networking with VCs</li>
            <li>Quick Team Scaling & Optimization</li>
            <li>Performance Analytics & Usability Improvements</li>
            <li>Office Space & Infrastructure Setup</li>
            <li>DevOps and Security Enhancements</li>
            <li>Technology Audits</li>
          </ul>
        </section>

      </main>
      <div className="bor-lin pst"></div>
      <Footer />
    </>
  );
}

export default StartupServices;

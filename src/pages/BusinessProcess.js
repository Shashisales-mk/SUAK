import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BusinessProcess() {
  return (
    <>
      <Navbar />
      <main className="business-process">
        <section className="intro">
          <h1>
            Suak <span>Business Process</span> Services
          </h1>
          <p>
            Empower enterprises to achieve faster growth and transformation
            without the disruption of significant organizational changes. We
            focus on driving innovation and efficiency simultaneously, helping
            businesses evolve quickly without requiring major overhauls, and
            fostering readiness for change instead of resistance.
          </p>
        </section>

        <section className="next-gen">
          <h2>Delivering Next-Gen Business Results</h2>
          <p>
            Our operations leverage advanced technology to digitize and
            streamline business processes, extract actionable insights, and
            provide Everything-as-a-Service. Coupled with our team's extensive
            expertise in various industries and functions, we enable businesses
            to confidently transition towards on-demand services, accelerating
            innovation and reducing time to market.
          </p>
        </section>

        <section className="services">
          <h2>Business Process Services</h2>
          <ul>
            <li>Customer Experience</li>
            <li>End User Services</li>
            <li>Service Desk</li>
            <li>Knowledge Process</li>
            <li>Technical Support</li>
            <li>Human Resources</li>
            <li>Financial / Accounting Support</li>
          </ul>
        </section>

        <section className="industry-focus">
          <h3>Industry Focus</h3>
          <ul>
            <li>Banking, Financial Services, and Insurance (BFSI)</li>
            <li>Manufacturing</li>
            <li>Retail</li>
            <li>Media</li>
            <li>Telecom</li>
            <li>Technology</li>
          </ul>
        </section>

        <section className="key-advantages">
          <h2>Key Advantages</h2>
          <ul>
            <li>Multiple delivery centers supporting global and local clients</li>
            <li>Multilingual helpdesk solutions</li>
            <li>Proprietary technology and infrastructure</li>
            <li>Industry-specific SLAs and performance metrics</li>
            <li>Flexibility and scalability in services</li>
            <li>Robust information security protocols</li>
            <li>Continuous performance monitoring and improvement</li>
            <li>In-house training and development resources</li>
          </ul>
        </section>
      </main>
      <div className="bor-lin pst"></div>
      <Footer />
    </>
  );
}

export default BusinessProcess;

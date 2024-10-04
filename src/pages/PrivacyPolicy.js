import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./privacyPolicy.css"
function PrivacyPolicy() {
  return (
    <>
      <head>
        <title>Privacy Policy | SUAK Infortech Pvt Ltd</title>
        <meta
          name="description"
          content="SUAK Infortech Pvt Ltd's Privacy Policy explaining data collection, usage, and user rights under GDPR."
        />
        <meta
          name="keywords"
          content="Privacy Policy, SUAK Infortech, Data Protection, GDPR, User Data Rights"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Navbar />
      <main className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to SUAK Infortech Pvt Ltd. We are committed to protecting
            your personal data and respecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website, use our services, or
            interact with us.
          </p>
        </section>

        <section>
          <h2>2. Data Controller</h2>
          <p>
            SUAK Infortech Pvt Ltd, located at [Insert Address], is the data
            controller responsible for your personal data.
          </p>
        </section>

        <section>
          <h2>3. Information We Collect</h2>
          <ul>
            <li>
              Personal Identification Information: Name, email address, phone
              number, etc.
            </li>
            <li>
              Professional Information: Job title, company name, work
              experience, etc.
            </li>
            <li>
              Technical Data: IP address, browser type, operating system, etc.
            </li>
            <li>
              Usage Data: Information about how you use our website and
              services.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. How We Use Your Information</h2>
          <ul>
            <li>To provide, operate, and maintain our services.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To understand and analyze how you use our services.</li>
            <li>
              To develop new products, services, features, and functionality.
            </li>
            <li>
              To communicate with you, either directly or through one of our
              partners for customer service, updates, or promotional purposes.
            </li>
            <li>To process your transactions and manage your orders.</li>
            <li>To prevent fraud.</li>
          </ul>
        </section>

        <section>
          <h2>5. Legal Basis for Processing Personal Data (GDPR)</h2>
          <p>
            If you are from the European Economic Area (EEA), SUAK Infortech Pvt
            Ltd's legal basis for processing your data depends on the context in
            which it is collected:
          </p>
          <ul>
            <li>Contractual necessity.</li>
            <li>Your consent.</li>
            <li>
              Legitimate interests that are not overridden by your data
              protection rights.
            </li>
            <li>Compliance with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>6. Your GDPR Data Protection Rights</h2>
          <ul>
            <li>The right to access your data.</li>
            <li>The right to correct inaccurate or incomplete information.</li>
            <li>The right to request data erasure.</li>
            <li>The right to restrict processing under certain conditions.</li>
            <li>
              The right to object to data processing under certain conditions.
            </li>
            <li>The right to data portability.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at our provided
            contact information.
          </p>
        </section>

        <section>
          <h2>8. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal data, but please
            note that no method of transmission is 100% secure.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy periodically. Please check this
            page for updates.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions, feel free to contact us at [Insert
            Contact Information].
          </p>
        </section>
      </main>
      <div className="bor-lin pst"></div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;

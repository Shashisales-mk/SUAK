import React from "react";
import Navbar from "../components/Navbar";
import Choose from "../components/Body/WhyChooseUs";
import Aboutstart from "../components/AboutUs/Aboutstart";
import Newjobs from "../components/NewJobs/Newjobs";
import Footer from "../components/Footer";
function About() {
  return (
    <div>
      <Navbar></Navbar>
      <Aboutstart></Aboutstart>
      <Choose></Choose>
      <Newjobs></Newjobs>
      <Footer></Footer>
    </div>
  );
}

export default About;

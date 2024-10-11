import React from 'react'
import Navbar from '../components/Navbar'
import Connect from '../components/ContactUs/Connect'
import Inquiries from '../components/Inquiries/Inquiries'
import Visitus from '../components/VisitUs/Visitus'
import Footer from '../components/Footer'
import ScrollToTop from '../ScrollToTop'
function Contact() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
        <div style={{padding: "0 3vw"}}>
            <Connect></Connect>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>
            <Inquiries></Inquiries>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>
            <Visitus></Visitus>
            <div style={{height:"0", borderBottom:"1px solid", marginTop:"2rem", marginBottom:"2rem"}}></div>
        </div>
            <Footer></Footer>
    </div>
  )
}

export default Contact
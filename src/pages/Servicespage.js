import React from 'react'
import Navbar from '../components/Navbar'
import Motto from '../components/Motto/Motto'
import Manpower from '../components/Manpower/Manpower'
import Servicesforclient from '../components/ServicesForClient/Servicesforclient'
import Forstudent from '../components/ServicesForClient/Forstudent'
import Industeryweserve from '../components/IndusteryWeServe/Industeryweserve'
import Choose from '../components/Body/WhyChooseUs'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer'
import ScrollToTop from '../ScrollToTop'
function Servicespage() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Motto></Motto>
        <Manpower></Manpower>
        <Servicesforclient></Servicesforclient>
        <Forstudent></Forstudent>
        <Industeryweserve></Industeryweserve>
        {/* <Choose></Choose> */}
        <div style={{height:"0", borderBottom:"1px solid", margin:"3vw"}}></div>
        <Faq></Faq>
        <div style={{height:"0", borderBottom:"1px solid", margin:"3vw"}}></div>
        <Footer></Footer>
    </div>
  )
}

export default Servicespage
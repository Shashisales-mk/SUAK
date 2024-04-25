import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo.png"
export default function Navbar() {
    return (
      <div>
          <div className="nav">
            <div className="nav1">
                <div className="logo" style={{listStyle: "none"}}><li><Link to="/"><img src={logo} alt="logo" className="logo"></img></Link></li></div>
            </div>
            <div className="nav2">
              <li><Link to="/about">ABOUT US</Link></li>
              {/* <li><a href="/about">ABOUT US</a></li> */}
              <li><Link to="/services">SERVICES</Link></li>
              <li><Link to="/contact" className="contact"><button>CONTACT US</button></Link></li>
              {/* <li><a href="/contact" className="contact"><button>CONTACT US</button></a></li> */}
            </div>
          </div>
      </div>
    )
  }

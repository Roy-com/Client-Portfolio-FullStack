import React, { useEffect } from 'react';
import Aos from "aos";
import './App.css';
import './assets/css/style.css';
import './assets/IconicFile/aos/aos.css';
import "./assets/IconicFile/bootstrap/css/bootstrap.min.css";
import "./assets/IconicFile/bootstrap-icons/bootstrap-icons.css";
import "./assets/IconicFile/glightbox/css/glightbox.min.css";
import "./assets/IconicFile/remixicon/remixicon.css";
import "./assets/IconicFile/swiper/swiper-bundle.min.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Technologies from './Components/Technologies';
import About from './Components/About';
import Contact from './Components/Contact';
import Slider from './Components/Slider';
import Collaboration from './Components/Collaboration';
import Certifications from './Components/Certifications';
import Counts from './Components/Counts';
import HowToCollaborate from './Components/HowToCollaborate';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from './Components/Login';
import LoginError from './Components/LoginError';
import SignupError from './Components/SignupError';
const PureCounter = require('@srexi/purecounterjs');
function App() {
  const scrollTracker = () => {
    var backtotop = document.getElementsByClassName("backtotop")[0];
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
    document.addEventListener("scroll", scrollTracker);
    window.onload = function () {
      document.getElementById("preloader")!.style.display = "none"
    };
  }, [])
  return (
    <>

      <Router>
        <Routes>
          <Route path="" element={<div className="App">
            <Navbar />
            <Home />
            <main id="main">
              <Services />
              <Technologies />
              <About />
              <Slider />
              <Collaboration />
              <Certifications />
              <Counts />
              <HowToCollaborate />
              <Contact />
            </main>
            <Footer />
            <div id="preloader"></div>
            <a href="/" className="back-to-top d-flex align-items-center justify-content-center">
              <i className="bi bi-arrow-up-short"></i>
            </a>
          </div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginError" element={<LoginError />} />
          <Route path="/signupError" element={<SignupError />} />
          <Route path='*' element={<div className="App">
            <Navbar />
            <Home />
            <main id="main">
              <Services />
              <Technologies />
              <About />
              <Slider />
              <Collaboration />
              <Certifications />
              <Counts />
              <HowToCollaborate />
              <Contact />
            </main>
            <Footer />
            <div id="preloader"></div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
              <i className="bi bi-arrow-up-short"></i>
            </a>
          </div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


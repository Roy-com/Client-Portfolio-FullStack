import React, {useEffect} from "react";
import Scrollspy from 'react-scrollspy'
function Navbar(){
      /**
   * Easy selector helper function
   */
  console.log("in Navbar")
  const select = (el:string, all = false) => {
    el = el.trim();
    // if (all) {
    //   return [...document.querySelectorAll(el)];
    // } else {
      return document.querySelector(el);
    // }
  };
  const onscroll = (el:Document, listener:(event:Event) => void) => {
    el.addEventListener("scroll", listener);
  };

  const headerScrolled = (event:Event) => {
          let selectHeader = select("#header");
          console.log("Fxn called")
        if (window.scrollY > 100) {
          selectHeader!.classList.add("header-scrolled");
        } else {
          selectHeader!.classList.remove("header-scrolled");
        }
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
      document.addEventListener("scroll", headerScrolled);
      console.log("Im here")
    };
    const toogleNavbar = (e:React.MouseEvent<HTMLButtonElement>) => {
        var navbar = select("#navbar");
        var button = e.target as HTMLElement;
        if (navbar) {
           navbar.classList.toggle("navbar-mobile");
            button.classList.toggle("bi-list");
            button.classList.toggle("bi-x");
            }
    }
    useEffect(() => {
        document.addEventListener("scroll", headerScrolled);
    }, []);
    return (
        <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center" style={{textDecoration: "none"}}>
                <img src={require("../assets/img/logowebsite/logo.png")} height="70" width="70" alt=""/>
                <span className="logoNameDistance" style={{textDecoration: "none"}}>Ermal Aliraj</span>
            </a>
    
            <nav id="navbar" className="navbar nav-menu scrollspynav">
                <ul>
                <Scrollspy items={ ['home', 'serv', 'Tech', 'about', 'contact'] } offset={-1} currentClassName="active">
                    <li><a className="nav-link scrollto" href="#home">Home
                    <span className="bottomLine"></span>
                    </a>
                    </li>
                    <li><a className="nav-link scrollto" href="#serv">Services
                    <span className="bottomLine"></span></a></li>
                    <li><a className="nav-link scrollto" href="#Tech">Technologies <span className="bottomLine"></span></a></li>
                    <li><a className="nav-link scrollto" href="#about">About <span className="bottomLine"></span></a></li>
                    {/* <!-- <li><a className="nav-link scrollto" href="#coll">Collaborations</a></li>
                    <li><a className="nav-link scrollto" href="#cert">Certifications</a></li> --> */}
                    <li><a className="nav-link scrollto" href="#contact">Contact <span className="bottomLine"></span></a></li>
                    </Scrollspy>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" id="navbar-toggler" onClick={toogleNavbar}></i>
            </nav>
        </div>
    </header>
    )
}
export default Navbar;
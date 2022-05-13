import React from 'react'

export default function About() {
  return (
    <section id="about" className="about">
        <div className="container" style={{marginTop: "50px"}} data-aos="fade-up">
            <header className="section-header">
                <p className="techPara techTechKNowmargin aboutheadingcolor">About Me</p>
            </header>
        </div>
        <div className="container" data-aos="fade-up">
            <div className="row gx-0 changeDisplayOfAboutSection">
                <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="content letmeDisplayChange">
                        <h2 className="secondHeadingOfabout">
                            Let me introduce myself.
                        </h2>
                        <p className="fontOfaboutPara">
                            I am a passionate guy who loves coding and providing efficient
                            solutions. For years my career has been in Java and I have different
                            certifications like Associate, Professional and Expert from
                            Oracle. For different years I have also designed and
                            maintained databases such as Oracle, MySql and later MongoDB and PostgreSQL.
                            In the last years I have created different mobile application using Android, React native
                            and IONIC.
                            In the last few years my focus has been helping start-ups to build
                            their MPV using Angular, React, Python and MongoDB.
                            I am passionate about Artificial Intelligence and that's why I
                            decided to attend a Postgraduate program in Big Data & Analytics at University of
                            Leuven in 2021. I don't think my career will switch
                            to AI but it really helped me to bring into Software
                            engineering the Machine Learning technique and apply them in
                            real world use cases.
                        </p>
                        <div className="text-center text-lg-start"></div>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center aboutImage" data-aos="zoom-out" data-aos-delay="200">
                    <img src={require("../assets/img/about/abouutimg.jpg")} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

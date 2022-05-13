import React from 'react'
import './style.css';
export default function Technologies() {
    const handleHover = (e: React.MouseEvent<HTMLInputElement>) => {
        const element = e.currentTarget.getElementsByClassName("backendicon")[0];
        if(element.classList.contains("backendicon-hover")){
            element.classList.remove("backendicon-hover");
        }
        else
        {   element.classList.add("backendicon-hover");
        }
        // e.currentTarget.getElementsByClassName("backendicon")[0].classList.add("backendicon-hover");
    }
  return (
    <section className="techknow services" id="Tech">
        <div className="container"  style={{marginTop: "50px"}} data-aos="fade-up">
            <div className="container"  style={{marginTop: "70px"}}  data-aos="fade-up">
                <header className="section-header">
                    <p className="techPara techTechKNowmargin">Technologies</p>
                </header>
            </div>
            <div className="techknowcontainer row-gy-4" data-aos="fade-up">
                <div className="techknowboxex" onMouseEnter={handleHover} onMouseLeave={handleHover} id="icon-boxex1t">
                    <div className="displaybackend">
                        <h3 id="headingser1t" className="backendicon"><img src={require("../assets/img/technologies/laptop.png")}/>Backend</h3>
                        <ul>
                            <li>Java</li>
                            <li>Node JS</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
                <div className="techknowboxex" onMouseEnter={handleHover} onMouseLeave={handleHover} id="icon-boxex2t">
                    <div className="displaybackend">
                        <h3 id="headingser2t" className="backendicon"><img src={require("../assets/img/technologies/clouds.png")}/>Cloud</h3>
                        <ul>
                            <li>Amazon Web Services (AWS)</li>
                            <li>Digital Ocean</li>
                            <li>Google Cloud Platform (GCP)</li>
                        </ul>
                    </div>
                </div>
                <div className="techknowboxex" onMouseEnter={handleHover} onMouseLeave={handleHover} id="icon-boxex3t">
                    <div className="displaybackend">
                        <h3 id="headingser3t" className="backendicon">
                            <img src={require("../assets/img/technologies/user-experience.png")}/>Front End
                        </h3>
                        <ul>
                            <li>Angular</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Django</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>
                <div className="techknowboxex" onMouseEnter={handleHover} onMouseLeave={handleHover} id="icon-boxex4t">
                    <div className="displaybackend">
                        <h3 id="headingser4t" className="backendicon"><img src={require("../assets/img/technologies/smartphone.png")}/>Mobile</h3>
                        <ul>
                            <li>Native Android with Java</li>
                            <li>Native Android with Kotlin</li>
                            <li>Swift</li>
                            <li>React Native</li>
                        </ul>
                    </div>
                </div>
                <div className="techknowboxex" onMouseEnter={handleHover} onMouseLeave={handleHover} id="icon-boxex5t">
                    <div className="displaybackend">
                        <h3 id="headingser5t" className="backendicon"><img src={require("../assets/img/technologies/normalization.png")}/>Databases</h3>
                        <ul>
                            <li>Oracle</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className="techknowboxex" onMouseEnter={handleHover} onMouseLeave={handleHover} id="icon-boxex6t">
                    <div className="displaybackend">
                        <h3 id="headingser6t" className="backendicon">
                            <img src={require("../assets/img/technologies/ai.png")}/>Big Data & Machine Learning
                        </h3>
                        <ul>
                            <li>Python</li>
                            <li>Elasticsearch</li>
                            <li>Hadoop</li>
                            <li>Spark</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

import React, {useEffect} from 'react'
const PureCounter = require('@srexi/purecounterjs');
export default function Counts() {
    useEffect(() => {
        new PureCounter();
    }, [])
  return (
    <section id="counts" className="counts">
    <div className="container countDisplay" data-aos="fade-up">
        <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
                <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <div>
                    <span data-purecounter-start="0"
                          data-purecounter-end="15"
                          data-purecounter-duration="2"
                          className="purecounter">
                    </span>
                        <p style={{color:  "#0b198f"}}>Happy Clients</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="count-box">
                    <i className="bi bi-journal-richtext" style={{color: "#ee6c20"}}></i>
                    <div>
                    <span style={{color: "#ee6c20"}}
                          data-purecounter-start="0"
                          data-purecounter-end="20"
                          data-purecounter-duration="2"
                          className="purecounter">
                    </span>
                        <p style={{color: "#ee6c20"}}>Projects</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="count-box">
                    <i className="bi bi-headset" style={{color: "#15be56"}}></i>
                    <div>
                    <span style={{color: "#15be56"}}
                          data-purecounter-start="0"
                          data-purecounter-end="24000"
                          data-purecounter-duration="2"
                          className="purecounter">
                    </span>
                        <p style={{color: "#15be56"}}>Hours Of Work</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="count-box">
                    <i className="bi bi-people" style={{color: "#bb0852"}}></i>
                    <div>
                    <span style={{color: "#bb0852"}}
                          data-purecounter-start="0"
                          data-purecounter-end="15"
                          data-purecounter-duration="2"
                          className="purecounter">
                    </span>
                        <p style={{color: "#bb0852"}}>Year Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

import React from 'react'

export default function HowToCollaborate() {
  return (
    <section id="faq" className="faq">
    <div className="container" data-aos="fade-up">
        <header className="section-header">
            <p className="techTechKNowmargin purple">How to start the collaboration together?</p>
        </header>

        <div className="colloelement">
            <div className="steps stapp1">
                <h3 className="step1">
                    <span style={{color: "#0b198f"}} className="step1st">Step     <img src={require("../assets/img/howtocolloborate/onel1.png")} height="30" width="30" alt=""/> </span>
                </h3>
                <p>Send an email or use the form to describe your project and what you want to achieve. You can contact me also in my mobile phone.</p>
            </div>

            <div className="steps  stapp2">
                <h3 className="step2">
                    <span style={{color: "#ee6c20"}} className="step2st">Step <img src={require("../assets/img/howtocolloborate/twolt.png")} height="30" width="30" alt=""/></span>
                </h3>
                <p>I will try to analyse your request and send you back a rough estimation. If the problem is not clear we can book a call to brainstorm together the target
                and how to achieve.</p>
            </div>

            <div className="steps  stapp3">
                <h3 className="step3">
                    <span  style={{color: "#15be56"}} className="step3st">Step <img src={require("../assets/img/howtocolloborate/therree.png")} height="30" width="30" alt=""/></span>
                </h3>
                <p>I will send to you a proposal with costs and time which you can validate.</p>
            </div>

            <div className="steps  stapp4">
                <h3 className="step4">
                    <span style={{color: "#bb0852"}} className="step4st">Step <img src={require("../assets/img/howtocolloborate/fourkk.png")} height="30" width="30" alt=""/></span>
                </h3>
                <p>Within the estimation time I will complete, install and demo the product you are looking for.</p>
            </div>
        </div>
    </div>
</section>
  )
}

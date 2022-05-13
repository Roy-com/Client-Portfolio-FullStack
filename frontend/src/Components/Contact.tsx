import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
        <div className="container"  style={{marginTop: "80px"}}  data-aos="fade-up">
            <header className="section-header">
                <p className="techTechKNowmargin">Contact</p>
            </header>

            <div className="row contactdisplayflexmaling">
                <div className="col-lg-6 hghg">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info-box">
                                <i className="bi bi-telephone"></i>
                                <h3 className="techTechKNowmargin">Call Me</h3>
                                <p>+39 339 615 1479<br/>+32 47 07 47 511</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box">
                                <i className="bi bi-envelope"></i>
                                <h3 className="techTechKNowmargin">Email Me</h3>
                                <p>ermal.aliraj@gmail.com <br/><br/></p>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-12">
                        <div className="col-lg-4  gy-4">
                                <div className="col-lg-12 adressmapdisplay">
                                    <div className="col-lg-12 info-box">
                                        <i className="bi bi-geo-alt"></i>
                                        <h3>Belgium</h3>
                                        <p>Avenue Des Courses 16A,<br/>Ixelles, Brussel, Belgium</p>
                                    </div>
                                    <div className="col-lg-12 mapmargintop1 mapxxx">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.8579778356207!2d4.376401315435608!3d50.81526997952727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd01dff5e6445fec6!2zNTDCsDQ4JzU1LjAiTiA0wrAyMic0Mi45IkU!5e0!3m2!1sen!2sin!4v1647695351777!5m2!1sen!2sin"
                                        width="195.99"   height="200" style={{border:"0"}} allowFullScreen={false} loading="lazy"></iframe>
                                    </div>
                                </div>
                        </div>

                        <div className="col-lg-4  gy-4">
                            <div className="col-lg-12 adressmapdisplay">
                                <div className="col-lg-12 info-box">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Italy</h3>
                                    <p>Via Paoletti 7,<br/>Florence, Italy<br/></p>
                                </div>
                                <div className="col-lg-12  mapmargintop1 mapxxx">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.2396513785607!2d11.25031131514909!3d43.78863997911693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2d58da5d039d8a5!2zNDPCsDQ3JzE5LjEiTiAxMcKwMTUnMDkuMCJF!5e0!3m2!1sen!2sin!4v1647695476584!5m2!1sen!2sin"
                                            width="195.99" height="200" style={{border:"0"}} allowFullScreen={false} loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4  gy-4 ">
                            <div className="col-lg-12 ">
                                <div className="col-lg-12 info-box adressmapdisplay">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Albania</h3>
                                    <p>Rruga Deshmoret,<br/>Tirane, Albania<br/></p>
                                </div>
                                <div className="col-lg-12 mapmargintop1 mapxxx">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2484745170846!2d19.79041131505658!3d41.32520997926997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf4cfb240a96ee34!2zNDHCsDE5JzMwLjgiTiAxOcKwNDcnMzMuNCJF!5e0!3m2!1sen!2sin!4v1647695545613!5m2!1sen!2sin"
                                            width="195.99" height="200" style={{border:"0"}} allowFullScreen={false} loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 hghg">
                    <form   action="https://formsubmit.co/ermal.aliraj@gmail.com" method="POST" className="php-email-form">
                        <div className="row gy-4 marginnegga">
                            <div className="col-md-6 ">
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" name="email" placeholder="Your Email"
                                       required/>
                            </div>
                            <div className="col-md-12 subjectmargin">
                                <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                            </div>
                            {/* <!-- <div className="col-md-12"> -->
                                <!--<label for="myfile">Select a file:</label>-->
                                <!--<input type="file" id="myfile" name="myfile"/>-->
                                <!--<img src="image_url" onclick="upl()"><br>-->
                                <!--<span id="indicator"></span><br>-->
                                <!-- <div className="image-upload subjectmargin">
                                    <label for="file-input">Select a file:
                                        <img src={require("../app/img/Paperclip-icon.png")} width="30" height="30" className="rotate20"/>
                                    </label>
                                    <input id="file-input" type="file" />
                                </div> -->
                            <!-- </div> --> */}
                            <div className="col-md-12 subjectmargin">
                                <textarea className="form-control" name="message" rows={13} placeholder="Message" required></textarea>
                            </div>
                            <div className="col-md-12 text-center subjectmargin">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

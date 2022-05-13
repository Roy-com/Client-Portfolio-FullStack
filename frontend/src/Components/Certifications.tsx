import React,{useState,useEffect} from 'react'
import '../assets/css/style.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './style.css';
export default function Certifications() {


    
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/admin/images').then((res) => res.json()).then((res) => {
            let tmp = res.filter((ele: any, idx: any) => {
                // console.log(ele);
                
                return ele.property === "certification"
                 
            })
            setData(tmp)
        }
        ).catch((err) => console.log(err))

    }, [])

    console.log(data);

    return (
        <div>
            <header className="section-header">
                <p className="purple" style={{ color: "rgb(1, 41, 112)" }}>Certifications</p>
            </header>
            <section id="cert-slider-big" className="firstviewscreen">
                <div className="container-md" data-aos="fade-in">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper sliderFeaturedPosts">
                                <Swiper
                                    pagination={true}
                                    loop={true}
                                    //  navigation={true}
                                    navigation={{
                                        nextEl: '.custom-swiper-button-next',
                                        prevEl: '.custom-swiper-button-prev',
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper">
                                    {/* <div className="swiper-wrassetser"> */}
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="colloelementsss">
                                                    <div className="cooll1 pas">
                                                        <img src={require("../assets/img/certifications/1.oca.png")} height="100" width="100" alt="" />
                                                    </div>
                                                    <div className="cooll1 pas">
                                                        <img src={require("../assets/img/certifications/2.acp.png")} height="100" width="100" alt="" />
                                                    </div>
                                                    <div className="cooll1 pas">
                                                        <img src={require("../assets/img/certifications/3.oce.png")} height="100" width="100" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="colloelementsss">
                                                    <div className="cooll1 pas">
                                                        <img src={require("../assets/img/certifications/4.aws.png")} height="100" width="100" alt="" />
                                                    </div>
                                                    <div className="cooll1 pas">
                                                        <img src={require("../assets/img/certifications/5.kubernetes.png")} height="100" width="100" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    {/* </div> */}
                                    </Swiper>
                                    <div className="custom-swiper-button-next">
                                        <span className="bi-chevron-right"></span>
                                    </div>
                                    <div className="custom-swiper-button-prev">
                                        <span className="bi-chevron-left"></span>
                                    </div>
                                    <div className="swiper-pagination" style={{marginTop: "-4px"}}></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cert-slider-medium" className="secondviewscreen">
                <div className="container-md" data-aos="fade-in">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper sliderFeaturedPosts">
                            <Swiper
                                    pagination={true}
                                    loop={true}
                                    //  navigation={true}
                                    navigation={{
                                        nextEl: '.custom-swiper-button-next',
                                        prevEl: '.custom-swiper-button-prev',
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper">
                                {/* <div className="swiper-wrassetser"> */}
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/1.oca.png")} height="100" width="100" alt="" />
                                            </div>
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/2.acp.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/3.oce.png")} height="100" width="100" alt="" />
                                            </div>
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/4.aws.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/5.kubernetes.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                {/* </div> */}
                                </Swiper>
                                <div className="custom-swiper-button-next">
                                    <span className="bi-chevron-right"></span>
                                </div>
                                <div className="custom-swiper-button-prev">
                                    <span className="bi-chevron-left"></span>
                                </div>
                                <div className="swiper-pagination"></div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cert-slider-small" className="thirdviewscreen">
                <div className="container-md" data-aos="fade-in">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper sliderFeaturedPosts">
                            <Swiper
                                    pagination={true}
                                    loop={true}
                                    //  navigation={true}
                                    navigation={{
                                        nextEl: '.custom-swiper-button-next',
                                        prevEl: '.custom-swiper-button-prev',
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper">
                                    {/* <div className="swiper-wrassetser"> */}
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/1.oca.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/2.acp.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/3.oce.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/4.aws.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                        <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementsss">
                                            <div className="cooll1 pas">
                                                <img src={require("../assets/img/certifications/5.kubernetes.png")} height="100" width="100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    </Swiper>
                                {/* </div> */}
                                <div className="custom-swiper-button-next">
                                    <span className="bi-chevron-right"></span>
                                </div>
                                <div className="custom-swiper-button-prev">
                                    <span className="bi-chevron-left"></span>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

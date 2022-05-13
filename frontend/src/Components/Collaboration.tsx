import React, { useEffect,useState } from 'react';
import '../assets/css/style.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import { Pagination } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './style.css';

export default function Collaboration() {


    const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/admin/images').then((res) => res.json()).then((res) => {
            let tmp = res.filter((ele: any, idx: any) => {
                // console.log(ele);
                
                return ele.property === "collaboration"
                   
            })
            setData(tmp)
        }
        ).catch((err) => console.log(err))

    }, [])

    console.log(data);
    
    

    return (<div>
        <header className="section-header">
            <p className="purple" style={{ color: "rgb(1, 41, 112)" }}>Collaborations</p>
        </header>
        <section id="collaboration-slider-big" className="firstviewscreens">
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
                                        <div className="colloelementss">
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/autostradeitalia.jpg")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/Avanade.png")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/cronos.jpg")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/eli lilly.png")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/mediolanum.png")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/menarini.jpg")} height="170" width="200" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="colloelementss">
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/posteitaliane2.jpg")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/Proximus2.png")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/TCSLogo.jpg")} height="170" width="200" alt="" />
                                            </div>
                                            <div className="cooll1">
                                                <img src={require("../assets/img/collaborations/ubis.jpg")} height="170" width="200" alt="" />
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





        <section id="collaboration-slider-medium" className="secondviewscreens">
            <div className="container-md" data-aos="fade-in">
                <div className="row">
                    <div className="col-12">
                        <div className="swiper sliderFeaturedPosts">
                            {/* <div className="swiper-wrassetser"> */}
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
                                       <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/autostradeitalia.jpg")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/Avanade.png")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/cronos.jpg")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/eli lilly.png")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/mediolanum.png")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/menarini.jpg")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/posteitaliane2.jpg")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/Proximus2.png")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/TCSLogo.jpg")} height="200" width="200" alt="" />
                                        </div>
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/ubis.jpg")} height="200" width="200" alt="" />
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
        <section id="collaboration-slider-small" className="thirdviewscreens">
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
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/autostradeitalia.jpg")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/Avanade.png")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/cronos.jpg")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/eli lilly.png")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/mediolanum.png")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/menarini.jpg")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/posteitaliane2.jpg")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/Proximus2.png")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/TCSLogo.jpg")} height="200" width="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="colloelementss">
                                        <div className="cooll1">
                                            <img src={require("../assets/img/collaborations/ubis.jpg")} height="200" width="200" alt="" />
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
    </div>
    )
}

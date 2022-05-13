import React from 'react'
  // import Swiper JS
//   import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';
  import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function Slider() {
  return (
    <div className="slider" >
        <div className="slide-track">
            <div className="slide andimg">
                <img src={require("../assets/img/slider/and.png")} height="50" width="250" alt=""/>
            </div>
            <div className="slide nodejsimg">
                <img src={require("../assets/img/slider/nodejs.jpg")} height="70" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/python.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/aws.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/DO.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/gcp1.jpg")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/angular.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/re.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide jsimg">
                <img src={require("../assets/img/slider/js1.png")} height="80" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/typeS.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/wordpress.jpg")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/java.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/ionicFW.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/reacNative.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/oracle.jpg")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/mysql.jpg")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/postSQL.png")} height="100" width="250" alt=""/>
            </div>
            <div className="slide">
                <img src={require("../assets/img/slider/mongoDB.png")} height="100" width="250" alt=""/>
            </div>
        </div>
    </div>
  )
}

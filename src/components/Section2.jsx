import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../Assets/Images/slider1img1.webp";
import img2 from "../Assets/Images/slider1img2.webp";
import img3 from "../Assets/Images/slider1img3.webp";
import img4 from "../Assets/Images/slider1img4.webp";
import img5 from "../Assets/Images/slider1img5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s2elipse from "../Assets/Images/s2elipse.webp";
const Section2 = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 4500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrow: false,
        autoplay: true,
        pauseOnHover: true,
        speedAutoplay: 0,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: false,
                slidesToShow: 4.5,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                slidesToShow: 3.5,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2.5,
              },
            },
            {
              breakpoint: 520,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 450,
              settings: {
                arrows: false,
                slidesToShow: 1.5,
              },
            },
            {
              breakpoint: 400,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
      };
  return (
    <div className=' section2-padding position-relative'>
<img src={s2elipse} alt="" className=" position-absolute start-0 s2elipse" />
<Container>
    <Slider {...settings} className=" " data-aos="zoom-in">
    <div className=' mx-sm-4 mx-auto ' data-aos="zoom-in">
            <img src={img1} alt=""  className=' mx-auto d-flex sliderimg'  />
        </div>
        <div className=' mx-sm-4 mx-auto ' data-aos="zoom-in">
            <img src={img2} alt="" className=' mx-auto d-flex sliderimg'  />
        </div>
        <div className=' mx-sm-4 mx-auto ' data-aos="zoom-in">
            <img src={img3} alt="" className=' mx-auto d-flex sliderimg'  />
        </div>
        <div className=' mx-sm-4 mx-auto ' data-aos="zoom-in">
            <img src={img4} alt=""  className=' mx-auto d-flex sliderimg' />
        </div>
        <div className=' mx-sm-4 mx-auto ' data-aos="zoom-in">
            <img src={img5} alt="" className=' mx-auto d-flex sliderimg'  />
        </div>
    </Slider>
</Container>
    </div>
  )
}

export default Section2
import React from 'react'
import { Container } from 'react-bootstrap'
import s6img from "../Assets/Images/s6img.webp";
import playbtn from "../Assets/Images/playbtn.webp";
const Arichsection = () => {
    return (
        <div className=' s6-padding position-relative '>
            <span className=' arichelipse position-absolute '></span>
            <Container className=' position-relative z-1'>
                <p className=' fw-bold fs-1lg lh62 text-white text-center mb-sm-4 mb-3 pb-sm-3' data-aos="zoom-in">A rich, inhabited, and licensable world.</p>
                <div className=' rich-img-card position-relative'>
                    <img src={playbtn} alt="playbtn" className=' position-absolute playbtn cursor-pointer' />
                    <img src={s6img} alt="s6img" className=' rich-img w-100 h-100' />
                </div>
                <p className=' fw-normal fs-1sm lh24 text-white opacity-70 text-center mt-4 mb-0' data-aos="zoom-in"> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but <span className=' d-lg-block'> also for film and television, events, merchandising, and partnerships. </span></p>
            </Container>
        </div>
    )
}

export default Arichsection
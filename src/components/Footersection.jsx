import React from 'react'
import { Container } from 'react-bootstrap'
import footerlogo from "../Assets/Images/footerlogo.webp";
import { Facebook, Instagram, Likedin, Twitter } from '../Commonsvg/Icon';
import footerelipse1 from "../Assets/Images/footerelipse1.webp";
import footerelipse2 from "../Assets/Images/footerelipse2.webp";
const Footersection = () => {
  return (
    <div className=' position-relative '>
      <img src={footerelipse1} alt="footerelipse1" className=' bottom-0 position-absolute  end-0' />
      <img src={footerelipse2} alt="footerelipse1" className=' bottom-0 z-1 d-none d-md-block position-absolute footerelipse2 start-0' />
        <Container className=' position-relative z-1'>
<img src={footerlogo} alt="footerlogo" className='  mx-auto cursor-pointer d-flex' />
<ul className=' d-flex gap-4 align-items-center ps-0 justify-content-center mb-0 pt-4'>
    <li><a href="#home" className=' fw-normal fs-1sm text-white opacity-70 lh18 mb-0 text-decoration-none pagelinks position-relative'>Home</a></li>
    <li><a href="#rm" className=' fw-normal fs-1sm text-white opacity-70 lh18 mb-0 text-decoration-none pagelinks position-relative'>Roadmap</a></li>
    <li><a href="#team" className=' fw-normal fs-1sm text-white opacity-70 lh18 mb-0 text-decoration-none pagelinks position-relative '>Team</a></li>
    <li><a href="#aboutus" className=' fw-normal fs-1sm text-white opacity-70 lh18 mb-0 text-decoration-none pagelinks position-relative'>About Us</a></li>
</ul>
<div className=' d-flex align-items-center gap-3 justify-content-center mt-4 '>
    <a href="https://twitter.com/login?lang=en" target='_blank' className=' footericon'><Twitter/></a>
    <a href="https://www.facebook.com/" target='_blank' className=' footericon'><Facebook/></a>
    <a href="https://www.instagram.com/" target='_blank' className=' footericon'><Instagram/></a>
    <a href="https://www.linkedin.com/feed/" target='_blank' className=' footericon'><Likedin/></a>
</div>
        </Container>
        <hr className=' footerline mb-0 mt-5' />
        <p className=' fw-normal fs-sm lh19 text-white opacity-60 mb-0 py-4 text-center'>© 2023 248 Labs. All rights reserved</p>
    </div>
  )
}

export default Footersection
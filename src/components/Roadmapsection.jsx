import React from 'react'
import america from "../Assets/Images/america.webp";
import australia from "../Assets/Images/australia.webp";
import india from "../Assets/Images/india.webp";
import { Star } from '../Commonsvg/Icon';
import rmflower from "../Assets/Images/rm-flower.webp";
import { Container } from 'react-bootstrap';
import rmelipse1 from "../Assets/Images/rmelipse1.webp";
const Roadmapsection = () => {
  return (
    <div className=' position-relative rmbg'>
<img src={rmelipse1} alt="rmelipse1" className=' position-absolute start-0 rmelipse' />
        <Container className=' rm-section-pt position-relative' id="rm">
        <p className=' position-absolute opacity-6 fw-bold fs-3lg lh224 text-white Rm_name mb-0'>Roadmap</p>
        <div className=' text-center' data-aos="zoom-in">   <button className="s7-btn fw-normal fs-1sm lh19  mb-0 commonbtn2">ROAD MAP</button></div>
                <p className=' fw-bold lh62 fs-1lg text-center text-white mt-3 mb-0' data-aos="zoom-in">Milestones and markers</p>
        </Container>
        <Container >
        <div className="timeline position-relative z-2">
  <div className="timelineconatiner rm-padding1 right ">
    <img src={rmflower} alt="" className=' position-absolute rmflower' />
    <div className="content d-flex justify-content-center align-items-center flex-column" data-aos="fade-left">
      <h2 className=' fw-normal fs-md lh28 rm_head mb-0' >Oct 2014</h2>
      <p className=' fw-normal fs-md lh28 text-white opacity-70 mt-2 mb-0 text-center text-sm-start'>Hired our first employee</p>
      <span className='rmcard-elipse'></span>
    </div>
  </div>
  <div className="timelineconatiner rm-padding2 left">
    <div className="content d-flex justify-content-center align-items-center flex-column" data-aos="fade-right">
    <h2 className=' fw-normal fs-md lh28 rm_head mb-0'>Nov 2014</h2>
      <p className=' fw-normal fs-md lh28 text-white opacity-70 mt-2 mb-0 text-center text-sm-start'>Launched Bitcoin wallet</p>
      <span className='rmcard-elipse'></span>
    </div>
  </div>
  <div className="timelineconatiner rm-padding1 right">
    <div className="content d-flex justify-content-center align-items-center flex-column" data-aos="fade-left">
    <h2 className=' fw-normal fs-md lh28 rm_head mb-0'>Oct 2015</h2>
      <p className=' fw-normal fs-md lh28 text-white opacity-70 mt-2 mb-0 text-center'>1st prize by Bit angels at Coin Agenda, <span className=' d-block'> Las Vegas </span></p>
      <span className='rmcard-elipse'></span>
    </div>
  </div>
  <div className="timelineconatiner rm-padding2 left">
    <div className="content d-flex justify-content-center align-items-center flex-column" data-aos="fade-right">
    <h2 className=' fw-normal fs-md lh28 rm_head mb-0'>Jan 2020</h2>
      <p className=' fw-normal fs-md lh28 text-white opacity-70 mt-2 mb-0 d-flex align-items-center gap-3'>launch On 
      <img src={india} alt="" className=' flag-width' />
      <img src={australia} alt="" className=' flag-width' />
      <img src={america} alt="" className=' flag-width' />
      </p>
      <span className='rmcard-elipse'></span>
    </div>
  </div>
  <div className="timelineconatiner rm-padding1 right">
    <div className="content d-flex justify-content-center align-items-center flex-column" data-aos="fade-left">
    <h2 className=' fw-normal fs-md lh28 rm_head mb-0'>Jan 2022</h2>
      <p className=' fw-normal fs-md lh28 text-white opacity-70 mt-2 mb-0 d-flex flex-column align-items-center mb-14 text-center text-sm-start'>Trusted by 10 Millions+ Users
      </p>
      <span><Star/></span>
      <span className='rmcard-elipse'></span>
    </div>
  </div>
</div>
</Container>
    </div>
  )
}

export default Roadmapsection
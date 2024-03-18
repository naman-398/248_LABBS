import React from 'react'
import { Container } from 'react-bootstrap'

const Whatsection = () => {
  return (
    <div className=' mt-sm-5 s8-bg position-relative z-2'>
        <Container>
            <p className=' fw-bold fs-1lg lh62 text-center text-white mb-3' data-aos="zoom-in">What’s Next</p>
            <p className=' fw-semibold fs-1sm lh24 text-white text-center mb-0 ' data-aos="zoom-in">92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
            <p className=' fw-semibold fs-1sm lh24 text-white text-center  opacity-70 mt-12 mb-0' data-aos="zoom-in"> 248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
           <div className=' text-center' data-aos="zoom-in"> <button className=' fw-bold fs-md lh28 text-white s8-btn-padding commonbtn1'>Try to keep up</button></div>
        </Container>
    </div>
  )
}

export default Whatsection
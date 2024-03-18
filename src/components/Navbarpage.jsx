import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import pagelogo from "../Assets/Images/pagelogo.webp";
import Commonbtn from '../Commonbtn/Commonbtn';
const Navbarpage = () => {
    const [first, setfirst] = useState(false)
    function show() {
        setfirst(!first)  
        if (first === false) {
          document.body.classList.add('overflow_hidden')
        }
        else {
          document.body.classList.remove('overflow_hidden')
        }
    }
   
  return (
    <div>
        <Container className=' py-4  '>
            <div className=' d-flex  align-items-center  justify-content-between '>
<img src={pagelogo} alt="" className=' navimg' />
<ul className={`${first ? "nav-true" : "nav-false"} d-flex  align-items-center  mb-0  ps-0 gap-4  mobile-view `}>
    <li><a href="#aboutus" onClick={show} className=' opacity-70 fs-1sm fw-normal  lh24 text-white  mb-0  text-decoration-none pagelinks position-relative '>About Us</a></li>
    <li><a href="#team" onClick={show} className=' opacity-70 fs-1sm fw-normal  lh24 text-white  mb-0  text-decoration-none pagelinks position-relative  '>Our Team</a></li>
    <li><a href="#rm" onClick={show} className=' opacity-70 fs-1sm fw-normal  lh24 text-white  mb-0  text-decoration-none pagelinks  position-relative '>Roadmap</a></li>
    <li className=' ps-3 cursor-pointer '><Commonbtn text='Contact Us'/></li>
</ul>
<span onClick={show} className=' d-block d-md-none position-relative z-11'>{first === false ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFFFFF" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFFFFF" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>}</span>
</div>
        </Container>

    </div>
  )
}

export default Navbarpage
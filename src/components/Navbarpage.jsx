import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import pagelogo from "../Assets/Images/pagelogo.webp";
import Commonbtn from '../Commonbtn/Commonbtn';
import { Navcross, Navline } from '../Commonsvg/Icon';
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
<img src={pagelogo} alt="" className=' navimg cursor-pointer' />
<div className= "d-flex  align-items-center  mb-0  ps-0 gap-4 " >
<ul className={`${first ? "nav-true" : "nav-false"} d-flex  align-items-center  mb-0  ps-0 gap-4  mobile-view`}>
    <li><a href="#aboutus" onClick={show} className=' opacity-70 fs-1sm fw-normal  lh24 text-white  mb-0  text-decoration-none pagelinks position-relative '>About Us</a></li>
    <li><a href="#team" onClick={show} className=' opacity-70 fs-1sm fw-normal  lh24 text-white  mb-0  text-decoration-none pagelinks position-relative  '>Our Team</a></li>
    <li><a href="#rm" onClick={show} className=' opacity-70 fs-1sm fw-normal  lh24 text-white  mb-0  text-decoration-none pagelinks  position-relative '>Roadmap</a></li>
    <li className=' ps-3 cursor-pointer d-block d-sm-none  d-lg-block'><Commonbtn text='Contact Us'/></li>
</ul>
<button className=' ps-3 cursor-pointer d-none d-sm-block d-lg-none bg-transparent border-0 '><Commonbtn text='Contact Us'/></button>
</div>
<span onClick={show} className=' d-block d-lg-none position-relative z-11'>{first === false ? <Navline/>: <Navcross/>}</span>
</div>
        </Container>

    </div>
  )
}

export default Navbarpage
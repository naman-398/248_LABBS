import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Commonbtn2 from '../Commonbtn/Commonbtn2'

const mycardinfo = [

    {
      para1: 'World Building' ,
para2: 'Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision'
    },
    {
        para1: 'Game Design'  ,
        para2: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination."
    },
    {
        para1:  'Art and Sound',
        para2: 'In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.'
    }
]

const Gamesectin = () => {
    const mycard = mycardinfo.map((mycard) => (
        <Col lg={4} md={6} className=' col-12 mt-card-s3 ' data-aos="zoom-in">
        <div className=' s3-box position-relative overflow-hidden h-100 mx-auto mx-md-0 gradient-border-maskroadmap1'>
            <p className=' fw-bold fs-lg lh38 text-white mb-3 position-relative z-2'>{mycard.para1}</p>
            <p className=' fw-normal fs-1sm lh24 text-white mb-0 opacity-70  position-relative z-2'>{mycard.para2}</p>
            <span className=' s3-box-elipse'></span>
        </div>
    </Col>
    ))
    return (
        <div className=' section3padding position-relative'>
            <p className=' position-absolute opacity-6 fw-bold fs-3lg lh224 text-white aboutus_name mb-0'>About Us</p>
            <Container>
                <Row className=' align-items-end'>
                    <Col lg={6} className=' col-12' >
                       <div className=' text-center text-lg-start'  data-aos="fade-right"> <Commonbtn2 name='DOERS OVER TALKERS' /></div>
                        <p className=' fw-bold lh62 fs-1lg text-white mt-3 mb-0 text-center text-lg-start' data-aos="fade-right">Game <span className=' d-block'> First.Always. </span></p>
                    </Col>
                    <Col lg={6} className=' col-12 mt-4 mt-lg-0'>
                        <div className=' max-w-516 mx-auto '>
                            <p className=' fw-medium fs-2sm lh21  text-white mb-0 text-center text-lg-start' data-aos="fade-left">This is difficult</p>
                            <p className=' fw-normal opacity-70 fs-1sm lh24 text-white mb-0 mt-3 text-center text-lg-start' data-aos="fade-left">Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold'> world-class storytelling, </span> world-building, game design, art and sound. And fun.</p>
                        </div>
                    </Col>
                </Row>
                <Row className=' s3cards-pt justify-content-center justify-content-lg-start'>
                 {mycard}
                </Row>
            </Container>
        </div>
    )
}

export default Gamesectin
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s5bigimg from "../Assets/Images/s5bigimg.webp";
import nameelipse1 from "../Assets/Images/nameelipse1.webp";
const Namesection = () => {
    return (
        <div className=' s5-padding position-relative'>
<img src={nameelipse1} alt="" className=' position-absolute nameelipse w-100 h-100 ' />
            <Container>
                <div className='  namesection-bigimg-card '>
                    <img src={s5bigimg} alt="s5bigimg" className='namesection-bigimg position-relative z-1  w-100 h-100 '  />
                </div>
                <Row className="mt-4 justify-content-between">
                    <Col xl={3} lg={4} className='col-12 d-flex flex-lg-column gap-4 flex-md-row flex-column justify-content-center  '>
                        <div data-aos="fade-right" className=' mx-auto mx-md-0'><button className=' s5-btn1 fw-bold fs-2sm lh27 text-white mb-0 gradient-border-maskroadmap'>
                            name@domain.com
                        </button></div>
                       <div data-aos="fade-right"  className=' mx-auto mx-md-0'> <button className=' s5-btn2 fw-bold fs-2sm lh27 text-white mb-0  commonbtn1'>
                            Make Your Move
                        </button></div>
                    </Col>
                    <Col lg={8} className=' col-12 mt-4 mt-lg-0' data-aos="fade-left">
                        <p className=' fw-normal  lh24 fs-1sm namepara mb-0 text-center text-lg-start' >Unveiled is a unique <span className=' text-white fw-semibold'> collectible card game </span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence.
                            <span className=' d-block mt-sm-3 mt-1'>
                            You play a rogue merchant trader allied to a noble house, alongside your <span className=' text-white fw-semibold'> cryptid-humanoid companions </span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers.
                            </span>
                           <span className=' mt-1 mt-sm-3 d-block text-white fw-semibold'> What’s your next move? </span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Namesection
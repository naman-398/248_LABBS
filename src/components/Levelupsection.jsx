import React from 'react'
import { Container } from 'react-bootstrap'
import Commonbtn from '../Commonbtn/Commonbtn'

const Levelupsection = () => {
    return (
        <div className=' levelupbg'>
            <Container>
                <div className=' levelup_box ms-auto' data-aos="fade-left">
                    <p className='  fw-bold fs-1lg lh67 text-white mb-sm-4' data-aos="zoom-in">Level up your gaming experience</p>
                   <div className=' pt-2'> <Commonbtn text='Play Unvilled'/></div>
                </div>
            </Container>
        </div>
    )
}

export default Levelupsection
import React from 'react'
import Navbarpage from './Navbarpage'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div className=' header-bg d-flex min-vh-100  flex-column  w-100 ' id="home">
        <Container >
        <Navbarpage/>
        </Container>
        <header className=' flex-grow-1 d-flex  justify-content-center  align-items-center   '>
            <Container>
                <h1 className=' lh86 text-white  fw-bold  fs-2lg text-center  mb-0  mx-auto '>Changing the way games <span className=' d-lg-block '> are made </span></h1>
                <p className=' lh28 fs-md fw-normal  mb-0  mt-4  text-center  text-white '>Redefining the future of play</p>
            </Container>
        </header>
    </div>
  )
}

export default Header
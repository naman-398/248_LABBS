import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Foamsection = () => {
  const checkboxRef = useRef(null);
  const [Fromdata, setFromdata] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
  });
  const [Errordata, setErrordata] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
  });
  const [modal, setmodal] = useState(false);
  const submission = (e) => {
    const { name, value } = e.target;
    setFromdata({ ...Fromdata, [name]: value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    };
    const error = {};
    if (!regex.name.test(Fromdata.name)) {
      error.name = "invalid name";
    }
    if (!regex.lastname.test(Fromdata.lastname)) {
      error.lastname = "invalid lastname";
    }
    if (!regex.number.test(Fromdata.number)) {
      error.number = "invalid number";
    }
    if (!regex.email.test(Fromdata.email)) {
      error.email = "invalid email";
    }
    if (!checkboxRef.current.checked) {
      error.checkbox = "agreement not checked";
    }
    setErrordata(error);
    if (Object.keys(error).length === 0) {
      setmodal(true);
      setErrordata({
        name: "",
        lastname: "",
        number: "",
        email: "",
      })
      setFromdata({
        name: "",
        lastname: "",
        number: "",
        email: "",
      })
      console.log(Fromdata)

    }
  };
  if (modal ) {
    document.body.classList.add('overflow-hidden')
  }
  else  {
    document.body.classList.remove('overflow-hidden')
  }
  return (
    <div className=' s10bgimg' id="aboutus">
      <Container>
        <Row className=' align-items-center'>
          <Col lg={7} className=' col-12'>
            <div className=' foam_box' data-aos="zoom-in">
              <p className=' fw-bold fs-1lg lh62 text-white mb-sm-4 mb-3'>Get updated with us</p>
              <form onSubmit={handelsubmit}>
                <div className="d-flex flex-column flex-sm-row align-items-center gap-sm-4 gap-2">
                  <div className=" d-flex flex-column w-100">
                    <label className="fw-medium fs-1sm lh-18 mb-sm-2 mb-1 text-white ">
                      Frist Name
                    </label>
                    <div className="gradia ntfrom">
                      <input
                        onChange={submission}
                        type="name"
                        name="name"
                        value={Fromdata.name}
                        placeholder="Park Seijun"
                        className=" input-box text-white opacity-70 w-100  gradient-border-FOCUS "
                      />
                      {Errordata.name && (
                        <p className="text-danger pt-1">{Errordata.name}</p>
                      )}
                    </div>
                  </div>
                  <div className=" d-flex flex-column w-100">
                    <label className="fw-medium fs-1sm lh-18 mb-sm-2 mb-1 text-white  ">
                      Last Name
                    </label>
                    <div className="gradia ntfrom">
                      <input
                        onChange={submission}
                        type="name"
                        name="lastname"
                        value={Fromdata.lastname}
                        placeholder="Sejiun"
                        className=" input-box text-white opacity-70  w-100 gradient-border-FOCUS  "
                      />
                      {Errordata.lastname && (
                        <p className="text-danger pt-1">
                          {Errordata.lastname}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-sm-row align-items-center gap-sm-4 pt-sm-4 gap-2 pt-2">
                  <div className=" d-flex flex-column w-100">
                    <label className="fw-medium fs-1sm lh-18 mb-sm-2 mb-1 text-white  ">
                      Phone Number
                    </label>
                    <div className="gradia ntfrom">
                      <input
                        onChange={submission}
                        type="number"
                        name="number"
                        value={Fromdata.number}

                        placeholder="+12 5858526478"
                        className=" input-box text-white opacity-70 w-100  gradient-border-FOCUS  "
                      />
                      {Errordata.number && (
                        <p className="text-danger pt-1">{Errordata.number}</p>
                      )}
                    </div>
                  </div>
                  <div className=" d-flex flex-column w-100">
                    <label className="fw-medium fs-1sm lh-18 mb-sm-2 mb-1 text-white  ">
                      Email
                    </label>
                    <div className="gradia ntfrom">
                      <input
                        onChange={submission}
                        type="email"
                        name="email"
                        value={Fromdata.email}
                        placeholder="Park@458@Gmail.com"
                        className=" input-box text-white opacity-70 w-100 gradient-border-FOCUS   "
                      />
                      {Errordata.email && (
                        <p className="text-danger pt-1">{Errordata.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" mb-2 d-flex pt-3 align-items-start gap-3">
                  <input
                    type="checkbox"
                    id="checkbox"
                    defaultChecked={false}
                    ref={checkboxRef}
                    className='mt-1'
                  />
                  <p className=" text-white fw-normal max-w-547 fs-2sm lh-21 mb-0 " >
                    By sending this form I confirm that I have read and accept
                    the <span className=" fw-semibold"> Privacy Policy</span>
                  </p>
                </div>
                {Errordata.checkbox && (
                  <p className="text-danger pt-1">{Errordata.checkbox}</p>
                )}
                <div className="button-border  d-inline-block mt-4">
                  <button
                    className="foambtn commonbtn1   fs-2sm fw-medium text-white lh-18"
                  >Subscribe</button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={4} className=' col-12 mt-4 mt-lg-0'>
            <div className=' max-w-374 mx-auto'>
              <p className=' fw-normal fs-md lh28 text-white mb-0 text-center text-lg-start' data-aos="zoom-in">Stay updated</p>
              <p className=' fw-normal fs-1sm lh24 text-white mt-12 mb-4 opacity-70 text-center text-lg-start' data-aos="zoom-in">At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
              <p className=' fw-normal fs-md lh28 text-white mt-12  mb-0 text-center text-lg-start' data-aos="zoom-in">Address</p>
              <p className=' fw-normal fs-1sm lh24 text-white mt-12  mb-0 opacity-70 text-center text-lg-start' data-aos="zoom-in">390 Orchard Road, 03-07, Palais Renaissance.</p>
            </div>
          </Col>
        </Row>
      </Container>
      {modal && <div className=' h-100 w-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center z-11 modal_box p-4' onClick={()=> setmodal(false) }>
      <div className=' submitbox w-100 h-100 d-flex justify-content-center align-items-center position-relative' >
        <span className=' position-absolute modalsvg ' onClick={()=> setmodal(false) }><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFFFFF" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></span>
        <p className=' text-white fs-md text-center ' >THANKS FOR SUBSCRIBE !! 👍🏻</p>
        </div>
        </div>}
    </div>
  )
}

export default Foamsection
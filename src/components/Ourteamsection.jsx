import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s7img1 from "../Assets/Images/s7cardimh1.webp";
import s7img2 from "../Assets/Images/s7cardimh2.webp";
import s7img3 from "../Assets/Images/s7cardimh3.webp";
import s7img4 from "../Assets/Images/s7cardimh4.webp";
import s7img5 from "../Assets/Images/s7cardimh5.webp";
import s7img6 from "../Assets/Images/s7cardimh6.webp";
import s7img7 from "../Assets/Images/s7cardimh7.webp";
import s7img8 from "../Assets/Images/s7cardimh8.webp";
import ourteamel1 from "../Assets/Images/ourteamelipse1.webp";
import ourteamel2 from "../Assets/Images/ourteamelipse2.webp";
const mycard2info = [

    {
        aos: "fade-right",
        img: s7img1,
        name: 'James Vuong',
        profession: '(Co-CEO)',
        para1: 'James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ',
        para2: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures. "
    },
    {
        aos: "fade-left",
        img: s7img2,
        name: 'Tricia Yong',
        profession: '(Co-CEO)',
        para1: 'Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ',
        para2: "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape."
    },
    {
        aos: "fade-right",
        img: s7img3,
        name: 'Kevin Li',
        profession: '(CFO)',
        para1: 'Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His',
        para2: "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease."
    },
    {
        aos: "fade-left",
        img: s7img4,
        name: 'James Vuong',
        profession: '(Lorem Ipsum)',
        para1: 'Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi ',
        para2: "products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures."
    },
    {
        aos: "fade-right",
        img: s7img5,
        name: 'Dylan',
        profession: '(Executive Producer)',
        para1: 'James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ',
        para2: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum."
    },
    {
        aos: "fade-left",
        img: s7img6,
        name: 'Ralf',
        profession: '(Lorem Ipsum)',
        para1: 'Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.',
        para2: "Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc."
    },
    {
        aos: "fade-right",
        img: s7img7,
        name: 'Jordan Stratford',
        profession: '(Creative Director)',
        para1: 'Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development',
        para2: "for television with the world’s largest streaming producer."
    },
    {
        aos: "fade-left",
        img: s7img8,
        name: 'Jae Sik Choi',
        profession: '(Lorem Ipsum)',
        para1: 'Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB',
        para2: "Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University."
    },
]
const Ourteamsection = () => {
    const mycard2 = mycard2info.map((mycard2) => (
        <Col lg={6} className=' col-12 mt-sm-4 pt-sm-4 pt-3' data-aos={mycard2.aos}>
        <div className=' s7-card position-relative mx-auto mx-lg-0'> 
        <div className=' d-flex gap-12 align-items-center  position-relative z-2 flex-sm-row flex-column'>
            <div className=' s7-card-imgcard w-100 h-100 '>
                <img src={mycard2.img} alt="s7img1" className=' w-100 h-100 object-fit-cover s7-card-img' />
            </div>
            <div className=' max-w-283'>
                <p className=' fw-semibold fs-3sm lh24 text-white mb-0'> {mycard2.name} <span className=' fw-normal fs-1sm lh19 color-gradient-s7-card'>{mycard2.profession}</span></p>
                <p className='  fw-normal fs-1sm lh24 opacity-70 text-white mb-0 mt-12' >{mycard2.para1}</p>
            </div>
        </div>
        <p className=' fw-normal fs-1sm lh24 opacity-70 text-white mb-0 mt-2 position-relative z-2 '>{mycard2.para2}
</p>
<span className=' s7-elipse-card'></span>
        </div>
    </Col>
    ))
    return (
        <div className=' pb-5 position-relative' id="team">
<img src={ourteamel1} alt=""  className=' position-absolute ourteamel1 end-0'/>
<img src={ourteamel2} alt=""  className=' position-absolute ourteamel2 start-0'/>
            <p className=' position-absolute opacity-6 fw-bold fs-3lg lh224 text-white Our_name mb-0'>Our Team</p>
            <Container>
                <div className=' text-center'>   <button className="s7-btn fw-normal fs-1sm lh19  mb-0 commonbtn2" data-aos="zoom-in">Our Team</button></div>
                <p className=' fw-bold lh62 fs-1lg text-center text-white mt-3 mb-0' data-aos="zoom-in">Behind our expertise</p>
                <Row className=' pt-sm-4 mt-sm-2 position-relative z-1'>
                   {mycard2}
                </Row>
            </Container>
        </div>
    )
}

export default Ourteamsection
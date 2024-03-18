import React, { useEffect, useState } from 'react'
import preloder1 from "../Assets/Images/footerelipse1.webp";
import preloder2 from "../Assets/Images/s2elipse.webp";
const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 4500); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 vw-100 vh-100 bg-black1 position-fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='d-flex align-items-center justify-content-center vh-100 position-relative '>
<img src={preloder1} alt="preloader1" className=' position-absolute end-0 bottom-0' />
<img src={preloder2} alt="preloader1" className=' position-absolute start-0 top_-50' />
                   <h1 className=' fs-2lg Loader_text-linear-gradient fw-bold '>248_LABS</h1>
                </div>
            </div>
        </div>
    )
}

export default Loadersection
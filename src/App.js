import React,{useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Section2 from './components/Section2';
import Gamesectin from './components/Gamesectin';
import Levelupsection from './components/Levelupsection';
import Namesection from './components/Namesection';
import Arichsection from './Commonbtn/Arichsection';
import Ourteamsection from './components/Ourteamsection';
import Whatsection from './components/Whatsection';
import Foamsection from './components/Foamsection';
import Footersection from './components/Footersection';
import Roadmapsection from './components/Roadmapsection';
import Backtotop from "./components/Backtotop";
import Loadersection from "./components/Loadersection";
function App() {
  useEffect(() => {
    AOS.init({
      once:true,
      duration:2000,
    });
  }, [])
  return (
<>
<div className=' bg-black1'>
  <div className=' overflow-hidden'>
    <Loadersection/>
    <Backtotop/>
  <Header/>
  <Section2/>
  <Gamesectin/>
  <Levelupsection/>
  <Namesection/>
  <Arichsection/>
  <Ourteamsection/>
  <Whatsection/>
  <Roadmapsection/>
  <Foamsection/>
  <Footersection/>
  </div>
</div>
</>
  );
}

export default App;

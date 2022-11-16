import React ,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import Hero from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/InfoSection';
import Services from '../components/Services/Services';

import { 
  homeObjOne, 
  homeObjThree, 
  homeObjTwo,
  homeObjFour,
  homeObjFive,
  homeObjSix 
} from '../components/InfoSection/Data';
import Footer from '../components/Footer/Footer';

const Home = () => {

    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    
  return (
    <div>
        <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
        <Navbar toggle={toggle}></Navbar>
        <Hero></Hero>
        <InfoSection {...homeObjOne}></InfoSection>
        <InfoSection {...homeObjTwo}></InfoSection>
        <InfoSection {...homeObjThree}></InfoSection>
        <Services></Services>
        <Footer></Footer>
       
    </div>
  )
}

export default Home

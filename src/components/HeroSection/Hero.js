import React,{useState} from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElement';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

const Hero = () => {

    const {hover,setHover}=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }

  return (
 
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg src={video} autoPlay loop muted type='video/mp4'/>
        </HeroBg>

        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign up for a new account today and receive $250 in credit towards your next payment.
            </HeroP>

            <HeroBtnWrapper>
                <Button to='singup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                >
                    
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
   
  )
}

export default Hero

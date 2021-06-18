import React, {useState} from 'react'
import Video from '../../Video/video.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';
const HeroSection = () => {

    const[hover,setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

        </HeroBg>
        <HeroContent>
            <HeroH1>Recyling Made Easy!</HeroH1>
            <HeroP>Sign Up for a new account today and receive 100 coins today itself. </HeroP>
            <HeroBtnWrapper>
                <Button to="sell" onMouseEnter={onHover} onMouseLeave={onHover}
                smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                 >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;

import React, {useState} from 'react'
import Video from '../../assets/videos/coding.mp4'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1 onMouseEnter={onHover} onMouseLeave={onHover}>
                Welcome to Sung Wook Yoo's Portfolio
            </HeroH1>
            <HeroP>
                Scroll down to look more information about me
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
import React from 'react'
import {heroData} from './heroData'
import useScrollTop from '../../utils/useScrollTop'
import './hero.scss'
import { ButtonPrimary } from '../../components/Button/buttonElements'
import {
    HeroSection,
    HeroText,
    HeroHeading,
    HeroSubHeading,
    HeroParagraph
} from './homeElements'

const Hero = () => {
    
    return (
        <HeroSection id="hero">
            <HeroText>
                <HeroHeading className="hero__heading">{heroData.heading}
                    <HeroSubHeading className="hero__sub-heading">{heroData.subHeading}</HeroSubHeading>
                </HeroHeading>
                <HeroParagraph className="hero__paragraph">{heroData.paragraph}</HeroParagraph>
                <ButtonPrimary
                    to='/about' 
                    onClick={useScrollTop}>
                        know more
                </ButtonPrimary>
            </HeroText>
        </HeroSection>
    )
}




export default Hero

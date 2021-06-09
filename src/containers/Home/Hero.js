import React from 'react'
import {heroData} from './heroData'
import useScrollTop from '../../utils/useScrollTop'
import { ButtonPrimary } from '../../components/Button/buttonElements'
import {
    HeroSection,
    Text,
    Heading,
    SubHeading,
    Paragraph
} from './homeElements'

const Hero = () => {
    
    return (
        <HeroSection id="hero">
            <Text>
                <Heading className="hero__heading">{heroData.heading}
                    <SubHeading className="hero__sub-heading">{heroData.subHeading}</SubHeading>
                </Heading>
                <Paragraph className="hero__paragraph">{heroData.paragraph}</Paragraph>
                <ButtonPrimary
                    to='/about' 
                    onClick={useScrollTop}>
                        know more
                </ButtonPrimary>
            </Text>
        </HeroSection>
    )
}




export default Hero

import React from 'react'
import {heroData} from './heroData'
import useScrollTop from '../../utils/useScrollTop'
import './hero.scss'
import { ButtonPrimary } from '../../components/Button/buttonElements'

const Hero = () => {
    
    return (
        <div className="hero" id="hero">
            <div className="hero__text">
                <h1 className="hero__heading">{heroData.heading}
                    <span className="hero__sub-heading">{heroData.subHeading}</span>
                </h1>
                <p className="hero__paragraph">{heroData.paragraph}</p>
                <ButtonPrimary
                    to='/about' 
                    onClick={useScrollTop}>
                        know more
                </ButtonPrimary>
            </div>
        </div>
    )
}




export default Hero

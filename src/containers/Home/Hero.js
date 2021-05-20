import React from 'react'
import Button from '../../components/Button/Button'
import {heroData} from '../../data/data'
import useScrollTop from '../../utils/useScrollTop'

const Hero = () => {
    
    return (
        <div className="hero" id="hero">
            <div className="hero__text">
                <h1 className="hero__heading">{heroData.heading}
                    <span className="hero__sub-heading">{heroData.subHeading}</span>
                </h1>
                <p className="hero__paragraph">{heroData.paragraph}</p>
                <Button 
                    href='/about' 
                    className='btn btn-primary' 
                    text='know more'
                    clicked={useScrollTop}
                />
            </div>
        </div>
    )
}

export default Hero

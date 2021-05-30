import React from 'react'
import {aboutMeData} from './aboutMeData'
import resume from '../../assets/ALJON_DE_LUMEN_RESUME.pdf'
import useScrollTop from '../../utils/useScrollTop'
import './about.scss'
import { ButtonFile, ButtonSecondary } from '../../components/Button/buttonElements'


const AboutMe = () => {

    return (
        <div className="about" id="about">
            <div className="container">
                <h2 className="section-heading">{aboutMeData.title}</h2>
                <div className="about__flex">
                    <div className="about__box">
                        <div className="about__item text-center">
                            <img src={aboutMeData.img} alt="" className="about__img"/>
                        </div>
                    </div>
                    <div className="about__box">
                        <div className="about__item">
                            <h3 className="about__heading">{aboutMeData.heading}</h3>
    
                            {aboutMeData.paragraphs.map((paragraph, index) => {
                                return (
                                    <p className="about__paragraph" key={index}>{paragraph}</p>
                                )
                            })}
                            
                            <ButtonFile 
                                href={resume}
                                target='_blank'
                                rel='noreferrer'>
                                    resume
                            </ButtonFile>
                            
                            <ButtonSecondary
                                to='/portfolio' 
                                onClick={useScrollTop}>
                                    portfolio
                            </ButtonSecondary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutMe

import React from 'react'
import Button from '../components/Button'
import {aboutData} from '../Data/data'

const AboutMe = () => {
    return (
        <div className="about" id="about">
                <div className="container">
                    <h2 className="section-heading">{aboutData.title}</h2>
                    <div className="about__flex">
                        <div className="about__box">
                            <div className="about__item">
                                <img src={aboutData.img} alt="" className="about__img"/>
                            </div>
                        </div>
                        <div className="about__box">
                            <div className="about__item">
                                <h3 className="about__heading">{aboutData.heading}</h3>
        
                                {aboutData.paragraphs.map((paragraph, key) => {
                                    return (
                                        <p className="about__paragraph" key={key}>{paragraph}</p>
                                    )
                                })}

                                <Button href='resume.pdf' className='btn btn-primary' text='resume'/>    
                                <Button href='/portfolio' className='btn btn-secondary' text='portfolio'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutMe

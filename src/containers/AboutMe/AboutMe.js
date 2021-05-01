import React from 'react'
import Button from '../../components/Button/Button'
import {aboutData} from '../../Data/data'
import {ScrollTopHandler} from '../../handler/ScrollTopHandler'
import resume from '../../assets/img/me.png'


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
        
                                {aboutData.paragraphs.map((paragraph, index) => {
                                    return (
                                        <p className="about__paragraph" key={index}>{paragraph}</p>
                                    )
                                })}

                                {/* <Button 
                                    href='resume.pdf' 
                                    className='btn btn-primary' 
                                    text='resume'
                                    clicked={ScrollTopHandler}
                                />     */}

                                <a 
                                    href={resume} 
                                    target="_blank"
                                    rel="noreferrer"
                                    className='btn btn-primary'>
                                    resume
                                </a>

                                <Button 
                                    href='/portfolio' 
                                    className='btn btn-secondary' 
                                    text='portfolio'
                                    clicked={ScrollTopHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutMe

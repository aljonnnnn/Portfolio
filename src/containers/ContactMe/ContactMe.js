import React from 'react'
import {contactMeData} from './contactMeData'

const ContactMe = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h2 className="section-heading">{contactMeData.title}</h2>
                <div className="contact__flex">
                    <div className="contact__box">
                        <div className="contact__item">
                            <span className="contact__icon"><img src={contactMeData.emailIcon} alt="" /></span>
                            <span className="contact__contact">{contactMeData.emailAccount}</span>
                        </div>
                    </div>
                    <div className="contact__box">
                        <div className="contact__item">
                            <span className="contact__icon"><img src={contactMeData.phoneIcon} alt="" /></span>
                            <span className="contact__contact">{contactMeData.phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe

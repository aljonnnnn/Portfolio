import React from 'react'
import {contactData} from '../../Data/data'

const ContactMe = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h2 className="section-heading">{contactData.title}</h2>
                <div className="contact__flex">
                    <div className="contact__box">
                        <div className="contact__item">
                            <span className="contact__icon"><img src={contactData.emailIcon} alt="" /></span>
                            <span className="contact__contact">{contactData.emailAccount}</span>
                        </div>
                    </div>
                    <div className="contact__box">
                        <div className="contact__item">
                            <span className="contact__icon"><img src={contactData.phoneIcon} alt="" /></span>
                            <span className="contact__contact">{contactData.phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe

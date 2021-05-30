import React from 'react'
import {contactMeData} from './contactMeData'
import './contact.scss'
import {
    ContactSection,
    ContactSectionHeading,
    ContactFlex,
    ContactBox,
    ContactItem,
    ContactIcon,
    ContactDetail
} from './contactElements'

const ContactMe = () => {
    return (
        <ContactSection id="contact">
            <div className="container">
                <ContactSectionHeading>{contactMeData.title}</ContactSectionHeading>
                <ContactFlex>
                    <ContactBox>
                        <ContactItem>
                            <ContactIcon><img src={contactMeData.emailIcon} alt="" /></ContactIcon>
                            <ContactDetail>{contactMeData.emailAccount}</ContactDetail>
                        </ContactItem>
                    </ContactBox>
                    <ContactBox>
                        <ContactItem>
                            <ContactIcon><img src={contactMeData.phoneIcon} alt="" /></ContactIcon>
                            <ContactDetail>{contactMeData.phoneNumber}</ContactDetail>
                        </ContactItem>
                    </ContactBox>
                </ContactFlex>
            </div>
        </ContactSection>
    )
}

export default ContactMe

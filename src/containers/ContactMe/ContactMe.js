import React from 'react'
import {contactMeData} from './contactMeData'
import {
    ContactSection,
    SectionHeading,
    FlexLayout,
    Box,
    Item,
    Icon,
    Detail
} from './contactElements'

const ContactMe = () => {
    return (
        <ContactSection id="contact">
            <div className="container">
                <SectionHeading>{contactMeData.title}</SectionHeading>
                <FlexLayout>
                    <Box>
                        <Item>
                            <Icon><img src={contactMeData.emailIcon} alt="" /></Icon>
                            <Detail>{contactMeData.emailAccount}</Detail>
                        </Item>
                    </Box>
                    <Box>
                        <Item>
                            <Icon><img src={contactMeData.phoneIcon} alt="" /></Icon>
                            <Detail>{contactMeData.phoneNumber}</Detail>
                        </Item>
                    </Box>
                </FlexLayout>
            </div>
        </ContactSection>
    )
}

export default ContactMe

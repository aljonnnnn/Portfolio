import React from 'react'
import {aboutMeData} from './aboutMeData'
import resume from '../../assets/ALJON_DE_LUMEN_RESUME.pdf'
import useScrollTop from '../../utils/useScrollTop'
import { ButtonFile, ButtonSecondary } from '../../components/Button/buttonElements'
import {
    AboutSection,
    SectionHeading,
    FlexLayout,
    Box,
    Item,
    Image,
    Heading,
    Paragraph
} from './aboutMeElements'

const AboutMe = () => {

    return (
        <AboutSection id="about">
            <div className="container">
                <SectionHeading>{aboutMeData.title}</SectionHeading>
                <FlexLayout>
                    <Box>
                        <Item>
                            <Image src={aboutMeData.img} alt="" className="about__img"/>
                        </Item>
                    </Box>
                    <Box>
                        <Item>
                            <Heading>{aboutMeData.heading}</Heading>
    
                            {aboutMeData.paragraphs.map((paragraph, index) => {
                                return (
                                    <Paragraph key={index}>{paragraph}</Paragraph>
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
                        </Item>
                    </Box>
                </FlexLayout>
            </div>
        </AboutSection>
    )
}


export default AboutMe

import React from 'react'
import {educationData} from './educationData'
// import './education.scss'
import {
    EducationSection,
    SectionHeading,
    FlexLayout,
    Box,
    Item,
    SchoolYear,
    SchoolContainer,
    SchoolName,
    SchoolAddress
} from './educationElements'


const Education = () => {
    return (
        <EducationSection id="education">
                <div className="container">
                    <SectionHeading>{educationData.title}</SectionHeading>
                    <FlexLayout>
                        
                        {educationData.schools.map((school, index) => {
                            return (
                                <Box key={index}>
                                    <Item>
                                        <SchoolYear>{school.year}</SchoolYear>
                                        <SchoolContainer>
                                            <SchoolName>{school.name}</SchoolName>
                                            <SchoolAddress>{school.address}</SchoolAddress>
                                        </SchoolContainer>
                                    </Item>
                                </Box>
                            )
                        })}

                    </FlexLayout>
                </div>
            </EducationSection>
    )
}

export default Education

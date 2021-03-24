import React from 'react'
import {educationData} from '../Data/data'


const Education = () => {
    return (
        <div className="education" id="education">
                <div className="container">
                    <h2 className="section-heading">{educationData.title}</h2>
                    <div className="education__flex">
                        
                        {educationData.schools.map((school, key) => {
                            return (
                                <div className="education__box" key={key}>
                                    <div className="education__item">
                                        <h3 className="education__heading">{school.year}</h3>
                                        <div className="education__school-container">
                                            <p className="education__name">{school.name}</p>
                                            <span className="education__address">{school.address}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
    )
}

export default Education

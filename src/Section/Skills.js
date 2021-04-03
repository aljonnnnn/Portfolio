import React from 'react'
import {skillsData} from '../Data/data'

const Skills = () => {
    return (
        <div className="skills" id="skills">
                <div className="container">
                    <h2 className="section-heading">my backpack</h2>
                    <div className="skills__flex">
                        {skillsData.map((skillImg, index) => {
                            return (
                                <div className="skills__box" key={index}>
                                    <div className="skills__item">
                                        <img src={skillImg} alt="" className="skills__img" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Skills

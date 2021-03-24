import React from 'react'
import {portfolioData} from '../Data/data'

const MyPortfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="section-heading">{portfolioData.title}</h2>
                <div className="portfolio__flex">

                    {portfolioData.projects.map((project, key) => {
                        return (
                            <div className="portfolio__box" key={key}>
                                <div className="portfolio__item">
                                    <a href={project.projectLink} target="_blank" rel="noreferrer" className="portfolio__imgLink"><img src={project.projectImg} alt="" className="portfolio__img" /></a>
                                    <h3 className="portfolio__title">{project.projectName}</h3>
                                    <p className="portfolio__details">{project.projectDetail}</p>
                                    <div className="portfolio__tech">
                                        {project.techUse.map((techItem, key) => {
                                            return (
                                                <span className="portfolio__tech-use" key={key}>{techItem}</span>
                                            )
                                        })
                                        }
                                    </div>
                                <div className="portfolio__project-link">
                                    <a href={project.webLink} target="_blank" rel="noreferrer" className="portfolio__link"><img src={project.webIcon} alt='' /></a>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="portfolio__link"><img src={project.githubIcon} alt='' /></a>
                                    <a href={project.figmaLink} target="_blank" rel="noreferrer" className="portfolio__link"><img src={project.figmaIcon} alt='' /></a>
                                </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio

import {portfolioData} from './projectCardData'

const ProjectCard = () => {
    return (
        <>
            {portfolioData.projects.slice(0).reverse().map((project, index) => {
                return (
                    <div className="portfolio__box" key={index}>
                        <div className="portfolio__item">
                            <a href={project.projectLink} target="_blank" rel="noreferrer" className="portfolio__imgLink"><img src={project.projectImg} alt="" className="portfolio__img" /></a>
                            <h3 className="portfolio__title">{project.projectName}</h3>
                            <p className="portfolio__details">{project.projectDetail}</p>

                            <div className="portfolio__tech">
                                {project.techUse.map((techItem, index) => <span className="portfolio__tech-use" key={index}>{techItem}</span>)}
                            </div>
                        
                            <div className="portfolio__project-link">
                                {project.iconLinks.map((iconLink, index) => {
                                    return (
                                        <a href={iconLink} target="_blank" rel="noreferrer" className="portfolio__link" key={index}><img src={project.iconImgs[index]} alt='' /></a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
        
    )
}

export default ProjectCard;
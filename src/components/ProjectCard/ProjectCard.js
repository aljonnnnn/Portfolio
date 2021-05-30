import {portfolioData} from './projectCardData'
import { 
    PortfolioBox, 
    PortfolioItem, 
    PortfolioImgLink, 
    PortfolioImage, 
    PorfolioTitle, 
    PortfolioDetails, 
    PorfolioTechContainer, 
    PortfolioTechUse, 
    PortfolioProjectLinkContainer, 
    PortfolioProjectLink} from './projectCardElements'

const ProjectCard = () => {
    return (
        <>
            {portfolioData.projects.slice(0).reverse().map((project, index) => {
                return (
                    <PortfolioBox key={index}>
                        <PortfolioItem>
                            <PortfolioImgLink href={project.projectLink} target="_blank" rel="noreferrer"><PortfolioImage src={project.projectImg} alt="" /></PortfolioImgLink>
                            <PorfolioTitle>{project.projectName}</PorfolioTitle>
                            <PortfolioDetails>{project.projectDetail}</PortfolioDetails>

                            <PorfolioTechContainer>
                                {project.techUse.map((techItem, index) => <PortfolioTechUse key={index}>{techItem}</PortfolioTechUse>)}
                            </PorfolioTechContainer>
                        
                            <PortfolioProjectLinkContainer>
                                {project.iconLinks.map((iconLink, index) => {
                                    return (
                                        <PortfolioProjectLink href={iconLink} target="_blank" rel="noreferrer" key={index}><img src={project.iconImgs[index]} alt='' /></PortfolioProjectLink>
                                    )
                                })}
                            </PortfolioProjectLinkContainer>
                        </PortfolioItem>
                    </PortfolioBox>
                )
            })
            }
        </>
        
    )
}

export default ProjectCard;
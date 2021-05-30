import {portfolioData} from './projectCardData'
import { 
    Box, 
    Item, 
    ImgLink, 
    Image, 
    Title, 
    Detail, 
    TechContainer, 
    TechUse, 
    ProjectLinkContainer, 
    ProjectLink} from './projectCardElements'

const ProjectCard = () => {
    return (
        <>
            {portfolioData.projects.slice(0).reverse().map((project, index) => {
                return (
                    <Box key={index}>
                        <Item>
                            <ImgLink href={project.projectLink} target="_blank" rel="noreferrer"><Image src={project.projectImg} alt="" /></ImgLink>
                            <Title>{project.projectName}</Title>
                            <Detail>{project.projectDetail}</Detail>

                            <TechContainer>
                                {project.techUse.map((techItem, index) => <TechUse key={index}>{techItem}</TechUse>)}
                            </TechContainer>
                        
                            <ProjectLinkContainer>
                                {project.iconLinks.map((iconLink, index) => {
                                    return (
                                        <ProjectLink href={iconLink} target="_blank" rel="noreferrer" key={index}><img src={project.iconImgs[index]} alt='' /></ProjectLink>
                                    )
                                })}
                            </ProjectLinkContainer>
                        </Item>
                    </Box>
                )
            })
            }
        </>
        
    )
}

export default ProjectCard;
import { ProjectCard } from '../../components'
import { portfolioData } from "./myPortfolioData";
import {
  PortfolioSection,
  SectionHeading,
  FlexLayout,
} from "./myPortfolioElements";

const MyPortfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <div className="container">
        <SectionHeading>{portfolioData.title}</SectionHeading>
        <FlexLayout>
          <ProjectCard />
        </FlexLayout>
      </div>
    </PortfolioSection>
  );
};

export default MyPortfolio;

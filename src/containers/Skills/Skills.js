import { skillsData } from "./skillsData";
import {
  SkillsSection,
  SectionHeading,
  FlexLayout,
  Box,
  Item,
  Image,
} from "./skillsElements";

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionHeading>my backpack</SectionHeading>
        <FlexLayout>
          {skillsData.map((skillImg, index) => {
            return (
              <Box key={index}>
                <Item>
                  <Image src={skillImg} alt="" />
                </Item>
              </Box>
            );
          })}
        </FlexLayout>
      </div>
    </SkillsSection>
  );
};

export default Skills;

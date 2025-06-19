// pages/project/Projects.tsx
import tw from 'tailwind-styled-components';
import { projectData } from '../../../data/content/projectData';
import ProjectCard from '../../../components/cards/ProjectCard';

const ProjectWrapper = tw.section`
  w-full
  px-10
  pt-20
  flex
  flex-wrap
  gap-8
  justify-between

  max-xl:justify-start
  max-lg:justify-center
`;

function Projects() {
  return (
    <ProjectWrapper>
      {projectData.map((item) => (
        <ProjectCard
          key={item.id}
          name={item.name}
          price={item.price}
          imgurl={item.imgurl}
        />
      ))}
    </ProjectWrapper>
  );
}

export default Projects;

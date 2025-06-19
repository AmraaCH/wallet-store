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

function Project({ selectedCategory }: { selectedCategory: string }) {
  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <ProjectWrapper>
    <div className="w-full flex flex-wrap justify-between gap-10">
      {filteredProjects.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
    </ProjectWrapper>
  );
}

export default Project;

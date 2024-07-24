import PropTypes from "prop-types";
import ProjectSet from "./ProjectSet ";

const ProjectContainer = ({ projectData }) => {
  return (
    <>
      <div className="project-header">
        {projectData.projects.length > 0
          ? projectData.projects.map((project, index) => (
              <ProjectSet key={index} projectData={project} />
            ))
          : null}
        {projectData.projects.length === 0 ? (
          <ProjectSet projectData={projectData} />
        ) : (
          projectData.addContainer && <ProjectSet projectData={projectData} />
        )}
      </div>
    </>
  );
};

ProjectContainer.propTypes = {
  projectData: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addContainer: PropTypes.bool,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        technologies: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ProjectContainer;

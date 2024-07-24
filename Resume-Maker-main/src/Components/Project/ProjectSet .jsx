import ProjectDescriptionList from "./ProjectDescriptionList ";
import PropTypes from "prop-types";

const ProjectSet = ({ projectData }) => {
  return (
    <div className="project-set">
      <div className="project-set-head">
        <div className="project-set-left">
          <p className="PositionContainer">
            {projectData.projectTitle
              ? projectData.projectTitle
              : "Project Title"}
          </p>
          <pre> | </pre>
          <p className="PositionContainer2">
            {projectData.link ? (
              <a
                href={projectData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectData.link}
              </a>
            ) : (
              "Link"
            )}
          </p>
        </div>
        <div className="project-set-right">
          <p className="technologiesHead">
            {projectData.technologies
              ? projectData.technologies
              : "Technologies"}
          </p>
        </div>
      </div>

      <div className="detailsContainer1">
        {projectData.description ? (
          <ProjectDescriptionList description={projectData.description} />
        ) : (
          <ProjectDescriptionList />
        )}
      </div>
    </div>
  );
};

ProjectSet.propTypes = {
  projectData: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectSet;

import PropTypes from "prop-types";

const ProjectCard = ({ projectTitle, link, onRemove }) => {
  const handleRemove = () => {
    onRemove({ projectTitle, link });
  };

  return (
    <div className="projectCard">
      <div className="projectDetails">
        <h3>{projectTitle}</h3>
      </div>
      <button className="removeButton" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

ProjectCard.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProjectCard;

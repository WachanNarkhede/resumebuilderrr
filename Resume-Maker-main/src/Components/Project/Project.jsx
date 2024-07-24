import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

const Project = ({
  projectData = ProjectData(),
  handleProjectChange,
  handleAddProject,
  handleRemoveProject,
}) => {
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (
      projectData.projectTitle &&
      projectData.link &&
      projectData.technologies &&
      projectData.description
    ) {
      handleAddProject();
    } else {
      alert("Please fill in all fields to save project.");
    }
  };

  const handleClearProject = (e) => {
    e.preventDefault();
    handleProjectChange({ target: { value: "" } }, "projectTitle");
    handleProjectChange({ target: { value: "" } }, "link");
    handleProjectChange({ target: { value: "" } }, "technologies");
    handleProjectChange({ target: { value: "" } }, "description");
    handleProjectChange({ target: { value: [] } }, "projects");
  };

  const handleAddNewProject = (e) => {
    e.preventDefault();
    handleProjectChange({ target: { value: true } }, "addContainer");
  };

  const addedProjects = projectData.projects.map((proj, index) => (
    <ProjectCard
      key={index}
      projectTitle={proj.projectTitle}
      link={proj.link}
      technologies={proj.technologies}
      description={proj.description}
      onRemove={handleRemoveProject}
    />
  ));

  return (
    <section>
      <div className="nameSection">
        <div className="header">
          <h2>Projects:</h2>
          <div className="savBtn">
            <button
              type="button"
              className="cancel"
              onClick={handleClearProject}
            >
              <span className="button_top"> Clear All</span>
            </button>
            <button
              type="button"
              className="save"
              onClick={handleAddNewProject}
            >
              <span className="button_top"> Add More</span>
            </button>
          </div>
        </div>

        <div className="formDiv">
          <div className="projectTitle">
            <label htmlFor="projectTitle">Project:</label>
            <input
              type="text"
              id="projectTitle"
              placeholder="Project Title"
              value={projectData.projectTitle}
              onChange={(e) => handleProjectChange(e, "projectTitle")}
            />
          </div>

          <div className="link">
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              placeholder="Link"
              value={projectData.link}
              onChange={(e) => handleProjectChange(e, "link")}
            />
          </div>
          <div className="technologies">
            <label htmlFor="technologies">Technologies:</label>
            <input
              type="text"
              id="technologies"
              placeholder="Technologies"
              value={projectData.technologies}
              onChange={(e) => handleProjectChange(e, "technologies")}
            />
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="Description"
              value={projectData.description}
              onChange={(e) => handleProjectChange(e, "description")}
            />
          </div>

          <div className="saveProjectDiv">
            <button
              type="button"
              className="saveProject"
              onClick={handleSaveProject}
            >
              <span className="button_top"> Save</span>
            </button>
          </div>

          <div className="added-Project"></div>
          {addedProjects}
        </div>
      </div>
    </section>
  );
};

Project.propTypes = {
  projectData: PropTypes.shape({
    projectTitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        technologies: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }),
  handleProjectChange: PropTypes.func.isRequired,
  handleAddProject: PropTypes.func.isRequired,
  handleRemoveProject: PropTypes.func.isRequired,
};

export default Project;

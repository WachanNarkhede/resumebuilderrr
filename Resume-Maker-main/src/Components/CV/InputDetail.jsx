// InputDetail.jsx
import Accordion from "../Input Section/Accordion";
import Name from "../Person detail/Name";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import PropTypes from "prop-types";

// import Experience from "./Experience";

const InputDetail = ({
  formData,
  handleChange,
  handleAddLink,
  handleRemoveLinks,

  experienceData,
  handleExperienceChange,
  handleAddExperience,
  handleRemoveExperience,

  educationData,
  handleEducationChange,
  handleAddEducation,
  handleRemoveEducation,

  skillsData,
  handleSkillChange,
  handleAddSkill,
  handleRemoveSkill,

  projectData,
  handleProjectChange,
  handleAddProject,
  handleRemoveProject,
  handlePreview,
  handleClearPreview,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="wrapper">
      <Accordion title="Personal Info">
        <Name
          formData={formData}
          handleChange={handleChange}
          handleAddLink={handleAddLink}
          handleRemoveLinks={handleRemoveLinks}
        />
      </Accordion>
      <Accordion title="Experience ">
        <Experience
          experienceData={experienceData}
          handleExperienceChange={handleExperienceChange}
          handleAddExperience={handleAddExperience}
          handleRemoveExperience={handleRemoveExperience}
        />
      </Accordion>
      <Accordion title="Education & Certifications">
        <Education
          educationData={educationData}
          handleEducationChange={handleEducationChange}
          handleAddEducation={handleAddEducation}
          handleRemoveEducation={handleRemoveEducation}
        />
      </Accordion>
      <Accordion title="Skills">
        <Skills
          skillsData={skillsData}
          handleSkillChange={handleSkillChange}
          handleAddSkill={handleAddSkill}
          handleRemoveSkill={handleRemoveSkill}
        />
      </Accordion>
      <Accordion title="Projects">
        <Project
          projectData={projectData}
          handleProjectChange={handleProjectChange}
          handleAddProject={handleAddProject}
          handleRemoveProject={handleRemoveProject}
        />
      </Accordion>
      <div className="buttonContainerMain">
        <button onClick={handlePrint}>
          <span className="button_top"> Print </span>
        </button>
        <button onClick={handlePreview}>
          <span className="button_top"> Sample Preview </span>
        </button>
        <button onClick={handleClearPreview}>
          <span className="button_top"> Clear Preview </span>
        </button>
      </div>
    </div>
  );
};

InputDetail.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddLink: PropTypes.func.isRequired,
  handleRemoveLinks: PropTypes.func.isRequired,
  experienceData: PropTypes.object.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
  handleRemoveExperience: PropTypes.func.isRequired,
  educationData: PropTypes.object.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleAddEducation: PropTypes.func.isRequired,
  handleRemoveEducation: PropTypes.func.isRequired,

  skillsData: PropTypes.object.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  handleAddSkill: PropTypes.func.isRequired,
  handleRemoveSkill: PropTypes.func.isRequired,

  projectData: PropTypes.object.isRequired,
  handleProjectChange: PropTypes.func.isRequired,
  handleAddProject: PropTypes.func.isRequired,
  handleRemoveProject: PropTypes.func.isRequired,

  handlePreview: PropTypes.func.isRequired,
  handleClearPreview: PropTypes.func.isRequired,
};
InputDetail.defaultProps = {
  handlePreview: () => {},
  handleClearPreview: () => {},
};
export default InputDetail;

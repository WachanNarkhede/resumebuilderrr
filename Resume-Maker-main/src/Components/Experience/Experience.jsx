// Experience.jsx

import PropTypes from "prop-types";
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "./ExperienceData";

const Experience = ({
  experienceData = ExperienceData(),
  handleExperienceChange,
  handleAddExperience,
  handleRemoveExperience,
}) => {
  const handleSaveExperience = (e) => {
    e.preventDefault();
    if (
      experienceData.jobTitle &&
      experienceData.company &&
      experienceData.startDate &&
      experienceData.endDate &&
      experienceData.description
    ) {
      handleAddExperience();
    } else {
      alert("Please fill in all fields to save experience.");
    }
  };

  const handleClearExperience = (e) => {
    e.preventDefault();
    handleExperienceChange({ target: { value: "" } }, "jobTitle");
    handleExperienceChange({ target: { value: "" } }, "company");
    handleExperienceChange({ target: { value: "" } }, "location");
    handleExperienceChange({ target: { value: "" } }, "startDate");
    handleExperienceChange({ target: { value: "" } }, "endDate");
    handleExperienceChange({ target: { value: "" } }, "description");
    handleExperienceChange({ target: { value: [] } }, "experiences");
  };

  const handleAddNewExperience = (e) => {
    e.preventDefault();
    handleExperienceChange({ target: { value: true } }, "addContainer");
  };

  const addedExperiences = experienceData.experiences.map((exp, index) => (
    <ExperienceCard
      key={index}
      jobTitle={exp.jobTitle}
      company={exp.company}
      onRemove={handleRemoveExperience}
    />
  ));

  return (
    <section>
      <div className="nameSection">
        <div className="header">
          <h2>Experience:</h2>
          <div className="savBtn">
            <button
              type="button"
              className="cancel"
              onClick={handleClearExperience}
            >
              <span className="button_top"> Clear All</span>
            </button>
            <button
              type="button"
              className="save"
              onClick={handleAddNewExperience}
            >
              <span className="button_top"> Add More</span>
            </button>
          </div>
        </div>

        <div className="formDiv">
          <div className="jobTitle">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Job Title"
              value={experienceData.jobTitle}
              onChange={(e) => handleExperienceChange(e, "jobTitle")}
            />
          </div>

          <div className="company">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              placeholder="Company"
              value={experienceData.company}
              onChange={(e) => handleExperienceChange(e, "company")}
            />
          </div>
          <div className="location">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              placeholder="Location"
              value={experienceData.location}
              onChange={(e) => handleExperienceChange(e, "location")}
            />
          </div>
          <div className="startDate">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="month"
              id="startDate"
              value={experienceData.startDate}
              onChange={(e) => handleExperienceChange(e, "startDate")}
              placeholder="Month YYYY"
            />
          </div>

          <div className="endDate">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="month"
              id="endDate"
              value={experienceData.endDate}
              onChange={(e) => handleExperienceChange(e, "endDate")}
              placeholder="Month YYYY"
            />
          </div>

          <div className="description">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="Description"
              value={experienceData.description}
              onChange={(e) => handleExperienceChange(e, "description")}
            />
          </div>

          <div className="saveExperienceDiv">
            <button
              type="button"
              className="saveExperience"
              onClick={handleSaveExperience}
            >
              <span className="button_top"> Save</span>
            </button>
          </div>

          <div className="added-Experience"></div>
          {addedExperiences}
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  experienceData: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }),
  handleExperienceChange: PropTypes.func.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
  handleRemoveExperience: PropTypes.func.isRequired,
};

export default Experience;

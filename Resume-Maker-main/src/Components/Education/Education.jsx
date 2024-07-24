// Education.jsx

import PropTypes from "prop-types";
import EducationCard from "./EducationCard";
import EducationData from "./EducationData";

const Education = ({
  educationData = EducationData(),
  handleEducationChange,
  handleAddEducation,
  handleRemoveEducation,
}) => {
  const handleSaveEducation = (e) => {
    e.preventDefault();
    if (
      educationData.degree &&
      educationData.institution &&
      educationData.startDate &&
      educationData.endDate &&
      educationData.location
    ) {
      handleAddEducation();
    } else {
      alert("Please fill in all fields to save education.");
    }
  };

  const handleClearEducation = (e) => {
    e.preventDefault();
    handleEducationChange({ target: { value: "" } }, "degree");
    handleEducationChange({ target: { value: "" } }, "institution");
    handleEducationChange({ target: { value: "" } }, "location");
    handleEducationChange({ target: { value: "" } }, "startDate");
    handleEducationChange({ target: { value: "" } }, "endDate");
    handleEducationChange({ target: { value: [] } }, "educations");
  };

  const handleAddNewEducation = (e) => {
    e.preventDefault();
    handleEducationChange({ target: { value: true } }, "addContainer");
  };

  const addedEducation = educationData.educations.map((edu, index) => (
    <EducationCard
      key={index}
      degree={edu.degree}
      institution={edu.institution}
      onRemove={handleRemoveEducation}
    />
  ));

  return (
    <section>
      <div className="nameSection">
        <div className="header">
          <h2>Education:</h2>
          <div className="savBtn">
            <button
              type="button"
              className="cancel"
              onClick={handleClearEducation}
            >
              <span className="button_top"> Clear All</span>
            </button>
            <button
              type="button"
              className="save"
              onClick={handleAddNewEducation}
            >
              <span className="button_top"> Add More</span>
            </button>
          </div>
        </div>

        <div className="formDiv">
          <div className="degree">
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              placeholder="Degree"
              value={educationData.degree}
              onChange={(e) => handleEducationChange(e, "degree")}
            />
          </div>

          <div className="institution">
            <label htmlFor="institution">Institution:</label>
            <input
              type="text"
              id="institution"
              placeholder="Institution"
              value={educationData.institution}
              onChange={(e) => handleEducationChange(e, "institution")}
            />
          </div>
          <div className="location">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              placeholder="Location"
              value={educationData.location}
              onChange={(e) => handleEducationChange(e, "location")}
            />
          </div>
          <div className="startDate">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="month"
              id="startDate"
              value={educationData.startDate}
              onChange={(e) => handleEducationChange(e, "startDate")}
              placeholder="Month YYYY"
            />
          </div>

          <div className="endDate">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="month"
              id="endDate"
              value={educationData.endDate}
              onChange={(e) => handleEducationChange(e, "endDate")}
              placeholder="Month YYYY"
            />
          </div>

          <div className="saveEducationDiv">
            <button
              type="button"
              className="saveEducation"
              onClick={handleSaveEducation}
            >
              <span className="button_top"> Save</span>
            </button>
          </div>

          <div className="added-Education"></div>
          {addedEducation}
        </div>
      </div>
    </section>
  );
};

Education.propTypes = {
  educationData: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    educations: PropTypes.arrayOf(
      PropTypes.shape({
        degree: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
      })
    ),
  }),
  handleEducationChange: PropTypes.func.isRequired,
  handleAddEducation: PropTypes.func.isRequired,
  handleRemoveEducation: PropTypes.func.isRequired,
};

export default Education;

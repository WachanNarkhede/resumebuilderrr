// EducationContainer.jsx
import PropTypes from "prop-types";
import EducationSet from "./EducationSet ";

const EducationContainer = ({ educationData }) => {
  return (
    <>
      <div className="education-header">
        {educationData.educations.length > 0
          ? educationData.educations.map((education, index) => (
              <EducationSet key={index} educationData={education} />
            ))
          : null}
        {educationData.educations.length === 0 ? (
          <EducationSet educationData={educationData} />
        ) : (
          educationData.addContainer && (
            <EducationSet educationData={educationData} />
          )
        )}
      </div>
    </>
  );
};

EducationContainer.propTypes = {
  educationData: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    addContainer: PropTypes.bool,
    educations: PropTypes.arrayOf(
      PropTypes.shape({
        degree: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default EducationContainer;

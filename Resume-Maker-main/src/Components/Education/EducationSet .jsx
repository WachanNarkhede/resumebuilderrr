import PropTypes from "prop-types";

const EducationSet = ({ educationData }) => {
  return (
    <div className="education-set">
      <div className="education-set-head">
        <div className="education-set-left">
          <p className="InstitutionContainer">
            {educationData.institution
              ? educationData.institution
              : "Institution"}
          </p>
          <p className="DegreeContainer">
            {educationData.degree ? `-  ${educationData.degree}` : "Degree"}
          </p>
        </div>

        <div className="education-set-right">
          <p className="dateHead">
            {educationData.startDate && educationData.endDate
              ? `${educationData.startDate} - ${educationData.endDate}`
              : educationData.startDate && !educationData.endDate
              ? `${educationData.startDate} - Month YYYY`
              : !educationData.startDate && educationData.endDate
              ? `Month YYYY - ${educationData.endDate}`
              : "Month YYYY - Month YYYY"}
          </p>
          <p className="locationHead">
            {educationData.location ? educationData.location : "Location"}
          </p>
        </div>
      </div>
    </div>
  );
};

EducationSet.propTypes = {
  educationData: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationSet;

import JobDescriptionList from "./JobDescriptionList ";
import PropTypes from "prop-types";

const ExperienceSet = ({ experienceData }) => {
  return (
    <div className="experience-set">
      <div className="experience-set-head">
        <div className="experience-set-left">
          <p className="PositionContainer">
            {experienceData.company ? experienceData.company : "Company"}
          </p>
          <pre> | </pre>
          <p className="PositionContainer2">
            {experienceData.jobTitle ? experienceData.jobTitle : "Position"}
          </p>
        </div>
        <div className="experience-set-right">
          <p className="locationHead">
            {experienceData.location ? experienceData.location : "Location"}
          </p>
          <pre> | </pre>
          <p className="dateHead">
            {experienceData.startDate && experienceData.endDate
              ? `${experienceData.startDate} - ${experienceData.endDate}`
              : experienceData.startDate && !experienceData.endDate
              ? `${experienceData.startDate} - Month YYYY`
              : !experienceData.startDate && experienceData.endDate
              ? `Month YYYY - ${experienceData.endDate}`
              : "Month YYYY - Month YYYY"}
          </p>
        </div>
      </div>

      <div className="detailsContainer1">
        {experienceData.description ? (
          <JobDescriptionList description={experienceData.description} />
        ) : (
          <JobDescriptionList />
        )}
      </div>
    </div>
  );
};
ExperienceSet.propTypes = {
  experienceData: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default ExperienceSet;

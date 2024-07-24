// ExperienceContainer.jsx
import PropTypes from "prop-types";
import ExperienceSet from "./ExperienceSet ";

const ExperienceContainer = ({ experienceData }) => {
  return (
    <>
      <div className="experience-header">
        {experienceData.experiences.length > 0
          ? experienceData.experiences.map((experience, index) => (
              <ExperienceSet key={index} experienceData={experience} />
            ))
          : null}
        {experienceData.experiences.length === 0 ? (
          <ExperienceSet experienceData={experienceData} />
        ) : (
          experienceData.addContainer && (
            <ExperienceSet experienceData={experienceData} />
          )
        )}
      </div>
    </>
  );
};
ExperienceContainer.propTypes = {
  experienceData: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addContainer: PropTypes.bool,
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
export default ExperienceContainer;

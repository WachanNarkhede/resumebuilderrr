import PropTypes from "prop-types";

const ExperienceCard = ({ jobTitle, company, onRemove }) => {
  const handleRemove = () => {
    onRemove({ jobTitle, company });
  };

  return (
    <div className="experienceCard">
      <div className="experienceDetails">
        <h3>{jobTitle}</h3>
        <p>{company}</p>
      </div>
      <button className="removeButton" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

ExperienceCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ExperienceCard;

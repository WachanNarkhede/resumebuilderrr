import PropTypes from "prop-types";

const EducationCard = ({ degree, institution, onRemove }) => {
  const handleRemove = () => {
    onRemove({ degree, institution });
  };

  return (
    <div className="educationCard">
      <div className="educationDetails">
        <h3>{degree}</h3>
        <p>{institution}</p>
      </div>
      <button className="removeButton" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

EducationCard.propTypes = {
  degree: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default EducationCard;

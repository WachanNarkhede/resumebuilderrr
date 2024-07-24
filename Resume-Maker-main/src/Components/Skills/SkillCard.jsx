// SkillCard.jsx

import PropTypes from "prop-types";

const SkillCard = ({ skill, category, onRemove }) => {
  const handleRemove = () => {
    onRemove(skill, category);
  };

  return (
    <div className="skillCard ">
      <div className="skillDetails">
        <p>{skill}</p>
      </div>
      <button className="removeButton" onClick={handleRemove}>
        <img
          src="/xmark-solid.svg"
          alt={`remove skills${skill}`}
          width="20"
          height="20"
        />
      </button>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default SkillCard;

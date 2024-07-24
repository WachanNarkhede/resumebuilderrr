import PropTypes from "prop-types";

const SkillSet = ({ skills, category }) => {
  return (
    <div className="skill-set">
      <div className="skill-set-head">
        <p className="category">{category} : </p>
        <p className="skills">{skills.join(", ")}</p>
      </div>
    </div>
  );
};

SkillSet.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
};

export default SkillSet;

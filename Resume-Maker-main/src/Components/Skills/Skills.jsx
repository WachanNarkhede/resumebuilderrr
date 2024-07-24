// Skills.jsx

import PropTypes from "prop-types";
import SkillCard from "./SkillCard";
import SkillData from "./SkillData";

const Skills = ({
  skillsData = SkillData(),
  handleSkillChange,
  handleAddSkill,
  handleRemoveSkill,
}) => {
  const handleClearSkill = (e, category) => {
    e.preventDefault();
    handleSkillChange({ target: { value: "" } }, category);
  };

  const handleAddNewSkill = (e, category) => {
    e.preventDefault();
    const trimmedCategory = category.slice(0, -1);
    const dynamicValue = skillsData[trimmedCategory];
    const newSkill = dynamicValue;
    if (newSkill) {
      handleAddSkill(category);
      handleSkillChange({ target: { value: "" } }, trimmedCategory);
    } else {
      alert("Please enter a skill to save.");
    }
  };

  const renderSkills = (category) => {
    if (Array.isArray(skillsData[category])) {
      return (
        <div className="skillcard-container">
          {skillsData[category].map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              category={category}
              onRemove={handleRemoveSkill}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  };
  const renderAddNewButton = (category) => {
    return (
      <button
        type="button"
        className="addButton"
        onClick={(e) => handleAddNewSkill(e, category)}
      >
        <span className="button_top"> Add </span>
      </button>
    );
  };

  return (
    <section>
      <div className="nameSection">
        <div className="header">
          <h2>Skills:</h2>
        </div>

        {/* Programming Languages */}
        <div className="skillCategory">
          <h3>Programming Languages:</h3>

          <div className="formDiv1">
            <input
              type="text"
              placeholder="Add Programming Language"
              value={skillsData.programmingLanguage}
              onChange={(e) => handleSkillChange(e, "programmingLanguage")}
              className="input-small"
            />
            <div className="savBtn">
              {renderAddNewButton("programmingLanguages")}
              <button
                type="button"
                className="clearButton"
                onClick={(e) => handleClearSkill(e, "programmingLanguage")}
              >
                <span className="button_top"> Clear </span>
              </button>
            </div>
          </div>
          {renderSkills("programmingLanguages")}
        </div>
        {/* 
        {/* Libraries/Frameworks */}
        <div className="skillCategory">
          <h3>Libraries/Frameworks:</h3>

          <div className="formDiv1">
            <input
              type="text"
              placeholder="Add Library/Framework"
              value={skillsData.librariesFramework}
              onChange={(e) => handleSkillChange(e, "librariesFramework")}
              className="input-small"
            />
            <div className="savBtn">
              {renderAddNewButton("librariesFrameworks")}
              <button
                type="button"
                className="clearButton"
                onClick={(e) => handleClearSkill(e, "librariesFramework")}
              >
                <span className="button_top"> Clear </span>
              </button>
            </div>
          </div>
          {renderSkills("librariesFrameworks")}
        </div>

        {/* Tools/Platform */}
        <div className="skillCategory">
          <h3>Tools/Platform:</h3>
          <div className="formDiv1">
            <input
              type="text"
              placeholder="Add Tool/Platform"
              value={skillsData.toolsPlatform}
              onChange={(e) => handleSkillChange(e, "toolsPlatform")}
              className="input-small"
            />
            <div className="savBtn">
              {renderAddNewButton("toolsPlatforms")}
              <button
                type="button"
                className="clearButton"
                onClick={(e) => handleClearSkill(e, "toolsPlatform")}
              >
                <span className="button_top"> Clear </span>
              </button>
            </div>
          </div>
          {renderSkills("toolsPlatforms")}
        </div>

        {/* Databases */}
        <div className="skillCategory">
          <h3>Databases:</h3>

          <div className="formDiv1">
            <input
              type="text"
              placeholder="Add Database"
              value={skillsData.database}
              onChange={(e) => handleSkillChange(e, "database")}
              className="input-small"
            />
            <div className="savBtn">
              {renderAddNewButton("databases")}
              <button
                type="button"
                className="clearButton"
                onClick={(e) => handleClearSkill(e, "database")}
              >
                <span className="button_top"> Clear </span>
              </button>
            </div>
          </div>

          {renderSkills("databases")}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  skillsData: PropTypes.shape({
    programmingLanguages: PropTypes.arrayOf(PropTypes.string.isRequired),
    librariesFrameworks: PropTypes.arrayOf(PropTypes.string.isRequired),
    toolsPlatforms: PropTypes.arrayOf(PropTypes.string.isRequired),
    databases: PropTypes.arrayOf(PropTypes.string.isRequired),
    programmingLanguage: PropTypes.string.isRequired,
    librariesFramework: PropTypes.string.isRequired,
    toolsPlatform: PropTypes.string.isRequired,
    database: PropTypes.string.isRequired,
  }),
  handleSkillChange: PropTypes.func.isRequired,
  handleAddSkill: PropTypes.func.isRequired,
  handleRemoveSkill: PropTypes.func.isRequired,
};
export default Skills;

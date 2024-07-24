import PropTypes from "prop-types";
import SkillSet from "./SkillSet";

const SkillContainer = ({ skillsData }) => {
  const categories = [
    {
      key: "programmingLanguages",
      category: "Programming Languages",
    },
    {
      key: "librariesFrameworks",
      category: "Libraries/Frameworks",
    },
    {
      key: "toolsPlatforms",
      category: "Tools/Platform",
    },
    {
      key: "databases",
      category: "Databases",
    },
  ];

  return (
    <div className="skill-header">
      {categories.map(
        ({ key, category }) =>
          skillsData[key].length > 0 && (
            <SkillSet key={key} category={category} skills={skillsData[key]} />
          )
      )}

      {skillsData.programmingLanguages.length === 0 &&
        skillsData.librariesFrameworks.length === 0 &&
        skillsData.toolsPlatforms.length === 0 &&
        skillsData.databases.length === 0 && (
          <SkillSet category="Skills" skills={[]} />
        )}

      {skillsData.addContainer && <SkillSet category="Skills" skills={[]} />}
    </div>
  );
};

SkillContainer.propTypes = {
  skillsData: PropTypes.shape({
    programmingLanguages: PropTypes.arrayOf(PropTypes.string.isRequired),
    librariesFrameworks: PropTypes.arrayOf(PropTypes.string.isRequired),
    toolsPlatforms: PropTypes.arrayOf(PropTypes.string.isRequired),
    databases: PropTypes.arrayOf(PropTypes.string.isRequired),
    programmingLanguage: PropTypes.string.isRequired,
    librariesFramework: PropTypes.string.isRequired,
    toolsPlatform: PropTypes.string.isRequired,
    database: PropTypes.string.isRequired,
    addContainer: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SkillContainer;

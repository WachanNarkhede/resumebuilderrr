import PropTypes from "prop-types";

const ProjectDescriptionList = ({ description }) => {
  return (
    <ul className="jobDetailList">
      {description.split("\n").map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))}
    </ul>
  );
};

ProjectDescriptionList.defaultProps = {
  description: "Add Job Details",
};

ProjectDescriptionList.propTypes = {
  description: PropTypes.string,
};

export default ProjectDescriptionList;

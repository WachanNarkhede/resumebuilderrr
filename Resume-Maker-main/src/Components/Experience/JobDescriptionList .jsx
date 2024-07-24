import PropTypes from "prop-types";

const JobDescriptionList = ({ description }) => {
  return (
    <ul className="jobDetailList">
      {description.split("\n").map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))}
    </ul>
  );
};

JobDescriptionList.defaultProps = {
  description: "Add Job Details",
};

JobDescriptionList.propTypes = {
  description: PropTypes.string,
};

export default JobDescriptionList;

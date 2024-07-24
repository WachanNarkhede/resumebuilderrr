import IconLink from "./IconLink";
import PropTypes from "prop-types";

const ResumeHeader = ({ formData }) => {
  return (
    <>
      <div className="resume-header">
        <h2>
          {formData.name ? formData.name.toUpperCase() : "FirstName LastName"}
        </h2>
        <div className="detailsContainer">
          <p className="detailHead">
            {formData.email
              ? `${formData.email + " | "}`
              : `  your.email@email.com | `}
          </p>
          <p className="detailHead">
            {formData.number
              ? `${formData.number + " | "}`
              : ` +1(234)567-8910 | `}
          </p>
          <p className="detailHead">
            {formData.location
              ? `${formData.location}`
              : `  Location, Country `}
          </p>
        </div>
        <div className="detailsContainer">
          {formData.links.map((link, index) => (
            <IconLink
              key={index}
              iconSrc={`./${link.linkType}.svg`}
              altText={`${link.linkType} Icon`}
              linkUrl={link.url}
              isLast={index === formData.links.length - 1}
            />
          ))}
        </div>
        <br />
      </div>
    </>
  );
};
ResumeHeader.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        linkType: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default ResumeHeader;

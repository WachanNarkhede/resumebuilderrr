import PropTypes from "prop-types";

const IconLink = ({ iconSrc, altText, linkUrl, isLast }) => {
  return (
    <>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={iconSrc} alt={altText} width="20" height="20" />
      </a>
      {!isLast && " | "}
    </>
  );
};
IconLink.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};
export default IconLink;

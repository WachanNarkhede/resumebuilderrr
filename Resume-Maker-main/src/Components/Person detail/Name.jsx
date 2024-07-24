import PropTypes from "prop-types";

const Name = ({ formData, handleChange, handleAddLink, handleRemoveLinks }) => {
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Form data saved:", formData);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleChange({ target: { value: "" } }, "name");
    handleChange({ target: { value: "" } }, "location");
    handleChange({ target: { value: "" } }, "email");
    handleChange({ target: { value: "" } }, "number");
    handleChange({ target: { value: "Linkedin" } }, "linkType");
    handleChange({ target: { value: "" } }, "url");
    handleChange({ target: { value: [] } }, "links");
    handleChange({ target: { value: false } }, "submitted");
  };

  const handleSaveLink = (e) => {
    e.preventDefault();
    handleAddLink({ linkType: formData.linkType, url: formData.url });
  };
  const handleClearLink = (e) => {
    handleRemoveLinks(e);
  };
  return (
    <section>
      <div className="nameSection">
        <div className="header">
          <h2>User Details:</h2>
          <div className="savBtn">
            <button type="button" className="cancel" onClick={handleCancel}>
              <span className="button_top"> Cancel</span>
            </button>
            <button type="button" className="save" onClick={handleSave}>
              <span className="button_top"> Save</span>
            </button>
          </div>
        </div>

        <div className="formDiv">
          <div className="nameS">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange(e, "name")}
            />
          </div>

          <div className="locationS">
            <label htmlFor="location" className="locations1">
              Location:
            </label>
            <input
              type="text"
              id="location"
              placeholder="Location"
              value={formData.location}
              onChange={(e) => handleChange(e, "location")}
            />
          </div>

          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
            />
          </div>

          <div className="numberS">
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={(e) => handleChange(e, "number")}
              pattern="\+1\(\d{3}\)\d{3}-\d{4}"
              title="Phone number must be in the format +1(238)456-7890"
            />
          </div>

          <div className="nameLoc">
            <label htmlFor="linkType">Link Type:</label>
            <select
              id="linkType"
              value={formData.linkType}
              onChange={(e) => handleChange(e, "linkType")}
            >
              <option value="Linkedin">Linkedin</option>
              <option value="Github">Github</option>
              <option value="Portfolio">Portfolio</option>
            </select>
          </div>

          <div className="nameLoc">
            <label htmlFor="url" className="linkUrl">
              Link:
            </label>
            <input
              type="url"
              id="url"
              placeholder="URL"
              value={formData.url}
              onChange={(e) => handleChange(e, "url")}
            />
          </div>

          <div className="saveLinkDiv">
            <button type="button" className="saveLink" onClick={handleSaveLink}>
              <span className="button_top"> Save Link</span>
            </button>
            <button
              type="button"
              className="ClearLink"
              onClick={handleClearLink}
            >
              <span className="button_top"> Clear Links</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
Name.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddLink: PropTypes.func.isRequired,
  handleRemoveLinks: PropTypes.func.isRequired,
};

export default Name;

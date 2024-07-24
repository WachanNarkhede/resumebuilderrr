// ResumeHead.jsx
import ResumeHeader from "../Person detail/ResumeHeader";
import ExperienceContainer from "../Experience/ExperienceContainer";
import EducationContainer from "../Education/EducationContainer";
import SkillContainer from "../Skills/SkillContainer";
import ProjectContainer from "../Project/ProjectContainer";

import PropTypes from "prop-types";

const ResumeContainer = ({
  formData,
  experienceData,
  educationData,
  skillsData,
  projectData,
  defaultProfileData,
  preview,
}) => {
  return (
    <div className="a4-container">
      {preview ? (
        <>
          <ResumeHeader formData={defaultProfileData.personalInfo} />
          <h3 className="Section-container">Experience :</h3>
          <ExperienceContainer
            experienceData={defaultProfileData.experienceDefaultData}
          />
          <h3 className="Section-container1">Education & Certifications :</h3>
          <EducationContainer
            educationData={defaultProfileData.educationDefaultData}
          />
          <h3 className="Section-container1">Skills :</h3>
          <SkillContainer skillsData={defaultProfileData.skillDefaultData} />
          <h3 className="Section-container1">Projects :</h3>
          <ProjectContainer
            projectData={defaultProfileData.projectDefaultData}
          />
        </>
      ) : (
        <>
          <ResumeHeader formData={formData} />
          <h3 className="Section-container">Experience :</h3>
          <ExperienceContainer experienceData={experienceData} />
          <h3 className="Section-container1">Education & Certifications :</h3>
          <EducationContainer educationData={educationData} />
          <h3 className="Section-container1">Skills :</h3>
          <SkillContainer skillsData={skillsData} />
          <h3 className="Section-container1">Projects :</h3>
          <ProjectContainer projectData={projectData} />
        </>
      )}
    </div>
  );
};
ResumeContainer.propTypes = {
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
  experienceData: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addContainer: PropTypes.bool,
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  educationData: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    addContainer: PropTypes.bool,
    educations: PropTypes.arrayOf(
      PropTypes.shape({
        degree: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
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
  projectData: PropTypes.shape({
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        technologies: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    addContainer: PropTypes.bool.isRequired,
  }).isRequired,
  defaultProfileData: PropTypes.shape({
    personalInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          linkType: PropTypes.string,
          url: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
    experienceDefaultData: PropTypes.shape({
      jobTitle: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      addContainer: PropTypes.bool,
      experiences: PropTypes.arrayOf(
        PropTypes.shape({
          jobTitle: PropTypes.string.isRequired,
          company: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          startDate: PropTypes.string.isRequired,
          endDate: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          addContainer: PropTypes.bool,
        })
      ).isRequired,
    }).isRequired,
    educationDefaultData: PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      addContainer: PropTypes.bool,
      educations: PropTypes.arrayOf(
        PropTypes.shape({
          degree: PropTypes.string.isRequired,
          institution: PropTypes.string.isRequired,
          startDate: PropTypes.string.isRequired,
          endDate: PropTypes.string.isRequired,
        })
      ),
    }).isRequired,
    skillDefaultData: PropTypes.shape({
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
    projectDefaultData: PropTypes.shape({
      projects: PropTypes.arrayOf(
        PropTypes.shape({
          projectTitle: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          technologies: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          addContainer: PropTypes.bool.isRequired,
        })
      ).isRequired,
      addContainer: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  preview: PropTypes.bool.isRequired,
};

export default ResumeContainer;

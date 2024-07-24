// CV.jsx
import InputDetail from "../CV/InputDetail";
import ResumeContainer from "../CV/ResumeContainer";
import HeadData from "../Person detail/HeadData";
import ExperienceData from "../Experience/ExperienceData";
import EducationData from "../Education/EducationData";
import ProjectData from "../Project/ProjectData";
import SkillData from "../Skills/SkillData";
import DefaultProfileData from "../CV/DefaultProfileData";

import { useState } from "react";

const Cv = () => {
  const initialFormData = HeadData();
  const initialExperienceData = ExperienceData();
  const initialEducationData = EducationData();
  const [formData, setFormData] = useState(initialFormData);
  const [experienceData, setExperienceData] = useState(initialExperienceData);
  const [educationData, setEducationData] = useState(initialEducationData);
  const initialSkillsData = SkillData();
  const [skillsData, setSkillsData] = useState(initialSkillsData);
  const initialProjectData = ProjectData();
  const [projectData, setProjectData] = useState(initialProjectData);
  const defaultProfileData = DefaultProfileData;
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    setPreview(true);
  };

  const handleClearPreview = () => {
    setPreview(false);
  };

  const handleChange = (e, id) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
  };

  const handleAddLink = ({ linkType, url }) => {
    const linkExists = formData.links.some(
      (link) => link.linkType === linkType && link.url === url
    );

    if (!linkExists) {
      setFormData((prevState) => ({
        ...prevState,
        links: [...prevState.links, { linkType, url }],
        linkType: "Linkedin",
        url: "",
      }));
    } else {
      alert("Link already exists");
    }
  };

  const handleRemoveLinks = () => {
    setFormData((prevState) => ({
      ...prevState,
      links: [],
      linkType: "Linkedin",
      url: "",
    }));
  };

  const handleExperienceChange = (e, id) => {
    setExperienceData((prevExperienceData) => ({
      ...prevExperienceData,
      [id]: e.target.value,
    }));
  };

  const handleAddExperience = () => {
    if (
      experienceData.jobTitle &&
      experienceData.company &&
      experienceData.startDate &&
      experienceData.endDate &&
      experienceData.description
    ) {
      setExperienceData((prevExperienceData) => ({
        ...prevExperienceData,
        experiences: [
          ...prevExperienceData.experiences,
          {
            jobTitle: experienceData.jobTitle,
            company: experienceData.company,
            location: experienceData.location,
            startDate: experienceData.startDate,
            endDate: experienceData.endDate,
            description: experienceData.description,
            addContainer: experienceData.addContainer,
          },
        ],
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        addContainer: false,
      }));
    } else {
      alert("Please fill in all fields to add experience.");
    }
  };

  const handleRemoveExperience = (experienceToRemove) => {
    setExperienceData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.filter(
        (exp) =>
          exp.jobTitle !== experienceToRemove.jobTitle ||
          exp.company !== experienceToRemove.company
      ),
    }));
  };

  const handleEducationChange = (e, id) => {
    setEducationData((prevEducationData) => ({
      ...prevEducationData,
      [id]: e.target.value,
    }));
  };

  const handleAddEducation = () => {
    if (
      educationData.degree &&
      educationData.institution &&
      educationData.startDate &&
      educationData.endDate &&
      educationData.location
    ) {
      setEducationData((prevEducationData) => ({
        ...prevEducationData,
        educations: [
          ...prevEducationData.educations,
          {
            degree: educationData.degree,
            institution: educationData.institution,
            location: educationData.location,
            startDate: educationData.startDate,
            endDate: educationData.endDate,
            addContainer: educationData.addContainer,
          },
        ],
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        addContainer: false,
      }));
    } else {
      alert("Please fill in all fields to add education.");
    }
  };

  const handleRemoveEducation = (educationToRemove) => {
    setEducationData((prevData) => ({
      ...prevData,
      educations: prevData.educations.filter(
        (edu) =>
          edu.degree !== educationToRemove.degree ||
          edu.institution !== educationToRemove.institution
      ),
    }));
  };

  const handleSkillChange = (e, category) => {
    setSkillsData((prevSkillsData) => ({
      ...prevSkillsData,
      [category]: e.target.value,
    }));
  };

  const handleAddSkill = (category) => {
    const trimmedCategory = category.slice(0, -1);
    const dynamicValue = skillsData[trimmedCategory];
    if (dynamicValue) {
      setSkillsData((prevSkillsData) => ({
        ...prevSkillsData,
        [category]: [...prevSkillsData[category], dynamicValue],
      }));
    } else {
      alert("Please enter a skill to save.");
    }
  };

  const handleRemoveSkill = (skillToRemove, category) => {
    setSkillsData((prevSkillsData) => ({
      ...prevSkillsData,
      [category]: prevSkillsData[category].filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };
  const handleProjectChange = (e, id) => {
    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [id]: e.target.value,
    }));
  };

  const handleAddProject = () => {
    if (
      projectData.projectTitle &&
      projectData.link &&
      projectData.technologies &&
      projectData.description
    ) {
      setProjectData((prevProjectData) => ({
        ...prevProjectData,
        projects: [
          ...prevProjectData.projects,
          {
            projectTitle: projectData.projectTitle,
            link: projectData.link,
            technologies: projectData.technologies,
            description: projectData.description,
            addContainer: projectData.addContainer,
          },
        ],
        projectTitle: "",
        link: "",
        technologies: "",
        description: "",
        addContainer: false,
      }));
    } else {
      alert("Please fill in all fields to add a project.");
    }
  };

  const handleRemoveProject = (projectToRemove) => {
    setProjectData((prevData) => ({
      ...prevData,
      projects: prevData.projects.filter(
        (proj) =>
          proj.projectTitle !== projectToRemove.projectTitle ||
          proj.link !== projectToRemove.link
      ),
    }));
  };
  return (
    <main>
      <InputDetail
        formData={formData}
        handleChange={handleChange}
        handleAddLink={handleAddLink}
        handleRemoveLinks={handleRemoveLinks}
        experienceData={experienceData}
        handleExperienceChange={handleExperienceChange}
        handleAddExperience={handleAddExperience}
        handleRemoveExperience={handleRemoveExperience}
        educationData={educationData}
        handleEducationChange={handleEducationChange}
        handleAddEducation={handleAddEducation}
        handleRemoveEducation={handleRemoveEducation}
        skillsData={skillsData}
        handleSkillChange={handleSkillChange}
        handleAddSkill={handleAddSkill}
        handleRemoveSkill={handleRemoveSkill}
        projectData={projectData}
        handleProjectChange={handleProjectChange}
        handleAddProject={handleAddProject}
        handleRemoveProject={handleRemoveProject}
        handlePreview={handlePreview}
        handleClearPreview={handleClearPreview}
      />
      <ResumeContainer
        formData={formData}
        experienceData={experienceData}
        educationData={educationData}
        skillsData={skillsData}
        projectData={projectData}
        defaultProfileData={defaultProfileData}
        preview={preview}
      />
    </main>
  );
};

export default Cv;

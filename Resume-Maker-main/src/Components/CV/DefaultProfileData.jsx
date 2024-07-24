const DefaultProfileData = {
  personalInfo: {
    name: "Success Ambaliya",
    location: "Toronto, Canada",
    email: "success.ambaliya@gmail.com",
    number: "+1(438)722-9612",
    links: [
      { linkType: "Github", url: "https://github.com/Success1308" },
      {
        linkType: "Linkedin",
        url: "https://www.linkedin.com/in/success-ambaliya/",
      },
      {
        linkType: "Portfolio",
        url: "https://success1308.github.io/Portfolio/",
      },
    ],
  },
  experienceDefaultData: {
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    experiences: [
      {
        jobTitle: "Frontend Web Developer",
        company: "Boom IT World LTD.",
        location: "Remote",
        startDate: "Jan 2022",
        endDate: "Present",
        description: `Implemented responsive front-end designs using HTML5, CSS, JavaScript, and JQuery, ensuring optimal user experience across various devices.
          Frontend development and design from concept through to final app deployment
          Conducted thorough cross-browser testing and QA reviews to guarantee seamless functionality and user interface consistency.
          Check all UX and UI designs for technical feasibility and Agile and Scrum principles
          Collaborated with sales & development team (15 member team) to implement feature development
          Wrote technical copy for agency projects and blog
          Contributed actively in web team meetings and project teams, providing expertise in front-end development and maintaining positive client relationships.
          Analyzed website performance metrics using tools like Google Analytics, driving SEO improvements and enhancing user experience through informed design decisions.
          Collaborated with design and development teams to improve information architecture, user experience, and mobile optimization, enhancing overall website usability and engagement.`,
        addContainer: true,
      },
      {
        jobTitle: "Business Automation Consultant",
        company: "CIBC",
        location: "Toronto, Canada",
        startDate: "Apr 2022",
        endDate: "Apr 2024",
        description: `Analyze business processes and workflows to identify opportunities for automation and optimization.
          Design and develop automation solutions using appropriate technologies and frameworks, ensuring compatibility with existing systems.
          Implement and integrate automation solutions into the business environment, ensuring reliability, scalability, and security.
          Create documentation and provide training to users on newly implemented systems and processes.
          Continuously monitor and optimize automated processes to improve efficiency and performance.
          Stay updated on emerging technologies and industry trends relevant to automation and web development.
          Participate in testing and quality assurance processes to ensure solutions meet business requirements and standards.
          Collaborate with cross-functional teams including developers, stakeholders, and end-users to gather requirements and refine solutions.`,
        addContainer: true,
      },
    ],
    addContainer: false,
  },
  educationDefaultData: {
    degree: "",
    institution: "",
    location: "",
    startDate: "",
    endDate: "",
    educations: [
      {
        institution: "University of Manitoba",
        location: "Winnipeg, Canada",
        degree: "Applied Business Management",
        startDate: "Jan 2021",
        endDate: "Dec 2021",
        addContainer: true,
      },
      {
        institution: "Cégep de la Gaspésie et des Îles",
        location: "Montreal, Canada",
        degree: "Project Management",
        startDate: "Jan 2020",
        endDate: "Dec 2020",
        addContainer: true,
      },
      {
        institution: "Birla Vishvakarma Mahavidyalaya",
        location: "Gujarat, India",
        degree: "Infrastructure engineering and technology Master's degree",
        startDate: "Jul 2017",
        endDate: "May 2019",
        addContainer: true,
      },
      {
        institution: "MGITER",
        location: "Gujarat, India",
        degree: "Computer Science Bachelor's degree",
        startDate: "July 2013",
        endDate: "May 2017",
        addContainer: true,
      },
    ],
    addContainer: false,
  },
  skillDefaultData: {
    programmingLanguage: "",
    librariesFramework: "",
    toolsPlatform: "",
    database: "",
    addContainer: false,
    programmingLanguages: [
      "Java",
      "Javascript",
      "HTML",
      "CSS",
      "Python",
      "jQuery",
      "ESNext",
      "C",
      "Typescript",
      "ECMAScript",
    ],
    librariesFrameworks: [
      "Bootstrap",
      "Tailwind",
      "Node.js",
      "React.js",
      "Express.js",
      "Framer Motion",
      "Generative AI",
      "Webpack",
    ],
    toolsPlatforms: [
      "WordPress",
      "Git",
      "GitHub",
      "MERN Stack",
      "Adobe Suite",
      "Figma",
      "npm",
      "Canva",
      "Slack",
      "UX responsive design",
      "VSCode",
      "Chrome DevTools",
      "Windows",
      "Mac",
      "CDNs - REST APIs",
      "Progressive Web Apps",
    ],
    databases: ["MongoDB", "MySQL", "SQLite"],
  },
  projectDefaultData: {
    projectTitle: "",
    link: "",
    technologies: "",
    description: "",
    projects: [
      {
        projectTitle: "HaveTo-Do",
        link: "Link",
        technologies: "HTML5 - CSS3 - JavaScript (ES6+) - Git - npm - Webpack",
        description: `Intuitive Interface: Effortlessly manage tasks with our user-friendly design.
        Modular Design: Simplified maintenance and future enhancements with a well-organized codebase.
        Random Quote Display: Display a random quote from a curated list or a user-defined collection.`,
        addContainer: true,
      },
      {
        projectTitle: "WeatherWizz",
        link: "Link",
        technologies:
          "HTML5 - CSS3 - JavaScript (ES6+) - Async API calls - Git - npm- Webpack",
        description: `User-friendly interface: Easy to navigate and understand
        Dynamic weather updates: Stay up-to-date with the latest weather conditions
        Visually appealing design: A sleek and modern look that's easy on the eyes
        Responsive and adaptive layout: Works perfectly on any device!`,
        addContainer: true,
      },
      {
        projectTitle: "The Wizard's Library",
        link: "Link",
        technologies: "HTML5 - CSS3 - JavaScript (ES6+) - Git",
        description: `Magical User Interface: Enjoy an enchanting and easy-to-navigate interface inspired by the wizarding world.
        Book Management: Effortlessly track your reading progress and manage book details with simplicity.`,
        addContainer: true,
      },
      {
        projectTitle: "Tic-Tac-Toe",
        link: "Link",
        technologies: "HTML5 - CSS3 - JavaScript (ES6+) - Git",
        description: `Simplified Gameplay: Experience intuitive gameplay mechanics designed for quick learning and enjoyment.
        Player Options: Play against a friend locally or test your skills against an AI opponent with adjustable difficulty levels.`,
        addContainer: true,
      },
      {
        projectTitle: "The Odin Project",
        link: "Link",
        technologies: "HTML5 - CSS3 - JavaScript (ES6+) - Git - npm - Webpack",
        description: `Hands-On Learning: Engaging in practical learning through project-based assignments and tutorials on The Odin Project platform.
        Skill Development: Mastering HTML5, CSS3, JavaScript (ES6+), Git, npm, and Webpack through structured curriculum and hands-on projects.`,
        addContainer: true,
      },
      {
        projectTitle: "Spotify Clone",
        link: "Link",
        technologies: "HTML5 - CSS3 - JavaScript (ES6+) - Git",
        description: `Simple web-based Spotify clone with basic music player Frontend and playlist Frontend practice.`,
        addContainer: true,
      },
    ],
    addContainer: false,
  },
};

export default DefaultProfileData;

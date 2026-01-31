/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rakshith Bhat",
  title: "Hi, I'm Rakshith",
  subTitle: emoji(
    "Full Stack Engineer expert in TypeScript/React and Node.js. Proven track record of building scalable, AI-integrated web apps and real-time features on AWS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qK6zx8-EJUBlBDQnftLF6V3F238SdPof/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RakshithBhat03",
  linkedin: "https://www.linkedin.com/in/rakshithbhat",
  gmail: "rakshith6666@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER BUILDING SCALABLE WEB APPS WITH AI INTEGRATION",
  skills: [
    emoji(
      "⚡ Build responsive, interactive front-end interfaces with React, TypeScript and modern CSS frameworks"
    ),
    emoji(
      "⚡ Develop robust backend APIs and services with Node.js, Express, and cloud infrastructure on AWS"
    ),
    emoji(
      "⚡ Integrate AI/LLM capabilities using LangChain, Ollama, and vector databases like ChromaDB"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Atria Institute of Technology",
      logo: require("./assets/images/atriaLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "2016 - 2020",
      desc: "Bangalore, India | CGPA: 7.5",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Developer",
      company: "Ez-XBRL Solutions (EcoActiveTech)",
      companylogo: require("./assets/images/ezxbrlLogo.png"),
      date: "April 2023 – Present",
      desc: "Remote",
      descBullets: [
        "Developed an ESG metrics tracking and reporting platform with interactive dashboards, automated data collection, and carbon footprint calculation for sustainability teams",
        "Integrated LLM-powered features using LangChain, Ollama, and ChromaDB for intelligent document analysis and automated report generation",
        "Built real-time collaboration features and notification systems using WebSockets and AWS services"
      ]
    },
    {
      role: "Project Engineer",
      company: "Wipro",
      companylogo: require("./assets/images/wiproLogo.png"),
      date: "March 2021 – February 2022",
      desc: "Remote",
      descBullets: [
        "Performed data analysis and developed visualizations to derive actionable insights for client projects",
        "Built and maintained ML data pipelines for processing and transforming large datasets",
        "Developed RESTful APIs and microservices to support application integrations"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL AND PROFESSIONAL PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/nexmoniqLogo.png"),
      projectName: "Nexmoniq",
      projectDesc:
        "Full-stack SaaS AdTech platform built with React 19, TypeScript, and Supabase. Features WebGL shader animations with Three.js for immersive visual experiences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nexmoniq.com"
        }
      ]
    },
    {
      image: require("./assets/images/clutchvodsLogo.png"),
      projectName: "Clutch VODS",
      projectDesc:
        "NBA video streaming platform built with React, Redux Toolkit, and Tailwind CSS. Features Firebase Authentication and personalized content recommendations.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/RakshithBhat03/clutch-vods"
        }
      ]
    },
    {
      image: require("./assets/images/buzzerbeaterLogo.png"),
      projectName: "Buzzer Beater",
      projectDesc:
        "Pomodoro timer productivity app built with React, React Router v6, and Context API for state management.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/RakshithBhat03/buzzer-beater"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and achievements from my learning journey",

  achievementsCards: [
    {
      title: "Full Stack Developer Certification",
      subtitle:
        "Completed intensive full-stack web development program at neoG Camp covering React, Node.js, and modern web technologies.",
      image: require("./assets/images/neogLogo.png"),
      imageAlt: "neoG Camp Logo",
      footerLink: [
        {
          name: "neoG Camp",
          url: "https://neog.camp/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91-9035216305",
  email_address: "rakshith6666@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "RakshithBhat1",
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

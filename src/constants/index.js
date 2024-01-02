import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  DecisionPointAnalytics,
  Elev8Solar,
  Infosys,
  Spotle,
  Allsoft,
  Freelancer,
  carrent,
  jobit,
  tripguide,
  imageeditor,
  eventbuzz,
  eazypark,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: creator,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company_name: "Infosys Pvt. Ltd",
    company_url: "https://www.infosys.com/",
    icon: Infosys,
    iconBg: "#E4E4E4",
    date: "Oct 2021 - Jun 2023",
    points: [
      `Led a team of 8 members to build highly efficient Azure Data Factory (ADF) pipelines, resulting in a 50% improvement in data
      extraction speed from diverse external sources and streamlining the data ingestion process`,
      "Transformed client's codebase from USQL to TSQL using Power Automate, optimizing query execution time by 40%, and saving 150+ man-hours monthly in data processing",
      "Upgraded storage mechanism for a UK-based client from Gen1 storage to Gen2 storage, boosting data access speed by 30% and ensuring more robust data management capabilities",
      "Enhanced data processing by 40% with efficient PySpark and TSQL scripts for Change Data Capture (CDC)",
      "Streamlined code deployment process for test environment, resulting in a 20% reduction in testing cycle time and a 15% decrease in post-deployment issues, leading to significant time and resource savings for the team",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Spotle.ai",
    company_url: "https://spotle.ai/",
    icon: Spotle,
    iconBg: "#E4E4E4",
    date: "Jan 2021 - Feb 2021",
    points: [
      "Played a pivotal role in the data analytics team, developing a Twitter Trend Analyzer which processed over 100,000 tweets using Python, NLTK, Matplotlib, and WordCloud, achieving an accuracy of 83%",
      "Employed Natural Language Processing and advanced text-processing techniques on COVID-19 datasets to uncover and interpret diverse trends, gaining critical insights into public sentiment and information spread",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "Allsoft Solutions Pvt. Ltd.",
    company_url: "#",
    icon: Allsoft,
    iconBg: "#E4E4E4",
    date: "May 2020 - Jul 2020",
    points: [
      "Collaborated in a team to drive development of a COVID-19 detection system by scanning chest X-rays, attaining an 89.4% accuracy through strategic utilization of (CNNs) and advanced Image Processing techniques",
    ],
  },
];

const projects = [
  {
    name: "Image Editor",
    description:
      "Developed a Java Image Processing application with Java Swing for the UI, applying OOD principles like MVC and Builder patterns to ensure maintainability. Version control facilitated team collaboration and code stability. The UI was designed for easy navigation, optimizing user experience, while JUnit ensured robust functionality. The Builder pattern was key to streamlining feature development, cutting implementation time by 70%.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "junit",
        color: "pink-text-gradient",
      },
    ],
    image: imageeditor,
    source_code_link: "https://github.com/VanditGupta/ImageEditor",
  },
  {
    name: "EventBuzz",
    description:
      "Led the development of 'EventBuzz', a scalable event management platform that bolstered planning efficiency by 30% through real-time updates and automated CRUD operations. System reliability was improved by 25% with the integration of MySQL stored procedures and the application of Node.js. Comprehensive logging was also integrated, vastly expediting issue resolution and contributing to a 99.9% uptime. This enhancement ensured robust event management and efficient coordination, catering to dynamic needs.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: eventbuzz,
    source_code_link: "https://github.com/VanditGupta/EventBuzz",
  },
  {
    name: "Eazy_Park",
    description:
      "Led team Coding_Capitals3 to 2nd at Student Hackday 2019, Delhi, innovating a parking solution with Masked R-CNN and COCO dataset. Achieved 0.92 confidence in detecting 80 types, enhancing urban parking spot identification and accessibility. The project demonstrated deep learning expertise and commitment to efficiently addressing urban challenges, significantly contributing to smarter city solutions and improving daily life through advancements in object recognition and spatial analytics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: eazypark,
    source_code_link: "https://github.com/VanditGupta/Eazy_Park",
  },
];

export { services, technologies, experiences, projects };

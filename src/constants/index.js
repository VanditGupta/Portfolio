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
  Freelancer,
  carrent,
  jobit,
  tripguide,
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
    icon: DecisionPointAnalytics,
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
    icon: Elev8Solar,
    iconBg: "#E4E4E4",
    date: "Jan 2021 - Feb 2021",
    points: [
      "Played a pivotal role in the data analytics team, developing a Twitter Trend Analyzer which processed over 100,000 tweets using Python, NLTK, Matplotlib, and WordCloud, achieving an accuracy of 83%",
      "Employed Natural Language Processing and advanced text-processing techniques on COVID-19 datasets to uncover and interpret diverse trends, gaining critical insights into public sentiment and information spread",
    ],
  },
  {
    title: "Allsoft Solutions Pvt. Ltd.",
    company_name: "Shopify",
    company_url: "#",
    icon: Freelancer,
    iconBg: "#E4E4E4",
    date: "August 2020 - June 2021",
    points: [
      "Delivered and launched multiple web applications, such as e-commerce platforms and healthcare websites, leading to a remarkable revenue increase of over $5 million for clients",
      "Led UI/UX design projects with tools like Figma, resulting in a significant boost in user engagement, a substantial uptick in user satisfaction, and a notable 30% increase in traffic",
    ],
  },
];

const projects = [
  {
    name: "Hubble",
    description:
      "Hubble - RGM Capability Demonstration Tool is a dynamic web application developed for Decision Point Analytics. It exemplifies advanced data analytics in retail growth management, showcasing interactive data visualizations and predictive modeling. This tool highlights Decision Point's expertise in leveraging data for strategic retail insights, emphasizing user-friendly interfaces and actionable analytics. It serves as a practical demonstration of how Decision Point translates complex data into clear, impactful business strategies for retail growth and market analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://hubble-staging.decisionpoint.in/",
  },
  {
    name: "Covid Tracking Dashboard",
    description:
      "Web Application platform designed to provide real-time updates and data analysis related to the COVID-19 pandemic. It offers users access to current statistics, including infection rates, testing data, vaccination progress, and more. This website serves as a valuable resource for staying informed about the latest developments in the ongoing health crisis, with user-friendly features that make it easy to navigate and understand the pandemic's impact on a global and local scale.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://covidtrackernitish.netlify.app/",
  },
  {
    name: "College Management ERP",
    description:
      "College Management ERP is a comprehensive digital solution tailored for educational institutions. It streamlines and automates various administrative tasks within colleges, including student enrollment, attendance tracking, course management, and financial administration. This platform simplifies complex processes, enhances communication among students, faculty, and administrators, and provides data-driven insights to optimize decision-making. It is a powerful tool for modernizing and efficiently managing all aspects of college operations in one centralized platform.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "ajax",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nitishahuja/CollegeManagementERP",
  },
];

export { services, technologies, experiences, projects };

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
    title: "Frontend Software Developer",
    company_name: "Decision Point Analytics",
    company_url: "https://decisionpoint.ai/",
    icon: DecisionPointAnalytics,
    iconBg: "#E4E4E4",
    date: "June 2021 - July 2023",
    points: [
      `Beagle: Spearheaded the front-end development of Beagle, a Microsoft Teams-integrated conversational BI tool using GPT-4, integrating backend REST APIs for enhanced data interaction. This pivotal revenue-generating scalable enterprise infrastructure contributed to $5M in revenue and secured consecutive ’App of the Year’ awards for two years.`,
      "Beagle Charts: Engineered a versatile charts library, incorporating D3.js, Highcharts, and Chart.js utilizing plain JSON data to offer over 25 unique chart options. This innovation led to an impressive 80% surge in user engagement through advanced data visualization technique",
      "Hubble: Spearheaded the redevelopment of Hubble, an RGM capability demonstration tool. Implemented streamlined programming development processes, resulting in a 25% reduction in development time and a 30% reduction in reported bugs on Jira while maintaining technical documentation and testing all use cases, enhancing overall team efficiency. This strategic enhancement led to a more engaging user experience and a substantial 42% increase in lead generation",
      "CONA: Led frontend development for a resource availability forecasting project with a Fortune 500 company. My leadership and focus on timely, high-quality deliverables fostered an extended partnership.",
    ],
  },
  {
    title: "Co Founder & CTO",
    company_name: "Elev8 Solar",
    company_url: "https://elev8solar.in/",
    icon: Elev8Solar,
    iconBg: "#E4E4E4",
    date: "May 2022 - July 2023",
    points: [
      "Developed a data-driven product with product design strategies, using modern technologies to boost user interaction and accuracy, resulting in a 40% rise in user engagement",
      "Generated $50,000 in revenue and led a 10+ member team, demonstrating early financial success and rapid growth",
    ],
  },
  {
    title: "Web Developer & Designer",
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

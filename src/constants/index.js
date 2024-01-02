import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  opencv,
  python,
  html,
  css,
  reactjs,
  azure,
  cpp,
  nodejs,
  mongodb,
  tensorflow,
  git,
  java,
  Infosys,
  Spotle,
  Allsoft,
  imageeditor,
  eventbuzz,
  eazypark,
  venkatesh,
  raj,
  conversation,
  youtube,
  accident,
  vandit,
  chaitanya,
  akshit,
  deepak,
  ashish,
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
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Git",
    icon: git,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
      "Led 'EventBuzz', enhancing planning by 30% with CRUD operations, and reliability by 25% using MySQL and Node.js. Integrated logging leading to 99.9% uptime. React was employed for a dynamic, user-friendly front end. The platform's advancements provided robust event management, ensuring smooth, efficient coordination to adapt to dynamic user needs.\n\n",
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


const research_papers = [
{
  name: "Machine Learning enabled models for YouTube Ranking Mechanism and Views Prediction",
  description:
    "Designed and implemented a predictive model using machine learning and AI to estimate YouTube video metrics, incorporating a ranking system based on trending data. Enhanced the model with a Random Forest algorithm, achieving a notable 78.4% accuracy, aiding creators in evaluating content authenticity and competitive strategy before publication",
  tags: [
    {
      name: "analytics",
      color: "blue-text-gradient",
    },
    {
      name: "tensorflow",
      color: "green-text-gradient",
    },
    {
      name: "youtube",
      color: "pink-text-gradient",
    },
  ],
  image: youtube,
  source_code_link: "https://arxiv.org/abs/2211.11528",
  authors: [
    {
      name: "V. Gupta",
      image: vandit,
      linkedin: "https://www.linkedin.com/in/vandit-gupta/"
    },
    {
      name: "A. Diwan",
      image: akshit,
      linkedin: "https://www.linkedin.com/in/akshit-diwan/"
    },
    {
      name: "C. Chadha",
      image: chaitanya,
      linkedin: "https://www.linkedin.com/in/chaitanyachadha12/"
    },
    {
      name: "Dr. A Khanna",
      image: ashish,
      linkedin: "https://www.linkedin.com/in/dr-ashish-khanna-2381b778/"
    },
    {
      name: "Dr. D Gupta",
      image: deepak,
      linkedin: "https://www.linkedin.com/in/deepak-gupta-90156685/"
    },

  ]
},
  {
    name: "Classifying text using machine learning models and determining conversation drift",
    description:
      "Researched and applied Naive Bayes, Logistic Regression, and SVM algorithms for off-topic detection in text, optimizing the SVM to achieve a high F1 score of 0.81, advancing discussion moderation techniques",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "deepLearning",
        color: "pink-text-gradient",
      },
    ],
    image: conversation,
    source_code_link: "https://arxiv.org/abs/2211.08365",
    authors: [
      {
        name: "C. Chadha",
        image: chaitanya,
        linkedin: "https://www.linkedin.com/in/chaitanyachadha12/"
      },
      {
        name: "V. Gupta",
        image: vandit,
        linkedin: "https://www.linkedin.com/in/vandit-gupta/"
      },
      {
        name: "Dr. D. Gupta",
        image: deepak,
        linkedin: "https://www.linkedin.com/in/deepak-gupta-90156685/"
      },
      {
        name: "Dr. A. Khanna",
        image: ashish,
        linkedin: "https://www.linkedin.com/in/dr-ashish-khanna-2381b778/"
      },
    ]
  },
{
  name: "Accident Detection Using Mask R-CNN",
  description:
    "Designed and implemented a predictive model using machine learning and AI to estimate YouTube video metrics, incorporating a ranking system based on trending data. Enhanced the model with a Random Forest algorithm, achieving a notable 78.4% accuracy, aiding creators in evaluating content authenticity and competitive strategy before publication",
  tags: [
    {
      name: "cnn",
      color: "blue-text-gradient",
    },
    {
      name: "keras",
      color: "green-text-gradient",
    },
    {
      name: "objectDetection",
      color: "pink-text-gradient",
    },
  ],
  image: accident,
  source_code_link: "http://ijmtst.com/volume7/issue01/15.IJMTST0612325.pdf",
  authors: [
    {
      name: "Akshit Diwan",
      image: akshit,
      linkedin: "https://www.linkedin.com/in/akshit-diwan/"
    },
    {
      name: "Vandit Gupta",
      image: vandit,
      linkedin: "https://www.linkedin.com/in/vandit-gupta/"
    },
    {
      name: "Chaitanya Chadha",
      image: chaitanya,
      linkedin: "https://www.linkedin.com/in/chaitanyachadha12/"
    },
  ]
},
];

const testimonials = [
  {
    testimonial:
      "Vandit never stopped asking questions from the day he joined into the team, I have worked with him for a year where he shown tremendous ability to learn new skills. He was one of the core members in team, who was involved in successful implementation of re-engineering program in support of latest azure cloud offering. I highly recommend Vandit to any organisation.",
    name: "Venkatesh AV",
    designation: "Lead Data Engineer",
    company: "The Open University",
    image: venkatesh,
    linkedin: "https://www.linkedin.com/in/venkatesh-av-74382946/"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    linkedin: "https://www.linkedin.com/in/vandit-gupta/"
  },
  {
    testimonial:
      "Vandit's passion, proficiency, and problem-solving skills make him a standout team member with a rare blend of technical prowess and interpersonal skills. At Open University, he's been pivotal in data solutions, displaying deep knowledge in data pipelines and ETL processes. His commitment to cooperation and continuous learning makes him an invaluable asset.",
    name: "Raj Basu",
    designation: "Data Engineering Lead",
    company: "The Open University",
    image: raj,
    linkedin: "https://www.linkedin.com/in/raj-basu-852bb114/"
  },
];


// console.log(research_papers);

export { services, technologies, experiences, testimonials, projects, research_papers };

import NewYorkLife from "../assets/company/NewYorkLife.svg";
import Northeastern from "../assets/company/Northeastern.png";
import ForceFactor from "../assets/company/ForceFactor.svg";
import DataNutts from "../assets/company/DataNutts.png";
import Infosys from "../assets/company/Infosys.png";
import Spotle from "../assets/company/Spotle.png";
import Allsoft from "../assets/company/Allsoft.png";

import vendorscout from "../assets/project/vendorscout.png";
import medicodeai from "../assets/project/medicodeai.png";
import imageeditor from "../assets/project/imageeditor.png";
import eventbuzz from "../assets/project/eventbuzz.png";
import eazypark from "../assets/project/eazypark.png";

import venkatesh from "../assets/testimonials/venkatesh.png";
import raj from "../assets/testimonials/raj.png";
import deepak from "../assets/paper/author/deepak.png";

export const profile = {
  name: "Vandit Gupta",
  role: "Full Stack AI Engineer",
  employer: "New York Life",
  location: "New York, NY",
  email: "vanditgupta22@gmail.com",
  resume: "https://drive.google.com/file/d/1S882j4neNUQpwk9WsyAoek2nuDjKBPR1/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/vandit-gupta/",
  github: "https://github.com/VanditGupta",
  tagline:
    "I build production AI systems: enterprise RAG search, voice coaching and agentic platforms, from LLM pipelines to the cloud underneath.",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "open-source", title: "Open Source" },
  { id: "projects", title: "Projects" },
  { id: "research", title: "Research" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: 4, suffix: "+", label: "years in industry" },
  { value: 200, suffix: "K+", label: "people served by my work" },
  { prefix: "$", value: 10, suffix: "M+", label: "in costs saved across projects" },
  { value: 4, suffix: "", label: "research publications" },
];

export const about = [
  "I'm a Full Stack AI Engineer at New York Life, building enterprise RAG search, voice AI coaching and agentic systems, from LLM pipelines and APIs to cloud infrastructure and CI/CD.",
  "I have 4+ years across Fortune 500 firms and startups, and a Northeastern MS in Computer Science. Before AI infrastructure, I built forecasting models and Azure data platforms.",
];

export const skills = [
  { group: "Gen AI", items: ["AWS Bedrock", "RAG", "LLM Evaluation", "MCP", "LangChain", "Prompt Engineering"] },
  { group: "Backend & Data", items: ["Python", "FastAPI", "PostgreSQL", "DynamoDB", "Redis", "SQL"] },
  { group: "Cloud & DevOps", items: ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "Azure"] },
];

export const experiences = [
  {
    company: "New York Life Insurance",
    url: "https://www.newyorklife.com/",
    logo: NewYorkLife,
    role: "Full Stack AI Engineer",
    period: "Dec 2025 – Present",
    location: "New York City, NY",
    summary:
      "I build AI tools for the agent force: an enterprise RAG search that replaced a legacy lexical system, a voice coaching platform, and the AWS backend behind an agentic AI platform. The work spans LLM pipelines, infrastructure as code and keeping everything fast.",
  },
  {
    company: "Northeastern University · DASH",
    url: "https://www.northeastern.edu/",
    logo: Northeastern,
    role: "Gen AI Engineer · Research Assistant",
    period: "Oct 2024 – Dec 2025",
    location: "Boston, MA",
    summary:
      "Built AI tooling for the business school, including an automated grading bot, rubric generation and a privacy-safe data pipeline. Also red-teamed production bots for prompt injection.",
  },
  {
    company: "Force Factor",
    url: "https://www.forcefactor.com/",
    logo: ForceFactor,
    wideLogo: true,
    logoBg: "#111317",
    role: "AI Engineer",
    period: "Jan 2025 – Apr 2025",
    location: "Boston, MA",
    summary:
      "Built forecasting and analytics for an FMCG startup, from demand planning across 700+ SKUs that cut inventory costs by $5M+ a year to automated trend analysis and SEO keyword mining.",
  },
  {
    company: "DataNutts",
    url: "https://datanutts.com/",
    logo: DataNutts,
    wideLogo: true,
    role: "AI Engineer",
    period: "May 2024 – Aug 2024",
    location: "Grapevine, TX",
    summary:
      "Built document AI for financial services, extracting structured data from thousands of banking documents, and an evaluation pipeline that tracks accuracy on every prompt change.",
  },
  {
    company: "Infosys",
    url: "https://www.infosys.com/",
    logo: Infosys,
    role: "Data Engineer",
    period: "Oct 2021 – Jun 2023",
    location: "Bangalore, India",
    summary:
      "Built Azure data platforms while leading an 8-member team: pipelines from 10+ sources into Synapse, a 2TB+ data lake migration and automated CI/CD releases.",
  },
];

// Hidden behind "Show earlier roles".
export const earlierExperiences = [
  {
    company: "Spotle.ai",
    url: "https://spotle.ai/",
    logo: Spotle,
    role: "Data Analyst",
    period: "Jan 2021 – Feb 2021",
    summary:
      "Analyzed 120K+ COVID-19 tweets with NLP and trained a sentiment classifier to 97% accuracy.",
  },
  {
    company: "Allsoft",
    url: "https://allsoft.co/",
    logo: Allsoft,
    role: "AI Engineer",
    period: "May 2020 – Jul 2020",
    summary:
      "Built a COVID-19 detection proof of concept with OpenCV, reaching about 91% accuracy.",
  },
];

// Ordered so the best-known projects show first; the rest sit behind "Show all".
export const openSource = {
  visible: 3,
  orgs: ["AWS", "Redis", "Apache", "OpenSearch", "Google Cloud", "Nixtla", "FreeIPA", "Kapitan", "Tortoise ORM"],
  contributions: [
    {
      org: "aws/serverless-application-model",
      title: "Add EncryptionConfiguration support for AWS::Serverless::StateMachine",
      date: "May 2026",
      url: "https://github.com/aws/serverless-application-model/pull/3932",
    },
    {
      org: "redis/redis-om-python",
      title: "Fix sort_by on embedded model field paths",
      date: "Oct 2026",
      url: "https://github.com/redis/redis-om-python/pull/871",
    },
    {
      org: "apache/magpie",
      title: "Add --list-tags to print case tags with counts",
      date: "May 2026",
      url: "https://github.com/apache/magpie/pull/404",
    },
    {
      org: "opensearch-project/documentation-website",
      title: "Unify Benchmark telemetry docs",
      date: "May 2026",
      url: "https://github.com/opensearch-project/documentation-website/pull/12394",
    },
    {
      org: "kapicorp/kapitan",
      title: "Use register_resolver to avoid OmegaConf deprecation warning",
      date: "Oct 2026",
      url: "https://github.com/kapicorp/kapitan/pull/1628",
    },
    {
      org: "tortoise/tortoise-orm",
      title: "Keep host, user and password from the query string when the URL authority is empty",
      date: "Oct 2026",
      url: "https://github.com/tortoise/tortoise-orm/pull/2313",
    },
    {
      org: "GoogleCloudPlatform/cxas-scrapi",
      title: "Treat unrecognized run states as finished in evals",
      date: "Oct 2026",
      url: "https://github.com/GoogleCloudPlatform/cxas-scrapi/pull/496",
    },
    {
      org: "Nixtla/nixtla",
      title: "Reuse _sort_categorical_values in prepare_cross_validation",
      date: "Oct 2026",
      url: "https://github.com/Nixtla/nixtla/pull/920",
    },
    {
      org: "freeipa/ansible-freeipa",
      title: "Set LC_TIME to C in ansible_freeipa_module",
      date: "Oct 2026",
      url: "https://github.com/freeipa/ansible-freeipa/pull/1434",
    },
    {
      org: "O-X-L/ansible-opnsense",
      title: "Add data_ciphers and data_cipher_fallback fields to openvpn_client",
      date: "Oct 2026",
      url: "https://github.com/O-X-L/ansible-opnsense/pull/475",
    },
  ],
};

export const projects = [
  {
    name: "VendorScout",
    description:
      "An agentic AI pipeline on GCP that enriches franchise data to speed up vendor onboarding.",
    tags: ["Agentic AI", "Stagehand", "GCP"],
    link: "https://github.com/VanditGupta/VendorScout",
    image: vendorscout,
    contain: true,
    featured: true,
  },
  {
    name: "MediCodeAI",
    description:
      "An MLOps pipeline on AWS that predicts ICD-10 billing codes from clinical notes with BERT and XGBoost.",
    tags: ["BERT", "XGBoost", "AWS"],
    link: "https://github.com/VanditGupta/MediCodeAI",
    image: medicodeai,
    featured: true,
  },
  {
    name: "Image Editor",
    description: "A Java image editor built with MVC and Builder patterns, cutting feature time by 70%.",
    tags: ["Java", "Swing", "JUnit"],
    link: "https://github.com/VanditGupta/ImageEditor",
    image: imageeditor,
  },
  {
    name: "EventBuzz",
    description: "An event management platform that improved planning efficiency by 30% at 99.9% uptime.",
    tags: ["React", "Node.js", "MySQL"],
    link: "https://github.com/VanditGupta/EventBuzz",
    image: eventbuzz,
  },
  {
    name: "Eazy_Park",
    description: "2nd place at Student Hackday 2019: a Mask R-CNN parking-spot detector with 0.92 confidence.",
    tags: ["Python", "TensorFlow", "Flask"],
    link: "https://github.com/VanditGupta/Eazy_Park",
    image: eazypark,
  },
];

export const research = {
  note: "Four publications in text classification, predictive analytics and accident detection.",
  papers: [
    {
      title: "Machine Learning enabled models for YouTube Ranking Mechanism and Views Prediction",
      description: "A Random Forest model that predicts YouTube video metrics with 78.4% accuracy.",
      link: "https://arxiv.org/abs/2211.11528",
    },
    {
      title: "Classifying text using machine learning models and determining conversation drift",
      description: "Off-topic text detection with Naive Bayes, Logistic Regression and SVM, reaching an F1 of 0.81.",
      link: "https://arxiv.org/abs/2211.08365",
    },
    {
      title: "Accident Detection Using Mask R-CNN",
      description: "Road accident detection with Mask R-CNN instance segmentation and Intersection over Union.",
      link: "http://ijmtst.com/volume7/issue01/15.IJMTST0612325.pdf",
    },
  ],
};

export const education = [
  {
    school: "Northeastern University",
    degree: "MS, Computer Science",
    period: "Sep 2023 – Dec 2025",
  },
  {
    school: "Maharaja Agrasen Institute of Technology",
    degree: "B.Tech, Computer Science",
    period: "Jun 2017 – May 2021",
  },
];

export const recognition = [
  { title: "Rookie of the Quarter", detail: "Infosys" },
  { title: "Insta Award", detail: "Infosys, for Azure data engineering" },
  { title: "ZS Campus Beats Challenge", detail: "Top 11-100 teams, 2020" },
];

export const testimonials = [
  {
    quote:
      "He was one of the core members in the successful re-engineering program for our Azure cloud offering. I highly recommend Vandit to any organisation.",
    name: "Venkatesh AV",
    title: "Lead Data Engineer, The Open University",
    image: venkatesh,
    link: "https://www.linkedin.com/in/venkatesh-av-74382946/",
  },
  {
    quote:
      "A standout team member with a rare blend of technical prowess and interpersonal skills, pivotal in our data pipelines and ETL work.",
    name: "Raj Basu",
    title: "Data Engineering Lead, The Open University",
    image: raj,
    link: "https://www.linkedin.com/in/raj-basu-852bb114/",
  },
  {
    quote:
      "I wholeheartedly endorse Vandit for his outstanding academic and research contributions and his leadership in collaborative projects.",
    name: "Dr. Deepak Gupta",
    title: "Assistant Professor, MAIT",
    image: deepak,
    link: "https://www.linkedin.com/in/deepak-gupta-90156685/",
  },
];

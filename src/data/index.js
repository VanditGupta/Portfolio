import NewYorkLife from "../assets/company/NewYorkLife.svg";
import Northeastern from "../assets/company/Northeastern.png";
import ForceFactor from "../assets/company/ForceFactor.png";
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
  { value: 18, suffix: "K+", label: "agents using RAG search" },
  { value: 30, suffix: "K+", label: "users on voice coaching" },
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
    points: [
      "Led a team of 6 to build AI-powered search for 18,000+ agents, replacing a $3M+/year lexical system and indexing 70K+ files across 11 sources with Amazon Kendra and Bedrock",
      "Cut agent feedback turnaround from 2 weeks to seconds with a voice AI coaching platform for 30,000+ users, deployed on EKS with Terraform and Harness CI/CD",
      "Built the AWS backend for an agentic AI platform unifying 5+ services, streaming responses with first-byte latency under 1.5s using Redis Valkey",
    ],
  },
  {
    company: "Northeastern University · DASH",
    url: "https://www.northeastern.edu/",
    logo: Northeastern,
    role: "Gen AI Engineer · Research Assistant",
    period: "Oct 2024 – Dec 2025",
    location: "Boston, MA",
    points: [
      "Led a team of 3 to cut grading time from 7 days to 20 minutes for 500+ students with an AI grading bot built on LangChain and GPT-4o",
      "Led AI red-teaming of two production bots, running 30+ prompt injection attacks to find guardrail weaknesses",
    ],
  },
  {
    company: "Force Factor",
    url: "https://www.forcefactor.com/",
    logo: ForceFactor,
    wideLogo: true,
    role: "AI Engineer",
    period: "Jan 2025 – Apr 2025",
    location: "Boston, MA",
    points: [
      "Reduced inventory costs by $5M+ yearly by automating demand planning for 700+ SKUs with fine-tuned TimeGPT on AWS",
      "Saved 500+ man-hours yearly with a FastAPI and React app that analyzes YouTube podcast trends using Llama 3.1",
    ],
  },
  {
    company: "DataNutts",
    url: "https://datanutts.com/",
    logo: DataNutts,
    wideLogo: true,
    role: "AI Engineer",
    period: "May 2024 – Aug 2024",
    location: "Grapevine, TX",
    points: [
      "Automated analysis of 2,000+ banking documents with an AI pipeline (Textract, GPT-4, Claude 3 Sonnet) feeding DynamoDB",
      "Raised extraction accuracy from 78% to 94% with an LLM evaluation pipeline that scores every prompt change against a golden dataset",
    ],
  },
  {
    company: "Infosys",
    url: "https://www.infosys.com/",
    logo: Infosys,
    role: "Data Engineer",
    period: "Oct 2021 – Jun 2023",
    location: "Bangalore, India",
    points: [
      "Led an 8-member team to automate ingestion from 10+ sources into a Synapse data warehouse with Azure Data Factory",
      "Migrated 2TB+ from Data Lake Gen1 to Gen2 with zero data loss, and met a 10-minute SLA with PySpark and T-SQL workflows",
    ],
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
    points: [
      "Analyzed 120K+ COVID-19 lockdown tweets with NLP in Python and trained a sentiment classifier to 97% accuracy",
    ],
  },
  {
    company: "Allsoft",
    url: "https://allsoft.co/",
    logo: Allsoft,
    role: "AI Engineer",
    period: "May 2020 – Jul 2020",
    points: [
      "Built a COVID-19 detection proof of concept with OpenCV on 7,000+ medical images, reaching ~91% accuracy",
    ],
  },
];

// Ordered so the best-known projects show first; the rest sit behind "Show all".
export const openSource = {
  visible: 6,
  orgs: ["AWS", "Redis", "Apache", "OpenSearch", "Google Cloud", "Nixtla", "FreeIPA", "Kapitan", "Tortoise ORM"],
  contributions: [
    {
      org: "aws/serverless-application-model",
      title: "Add EncryptionConfiguration support for AWS::Serverless::StateMachine",
      date: "May 2026",
      status: "open",
      url: "https://github.com/aws/serverless-application-model/pull/3932",
    },
    {
      org: "redis/redis-om-python",
      title: "Fix sort_by on embedded model field paths",
      date: "Oct 2026",
      status: "open",
      url: "https://github.com/redis/redis-om-python/pull/871",
    },
    {
      org: "apache/magpie",
      title: "Add --list-tags to print case tags with counts",
      date: "May 2026",
      status: "merged",
      url: "https://github.com/apache/magpie/pull/404",
    },
    {
      org: "opensearch-project/documentation-website",
      title: "Unify Benchmark telemetry docs",
      date: "May 2026",
      status: "merged",
      url: "https://github.com/opensearch-project/documentation-website/pull/12394",
    },
    {
      org: "kapicorp/kapitan",
      title: "Use register_resolver to avoid OmegaConf deprecation warning",
      date: "Oct 2026",
      status: "merged",
      url: "https://github.com/kapicorp/kapitan/pull/1628",
    },
    {
      org: "tortoise/tortoise-orm",
      title: "Keep host, user and password from the query string when the URL authority is empty",
      date: "Oct 2026",
      status: "merged",
      url: "https://github.com/tortoise/tortoise-orm/pull/2313",
    },
    {
      org: "GoogleCloudPlatform/cxas-scrapi",
      title: "Treat unrecognized run states as finished in evals",
      date: "Oct 2026",
      status: "open",
      url: "https://github.com/GoogleCloudPlatform/cxas-scrapi/pull/496",
    },
    {
      org: "Nixtla/nixtla",
      title: "Reuse _sort_categorical_values in prepare_cross_validation",
      date: "Oct 2026",
      status: "open",
      url: "https://github.com/Nixtla/nixtla/pull/920",
    },
    {
      org: "freeipa/ansible-freeipa",
      title: "Set LC_TIME to C in ansible_freeipa_module",
      date: "Oct 2026",
      status: "open",
      url: "https://github.com/freeipa/ansible-freeipa/pull/1434",
    },
    {
      org: "O-X-L/ansible-opnsense",
      title: "Add data_ciphers and data_cipher_fallback fields to openvpn_client",
      date: "Oct 2026",
      status: "open",
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
    period: "",
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

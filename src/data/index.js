import NewYorkLife from "../assets/company/NewYorkLife.svg";
import Northeastern from "../assets/company/Northeastern.svg";
import ForceFactor from "../assets/company/ForceFactor.svg";
import DataNutts from "../assets/company/DataNutts.svg";
import Infosys from "../assets/company/Infosys.png";
import Spotle from "../assets/company/Spotle.png";
import Allsoft from "../assets/company/Allsoft.png";

import imageeditor from "../assets/project/imageeditor.png";
import eventbuzz from "../assets/project/eventbuzz.png";
import eazypark from "../assets/project/eazypark.png";

import youtube from "../assets/paper/youtube.png";
import conversation from "../assets/paper/conversation.png";
import accident from "../assets/paper/accident.png";

import venkatesh from "../assets/testimonials/venkatesh.png";
import raj from "../assets/testimonials/raj.png";
import deepak from "../assets/paper/author/deepak.png";

export const profile = {
  name: "Vandit Gupta",
  role: "Full Stack AI Engineer",
  employer: "New York Life",
  location: "New York, NY",
  email: "vanditgupta22@gmail.com",
  resume:
    "https://drive.google.com/file/d/1DW9FyokCV8jgSkZTFZZXQQl4ApYbj-Bk/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/vandit-gupta/",
  github: "https://github.com/VanditGupta",
  tagline:
    "I build production AI systems: enterprise RAG search, voice coaching and agentic platforms, from LLM pipelines to the cloud infrastructure underneath.",
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
  "I'm a Full Stack AI Engineer at New York Life, where I build and deploy enterprise RAG search, voice AI coaching and agentic systems, covering LLM pipelines, APIs, cloud infrastructure, CI/CD and observability.",
  "I'm a Northeastern graduate with 4+ years of experience across Fortune 500 firms and startups in insurance, financial services, e-commerce and EdTech. Before focusing on AI infrastructure, I built forecasting and churn models, ETL pipelines and Azure data platforms.",
  "I also contribute to open source, across infrastructure-as-code and backend projects.",
];

export const skills = [
  {
    group: "Gen AI & LLMs",
    items: ["AWS Bedrock", "Amazon Kendra", "RAG", "Prompt Engineering", "LLM Evaluation", "MCP", "VAPI", "LangChain"],
  },
  {
    group: "Backend & Data",
    items: ["Python", "SQL", "FastAPI", "Pydantic", "Redis", "PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Snowflake", "ChromaDB"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Helm", "Terraform", "Harness", "GitHub Actions", "CI/CD"],
  },
  {
    group: "ML & Data Engineering",
    items: ["pandas", "NumPy", "scikit-learn", "SageMaker", "Airflow", "Databricks", "Streamlit"],
  },
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
      "Led a team of 6 to build an AI-powered contextual search tool for 18,000+ agents, replacing a $3M+/year lexical system, indexing 70K+ files across 11 data sources (Salesforce, Kaltura, PDFs) using Amazon Kendra, Bedrock, and EventBridge-scheduled ingestion pipelines",
      "Reduced agent feedback turnaround from 2 weeks to seconds by developing a voice-based AI coaching platform for 30,000+ users, using VAPI, DynamoDB, and Bedrock, deployed on EKS with Helm and Harness CI/CD, provisioned via Terraform",
      "Built the AWS backend and infrastructure (ObinAI, FastAPI, EC2) for an agentic AI platform unifying 5+ siloed services, using Redis Valkey caching to deliver real-time streaming responses with first-byte latency under 1.5s",
      "Built a serverless incident-triage pipeline on AWS (Lambda, CloudWatch, SNS) that correlates log errors with GitHub commits, and uses LLMs to email root-cause hypotheses and triage steps, covering 70+ log groups across 2 projects and cutting triage time by 50%",
    ],
    tags: ["Bedrock", "Kendra", "EKS", "Terraform", "FastAPI", "Redis"],
  },
  {
    company: "Northeastern University · DASH",
    url: "https://www.northeastern.edu/",
    logo: Northeastern,
    role: "Gen AI Engineer · Research Assistant",
    period: "Oct 2024 – Dec 2025",
    location: "Boston, MA",
    points: [
      "Led a team of 3 to cut grading time from 7 days to 20 minutes for 500+ students across 5 courses by building an AI grading bot with LangChain, LlamaIndex, GPT-4o and Llama 3",
      "Built an end-to-end LLM pipeline for automated rubric generation using Chain-of-Thought prompting and RAGAs-based hallucination detection",
      "Built a pipeline to securely retrieve and anonymize student PII with the Canvas API, Selenium and Presidio for compliant data processing",
      "Led AI red-teaming of two production bots, running 30+ targeted prompt injection attacks and reporting weaknesses in scoring logic, guardrails and model robustness",
    ],
    tags: ["LangChain", "RAGAs", "Red-teaming", "Presidio"],
  },
  {
    company: "Force Factor",
    url: "https://www.forcefactor.com/",
    logo: ForceFactor,
    role: "AI Engineer",
    period: "Jan 2025 – Apr 2025",
    location: "Boston, MA",
    points: [
      "Reduced inventory costs by $5M+ yearly by automating demand planning for 700+ SKUs, A/B testing fine-tuned TimeGPT against Prophet time series models on AWS (Lambda, Step Functions, RDS) and surfacing forecasts in Power BI dashboards",
      "Saved 500+ man-hours yearly by automating monthly brand trend analysis of YouTube podcasts with FastAPI services (summarization, NER, keyword extraction via Llama-3.1-405B), storing results in RDS and serving them in a React dashboard",
      "Boosted customer traffic by 28% by mining 1M+ social media posts from Meltwater to extract 200 high-impact SEO keywords, using unsupervised learning (HuggingFace Transformers, k-means clustering)",
    ],
    tags: ["TimeGPT", "Prophet", "AWS Lambda", "Llama 3.1", "React"],
  },
  {
    company: "DataNutts",
    url: "https://www.datanutts.com/",
    logo: DataNutts,
    role: "AI Engineer",
    period: "May 2024 – Aug 2024",
    location: "Grapevine, TX",
    points: [
      "Automated financial analysis of 2,000+ banking documents by building an AI pipeline (Amazon Textract, GPT-4, Claude 3 Sonnet) that extracts, classifies, and structures data into DynamoDB, with Pydantic schema validation to enforce structured outputs",
      "Built an LLM evaluation pipeline on AWS CodeBuild measuring extraction accuracy and Pydantic schema-validation pass rate against a golden dataset on every prompt change, using failure patterns to refine prompts and raise accuracy from 78% to 94%",
    ],
    tags: ["Textract", "Claude 3", "DynamoDB", "Pydantic", "CodeBuild"],
  },
  {
    company: "Infosys",
    url: "https://www.infosys.com/",
    logo: Infosys,
    role: "Data Engineer",
    period: "Oct 2021 – Jun 2023",
    location: "Bangalore, India",
    points: [
      "Led an 8-member cross-functional team to automate ingestion from 10+ sources (SAP, Postgres, Qualtrics) into a Synapse data warehouse, with end-to-end ETL/ELT pipelines on Azure Data Factory and Blob Storage with incremental and full-refresh loads",
      "Migrated 2TB+ data from Azure Data Lake Storage Gen1 to Gen2 with zero data loss, validated through row counts and checksums",
      "Met a 10-min SLA by building PySpark and T-SQL batch workflows on Databricks and SQL Server, with indexing & partitioning",
      "Built Azure DevOps CI/CD pipelines with ARM templates to automate infrastructure provisioning and zero-downtime releases",
    ],
    tags: ["Azure Data Factory", "Synapse", "Databricks", "PySpark"],
  },
];

export const earlierExperiences = [
  {
    company: "Spotle.ai",
    url: "https://spotle.ai/",
    logo: Spotle,
    role: "Data Analyst",
    period: "Jan 2021 – Feb 2021",
    points: [
      "Analyzed 120K+ COVID-19 lockdown tweets from India, performing EDA and NLP in Python (pandas, NLTK, VADER, TF-IDF) and training a logistic regression sentiment classifier to 97% accuracy",
      "Built Python visualizations tracking sentiment shifts, top hashtags and trending handles, helping stakeholders optimize tweet content and increase platform engagement",
    ],
  },
  {
    company: "Allsoft",
    url: "https://allsoft.co/",
    logo: Allsoft,
    role: "AI Engineer",
    period: "May 2020 – Jul 2020",
    points: [
      "Built a COVID-19 detection POC for a healthcare client using OpenCV, trained on 7,000+ medical images with augmentation to improve generalization, achieving ~91% accuracy",
    ],
  },
];

export const openSource = {
  orgs: ["AWS", "Redis", "Apache", "OpenSearch", "Kapitan", "Tortoise ORM"],
  contributions: [
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
  ],
};

export const projects = [
  {
    name: "VendorScout",
    description:
      "An agentic AI system on GCP that automates franchise data enrichment to speed up supply chain vendor onboarding, using Stagehand for browser automation and Perplexity AI for research.",
    tags: ["Agentic AI", "Stagehand", "Perplexity", "GCP"],
    link: "https://github.com/VanditGupta/VendorScout",
    featured: true,
  },
  {
    name: "MediCodeAI",
    description:
      "An MLOps pipeline on AWS that predicts ICD-10 billing codes from short clinical notes with BERT and XGBoost, reducing manual coding errors and speeding up clinical documentation.",
    tags: ["BERT", "XGBoost", "MLOps", "AWS"],
    link: "https://github.com/VanditGupta/MediCodeAI",
    featured: true,
  },
  {
    name: "Image Editor",
    description:
      "A Java image processing app with a Swing UI, built with MVC and Builder patterns and tested with JUnit. The Builder pattern cut feature implementation time by 70%.",
    tags: ["Java", "Swing", "JUnit"],
    link: "https://github.com/VanditGupta/ImageEditor",
    image: imageeditor,
  },
  {
    name: "EventBuzz",
    description:
      "An event management platform with CRUD workflows that improved planning efficiency by 30%, built with React, Node.js and MySQL and reaching 99.9% uptime with structured logging.",
    tags: ["React", "Node.js", "MySQL"],
    link: "https://github.com/VanditGupta/EventBuzz",
    image: eventbuzz,
  },
  {
    name: "Eazy_Park",
    description:
      "Led team Coding_Capitals3 to 2nd place at Student Hackday 2019 with a parking-spot detector built on Mask R-CNN and COCO, reaching 0.92 confidence across 80 object classes.",
    tags: ["Python", "TensorFlow", "Flask"],
    link: "https://github.com/VanditGupta/Eazy_Park",
    image: eazypark,
  },
];

export const research = {
  note: "Four publications in text classification, predictive analytics and accident detection (AIP, ICCCN).",
  papers: [
    {
      title: "Machine Learning enabled models for YouTube Ranking Mechanism and Views Prediction",
      description:
        "A Random Forest model that predicts YouTube video metrics and ranks content from trending data, reaching 78.4% accuracy to help creators judge a video before publishing.",
      tags: ["Analytics", "Random Forest", "YouTube"],
      authors: "Vandit Gupta, Akshit Diwan, Dr. Ashish Khanna",
      link: "https://arxiv.org/abs/2211.11528",
      image: youtube,
      contain: true,
    },
    {
      title: "Classifying text using machine learning models and determining conversation drift",
      description:
        "Naive Bayes, Logistic Regression and SVM tuned for off-topic text detection, reaching an F1 score of 0.81 and improving discussion moderation.",
      tags: ["NLP", "SVM", "Moderation"],
      authors: "Chaitanya Chadha, Vandit Gupta, Dr. Deepak Gupta",
      link: "https://arxiv.org/abs/2211.08365",
      image: conversation,
    },
    {
      title: "Accident Detection Using Mask R-CNN",
      description:
        "Instance segmentation with Mask R-CNN and Intersection over Union to detect road accidents, aimed at easing traffic jams and speeding up emergency response.",
      tags: ["Computer Vision", "Mask R-CNN", "Keras"],
      authors: "Vandit Gupta, Akshit Diwan, Chaitanya Chadha",
      link: "http://ijmtst.com/volume7/issue01/15.IJMTST0612325.pdf",
      image: accident,
    },
  ],
};

export const education = [
  {
    school: "Northeastern University",
    degree: "MS, Computer Science",
    period: "Sep 2023 – Dec 2025",
    note: "Teaching Assistant for 4 courses (500+ students) and Research Assistant building an agentic AI grading system.",
  },
  {
    school: "Maharaja Agrasen Institute of Technology",
    degree: "B.Tech, Computer Science",
    period: "",
    note: "",
  },
];

export const recognition = [
  {
    title: "Rookie of the Quarter",
    detail: "Infosys, for rapid ramp-up and boosting team efficiency.",
  },
  {
    title: "Insta Award",
    detail: "Infosys, for mastery of Azure Data Factory, Data Lake and Synapse.",
  },
  {
    title: "ZS Campus Beats Challenge",
    detail: "Top 11-100 teams in the 2020 case challenge, reaching Phase 3.",
  },
  {
    title: "Best Student in Computer Science",
    detail: "NC Jindal Public School, 12th grade.",
  },
  {
    title: "Academic Excellence Awards",
    detail: "Scholar's Badge and Certificate of Scholarship, 11th and 12th grade.",
  },
];

export const testimonials = [
  {
    quote:
      "Vandit never stopped asking questions from the day he joined the team. He was one of the core members involved in the successful implementation of a re-engineering program for the latest Azure cloud offering. I highly recommend Vandit to any organisation.",
    name: "Venkatesh AV",
    title: "Lead Data Engineer, The Open University",
    image: venkatesh,
    link: "https://www.linkedin.com/in/venkatesh-av-74382946/",
  },
  {
    quote:
      "Vandit's passion, proficiency, and problem-solving skills make him a standout team member with a rare blend of technical prowess and interpersonal skills. He's been pivotal in data solutions, with deep knowledge of data pipelines and ETL processes.",
    name: "Raj Basu",
    title: "Data Engineering Lead, The Open University",
    image: raj,
    link: "https://www.linkedin.com/in/raj-basu-852bb114/",
  },
  {
    quote:
      "I wholeheartedly endorse Vandit Gupta for his outstanding academic and research contributions. His innovative approach, leadership in collaborative projects, and significant conference papers highlight his deep understanding of technology and research.",
    name: "Dr. Deepak Gupta",
    title: "Assistant Professor, Maharaja Agrasen Institute of Technology",
    image: deepak,
    link: "https://www.linkedin.com/in/deepak-gupta-90156685/",
  },
];

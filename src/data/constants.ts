export enum SkillNames {
  // Row 0
  LIGHTGBM             = "Light GBM",
  AIRFLOW              = "Airflow",
  DOCKER               = "Docker",
  OPENCV               = "Open CV",
  TENSORFLOW           = "Tensor Flow",
  FASTAPI              = "Fast API",
  // Row 1
  VECTORDB             = "Vector DB",
  PYSPARK              = "PySpark",
  NODEJS               = "Node js",
  KERAS                = "Keras",
  RAG                  = "RAG",
  MLOPS                = "MLOPS",
  // Row 2
  GIT                  = "Git",
  GITHUB               = "github",
  LLM                  = "LLM",
  LANGCHAIN            = "Langchain",
  LLAMA                = "LLAMA",
  R                    = "R",
  // Row 3
  OPENAI               = "Open AI API",
  MLFLOW               = "ML Flow",
  METAFLOW             = "Meta Flow",
  AWS                  = "AWS",
  GCP                  = "Google Cloud",
  PLOTLY               = "Plotly",
  // Row 4
  KUBERNETES           = "Kubernetes",
  KAFKA                = "Kafka",
  OLLAMA               = "Ollama",
  PYTEST               = "Pytest",
  SKLEARN              = "Scikit-learn",
  PYTORCH              = "PyTorch",
  // Row 5
  SENTENCE_TRANSFORMERS = "Sentence Transformer",
  CHROMADB             = "Chroma DB",
  WANDB                = "Weights & Bias",
  JUPYTER              = "Jupyter",
  GENAI                = "Gen AI",
  ANACONDA             = "Anaconda",
  // Row 6
  HUGGINGFACE          = "Hugging Face",
  PANDAS               = "pandas",
  NUMPY                = "NumPy",
  SCIPY                = "scipy",
  PYTHON               = "Python",
  MATPLOTLIB           = "Matplot",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.LIGHTGBM]: {
    id: 1, name: "Light GBM", label: "LightGBM",
    shortDescription: "LambdaRank reranker achieving nDCG@10 = 0.7506 — +58% lift over baseline in StreamLens 🎯",
    color: "#56ab2f", icon: "/assets/skills/lightgbm.png",
  },
  [SkillNames.AIRFLOW]: {
    id: 2, name: "Airflow", label: "Apache Airflow",
    shortDescription: "Orchestrating 8-task ML pipeline DAGs in StreamLens & GuardianDrive ✈️",
    color: "#017CEE", icon: "/assets/skills/airflow.png",
  },
  [SkillNames.DOCKER]: {
    id: 3, name: "Docker", label: "Docker",
    shortDescription: "Containerising every service — from FastAPI to ML models — for reproducible deployments 🐳",
    color: "#2496ED", icon: "/assets/skills/docker.png",
  },
  [SkillNames.OPENCV]: {
    id: 4, name: "Open CV", label: "OpenCV",
    shortDescription: "Real-time object detection & image processing pipelines in GuardianDrive 👁️",
    color: "#5C3EE8", icon: "/assets/skills/opencv.png",
  },
  [SkillNames.TENSORFLOW]: {
    id: 5, name: "Tensor Flow", label: "TensorFlow",
    shortDescription: "Building and training deep learning models for classification and detection tasks 🔥",
    color: "#FF6F00", icon: "/assets/skills/tensorflow.png",
  },
  [SkillNames.FASTAPI]: {
    id: 6, name: "Fast API", label: "FastAPI",
    shortDescription: "106-endpoint production API powering StreamLens — p99 latency 92ms warm cache ⚡",
    color: "#009688", icon: "/assets/skills/fastapi.png",
  },
  [SkillNames.VECTORDB]: {
    id: 7, name: "Vector DB", label: "Vector DB",
    shortDescription: "Storing and querying 384-dim embeddings for semantic search & RAG pipelines 🗄️",
    color: "#6366F1", icon: "/assets/skills/vectordb.svg",
  },
  [SkillNames.PYSPARK]: {
    id: 8, name: "PySpark", label: "PySpark",
    shortDescription: "Distributed large-scale data processing for ML feature engineering pipelines 🔥",
    color: "#E25A1C", icon: "/assets/skills/pyspark.png",
  },
  [SkillNames.NODEJS]: {
    id: 9, name: "Node js", label: "Node.js",
    shortDescription: "Backend runtime for real-time APIs and event-driven microservices 🟢",
    color: "#339933", icon: "/assets/skills/nodejs.png",
  },
  [SkillNames.KERAS]: {
    id: 10, name: "Keras", label: "Keras",
    shortDescription: "High-level neural network API for rapid prototyping of deep learning models 🧠",
    color: "#D00000", icon: "/assets/skills/keras.png",
  },
  [SkillNames.RAG]: {
    id: 11, name: "RAG", label: "RAG",
    shortDescription: "Retrieval-Augmented Generation powering NeuraPilot tutor — RAGAS faithfulness 0.91 📚",
    color: "#7C3AED", icon: "/assets/skills/rag.svg",
  },
  [SkillNames.MLOPS]: {
    id: 12, name: "MLOPS", label: "MLOps",
    shortDescription: "End-to-end ML lifecycle — experiment tracking, model versioning, CI/CD pipelines ⚙️",
    color: "#374151", icon: "/assets/skills/mlops.svg",
  },
  [SkillNames.GIT]: {
    id: 13, name: "Git", label: "Git",
    shortDescription: "Version control for all projects — branching, merging, and collaborative workflows 🌿",
    color: "#F05032", icon: "/assets/skills/git.png",
  },
  [SkillNames.GITHUB]: {
    id: 14, name: "GitHub", label: "GitHub",
    shortDescription: "All 9 projects hosted at github.com/AKilalours — CI/CD via GitHub Actions 🐙",
    color: "#181717", icon: "/assets/skills/github.png",
  },
  [SkillNames.LLM]: {
    id: 15, name: "LLM", label: "Large Language Models",
    shortDescription: "Fine-tuning, prompting, and deploying LLMs — GPT-4o, LLaMA 3, Mistral & more 🤖",
    color: "#6366F1", icon: "/assets/skills/llm.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 16, name: "Langchain", label: "LangChain",
    shortDescription: "Chaining LLM calls, tools, and memory for agentic AI applications 🔗",
    color: "#1C3C3C", icon: "/assets/skills/langchain.svg",
  },
  [SkillNames.LLAMA]: {
    id: 17, name: "LLAMA", label: "LLaMA",
    shortDescription: "Running Meta's LLaMA 3 locally via Ollama for privacy-preserving AI features 🦙",
    color: "#0467DF", icon: "/assets/skills/llama.svg",
  },
  [SkillNames.R]: {
    id: 18, name: "R", label: "R Language",
    shortDescription: "Statistical analysis, hypothesis testing, and data visualisation for research 📊",
    color: "#276DC3", icon: "/assets/skills/r_logo.png",
  },
  [SkillNames.OPENAI]: {
    id: 19, name: "Open AI API", label: "OpenAI API",
    shortDescription: "GPT-4o-mini, Whisper, TTS & CLIP integrations across StreamLens and NeuraPilot 🤖",
    color: "#000000", icon: "/assets/skills/openai.png",
  },
  [SkillNames.MLFLOW]: {
    id: 20, name: "ML Flow", label: "MLflow",
    shortDescription: "Tracking 70+ versioned experiment runs and model artifacts across projects 📈",
    color: "#0194E2", icon: "/assets/skills/mlflow.svg",
  },
  [SkillNames.METAFLOW]: {
    id: 21, name: "Meta Flow", label: "Metaflow",
    shortDescription: "7-step multimodal pipeline with full artifact lineage in StreamLens 🌊",
    color: "#FF6B6B", icon: "/assets/skills/metaflow.svg",
  },
  [SkillNames.AWS]: {
    id: 22, name: "AWS", label: "AWS",
    shortDescription: "Cloud infrastructure for model serving, S3 storage, and scalable ML workloads ☁️",
    color: "#FF9900", icon: "/assets/skills/aws.png",
  },
  [SkillNames.GCP]: {
    id: 23, name: "Google Cloud", label: "Google Cloud",
    shortDescription: "GCP services for data pipelines, model deployment, and cloud-native ML ☁️",
    color: "#4285F4", icon: "/assets/skills/googlecloud.svg",
  },
  [SkillNames.PLOTLY]: {
    id: 24, name: "Plotly", label: "Plotly",
    shortDescription: "Interactive dashboards and data visualisations for ML metrics and insights 📊",
    color: "#3F4F75", icon: "/assets/skills/plotly.svg",
  },
  [SkillNames.KUBERNETES]: {
    id: 25, name: "Kubernetes", label: "Kubernetes",
    shortDescription: "HPA scaling 2–10 replicas handling 1,000 concurrent users in StreamLens ☸️",
    color: "#326CE5", icon: "/assets/skills/kubernetes.png",
  },
  [SkillNames.KAFKA]: {
    id: 26, name: "Kafka", label: "Apache Kafka",
    shortDescription: "Real-time telemetry event streaming at sub-second latency in GuardianDrive ⚡",
    color: "#000000", icon: "/assets/skills/kafka.png",
  },
  [SkillNames.OLLAMA]: {
    id: 27, name: "Ollama", label: "Ollama",
    shortDescription: "Running LLaMA 3, Mistral & LLaVA locally — privacy-first on-device inference 🦙",
    color: "#FF6B35", icon: "/assets/skills/ollama.svg",
  },
  [SkillNames.PYTEST]: {
    id: 28, name: "Pytest", label: "Pytest",
    shortDescription: "9 reproducible quality gates — all passing — across ML pipelines and APIs ✅",
    color: "#009FE3", icon: "/assets/skills/pytest.png",
  },
  [SkillNames.SKLEARN]: {
    id: 29, name: "Scikit-learn", label: "Scikit-learn",
    shortDescription: "Classical ML — regression, classification, clustering and feature pipelines 🔬",
    color: "#F7931E", icon: "/assets/skills/sklearn.png",
  },
  [SkillNames.PYTORCH]: {
    id: 30, name: "PyTorch", label: "PyTorch",
    shortDescription: "Deep learning framework for custom neural networks, CNNs and transformers 🔥",
    color: "#EE4C2C", icon: "/assets/skills/pytorch.png",
  },
  [SkillNames.SENTENCE_TRANSFORMERS]: {
    id: 31, name: "Sentence Transformer", label: "Sentence Transformers",
    shortDescription: "all-MiniLM-L6-v2 generating 384-dim embeddings — Recall@100 = 0.881 in StreamLens 🧬",
    color: "#FFD21E", icon: "/assets/skills/sentence-transformers.svg",
  },
  [SkillNames.CHROMADB]: {
    id: 32, name: "Chroma DB", label: "ChromaDB",
    shortDescription: "Vector store for RAG pipelines — semantic search across 10,000+ document chunks 🗄️",
    color: "#FF6B35", icon: "/assets/skills/chromadb.svg",
  },
  [SkillNames.WANDB]: {
    id: 33, name: "Weights and Bias", label: "Weights & Biases",
    shortDescription: "Experiment tracking, hyperparameter sweeps and model performance dashboards 📊",
    color: "#FFBE00", icon: "/assets/skills/wandb.svg",
  },
  [SkillNames.JUPYTER]: {
    id: 34, name: "Jupyter", label: "Jupyter",
    shortDescription: "Interactive research notebooks for EDA, model prototyping and result sharing 📓",
    color: "#F37626", icon: "/assets/skills/jupyter.png",
  },
  [SkillNames.GENAI]: {
    id: 35, name: "Gen AI", label: "Generative AI",
    shortDescription: "Building end-to-end GenAI apps — from prompt engineering to production deployment ✨",
    color: "#8B5CF6", icon: "/assets/skills/genai.svg",
  },
  [SkillNames.ANACONDA]: {
    id: 36, name: "Anaconda", label: "Anaconda",
    shortDescription: "Python environment management and data science package distribution 🐍",
    color: "#44A833", icon: "/assets/skills/anaconda.png",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 37, name: "Hugging Face", label: "Hugging Face",
    shortDescription: "Loading pretrained transformers, tokenizers and datasets for NLP tasks 🤗",
    color: "#FFD21E", icon: "/assets/skills/huggingface.svg",
  },
  [SkillNames.PANDAS]: {
    id: 38, name: "pandas", label: "Pandas",
    shortDescription: "Data wrangling, feature engineering and pipeline preprocessing across all projects 🐼",
    color: "#150458", icon: "/assets/skills/Pandas.png",
  },
  [SkillNames.NUMPY]: {
    id: 39, name: "numpy", label: "NumPy",
    shortDescription: "Numerical computing — matrix operations, embeddings and array transformations 🔢",
    color: "#013243", icon: "/assets/skills/Numpy.png",
  },
  [SkillNames.SCIPY]: {
    id: 40, name: "scipy", label: "SciPy",
    shortDescription: "Scientific computing — statistical tests, signal processing and optimisation 🔬",
    color: "#4A7CC7", icon: "/assets/skills/Scipy_transparent.png",
  },
  [SkillNames.PYTHON]: {
    id: 41, name: "Python", label: "Python",
    shortDescription: "Primary language across all 9 projects — from ML pipelines to production APIs 🐍",
    color: "#3776AB", icon: "/assets/skills/Python.png",
  },
  [SkillNames.MATPLOTLIB]: {
    id: 42, name: "Matplot", label: "Matplotlib",
    shortDescription: "Publication-quality plots for model evaluation, training curves and data analysis 📊",
    color: "#11557C", icon: "/assets/skills/Matplotlib.png",
  },
};



export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    title: "Volunteer Full-Stack Developer",
    company: "People In Need Inc. · Remote · Unpaid",
    description: [
      "Co-architected and shipped a production-grade public website from zero — owning the full stack from information architecture and UI design through backend implementation — delivering a live, scalable web presence now serving as the organization's primary digital front door for thousands of community members. (Developer credit listed in footer: peopleinneed.org)",
      "Designed and engineered a unified backend operations system with local database storage powering four mission-critical nonprofit workflows — donation processing, volunteer intake, event registrations, and help request tracking — replacing fragmented manual processes and giving the internal team a single source of truth for community follow-up.",
      "Built and deployed a monthly newsletter pipeline automating subscriber communications end-to-end — covering event announcements, program recaps, and upcoming initiatives — eliminating a previously manual outreach bottleneck and enabling consistent, scalable engagement with the organization's growing member base.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.PYTHON,
      SkillNames.DOCKER,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.FASTAPI,
    ],
  },
  {
    id: 2,
    startDate: "Feb 2023",
    endDate: "Apr 2023",
    title: "Software Development Intern",
    company: "Archimedis Digital · Chennai, Tamil Nadu, India · On-site",
    description: [
      "Owned end-to-end documentation for assigned software modules — translated ambiguous product requirements into precise algorithm designs and flowcharts, cutting documentation turnaround and establishing a reusable template adopted across the team's delivery workflow.",
      "Drove defect resolution across multiple software components by executing structured testing protocols, reproducing failure conditions with precision, and delivering root-cause analysis with actionable fix recommendations directly to the reporting manager — accelerating debugging cycles and reducing rework.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.PYTEST,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

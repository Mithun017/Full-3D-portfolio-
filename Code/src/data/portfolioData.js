export const portfolioData = {
  profile: {
    name: "M Mithun",
    role: "AI & Data Science Undergraduate",
    institution: "Sri Eshwar College of Engineering",
    status: "Online // System Operational",
    location: "Coimbatore, Tamil Nadu, India",
    bio: "AI & Data Science undergraduate at Sri Eshwar College of Engineering, driven by the pursuit of building intelligent systems that create meaningful real-world impact. My journey blends deep technical exploration with hands-on execution — reflected through 35+ real-world projects, 30+ certifications, and internships in AI, software engineering, backend development, and data analysis.",
    experienceHighlights: "At CosmicIT, I engineered AI model fine-tuning pipelines, multimodal text & vision generation systems, and transformer-based architectures. At ULN Tech, I strengthened backend engineering and real-time streaming data analytics, training predictive models with LightGBM, ARIMA, and LSTM networks.",
    coreInterests: [
      "Generative AI & LLM Systems",
      "Agentic AI Workflows",
      "Cloud Engineering & CI/CD",
      "Digital Twin Modeling",
      "Intelligent Healthcare & Defense Analytics",
      "Real-Time Predictive Environments"
    ],
    leadership: [
      {
        title: "Vice-President",
        organization: "IETE Student Forum",
        description: "Coordinating technical symposiums, AI workshops, and hackathons to foster deep-tech student communities."
      },
      {
        title: "Campus Ambassador",
        organization: "IIT PALS",
        description: "Bridging collegiate innovation programs with industry mentorship and student leadership."
      },
      {
        title: "Published Researcher",
        organization: "IEEE Author",
        description: "Contributing academic research on machine learning models and predictive analysis."
      },
      {
        title: "Hackathon Finalist",
        organization: "National Competitions",
        description: "Designing cutting-edge AI prototypes under high-tempo competitive environments."
      }
    ],
    mission: "I strive to push boundaries, experiment boldly, and create AI solutions that evolve with the world — one line of code at a time.",
    stats: [
      { label: "Projects Completed", value: "35+" },
      { label: "Certifications", value: "30+" },
      { label: "Production Internships", value: "2+" },
      { label: "Academic / IEEE Publications", value: "1" }
    ],
    contact: {
      phone: "+91 93611 23237",
      email: "mmithun1701@gmail.com",
      linkedin: "https://www.linkedin.com/in/m-mithun-85787628b/",
      github: "https://github.com/mithun017/",
      repo: "https://github.com/Mithun017/Full-3D-portfolio-.git"
    }
  },

  skills: {
    ai_ml: {
      title: "AI & Machine Learning",
      icon: "Brain",
      items: [
        { name: "Machine Learning & Scikit-learn", level: 95 },
        { name: "Deep Learning (CNN, RNN, LSTM)", level: 90 },
        { name: "Transformers & Attention Mechanisms", level: 88 },
        { name: "Generative AI & LLMs", level: 92 },
        { name: "Agentic AI & LangChain", level: 85 },
        { name: "NLP & Semantic Embeddings", level: 90 },
        { name: "Time Series (ARIMA & LSTMs)", level: 86 },
        { name: "Digital Twin Modeling", level: 82 },
        { name: "Audio / Spectrogram WAV Analysis", level: 84 }
      ]
    },
    languages: {
      title: "Programming Languages",
      icon: "Code2",
      items: [
        { name: "Python", level: 96 },
        { name: "JavaScript", level: 88 },
        { name: "C / C++", level: 85 },
        { name: "R", level: 80 }
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: "Boxes",
      items: [
        { name: "TensorFlow & Keras", level: 92 },
        { name: "PyTorch", level: 88 },
        { name: "FastAPI", level: 92 },
        { name: "LangChain", level: 85 },
        { name: "OpenAI & Gemini APIs", level: 94 },
        { name: "Hugging Face", level: 90 },
        { name: "Streamlit", level: 90 },
        { name: "MongoDB & Vector Stores", level: 86 },
        { name: "GeoPandas & OpenCV", level: 85 }
      ]
    },
    cloud_devops: {
      title: "Cloud & DevOps",
      icon: "Cloud",
      items: [
        { name: "AWS (EC2, S3, IAM)", level: 88 },
        { name: "Docker & Containerization", level: 85 },
        { name: "Git & GitHub CI/CD", level: 92 },
        { name: "Postman & API Testing", level: 90 },
        { name: "Cloud Deployment (Render, Cloudflare)", level: 88 }
      ]
    },
    engineering: {
      title: "Core Software Engineering",
      icon: "Cpu",
      items: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "OOPs & Clean Architecture", level: 92 },
        { name: "Backend Architecture & Microservices", level: 88 },
        { name: "Real-Time Data Processing", level: 86 },
        { name: "System Design Basics", level: 82 }
      ]
    }
  },

  experiences: [
    {
      id: "cosmicit-2025",
      role: "AI & Software Engineering Intern",
      company: "CosmicIT",
      period: "2025",
      badge: "Production AI",
      focus: "Generative AI, LLMs, Software Development, Model Fine-Tuning",
      description: "Designed and fine-tuned AI models for text, vision, and multimodal generation. Converted bleeding-edge research concepts into production-ready AI services with optimized inference and scalable cloud deployments.",
      achievements: [
        "Built transformer-based architectures using TensorFlow and PyTorch for specialized client workflows",
        "Fine-tuned open-source LLMs and diffusion models for domain-specific tasks and low-latency inference",
        "Engineered end-to-end NLP pipelines for automated classification, contextual summarization, and vector embeddings",
        "Integrated Hugging Face, Gemini, and proprietary custom AI models into full-stack applications",
        "Constructed asynchronous API-driven AI services utilizing FastAPI with real-time throughput metrics",
        "Deployed containerized AI workflows on cloud environments with robust error boundary controls"
      ],
      technologies: ["TensorFlow", "PyTorch", "Hugging Face", "Gemini API", "FastAPI", "Python", "Docker"]
    },
    {
      id: "uln-tech-2024",
      role: "Data Analysis & Backend Intern",
      company: "ULN Tech",
      period: "2024",
      badge: "Real-Time Systems",
      focus: "Predictive Modeling, Backend APIs, Real-Time Data Flow",
      description: "Strengthened foundations in backend engineering, scalable data aggregation, and real-time forecasting. Orchestrated pipelines integrating statistical models directly into live business decision engines.",
      achievements: [
        "Developed predictive ML models using Tree Algorithms, LightGBM, ARIMA, and LSTM neural architectures",
        "Handled streaming multi-source datasets with high data fidelity and low latency",
        "Designed performant backend services using FastAPI paired with MongoDB aggregation pipelines",
        "Built automated data cleansing, feature transformation, and exploratory extraction scripts",
        "Published and rigorously tested ML endpoints using Postman and automated test suites",
        "Collaborated with cross-functional product teams to embed predictive models into customer-facing logic"
      ],
      technologies: ["FastAPI", "MongoDB", "LightGBM", "ARIMA", "LSTM", "Python", "Postman"]
    },
    {
      id: "freelancing",
      role: "Freelance AI Engineer & Technical Consultant",
      company: "Independent Client Practice",
      period: "2024 — Present",
      badge: "High Impact",
      focus: "Full-Stack ML Pipelines, Agentic Workflows, Academic Consulting",
      description: "Architecting end-to-end AI/ML systems for international clients, startups, and academic researchers. Delivering scalable predictive models, custom AI agents, and production APIs.",
      achievements: [
        "Developed complete ML pipelines from ingestion and feature extraction to API deployment and monitoring",
        "Engineered custom AI chatbots, autonomous multi-tool agents, and intelligent document extractors",
        "Created AI-powered research literature recommendation engines with citation credibility scoring",
        "Constructed interactive data dashboards using Streamlit and Python for business intelligence",
        "Mentored university engineering students in deep learning and advanced systems engineering",
        "Configured robust deployments on AWS EC2, Render, and GitHub Cloud with automated CI/CD"
      ],
      technologies: ["LangChain", "OpenAI", "AWS EC2", "Streamlit", "Python", "FastAPI", "Docker"]
    }
  ],

  projects: [
    {
      id: "fluxsense",
      title: "FluxSense – Acoustic Transformer Health Monitoring",
      tagline: "AI-Powered Industrial Fault Detection",
      category: "AI & Signal Processing",
      badge: "Featured / Industrial",
      icon: "Activity",
      overview: "Built an AI system that detects internal electrical transformer faults through acoustic signature analysis. Deep learning models classify, predict, and alert anomalies before catastrophic structural failure.",
      features: [
        "Acoustic spectrogram generation and CNN-based sound wave analysis",
        "Early warning anomaly detection alerting operators to insulation degradation",
        "Improves industrial maintenance efficiency and hazardous operational safety"
      ],
      impact: "Prevents critical transformer blowouts through early sound diagnostics, saving immense industrial downtime.",
      techStack: ["PyTorch", "CNN", "Spectrograms", "Librosa", "FastAPI", "Python"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "crime-abstractor",
      title: "Crime Abstractor",
      tagline: "NLP-Based Crime Report Analysis System",
      category: "NLP & AI",
      badge: "Featured / NLP",
      icon: "ShieldAlert",
      overview: "An NLP-powered intelligence system that extracts, summarizes, and categorizes unstructured crime incident reports into structured actionable law-enforcement insights.",
      features: [
        "Semantic clustering and automated incident classification",
        "Pattern recognition for crime clusters across time and geographic jurisdictions",
        "Automated data cleaning and entity extraction from raw text filings"
      ],
      impact: "Reduces manual detective analysis workload by over 60% while accelerating real-time report interpretation.",
      techStack: ["Python", "Transformers", "NLP", "Scikit-Learn", "FastAPI"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "collateral-damage-prediction",
      title: "Collateral Damage Prediction",
      tagline: "Geospatial Impact Prediction with Digital Twin",
      category: "Digital Twin & Defense",
      badge: "Featured / Geospatial",
      icon: "Globe",
      overview: "Designed an ML + Digital Twin system to simulate and predict collateral damage zones using multi-layered spatial, structural, and environmental telemetry.",
      features: [
        "Simulates real-world impact scenarios to visualize high-risk civilian zones",
        "Integrated real-time spatial mapping for dynamic situational simulation",
        "Aimed at defense analytics, disaster relief, and structural hazard mitigations"
      ],
      impact: "Enables proactive mitigation and tactical route planning for emergency services.",
      techStack: ["GeoPandas", "Digital Twin", "Machine Learning", "Python", "Leaflet"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "voice-assist-cef",
      title: "Voice Assist (ceF)",
      tagline: "Lightweight Voice Assistant with Low Latency",
      category: "Audio & Agents",
      badge: "Voice AI",
      icon: "Mic",
      overview: "A lightweight, modular voice assistant capable of executing system commands, conversational answering, and voice-guided operations.",
      features: [
        "Integrated Speech-to-Text (STT) and dynamic Text-to-Speech (TTS)",
        "Intent classification engine for hands-free productivity",
        "Modular architecture supporting quick command expansions"
      ],
      impact: "Provides accessible hands-free desktop control with near-instant inference times.",
      techStack: ["Python", "STT / TTS", "Intent Classification", "Fast Inference"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "traffic-sign-board-prediction",
      title: "Traffic Sign Board Prediction",
      tagline: "CNN-Based Traffic Sign Classification for ADAS",
      category: "Computer Vision",
      badge: "Computer Vision",
      icon: "Car",
      overview: "A convolutional neural network-based sign recognition model engineered for autonomous vehicle decision support and driver-assist systems.",
      features: [
        "OpenCV image augmentation and real-time contrast correction",
        "High-accuracy classification across 40+ standardized traffic sign classes",
        "Robust detection under adverse weather and lighting conditions"
      ],
      impact: "Supports safer autonomous vehicle navigation through precise real-time road sign classification.",
      techStack: ["TensorFlow", "Keras", "OpenCV", "CNN", "Python"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "thyroid-disease-handling",
      title: "Thyroid Disease Handling",
      tagline: "Medical ML-Based Abnormality Detection",
      category: "Healthcare AI",
      badge: "Healthcare",
      icon: "HeartPulse",
      overview: "Medical machine learning system that predicts and screens thyroid abnormalities from patient clinical lab datasets with high diagnostic reliability.",
      features: [
        "Predicts hypothyroid and hyperthyroid conditions with high sensitivity",
        "Interactive dashboard displaying confusion matrices and ROC curves",
        "Feature importance visualization for medical interpretability"
      ],
      impact: "Significantly reduces diagnostic turnaround time while aiding physicians in early detection.",
      techStack: ["Scikit-learn", "Streamlit", "Pandas", "Healthcare Analytics"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "traffic-handling-project",
      title: "Intelligent Traffic Handling System",
      tagline: "Dynamic Congestion Management & Signal Optimization",
      category: "Smart Cities",
      badge: "Smart Cities",
      icon: "Navigation",
      overview: "Intelligent traffic optimization model that forecasts urban intersection congestion and dynamically adjusts signal timing cycles.",
      features: [
        "Integrates weather factors, vehicular volume, and diurnal peak intervals",
        "Rule-based control with ML forecasting to prevent gridlock",
        "Simulation environment demonstrating bottleneck reduction"
      ],
      impact: "Reduces peak waiting times at complex intersections by up to 35%.",
      techStack: ["Python", "Time Series ML", "Simulation", "Data Science"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "encryption-key-optimisation",
      title: "Encryption Key Optimisation & Benchmarking",
      tagline: "Cryptographic Algorithm Performance Analysis",
      category: "Cybersecurity",
      badge: "Cybersecurity",
      icon: "Lock",
      overview: "A security benchmarking tool that measures encryption performance, computational efficiency, and key entropy strength across cryptographic algorithms.",
      features: [
        "Comparative throughput and CPU cycle measurement across AES, RSA, and ECC",
        "Entropy testing to expose algorithmic weaknesses in key generation",
        "Aids developers in choosing optimal security-vs-performance balances"
      ],
      impact: "Empowers security teams to select defensible cryptographic schemes suited for resource-constrained systems.",
      techStack: ["Python", "Cryptography", "Benchmarking", "Information Security"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "dtp-codecred",
      title: "DTP_CodeCred",
      tagline: "AI-Powered Research Paper Recommendation Engine",
      category: "NLP & AI",
      badge: "Academic AI",
      icon: "BookOpen",
      overview: "An AI-powered research literature discovery and recommendation system leveraging high-dimensional semantic similarity embeddings.",
      features: [
        "Paper discovery based on abstract semantic embeddings and vector distances",
        "Credibility scoring and citation trajectory analysis",
        "Accelerates literature reviews for scholars, engineers, and educators"
      ],
      impact: "Speeds up academic research discovery with context-aware semantic matchmaking.",
      techStack: ["LLMs", "Vector Embeddings", "LangChain", "FastAPI", "Python"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "cloud-project-ec2",
      title: "AWS EC2 Deployment & Automation",
      tagline: "Automated Cloud Infrastructure & CI/CD Pipelines",
      category: "Cloud & DevOps",
      badge: "DevOps",
      icon: "CloudRain",
      overview: "Architected end-to-end full-stack cloud infrastructure on AWS EC2 with automated build, load balancing, SSH security, and CI/CD pipelines.",
      features: [
        "Zero-downtime deployment workflows utilizing GitHub Actions",
        "Automated reverse proxy configuration via Nginx and systemd services",
        "Proactive server health monitoring and automated log rotation"
      ],
      impact: "Guarantees 99.9% uptime with automated self-healing server daemon configs.",
      techStack: ["AWS EC2", "Docker", "GitHub Actions", "Nginx", "Linux Bash"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "live-classroom",
      title: "Live Classroom Platform",
      tagline: "Real-Time Collaborative Teaching Environment",
      category: "Web & Systems",
      badge: "EdTech",
      icon: "Users",
      overview: "A comprehensive virtual teaching environment supporting real-time classroom communication, content distribution, and attendance verification.",
      features: [
        "Live interactive chat and instant educational material broadcast",
        "Automated student attendance tracking and session analytics",
        "Optimized for low-bandwidth educational environments"
      ],
      impact: "Simplifies remote learning for teachers and students with zero complicated setup.",
      techStack: ["JavaScript", "FastAPI", "WebSockets", "CSS3", "HTML5"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "student-dashboard",
      title: "Student Academic Dashboard",
      tagline: "Centralized Academic Performance Tracking System",
      category: "Web & Systems",
      badge: "Analytics",
      icon: "LayoutDashboard",
      overview: "Role-based academic metrics dashboard for students, instructors, and department heads with interactive visual analytics.",
      features: [
        "Interactive grade visualizers and semester trend analyses",
        "Role-based authentication ensuring rigorous data privacy",
        "Automated report generation and early intervention alerts"
      ],
      impact: "Provides clean, accessible academic transparency for university departments.",
      techStack: ["Python", "Streamlit", "Pandas", "Matplotlib"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "resource-management-system",
      title: "Resource Management & Secure File Sharing",
      tagline: "Academic Document Collaboration Platform",
      category: "Web & Systems",
      badge: "Systems",
      icon: "FolderGit2",
      overview: "A secure organizational platform for uploading, permission-tagging, versioning, and sharing academic materials across institutional departments.",
      features: [
        "Multi-tier permission management and granular access tokens",
        "Audit trail activity logging for compliance and document tracking",
        "Optimized chunked uploads with rapid hash validation"
      ],
      impact: "Eliminates departmental file fragmentation with central cryptographic access.",
      techStack: ["Python", "FastAPI", "MongoDB", "OAuth2"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "crm-student-teacher",
      title: "CRM for Student & Teacher Management",
      tagline: "Academic Interaction & Workflow Platform",
      category: "Web & Systems",
      badge: "Enterprise",
      icon: "Briefcase",
      overview: "Enterprise-grade CRM system designed for universities to streamline faculty-student communication, mentorship logs, and automated schedule notifications.",
      features: [
        "Mentorship task tracking and automated reminder notifications",
        "Consolidated query resolution forum between students and professors",
        "Departmental performance reporting"
      ],
      impact: "Streamlines faculty advisory workflows and student grievance tracking.",
      techStack: ["React", "FastAPI", "PostgreSQL", "TailwindCSS"],
      github: "https://github.com/mithun017/"
    },
    {
      id: "codelab-annotation",
      title: "Codelab Annotation & Dataset Engineering",
      tagline: "International AI Dataset Annotation & Quality Refinement",
      category: "Data Science",
      badge: "Dataset Engineering",
      icon: "FileCheck",
      overview: "High-precision annotation and domain evaluation for multi-modal computer vision and NLP research datasets.",
      features: [
        "Semantic labeling for NLP classification and transformer pretraining",
        "Bounding box and semantic polygon annotation for CV models",
        "Rigorous quality verification reducing label noise"
      ],
      impact: "Enabled downstream models to achieve significant gains in benchmark accuracy.",
      techStack: ["Data Annotation", "CVAT", "LabelImg", "NLP Validation"],
      github: "https://github.com/mithun017/"
    }
  ],

  terminalFileSystem: {
    welcome: [
      "╔═══════════════════════════════════════════════════════════════════════╗",
      "║        M MITHUN — UBUNTU / COSMIC TERMINAL SYSTEM v2.4                ║",
      "║        AI & Data Science | Sri Eshwar College of Engineering          ║",
      "╚═══════════════════════════════════════════════════════════════════════╝",
      "Type 'help' to inspect available system commands.",
      "Type 'neofetch' for system and identity telemetry.",
      "Type 'projects' to stream all 15 real-world AI/ML deployments."
    ],
    commands: {
      help: [
        "Available Commands:",
        "  neofetch    - Display system profile & specifications",
        "  about       - Detailed biography & leadership roles",
        "  skills      - Categorized technical stack & proficiency",
        "  projects    - List all 15 production projects",
        "  project <id>- Inspect specific project details (e.g. project fluxsense)",
        "  experience  - View internship and consulting history",
        "  contact     - Display communication endpoints & links",
        "  clear       - Clear terminal buffer",
        "  date        - Current system timestamp"
      ]
    }
  }
};


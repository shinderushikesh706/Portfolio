export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl: string;
  badge: string;
  isPlaceholder: boolean;
  architectureDetails: {
    overview: string;
    components: string[];
    metrics: string[];
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  isPlaceholder: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  year: string;
  details: string;
  isPlaceholder: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  url?: string;
  isPlaceholder: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    highlight?: boolean;
  }[];
}

export const portfolioData = {
  personal: {
    name: "[YOUR NAME]",
    role: "AI Engineer",
    specialization: "Generative AI • Agentic AI • LLM Applications • Scalable AI Systems",
    statusText: "Available for AI Engineering Opportunities",
    isAvailable: true,
    headline: "Building Intelligent Systems with AI.",
    subheadline:
      "Specializing in Agentic AI, Generative AI, Large Language Models, and scalable software solutions. Designing production-grade intelligent systems that bridge foundational research with enterprise-scale software engineering.",
    email: "your.email@example.com",
    location: "Global / Remote (Placeholder)",
    resumePath: "/resume.pdf",
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "mailto:your.email@example.com",
    },
  },

  about: {
    intro:
      "I am an AI Engineer passionate about architecting state-of-the-art Generative AI and Agentic systems that solve complex, real-world problems. My engineering approach combines deep curiosity with rigorous software engineering practices.",
    paragraphs: [
      "With a dedicated focus on Large Language Models, Multi-Agent Orchestration, and Retrieval-Augmented Generation (RAG), I build robust AI applications that move beyond simple prompts into reliable, deterministic, enterprise-grade systems.",
      "I believe the true value of AI lies at the intersection of agentic autonomy and software engineering rigor—implementing strict guardrails, observability pipelines, low-latency streaming interfaces, and resilient vector search infrastructures.",
      "Constantly exploring the frontier of autonomous agent reasoning, test-driven evaluation harnesses (Eval-driven development), and edge AI acceleration to craft software that elevates human potential.",
    ],
    pillars: [
      {
        title: "Agentic Architecture",
        desc: "Designing autonomous multi-agent workflows with LangGraph and state machines for goal-driven execution.",
      },
      {
        title: "Enterprise RAG & Search",
        desc: "Building high-precision hybrid retrieval pipelines with vector databases, reranking, and semantic chunking.",
      },
      {
        title: "Production Reliability",
        desc: "Implementing observability, evaluation benchmarks, structured outputs, and LLM guardrails.",
      },
      {
        title: "Full-Stack Integration",
        desc: "Developing end-to-end full-stack applications with Next.js, Python FastAPI, and cloud-native microservices.",
      },
    ],
  },

  // Technical Skills - ONLY technologies specified by the user
  skills: [
    {
      title: "AI & Machine Learning",
      description: "Core paradigms, architectures, and modeling techniques.",
      skills: [
        { name: "Generative AI", level: "Advanced", highlight: true },
        { name: "Agentic AI", level: "Advanced", highlight: true },
        { name: "Large Language Models", level: "Advanced", highlight: true },
        { name: "RAG", level: "Advanced", highlight: true },
        { name: "AI Agents", level: "Advanced", highlight: true },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "Vector Databases", level: "Proficient", highlight: true },
      ],
    },
    {
      title: "Development",
      description: "Full-stack languages, modern frameworks, and API design.",
      skills: [
        { name: "Python", level: "Advanced", highlight: true },
        { name: "JavaScript / TypeScript", level: "Advanced", highlight: true },
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced", highlight: true },
        { name: "REST APIs", level: "Advanced" },
      ],
    },
    {
      title: "AI Frameworks & Tools",
      description: "Frameworks, orchestration engines, and model registries.",
      skills: [
        { name: "LangChain", level: "Advanced", highlight: true },
        { name: "LangGraph", level: "Advanced", highlight: true },
        { name: "OpenAI API", level: "Advanced", highlight: true },
        { name: "Hugging Face", level: "Proficient" },
        { name: "Azure AI", level: "Proficient", highlight: true },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description: "Deployment, containerization, and automated workflows.",
      skills: [
        { name: "Microsoft Azure", level: "Proficient", highlight: true },
        { name: "AWS", level: "Proficient" },
        { name: "Docker", level: "Proficient" },
        { name: "Git", level: "Advanced" },
        { name: "CI/CD", level: "Proficient" },
      ],
    },
  ] as SkillCategory[],

  // Professional Experience (Clearly labeled as placeholders)
  experience: [
    {
      id: "exp-1",
      company: "[Company Name — Leading AI Enterprise]",
      role: "Senior AI Engineer (Placeholder)",
      period: "2023 — Present",
      location: "San Francisco, CA (or Remote)",
      description:
        "Architecting multi-agent reasoning workflows and production RAG pipelines serving thousands of daily enterprise queries.",
      responsibilities: [
        "Led the technical architecture of an autonomous multi-agent platform utilizing LangGraph and Python microservices.",
        "Engineered low-latency RAG retrieval systems reducing query hallucination rates by 42% through hybrid search and semantic reranking.",
        "Built automated evaluation pipelines (Evals) using custom benchmarking datasets to track model drift and accuracy across deployments.",
      ],
      achievements: [
        "Reduced inference latency by 35% through prompt compression, semantic caching, and token streaming optimizations.",
        "Scaled LLM backend infrastructure on Microsoft Azure with containerized Docker services and automated CI/CD.",
      ],
      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "OpenAI API",
        "Vector Databases",
        "Microsoft Azure",
        "Docker",
      ],
      isPlaceholder: true,
    },
    {
      id: "exp-2",
      company: "[Company Name — AI Product Studio]",
      role: "AI & Full-Stack Engineer (Placeholder)",
      period: "2021 — 2023",
      location: "New York, NY (or Remote)",
      description:
        "Developed full-stack AI web applications, conversational agents, and real-time document intelligence tools.",
      responsibilities: [
        "Developed conversational AI chatbots and intuitive user interfaces using Next.js, React, TypeScript, and FastAPI.",
        "Integrated Hugging Face open-source embeddings with vector database collections for enterprise document search.",
        "Implemented secure REST APIs, role-based guardrails, and telemetry monitoring for all AI endpoints.",
      ],
      achievements: [
        "Delivered 4 production AI client applications from initial concept to cloud deployment within tight deadlines.",
        "Implemented zero-downtime CI/CD workflows using Git and Docker on AWS cloud infrastructure.",
      ],
      technologies: [
        "Python",
        "Next.js",
        "TypeScript",
        "React",
        "Hugging Face",
        "AWS",
        "REST APIs",
        "Git",
      ],
      isPlaceholder: true,
    },
    {
      id: "exp-3",
      company: "[Company Name — Software Engineering Consultancy]",
      role: "Software Engineer (Placeholder)",
      period: "2019 — 2021",
      location: "Boston, MA (or Remote)",
      description:
        "Designed and maintained high-throughput web applications, REST API architectures, and data pipelines.",
      responsibilities: [
        "Built scalable frontend web interfaces and backend services using JavaScript, TypeScript, React, and Python.",
        "Collaborated with cross-functional product and design teams to build accessible, responsive user experiences.",
        "Wrote comprehensive unit and integration tests to ensure 95%+ test coverage across critical application flows.",
      ],
      achievements: [
        "Migrated legacy codebase to modern TypeScript and Next.js, boosting page load speeds by 60%.",
        "Mentored junior engineers in clean code standards and automated testing methodologies.",
      ],
      technologies: [
        "JavaScript / TypeScript",
        "Python",
        "React",
        "REST APIs",
        "Docker",
        "Git",
        "CI/CD",
      ],
      isPlaceholder: true,
    },
  ] as ExperienceItem[],

  // Featured Projects (All 5 requested categories, clearly marked as placeholders)
  projects: [
    {
      id: "proj-1",
      title: "Autonomous Multi-Agent AI Automation System",
      category: "Multi-Agent Systems",
      badge: "LangGraph • Agents",
      shortDescription:
        "A distributed multi-agent framework orchestrating specialized agents for research, reasoning, code synthesis, and automated verification.",
      fullDescription:
        "Designed and implemented an agentic orchestration platform where autonomous agents collaborate with role-specialized prompts, short/long-term memory, dynamic tool calling, and human-in-the-loop validation.",
      technologies: [
        "Agentic AI",
        "LangGraph",
        "Python",
        "OpenAI API",
        "Docker",
        "Next.js",
      ],
      highlights: [
        "Dynamic task decomposition and state machine execution via LangGraph",
        "Self-correcting verification loop reducing code synthesis errors by 48%",
        "Interactive real-time agent execution visualizer built with React & Next.js",
      ],
      githubUrl: "https://github.com/yourusername/multi-agent-system",
      demoUrl: "https://demo.example.com/multi-agent",
      isPlaceholder: true,
      architectureDetails: {
        overview:
          "Graph-based state machine architecture coordinating Planner, Researcher, Coder, and Critic agents with shared persistent memory state.",
        components: [
          "State Graph Coordinator (LangGraph)",
          "Vector Memory & Scratchpad Store",
          "Tool Registry (Sandboxed execution, Web search, Code sandbox)",
          "Next.js WebSocket UI Streamer",
        ],
        metrics: [
          "98.4% Task Completion Rate",
          "Sub-2s Step Transition Latency",
          "100% Deterministic State Recovery",
        ],
      },
    },
    {
      id: "proj-2",
      title: "Enterprise Hybrid RAG Search Platform",
      category: "Retrieval-Augmented Generation",
      badge: "RAG • Vector Search",
      shortDescription:
        "Production-ready RAG application combining dense vector search, sparse keyword retrieval, and cross-encoder reranking.",
      fullDescription:
        "An enterprise knowledge synthesis engine that indexes hundreds of thousands of complex technical documents, performs semantic chunking, and yields citations with verified source ground truth.",
      technologies: [
        "RAG",
        "Vector Databases",
        "LangChain",
        "Python",
        "OpenAI API",
        "FastAPI",
      ],
      highlights: [
        "Hybrid Dense-Sparse (BM25 + Cosine) retrieval with Reciprocal Rank Fusion",
        "Advanced semantic chunking preserving table hierarchies and document context",
        "Contextual compression and citation verification to eliminate hallucinations",
      ],
      githubUrl: "https://github.com/yourusername/enterprise-hybrid-rag",
      demoUrl: "https://demo.example.com/rag-platform",
      isPlaceholder: true,
      architectureDetails: {
        overview:
          "Two-stage retrieval pipeline: High-recall candidate retrieval followed by cross-encoder reranking and source-cited synthesis.",
        components: [
          "Document Ingestion & Chunking Pipeline",
          "Vector Database (Milvus/Pinecone/Qdrant)",
          "Cross-Encoder Semantic Reranker",
          "Guardrail & Groundedness Validator",
        ],
        metrics: [
          "< 350ms P95 Query Latency",
          "94.2% Context Relevance Score",
          "Zero Hallucinated Citations",
        ],
      },
    },
    {
      id: "proj-3",
      title: "AI-Powered Intelligent Assistant with Tool Calling",
      category: "Intelligent Assistant",
      badge: "Generative AI • Tools",
      shortDescription:
        "Context-aware AI personal copilot equipped with function calling, calendar/workspace integrations, and adaptive conversational memory.",
      fullDescription:
        "An intelligent personal assistant powered by fine-tuned prompt engineering and structured schema outputs. Capable of executing complex workflows across external productivity APIs while maintaining user state.",
      technologies: [
        "Generative AI",
        "OpenAI API",
        "Python",
        "TypeScript",
        "Next.js",
        "REST APIs",
      ],
      highlights: [
        "Strict JSON-schema function calling with automated schema fallback validation",
        "Hierarchical conversational memory summarizing historical interactions",
        "Streaming response latency under 200ms using edge-ready Next.js routes",
      ],
      githubUrl: "https://github.com/yourusername/intelligent-assistant",
      demoUrl: "https://demo.example.com/assistant",
      isPlaceholder: true,
      architectureDetails: {
        overview:
          "Edge-streamed assistant client connected to an asynchronous Python execution backend with sandboxed tool invocation.",
        components: [
          "Edge Stream Gateway (Next.js App Router)",
          "Tool Execution Sandbox",
          "Conversation Summary Memory Store",
          "Structured Output Validator",
        ],
        metrics: [
          "< 200ms Time-to-First-Token",
          "99.8% Function Call Precision",
          "Multi-turn Thread Continuity",
        ],
      },
    },
    {
      id: "proj-4",
      title: "Enterprise AI Chatbot with Security Guardrails",
      category: "Enterprise AI",
      badge: "Azure AI • Security",
      shortDescription:
        "High-compliance conversational system featuring real-time PII masking, jailbreak defense, and enterprise audit telemetry.",
      fullDescription:
        "Designed for regulated industries requiring strict governance, role-based access control (RBAC), prompt injection defense, and comprehensive telemetry logging.",
      technologies: [
        "Azure AI",
        "LangChain",
        "Python",
        "Microsoft Azure",
        "Docker",
        "CI/CD",
      ],
      highlights: [
        "Integrated dual-layer guardrail shielding against adversarial prompt injection",
        "Automated PII detection and token obfuscation prior to model ingestion",
        "Real-time audit log streaming to Azure Monitor and OpenTelemetry sinks",
      ],
      githubUrl: "https://github.com/yourusername/enterprise-secure-chatbot",
      demoUrl: "https://demo.example.com/enterprise-bot",
      isPlaceholder: true,
      architectureDetails: {
        overview:
          "Zero-trust conversational middleware intercepting all prompts, evaluating safety boundaries, and enforcing corporate compliance policies.",
        components: [
          "Azure AI Content Safety Gateway",
          "Prompt Sanitization & Anonymizer",
          "Azure OpenAI LLM Deployment",
          "Compliance & Audit Ledger",
        ],
        metrics: [
          "99.99% Injection Interception Rate",
          "SOC2 & HIPAA Compliant Architecture",
          "50k+ Daily Queries Handled",
        ],
      },
    },
    {
      id: "proj-5",
      title: "AI-Powered Document Processing Platform",
      category: "Document Intelligence",
      badge: "Hugging Face • RAG",
      shortDescription:
        "Automated multimodal ingestion engine extracting structured data, tables, and analytical summaries from unstructured PDFs.",
      fullDescription:
        "End-to-end document intelligence solution transforming complex invoices, financial statements, and technical reports into validated JSON schemas and vector search embeddings.",
      technologies: [
        "Hugging Face",
        "Python",
        "Vector Databases",
        "REST APIs",
        "AWS",
        "Docker",
      ],
      highlights: [
        "Hybrid OCR and vision-augmented layout analysis for complex table grids",
        "Few-shot schema extraction achieving 97.8% field accuracy on invoice audits",
        "Asynchronous batch processing queue capable of handling 10,000+ pages/hour",
      ],
      githubUrl: "https://github.com/yourusername/ai-document-processor",
      demoUrl: "https://demo.example.com/doc-processor",
      isPlaceholder: true,
      architectureDetails: {
        overview:
          "Event-driven cloud pipeline utilizing AWS S3 triggers, Celery task workers, layout-aware models, and vector database indexing.",
        components: [
          "Document Layout Parser & Table Extractor",
          "Asynchronous Task Queue (Docker / AWS)",
          "Hugging Face Embedding Pipeline",
          "JSON Schema Validation Engine",
        ],
        metrics: [
          "10,000+ Pages/Hour Throughput",
          "97.8% Field Extraction Precision",
          "Automated Audit Trail Generation",
        ],
      },
    },
  ] as Project[],

  // Education & Certifications (Clearly identified placeholders)
  education: [
    {
      id: "edu-1",
      degree: "Master of Science (M.S.) (Placeholder)",
      field: "Computer Science / Artificial Intelligence",
      institution: "[Your University / Institution Name]",
      year: "2021 — 2023",
      details:
        "Focus areas: Machine Learning Systems, Natural Language Processing, Distributed Systems, and Advanced Algorithms.",
      isPlaceholder: true,
    },
    {
      id: "edu-2",
      degree: "Bachelor of Science (B.S.) (Placeholder)",
      field: "Computer Science / Software Engineering",
      institution: "[Your University / College Name]",
      year: "2017 — 2021",
      details:
        "Graduated with honors. Coursework in Data Structures, Database Systems, Computer Networks, and Software Engineering.",
      isPlaceholder: true,
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-1",
      title: "Microsoft Certified: Azure AI Engineer Associate (Placeholder)",
      issuer: "Microsoft",
      issueDate: "2023",
      credentialId: "MS-AI-102-PLACEHOLDER",
      isPlaceholder: true,
    },
    {
      id: "cert-2",
      title: "Deep Learning Specialization (Placeholder)",
      issuer: "DeepLearning.AI / Coursera",
      issueDate: "2022",
      credentialId: "DL-SPEC-PLACEHOLDER",
      isPlaceholder: true,
    },
    {
      id: "cert-3",
      title: "LangChain & Agentic Systems Developer (Placeholder)",
      issuer: "LangChain Academy",
      issueDate: "2024",
      credentialId: "LC-AGENT-PLACEHOLDER",
      isPlaceholder: true,
    },
  ] as CertificationItem[],
};

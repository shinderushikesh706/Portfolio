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
    name: "Rushikesh Shinde",
    fullName: "Rushikesh Baburao Shinde",
    role: "Senior Software Engineer & AI Specialist",
    specialization:
      "Generative AI • Agentic AI • Python Backend Architecture • Vector Search • Distributed Systems",
    statusText: "Open to Senior AI & Backend Engineering Roles",
    isAvailable: true,
    headline: "Building Intelligent Systems with AI.",
    subheadline:
      "Senior Software Engineer with 7.5+ years of experience engineering secure, high-scale backend architectures, autonomous AI-driven SOC systems, and production LLM integrations. Proven track record of boosting system reliability by 40% and slashing manual investigation time by ~90%.",
    email: "rshinde.careers@gmail.com",
    location: "Pune, India",
    resumePath: "/resume.pdf",
    socialLinks: {
      github: "https://github.com/shinderushikesh706",
      linkedin: "https://www.linkedin.com/in/shinderushikesh706/",
      email: "mailto:rshinde.careers@gmail.com",
    },
  },

  about: {
    intro:
      "Senior Software Engineer with 7.5+ years of deep expertise in architecting resilient backend systems, distributed workflow orchestration, and enterprise Generative AI integrations for 10+ global enterprise clients.",
    paragraphs: [
      "Currently at Crest Data, I design and deliver secure, production-grade backend integrations with platforms like Datadog, Netskope, and DeepTrust. I integrated Generative AI and LLM reasoning into an AI-Powered SOC platform, reducing manual alert investigation effort by ~90%.",
      "My engineering philosophy couples distributed systems rigor with modern AI capabilities—combining fault-tolerant workflow orchestration with Temporal, high-throughput microservices using FastAPI/Python, robust security contracts (OAuth 2.0, JWT), and Oracle AI Vector Search.",
      "Certified as an OCI Generative AI Professional, Oracle AI Vector Search Certified Professional, and AWS Cloud Practitioner, I specialize in bridging non-deterministic LLM capabilities with deterministic, scalable backend engineering.",
    ],
    pillars: [
      {
        title: "AI-Driven SOC & LLM Reasoning",
        desc: "Integrating LLMs, LangChain, and Temporal for automated multi-source security alert correlation, triage, and threat synthesis.",
      },
      {
        title: "Enterprise Backend Architecture",
        desc: "7.5+ years building distributed RESTful services, microservices, and asynchronous pipelines using Python, FastAPI, Django, and Flask.",
      },
      {
        title: "Zero Trust Security & Integrations",
        desc: "Designing extensible API contracts and integration engines for Datadog, Netskope, Okta, Keycloak, Tenable, and SIEM platforms.",
      },
      {
        title: "Vector Search & Retrieval",
        desc: "Certified expertise in Vector Databases and semantic search architectures to power enterprise knowledge synthesis.",
      },
    ],
  },

  // Technical Skills - verified from Rushikesh's resume & certifications
  skills: [
    {
      title: "AI & Machine Learning",
      description: "Generative AI, LLM reasoning, vector search, and agent orchestration.",
      skills: [
        { name: "Generative AI", level: "Advanced", highlight: true },
        { name: "Agentic AI", level: "Advanced", highlight: true },
        { name: "Large Language Models", level: "Advanced", highlight: true },
        { name: "RAG & Vector Search", level: "Advanced", highlight: true },
        { name: "LangChain", level: "Advanced", highlight: true },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "Vector Databases", level: "Advanced", highlight: true },
      ],
    },
    {
      title: "Backend Development",
      description: "7.5+ years of high-performance Python architectures, frameworks, and APIs.",
      skills: [
        { name: "Python (7+ yrs)", level: "Advanced", highlight: true },
        { name: "FastAPI (4+ yrs)", level: "Advanced", highlight: true },
        { name: "Django (2+ yrs)", level: "Advanced" },
        { name: "Flask (3+ yrs)", level: "Advanced" },
        { name: "REST APIs (7+ yrs)", level: "Advanced", highlight: true },
        { name: "Microservices", level: "Advanced", highlight: true },
        { name: "Redis", level: "Proficient" },
        { name: "Temporal (Workflows)", level: "Advanced", highlight: true },
      ],
    },
    {
      title: "Security & Integrations",
      description: "Zero Trust architecture, enterprise auth standards, and SIEM ecosystems.",
      skills: [
        { name: "OAuth 2.0 & JWT", level: "Advanced", highlight: true },
        { name: "API Security & Rate Limiting", level: "Advanced", highlight: true },
        { name: "Datadog", level: "Proficient" },
        { name: "Netskope", level: "Proficient" },
        { name: "Okta & Keycloak", level: "Proficient", highlight: true },
        { name: "SIEM Platforms", level: "Proficient" },
        { name: "Jira & ServiceNow", level: "Proficient" },
      ],
    },
    {
      title: "Cloud & DevOps & Databases",
      description: "Cloud infrastructure, containerization, CI/CD, and data persistence.",
      skills: [
        { name: "AWS", level: "Proficient", highlight: true },
        { name: "Docker (3+ yrs)", level: "Proficient", highlight: true },
        { name: "Git (5+ yrs)", level: "Advanced" },
        { name: "CI/CD & Pytest", level: "Advanced", highlight: true },
        { name: "Linux (4+ yrs)", level: "Proficient" },
        { name: "PostgreSQL & MySQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
      ],
    },
  ] as SkillCategory[],

  // Professional Experience from Rushikesh's resume
  experience: [
    {
      id: "exp-1",
      company: "Crest Data",
      role: "Senior Software Engineer (Python Backend Developer)",
      period: "02/2022 — Present",
      location: "Pune, India",
      description:
        "Designing and delivering secure, production-grade backend integrations and AI-powered systems for 10+ enterprise clients, ensuring high reliability, scalability, and compliance with industry standards.",
      responsibilities: [
        "Integrated Generative AI into an AI SOC platform, reducing manual analyst investigation effort by ~90% through LLM-driven alert correlation and evidence synthesis.",
        "Designed and delivered production-grade backend integrations with Datadog, Netskope, and DeepTrust for 10+ enterprise clients.",
        "Reduced integration onboarding time by 30% through standardized OOP abstraction layers, reusable API contracts, and automation.",
        "Mentored junior engineers on backend and system architecture, reducing onboarding time by 30%, improving code review speed by 25%, and fostering cross-functional alignment.",
        "Reviewed and optimized codebase to reduce complexity, improve system efficiency, and enhance long-term scalability.",
      ],
      achievements: [
        "Reduced manual security alert investigation effort by ~90% with AI-driven reasoning and LangChain workflows.",
        "Conducted in-depth Root Cause Analysis (RCA) on high-priority production issues, reducing system downtime by 30% and accelerating incident response by 40%.",
        "Standardized multi-vendor Zero Trust security integrations across SIEM, IAM, Okta, Duo, and Rapid7.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "LLMs",
        "Temporal",
        "Docker",
        "AWS",
        "OAuth 2.0",
        "REST APIs",
        "Datadog",
        "Netskope",
      ],
      isPlaceholder: false,
    },
    {
      id: "exp-2",
      company: "Atos-Syntel",
      role: "Python Developer",
      period: "07/2018 — 02/2022",
      location: "Pune, India",
      description:
        "Engineered scalable RESTful backend services, secure authentication workflows, and automated testing pipelines for enterprise applications.",
      responsibilities: [
        "Developed high-throughput RESTful backend services using Python, Django, and Flask.",
        "Implemented robust OAuth 2.0 and JWT authentication mechanisms across distributed endpoints.",
        "Implemented Test-Driven Development (TDD) and comprehensive unit testing using Pytest across the entire backend service, accelerating delivery and enhancing code quality.",
        "Constructed automated Continuous Integration (CI) and deployment pipelines, elevating code reliability and release velocity.",
        "Collaborated with cross-functional engineering teams to optimize backend performance, database queries, and API response latency.",
      ],
      achievements: [
        "Achieved 40%+ improvement in system reliability through disciplined TDD, Pytest test coverage, and CI automation.",
        "Spearheaded token-based authentication and granular authorization across multi-tenant enterprise services.",
      ],
      technologies: [
        "Python",
        "Django",
        "Flask",
        "REST APIs",
        "OAuth 2.0",
        "JWT",
        "Pytest",
        "CI/CD",
        "Git",
        "MySQL",
      ],
      isPlaceholder: false,
    },
  ] as ExperienceItem[],

  // Featured Projects from Rushikesh's actual engineering accomplishments
  projects: [
    {
      id: "proj-1",
      title: "AI-Powered Security Operations Center (SOC) Platform",
      category: "Multi-Agent Systems & AI",
      badge: "LangChain • Temporal • FastAPI",
      shortDescription:
        "An AI-driven SOC investigation platform that automates security alert correlation, executes long-running workflows, and uses LLM-based reasoning to analyze events.",
      fullDescription:
        "Engineered a production-grade AI SOC system that correlates heterogeneous alerts across multiple security data sources. Combines LangChain and LLM reasoning for automated alert analysis with Temporal workflow orchestration for fault-tolerant, long-running investigations.",
      technologies: [
        "Python",
        "FastAPI",
        "Temporal",
        "LangChain",
        "LLMs",
        "React",
        "Docker",
        "REST APIs",
      ],
      highlights: [
        "Reduced manual alert investigation effort by ~90% via automated LLM reasoning",
        "Built fault-tolerant workflow orchestration with Temporal for parallel activity execution and retries",
        "Engineered multi-source data ingestion pipelines for heterogeneous security products",
        "Designed interactive React-based investigation dashboard for SOC analysts",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      demoUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "Multi-source alert ingestion engine integrated with a Temporal stateful workflow orchestrator, LangChain LLM reasoning node, and FastAPI backend services.",
        components: [
          "Temporal Workflow Orchestrator (Long-running, retries, timeouts)",
          "LangChain LLM Reasoning Engine (Evidence correlation & triage)",
          "Multi-Source Security Alert Ingestion Pipeline",
          "FastAPI Asynchronous REST Gateway",
          "React SOC Analyst Investigation Interface",
        ],
        metrics: [
          "~90% Reduction in Manual Analyst Effort",
          "Zero Lost Ingested Alerts (Fault-tolerant Temporal)",
          "Sub-second API Dispatch for Real-time Feeds",
        ],
      },
    },
    {
      id: "proj-2",
      title: "DeepTrust Zero-Trust Integration Framework",
      category: "Zero Trust Architecture",
      badge: "Python • Architecture • Security",
      shortDescription:
        "A reusable Python-based integration framework standardizing connectivity across SIEM, IAM, Okta, Duo, Rapid7, Datadog, and Netskope.",
      fullDescription:
        "Architected a standardized, extensible integration framework for a Zero Trust security platform. Designed common abstraction layers, interfaces, and reusable components to eliminate boilerplate and accelerate third-party vendor onboarding.",
      technologies: [
        "Python",
        "OOP Design Patterns",
        "OAuth 2.0",
        "JWT",
        "REST APIs",
        "Okta",
        "Datadog",
        "Netskope",
      ],
      highlights: [
        "Reduced integration onboarding time by 30% through modular contracts and shared components",
        "Decoupled vendor-specific implementation details from core platform via well-defined interfaces",
        "Built standardized auth, API clients, rate limiters, retries, and normalized response parsing",
        "Standardized integrations with Datadog, Netskope, Okta, Rapid7, and Tenable",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      demoUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "Vendor-agnostic abstraction layer defining common contracts for authentication, data retrieval, error handling, and response transformation across identity and security vendors.",
        components: [
          "Unified Integration Contract & Abstract Base Classes",
          "Authentication & Token Refresh Manager (OAuth 2.0 / JWT)",
          "Resilient HTTP Client (Exponential backoff, jitter, rate limits)",
          "Normalized Data Serialization & Schema Validation Layer",
        ],
        metrics: [
          "30% Faster Third-Party Vendor Onboarding",
          "100% Normalized Data Format across SIEM/IAM",
          "Zero Platform Rework for New Security Tools",
        ],
      },
    },
    {
      id: "proj-3",
      title: "Enterprise Hybrid RAG & Vector Search System",
      category: "Retrieval-Augmented Generation",
      badge: "Vector DB • Oracle AI • LangChain",
      shortDescription:
        "High-precision semantic search and RAG engine leveraging vector databases, semantic embeddings, and LLM synthesis with source verification.",
      fullDescription:
        "Built on certified Oracle AI Vector Search and Generative AI principles, this system ingests unstructured enterprise documents, generates dense embeddings, and performs similarity search with context-grounded LLM synthesis.",
      technologies: [
        "Python",
        "LangChain",
        "Vector Databases",
        "FastAPI",
        "OpenAI / LLMs",
        "Redis",
        "Docker",
      ],
      highlights: [
        "High-recall vector search with reciprocal rank fusion and semantic chunking",
        "Contextual reranking to minimize hallucinations and enforce citation accuracy",
        "Low-latency streaming endpoints built with FastAPI and Redis caching",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      demoUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "Two-tier retrieval pipeline combining document chunking, dense vector indexing, semantic search, and prompt-grounded LLM synthesis.",
        components: [
          "Vector Database & Embeddings Index",
          "Semantic Chunking & Metadata Ingestion Worker",
          "Contextual Reranking Pipeline",
          "FastAPI Streaming Synthesis Service",
        ],
        metrics: [
          "< 350ms P95 Search Latency",
          "High Context Relevance & Precision",
          "Strict Groundedness Guardrails",
        ],
      },
    },
    {
      id: "proj-4",
      title: "Zero-Trust API Security & Rate-Limiting Gateway",
      category: "API Security",
      badge: "OAuth 2.0 • JWT • FastAPI",
      shortDescription:
        "Hardened API gateway enforcing OAuth 2.0, JWT validation, token introspection, and Redis-backed sliding-window rate limiting.",
      fullDescription:
        "Designed to secure microservices across enterprise clients, this gateway implements defense-in-depth API security standards, fine-grained RBAC, and automated token revocation.",
      technologies: [
        "Python",
        "FastAPI",
        "OAuth 2.0",
        "JWT",
        "Redis",
        "Docker",
        "AWS",
      ],
      highlights: [
        "Sliding-window distributed rate limiting powered by Redis",
        "Granular Role-Based Access Control (RBAC) and scopes verification",
        "Integrated security telemetry and real-time anomaly detection",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      demoUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "High-throughput middleware inspecting incoming requests, validating cryptographic signatures, enforcing rate quotas, and forwarding authenticated payloads.",
        components: [
          "JWT Introspection & Signature Verifier",
          "Redis Distributed Rate Limiter",
          "Audit Logging & Telemetry Dispatcher",
          "Reverse Proxy & Routing Core",
        ],
        metrics: [
          "Sub-5ms Middleware Overhead",
          "100% Unauthorized Request Interception",
          "Zero-Downtime Key Rotation",
        ],
      },
    },
    {
      id: "proj-5",
      title: "Distributed Microservices Task Execution Engine",
      category: "Distributed Systems",
      badge: "Temporal • Microservices • AWS",
      shortDescription:
        "Fault-tolerant distributed workflow engine coordinating multi-step asynchronous tasks across microservices with automatic retries and state recovery.",
      fullDescription:
        "Engineered for mission-critical enterprise workflows that require guaranteed completion. Uses Temporal to manage complex state transitions, service-to-service communication, and disaster recovery.",
      technologies: [
        "Python",
        "FastAPI",
        "Temporal",
        "Docker",
        "AWS",
        "CI/CD",
        "PostgreSQL",
      ],
      highlights: [
        "Guaranteed eventual execution with deterministic state history replay",
        "Modular activity workers with automatic exponential backoff retries",
        "Zero data loss during unexpected service restarts or network partitions",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      demoUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "Event-driven workflow engine decoupling long-running business logic into deterministic orchestration workflows and scalable activity workers.",
        components: [
          "Temporal State Coordinator",
          "Asynchronous Python Activity Workers",
          "FastAPI Management & Telemetry API",
          "PostgreSQL State Persistence Store",
        ],
        metrics: [
          "99.99% Execution Reliability",
          "Automated Failure Recovery",
          "Scalable Concurrent Workflow Execution",
        ],
      },
    },
  ] as Project[],

  // Education from Rushikesh's resume
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Engineering",
      institution: "Government College of Engineering, Jalgaon",
      year: "2014 — 2018",
      details:
        "Graduated with GPA 7.11/10. Comprehensive coursework in Computer Science, Distributed Systems, Algorithms, Database Management Systems, and Object-Oriented Software Design.",
      isPlaceholder: false,
    },
  ] as EducationItem[],

  // Certifications from Rushikesh's resume
  certifications: [
    {
      id: "cert-1",
      title: "OCI Generative AI Professional",
      issuer: "Oracle",
      issueDate: "Valid Oct 2025 — Oct 2027",
      credentialId: "Oracle Certified Professional",
      isPlaceholder: false,
    },
    {
      id: "cert-2",
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      issueDate: "Valid Oct 2025 — Oct 2027",
      credentialId: "Oracle Certified Professional",
      isPlaceholder: false,
    },
    {
      id: "cert-3",
      title: "OCI AI Foundations Associate",
      issuer: "Oracle",
      issueDate: "Valid Oct 2025 — Oct 2027",
      credentialId: "Oracle Certified Associate",
      isPlaceholder: false,
    },
    {
      id: "cert-4",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Apr 2021",
      credentialId: "AWS Certified",
      isPlaceholder: false,
    },
  ] as CertificationItem[],
};

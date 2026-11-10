export interface ArchitectureLayer {
  id: string;
  name: string;
  tech: string;
  role: string;
  description: string;
  dataFlow: {
    inputs: string;
    outputs: string;
    failureStrategy: string;
  };
  keyComponents: string[];
}

export interface AgentCapability {
  id: string;
  title: string;
  whatItDoes: string;
  whyNeeded: string;
  workflowFit: string;
  engineeringChallenge: string;
}

export interface EngineeringChallenge {
  challenge: string;
  operationalReality: string;
  solution: string;
  technicalImpact: string;
}

export interface SocCaseStudyData {
  title: string;
  subtitle: string;
  executiveSummary: string;
  businessProblem: {
    summary: string;
    painPoints: string[];
  };
  myRole: {
    title: string;
    summary: string;
    coreContributions: {
      title: string;
      description: string;
    }[];
    teamDemarcation: string;
  };
  systemArchitecture: {
    overview: string;
    layers: ArchitectureLayer[];
  };
  aiAgentEngineering: {
    overview: string;
    capabilities: AgentCapability[];
    outputSchemaExample: string;
  };
  orchestrationArchitecture: {
    overview: string;
    workflowVsAgent: {
      workflowTitle: string;
      workflowRole: string;
      agentTitle: string;
      agentRole: string;
    };
    workflowSteps: {
      step: number;
      name: string;
      type: "FastAPI" | "Temporal" | "LangChain" | "Analyst";
      detail: string;
    }[];
    reliabilityMechanisms: string[];
  };
  techStackBreakdown: {
    technology: string;
    category: string;
    responsibility: string;
  }[];
  engineeringChallenges: EngineeringChallenge[];
  businessImpact: {
    headlineMetrics: {
      value: string;
      label: string;
      description: string;
    }[];
    operationalMeaning: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  badge: string;
  isPlaceholder: boolean;
  architectureDetails: {
    overview: string;
    components: string[];
    metrics: string[];
  };
  caseStudy?: SocCaseStudyData;
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
    resumePath: "/static/resume.pdf",
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
        { name: "Temporal (Workflows)", level: "Advanced", highlight: true },
        { name: "Pydantic & Schemas", level: "Advanced", highlight: true },
        { name: "Django (2+ yrs)", level: "Advanced" },
        { name: "Flask (3+ yrs)", level: "Advanced" },
        { name: "REST APIs (7+ yrs)", level: "Advanced", highlight: true },
        { name: "Microservices", level: "Advanced", highlight: true },
        { name: "Redis", level: "Proficient" },
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
        "Led AI agent development and backend integration for an AI-Powered SOC platform, reducing manual analyst investigation effort by ~90% through LangChain alert correlation and evidence synthesis.",
        "Architected durable, fault-tolerant workflow orchestration using Temporal to execute long-running investigation activities with automated retries, timeouts, and state persistence.",
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

  // Featured Projects: Exactly the 2 major enterprise projects from Rushikesh's resume
  projects: [
    {
      id: "proj-1",
      title: "AI-Powered Security Operations Center (SOC)",
      category: "AI & Security Operations",
      badge: "LangChain • Temporal • FastAPI • React",
      shortDescription:
        "An enterprise security automation platform orchestrating specialized LangChain agents within fault-tolerant Temporal workflows to correlate multi-source alerts, synthesize evidence, and reduce manual investigation effort by ~90%.",
      fullDescription:
        "Engineered an enterprise security automation platform that replaces fragmented manual alert triage with workflow-driven AI agent investigations. Built with Python, FastAPI, LangChain, and Temporal, the system correlates disparate security alerts from SIEM and EDR sources, extracts critical indicators of compromise, and executes structured investigation activities, reducing repetitive manual analyst effort by ~90%.",
      technologies: [
        "Python",
        "FastAPI",
        "Temporal",
        "LangChain",
        "LLMs",
        "React",
        "REST APIs",
        "Pydantic",
        "Docker",
      ],
      highlights: [
        "Engineered workflow-oriented LangChain agents for contextual alert correlation, IoC extraction, and structured threat synthesis",
        "Architected fault-tolerant workflow orchestration with Temporal, coordinating long-running investigation activities with automatic retries and timeouts",
        "Developed asynchronous RESTful backend services using Python and FastAPI for real-time alert ingestion and workflow dispatching",
        "Enforced strict Pydantic schemas for LLM inputs and structured outputs, guaranteeing deterministic API contracts and zero schema crashes",
        "Designed context construction and log noise pruning filters, reducing prompt token footprint by ~75% while boosting reasoning accuracy",
        "Integrated human-in-the-loop React investigation dashboard allowing analysts to inspect synthesized evidence timelines and confirm mitigation steps",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "5-layer decoupled architecture: Security Data Sources -> FastAPI Ingestion Gateway -> Temporal Stateful Orchestrator -> LangChain AI Agent Layer -> Analyst React Dashboard.",
        components: [
          "Layer 1: Security Data Sources (SIEM, EDR, threat intel feeds)",
          "Layer 2: FastAPI Ingestion Gateway (Event validation & Pydantic normalization)",
          "Layer 3: Temporal Workflow Orchestrator (Durable state, worker pools, retries)",
          "Layer 4: LangChain AI Agent Layer (Bounded reasoning, IoC extraction, structured output)",
          "Layer 5: Investigation Store & Analyst Dashboard (Human-in-the-loop review)",
        ],
        metrics: [
          "~90% Reduction in Repetitive Manual Investigation Effort",
          "~30% Faster Integration Onboarding",
          "Sub-100ms API Ingestion with Zero Lost Ingested Alerts",
        ],
      },
      caseStudy: {
        title: "AI-Powered Security Operations Center",
        subtitle: "Agentic AI | Multi-Agent Workflows | Security Automation",
        executiveSummary:
          "Modern Security Operations Centers (SOCs) are overwhelmed by thousands of daily security alerts across disparate vendor ecosystems. This platform engineers a workflow-driven AI agent architecture using LangChain, Temporal, and FastAPI to systematically correlate alerts, enrich telemetry, validate indicators of compromise, and synthesize incident findings, reducing manual investigation effort by ~90% while guaranteeing zero alert drops.",
        businessProblem: {
          summary:
            "Enterprise SOC analysts spend up to 80% of their shift manually triaging repetitive alerts—pivoting across disparate SIEM, EDR, and network dashboards to extract IPs, query reputation feeds, and write basic incident summaries. This creates acute operational bottlenecks:",
          painPoints: [
            "Severe alert fatigue causing Tier-1 analysts to miss critical adversary tactics buried in high volumes of low-fidelity alerts.",
            "High Mean Time to Detect & Respond (MTTD/MTTR) due to fragmented, manual context-gathering and slow cross-tool correlation.",
            "Inconsistent investigation quality stemming from varying analyst experience levels and non-standardized triage protocols.",
            "Fragile legacy automation scripts that break when exposed to heterogeneous or evolving vendor log schemas.",
          ],
        },
        myRole: {
          title: "Project Lead / Senior Software Engineer",
          summary:
            "Spearheaded the hands-on AI agent development and backend integration, responsible for architecting the LangChain agent workflows, designing deterministic Pydantic interfaces, and coordinating reliable activity execution in Temporal.",
          coreContributions: [
            {
              title: "LangChain Agent Development",
              description:
                "Designed and implemented task-bounded LangChain agents specialized in log entity extraction, multi-source telemetry correlation, and structured threat synthesis.",
            },
            {
              title: "Investigation Workflow Boundary Design",
              description:
                "Defined strict agent scopes within investigation procedures, avoiding unpredictable autonomous loops in favor of bounded, deterministic activity executions.",
            },
            {
              title: "Backend API & Event Ingestion",
              description:
                "Engineered high-throughput asynchronous REST endpoints in Python/FastAPI to authenticate, ingest, and normalize heterogeneous security events into internal Pydantic schemas.",
            },
            {
              title: "Temporal Activity Coordination",
              description:
                "Wrapped LangChain reasoning routines inside durable Temporal activities, enforcing timeouts, exponential backoff retries, and stateful tracking across distributed worker pools.",
            },
            {
              title: "Pydantic Schema Enforcement",
              description:
                "Built structured output parsers guaranteeing that probabilistic LLM completions conform to typed backend contracts, preventing runtime parsing crashes.",
            },
            {
              title: "Technical Leadership & System Design",
              description:
                "Led architectural alignment across microservices, establishing prompt design guidelines, failure boundaries, and operational evaluation criteria.",
            },
          ],
          teamDemarcation:
            "Individual contribution focused on AI agent engineering, FastAPI backend services, and Temporal activity coordination. Cross-functional team peers contributed to frontend React UI components, cloud deployment automation, and dedicated SIEM/EDR API adapters.",
        },
        systemArchitecture: {
          overview:
            "The platform implements a strictly decoupled 5-tier architecture that isolates deterministic API ingestion and durable workflow state from probabilistic LLM reasoning.",
          layers: [
            {
              id: "layer-sources",
              name: "Security Data Sources",
              tech: "Webhooks, REST Polling, Syslog",
              role: "Telemetry & Alert Producers",
              description:
                "Heterogeneous enterprise monitoring tools transmitting real-time security events, intrusion detections, and infrastructure telemetry.",
              dataFlow: {
                inputs: "Raw alerts from SIEM, EDR (CrowdStrike, SentinelOne), firewall and cloud audit streams.",
                outputs: "Raw JSON payloads and webhook events pushed to the backend gateway.",
                failureStrategy: "Source-level buffering with idempotency keys to handle burst traffic and avoid duplicate ingestion.",
              },
              keyComponents: [
                "SIEM Webhook Receivers",
                "EDR Alert Ingestion Adapters",
                "Cloud Audit Log Parsers",
                "External Threat Intelligence Poller",
              ],
            },
            {
              id: "layer-backend",
              name: "Backend Integration Layer",
              tech: "Python 3.11, FastAPI, Pydantic, REST",
              role: "Ingestion, Validation & Dispatch",
              description:
                "Asynchronous API gateway providing authentication, rate limiting, schema normalization, and workflow dispatching.",
              dataFlow: {
                inputs: "Raw alert JSON payloads from security data sources.",
                outputs: "Validated, normalized internal SecurityEvent Pydantic models dispatched to Temporal.",
                failureStrategy: "Immediate schema validation rejection (HTTP 422) with dead-letter queue routing for malformed payloads.",
              },
              keyComponents: [
                "FastAPI Ingestion Gateway",
                "Pydantic Schema Normalizer",
                "Token Auth & Rate Limiter",
                "Temporal Workflow Dispatch Client",
              ],
            },
            {
              id: "layer-orchestration",
              name: "Workflow Orchestration Layer",
              tech: "Temporal, Python SDK, Task Queues",
              role: "Durable State & Activity Coordination",
              description:
                "Stateful orchestrator managing the end-to-end investigation lifecycle with durable event histories, automated retries, and task routing.",
              dataFlow: {
                inputs: "Workflow invocation trigger with normalized event payload and unique investigation ID.",
                outputs: "Sequential activity dispatch across dedicated worker pools, recording intermediate state and final triage results.",
                failureStrategy: "Durable execution with exponential backoff and jitter; resumes seamlessly from the exact failed activity on worker recovery.",
              },
              keyComponents: [
                "Investigation Workflow Definition",
                "Temporal Worker Pool (Activity Execution)",
                "Workflow Execution History Store",
                "Retry & Timeout Policies",
              ],
            },
            {
              id: "layer-agent",
              name: "AI Agent Layer",
              tech: "LangChain, LLMs, Pydantic Output Parsers",
              role: "Contextual Reasoning & Evidence Synthesis",
              description:
                "Workflow-bound LangChain agents executing structured reasoning tasks, tool lookups, and schema-enforced analysis within Temporal activities.",
              dataFlow: {
                inputs: "Filtered, noise-pruned alert context and extracted indicators passed via Temporal activity params.",
                outputs: "Validated InvestigationFinding JSON object containing threat rating, IoC evidence, and actionable triage steps.",
                failureStrategy: "Defensive prompt wrappers, schema validation re-prompts, and deterministic fallback outputs if the model fails.",
              },
              keyComponents: [
                "LangChain Investigation Agent",
                "Context Window Pruner & Filter",
                "Internal Threat & Host Lookup Tools",
                "Pydantic Structured Output Parser",
              ],
            },
            {
              id: "layer-results",
              name: "Investigation Results & Analyst Dashboard",
              tech: "React, TypeScript, REST APIs, Tailwind",
              role: "Human-in-the-Loop Analyst Operations",
              description:
                "Operational analyst interface rendering chronological evidence graphs, AI confidence metrics, and one-click incident remediation actions.",
              dataFlow: {
                inputs: "Validated InvestigationFinding retrieved via FastAPI endpoints.",
                outputs: "Analyst decisions: confirmed incident escalation, benign alert dismissal, or containment action triggers.",
                failureStrategy: "Optimistic UI state with automatic sync retry and immutable analyst decision audit trail.",
              },
              keyComponents: [
                "Real-Time Alert Triage Feed",
                "Interactive Evidence & IoC Graph",
                "Synthesized Incident Brief Card",
                "One-Click Analyst Action & Feedback Bar",
              ],
            },
          ],
        },
        aiAgentEngineering: {
          overview:
            "Rather than treating the LLM as an open-ended conversational bot, the agent implementation in LangChain was engineered as a deterministic, bounded reasoning step within enterprise workflows.",
          capabilities: [
            {
              id: "cap-task-boundaries",
              title: "Task-Bounded Agent Responsibilities",
              whatItDoes:
                "Scopes agent responsibilities to discrete analytical objectives: entity extraction, event correlation, and structured risk synthesis, rather than attempting end-to-end autonomous triage in a single prompt.",
              whyNeeded:
                "Monolithic prompts exhibit hallucination, lose attention over verbose log histories, and cannot guarantee standardized investigative rigor across diverse alert categories.",
              workflowFit:
                "Executes as an isolated, idempotent Temporal worker activity with strictly defined input and output schemas.",
              engineeringChallenge:
                "Eliminates reasoning drift and keeps token consumption and execution latency strictly bounded per alert phase.",
            },
            {
              id: "cap-context-pruning",
              title: "Context Construction & Noise Pruning",
              whatItDoes:
                "Pre-processes raw security logs by stripping repetitive environment metadata, isolating critical telemetry (process trees, command line arguments, parent-child PIDs, network sockets).",
              whyNeeded:
                "Raw SIEM/EDR logs easily span dozens of kilobytes per alert, rapidly exceeding LLM context windows and injecting irrelevant noise that degrades attention accuracy.",
              workflowFit:
                "Runs in Python before prompt synthesis, transforming verbose raw event maps into compact, high-signal investigative prompts.",
              engineeringChallenge:
                "Reduces token volume by ~75% per alert while increasing LLM reasoning accuracy and lowering API inference cost.",
            },
            {
              id: "cap-tool-invocation",
              title: "Tool Invocation & Empirical Grounding",
              whatItDoes:
                "Arms LangChain agents with scoped Python tools to query internal threat intel databases, resolve IP reputation metrics, and verify host inventory records.",
              whyNeeded:
                "Foundation models lack current knowledge of private internal enterprise network topology, asset criticality, or live threat feed indicators.",
              workflowFit:
                "Invoked dynamically by the agent during the correlation phase when encountering unresolved IP addresses, hostnames, or hash artifacts.",
              engineeringChallenge:
                "Grounds the agent's findings in live operational telemetry, eliminating fabricated indicators and hallucinated severity scores.",
            },
            {
              id: "cap-structured-output",
              title: "Structured Output Handling with Pydantic",
              whatItDoes:
                "Enforces strict JSON schema validation on all model responses using LangChain's PydanticOutputParser, parsing raw completions into typed InvestigationFinding models.",
              whyNeeded:
                "Conversational prose, explanatory pleasantries, or slight JSON formatting quirks break backend serialization and crash downstream services.",
              workflowFit:
                "Validates the model completion at the boundary of the agent execution before persisting data to the database or passing to the next activity.",
              engineeringChallenge:
                "Guarantees 100% type safety and predictable API contracts between non-deterministic AI completions and deterministic microservices.",
            },
            {
              id: "cap-reliability-boundaries",
              title: "Execution Reliability & Error Handling",
              whatItDoes:
                "Implements activity-level timeouts, defensive schema re-prompt loops, and fallback degradation strategies when external model APIs experience rate limits or outages.",
              whyNeeded:
                "Public or private LLM endpoints are prone to transient HTTP 429 throttling, latency spikes, or occasional malformed responses during high-load periods.",
              workflowFit:
                "Governed by Temporal retry policies with exponential backoff and jitter; after retries are exhausted, automatically enqueues the alert for manual analyst triage.",
              engineeringChallenge:
                "Prevents stalled workflows, isolates AI provider failures from backend systems, and ensures zero dropped security alerts.",
            },
          ],
          outputSchemaExample: `class InvestigationFinding(BaseModel):
    alert_id: str = Field(description="Unique security event identifier")
    threat_level: Literal["CRITICAL", "HIGH", "MEDIUM", "LOW", "BENIGN"]
    confidence_score: float = Field(ge=0.0, le=1.0, description="Confidence in assessment")
    correlated_iocs: List[Dict[str, str]] = Field(description="Extracted IPs, hashes, domains")
    timeline_summary: str = Field(description="Synthesized chronological attack narrative")
    recommended_action: Literal["CONTAIN_HOST", "REVOKE_CREDENTIALS", "BLOCK_IP", "MONITOR", "CLOSE_FALSE_POSITIVE"]
    analyst_notes: str = Field(description="Concise rationale for human analyst review")`,
        },
        orchestrationArchitecture: {
          overview:
            "A critical architectural principle of the platform is the rigorous distinction between Workflow Orchestration (Temporal) and Agent Execution (LangChain).",
          workflowVsAgent: {
            workflowTitle: "Workflow Orchestration (Temporal)",
            workflowRole:
              "Governs the end-to-end macro lifecycle: manages distributed worker pools, state persistence, activity timeouts, exponential backoff retries, and failure recovery. Guarantees durable execution across multi-step investigations.",
            agentTitle: "Agent Execution (LangChain)",
            agentRole:
              "Governs the micro reasoning step: constructs prompt context, invokes lookup tools, reasons over security evidence, and produces structured outputs within a single bounded activity.",
          },
          workflowSteps: [
            {
              step: 1,
              name: "Alert Ingestion & Validation",
              type: "FastAPI",
              detail:
                "FastAPI receives webhook, verifies HMAC signature, validates schema with Pydantic, and dispatches a new workflow execution with unique ID.",
            },
            {
              step: 2,
              name: "Workflow Initialization",
              type: "Temporal",
              detail:
                "Temporal cluster persists workflow state and assigns initial activity task to the dedicated Python worker queue.",
            },
            {
              step: 3,
              name: "Context Extraction & Pruning",
              type: "Temporal",
              detail:
                "Worker activity pulls raw alert payload, prunes noisy metadata, and extracts critical entities (IPs, process IDs, parent hashes).",
            },
            {
              step: 4,
              name: "LangChain Agent Investigation",
              type: "LangChain",
              detail:
                "Worker activity invokes LangChain agent with pruned context. Agent executes lookup tools, reasons over IoCs, and formats structured findings.",
            },
            {
              step: 5,
              name: "Schema Enforcement & Storage",
              type: "Temporal",
              detail:
                "Activity validates output against InvestigationFinding schema, saves results to database, and completes the workflow execution state.",
            },
            {
              step: 6,
              name: "Human-in-the-Loop Analyst Triage",
              type: "Analyst",
              detail:
                "React dashboard displays prioritized alert, synthesized timeline, and recommended actions for human security analyst confirmation.",
            },
          ],
          reliabilityMechanisms: [
            "Durable Execution: Workflows survive worker restarts and node failures without losing investigation state.",
            "Exponential Backoff with Jitter: Activity retries prevent overwhelming LLM endpoints or external threat feeds during rate limit spikes.",
            "Activity Heartbeating: Long-running agent executions report heartbeats to detect stuck processes early.",
            "Idempotent Activity Design: Safe retry execution without generating duplicate investigation records or notifications.",
          ],
        },
        techStackBreakdown: [
          {
            technology: "LangChain",
            category: "AI Agent Engineering",
            responsibility:
              "Prompt templating, agent reasoning loops, tool invocation wrappers, and structured Pydantic output parsing.",
          },
          {
            technology: "Temporal",
            category: "Workflow Orchestration",
            responsibility:
              "Stateful workflow execution, distributed worker queue coordination, retries, activity timeouts, and fault recovery.",
          },
          {
            technology: "FastAPI",
            category: "Backend Integration",
            responsibility:
              "Asynchronous REST endpoints for webhook alert ingestion, authentication, and workflow dispatching.",
          },
          {
            technology: "Python (3.11+)",
            category: "Backend & Data Modeling",
            responsibility:
              "Core business logic, Pydantic data normalization, async task workers, and integration connectors.",
          },
          {
            technology: "React",
            category: "Frontend Operations",
            responsibility:
              "Real-time SOC analyst investigation dashboard, chronological evidence visualization, and triage controls.",
          },
        ],
        engineeringChallenges: [
          {
            challenge: "Inconsistent & Heterogeneous Security Event Schemas",
            operationalReality:
              "SIEM, EDR, and network appliances format identical concepts (e.g., source IP, timestamp, user identity) under conflicting JSON keys, making uniform analysis impossible.",
            solution:
              "Designed an extensible Python normalization pipeline using Pydantic base models that converts heterogeneous vendor payloads into unified internal representations before workflow ingestion.",
            technicalImpact:
              "Standardized multi-vendor alert processing across Datadog, Netskope, and custom SIEM feeds without altering core reasoning logic.",
          },
          {
            challenge: "Context Window Saturation & Log Noise",
            operationalReality:
              "Enterprise EDR alerts contain large volumes of repetitive environment variables and system metadata, diluting LLM reasoning and exceeding token limits.",
            solution:
              "Built an automated contextual pruning filter in Python that isolates process trees, parent-child process relationships, and network sockets, passing only high-signal data to the LangChain prompt.",
            technicalImpact:
              "Reduced prompt token count by ~75% while boosting agent reasoning accuracy and eliminating hallucinated context.",
          },
          {
            challenge: "Controlling Non-Deterministic LLM Responses",
            operationalReality:
              "LLMs occasionally omit required fields, alter JSON key names, or insert conversational preambles that break downstream parsers.",
            solution:
              "Enforced LangChain structured output parsing backed by Pydantic models with automated re-prompt retry logic for malformed outputs.",
            technicalImpact:
              "Achieved near-perfect schema compliance on first-pass outputs, with deterministic fallbacks preventing any backend pipeline crashes.",
          },
          {
            challenge: "Long-Running AI Latency vs Asynchronous API Throughput",
            operationalReality:
              "Multi-step agent analysis takes 10–25 seconds per complex alert. Synchronous HTTP handling would tie up server workers and cause client timeouts.",
            solution:
              "Decoupled API ingestion from investigation execution using Temporal. FastAPI returns an immediate 202 Accepted with a workflow ID, while Temporal worker pools process investigation activities asynchronously.",
            technicalImpact:
              "API response latency dropped to under 100ms, while Temporal guaranteed reliable, non-blocking execution of thousands of background investigations.",
          },
          {
            challenge: "Failure Handling in Distributed Long-Running Workflows",
            operationalReality:
              "LLM rate limits (HTTP 429) or downstream tool outages during an investigation could leave alerts in corrupted or half-processed states.",
            solution:
              "Leveraged Temporal's durable execution model with exponential backoff retries and heartbeats, ensuring workflows resume precisely from the failed activity without re-running completed steps.",
            technicalImpact:
              "Zero lost alerts during provider downtime; complete observability and audit history for every investigation state transition.",
          },
        ],
        businessImpact: {
          headlineMetrics: [
            {
              value: "~90%",
              label: "Manual Effort Reduction",
              description:
                "Slashing repetitive log extraction and initial triage time for Tier-1 analysts.",
            },
            {
              value: "~30%",
              label: "Faster Integration Onboarding",
              description:
                "Achieved through standardized Pydantic data schemas and reusable API contracts.",
            },
            {
              value: "Zero",
              label: "Lost Ingested Alerts",
              description:
                "Guaranteed by Temporal durable workflow persistence and state recovery.",
            },
          ],
          operationalMeaning: [
            "Tier-1 and Tier-2 security analysts shift their time from tedious manual log querying to active threat mitigation and incident containment.",
            "Substantially reduced Mean Time to Detect and Respond (MTTD/MTTR) by synthesizing cross-tool context within seconds of alert arrival.",
            "Standardized triage depth ensures every alert is investigated with uniform scrutiny regardless of analyst seniority or alert volume spikes.",
            "Decoupled workflow architecture allows modular upgrades of LLM models and security connectors with zero platform downtime.",
          ],
        },
      },
    },
    {
      id: "proj-2",
      title: "Deeptrust Security Integrations",
      category: "Zero Trust Architecture",
      badge: "Python • OOP Design Patterns • Zero Trust",
      shortDescription:
        "A reusable Python-based integration framework for a Zero Trust security platform to streamline integration with multiple security and identity products (SIEM, IAM, Okta, Duo, Rapid7).",
      fullDescription:
        "Designed and developed a reusable integration framework in Python for a Zero Trust security platform, standardizing integration development across multiple security and identity products. Designed a common abstraction layer and integration contract to provide a consistent interface for authentication, API communication, data retrieval, and security operations across different vendors.",
      technologies: [
        "Python",
        "OOP Design Patterns",
        "OAuth 2.0",
        "JWT",
        "REST APIs",
        "SIEM",
        "IAM",
        "Okta",
        "Duo",
        "Rapid7",
      ],
      highlights: [
        "Designed and developed reusable Python integration framework for Zero Trust security platform",
        "Implemented integrations with security tools and platforms including SIEM, IAM, Okta, Duo, and Rapid7",
        "Applied core Python concepts: OOP, abstraction, inheritance, polymorphism, interfaces, composition, and design patterns",
        "Built reusable components for authentication, API clients, request/error handling, retries, and response normalization",
        "Decoupled vendor-specific implementation details from core platform through well-defined interfaces and modular architecture",
        "Established standardized implementation workflows so developers onboard new integrations with minimal boilerplate",
      ],
      githubUrl: "https://github.com/shinderushikesh706",
      isPlaceholder: false,
      architectureDetails: {
        overview:
          "Vendor-agnostic abstraction layer defining common contracts for authentication, data retrieval, error handling, and response transformation across identity and security vendors.",
        components: [
          "Unified Integration Contract & Abstract Base Classes",
          "Authentication & Token Refresh Manager (OAuth 2.0 / JWT)",
          "Resilient HTTP Client (Exponential backoff, jitter, rate limits, retries)",
          "Normalized Data Serialization & Schema Validation Layer",
          "Configuration Management & Exception Handling Lifecycle",
        ],
        metrics: [
          "30% Faster Third-Party Vendor Onboarding",
          "100% Normalized Data Format across SIEM/IAM",
          "Zero Platform Rework for New Security Tools",
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
      year: "2014 — 06/2018",
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

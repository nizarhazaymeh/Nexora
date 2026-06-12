import {
    Server,
    BrainCircuit,
    ShieldCheck,
    FileSearch,
    Megaphone,
    Lightbulb,
    LifeBuoy,
    type LucideIcon,
} from "lucide-react"

export type ServiceDetail = {
    /** Optional bold lead-in (e.g. "Cloud migration"). */
    label?: string
    text: string
}

export type Service = {
    id: string
    title: string
    summary: string
    /** Shown above the detail list when the service is expanded. */
    tagline: string
    icon: LucideIcon
    details: ServiceDetail[]
}

export const SERVICES: Service[] = [
    {
        id: "it",
        title: "IT Services",
        summary:
            "Infrastructure design, secure cloud migration, application modernization, and always-on support.",
        tagline:
            "Comprehensive technology services to modernize, secure, and scale your operations.",
        icon: Server,
        details: [
            { label: "Cloud migration and architecture design", text: "Move systems to the cloud with secure, cost-efficient architectures." },
            { label: "Network infrastructure setup and optimization", text: "Build reliable networks that improve speed, uptime, and security." },
            { label: "Server administration and managed hosting", text: "Keep servers stable, monitored, and fully maintained at all times." },
            { label: "Endpoint management and patching", text: "Protect devices with centralized updates, policies, and security controls." },
            { label: "Business website design and development", text: "Create modern, high-performance websites tailored to business goals." },
            { label: "Custom web application development", text: "Build scalable web apps designed around your workflows and users." },
            { label: "Mobile application development (iOS and Android)", text: "Deliver user-friendly mobile apps for both major platforms." },
            { label: "E-commerce website and platform development", text: "Launch conversion-focused online stores with secure checkout experiences." },
            { label: "Backup, disaster recovery, and business continuity", text: "Protect critical data and restore operations quickly after disruptions." },
            { label: "IT helpdesk and 24/7 technical support", text: "Provide responsive technical support to reduce downtime and user issues." },
            { label: "Microsoft 365 and Google Workspace administration", text: "Manage collaboration tools, security settings, and user provisioning." },
            { label: "System integration and API connectivity", text: "Connect platforms and automate data flow between business systems." },
            { label: "Application modernization and performance tuning", text: "Upgrade legacy applications for better speed, stability, and maintainability." },
            { label: "IT strategy consulting and roadmap planning", text: "Align technology investments with long-term business priorities." },
        ],
    },
    {
        id: "ai",
        title: "AI Solutions",
        summary:
            "Custom AI assistants, workflow automation, predictive analytics, and responsible AI frameworks.",
        tagline:
            "Intelligent automation and analytics services built for measurable business outcomes.",
        icon: BrainCircuit,
        details: [
            { label: "AI strategy and use-case discovery", text: "Identify high-impact AI opportunities aligned with business outcomes." },
            { label: "Custom AI assistant and chatbot development", text: "Build assistants that handle support, operations, and internal tasks." },
            { label: "Workflow automation with AI agents", text: "Automate repetitive processes to improve speed and reduce manual work." },
            { label: "Predictive analytics and forecasting models", text: "Use historical data to forecast trends and guide decisions." },
            { label: "Natural language processing solutions", text: "Extract meaning from text for search, classification, and insights." },
            { label: "Computer vision and image intelligence", text: "Analyze images and video for detection, quality control, and monitoring." },
            { label: "Recommendation engines and personalization", text: "Deliver tailored product, content, and next-best-action recommendations." },
            { label: "LLM integration for enterprise systems", text: "Embed large language models into existing tools and workflows." },
            { label: "Data preparation and model training pipelines", text: "Prepare clean datasets and build repeatable model training processes." },
            { label: "Model deployment, monitoring, and optimization", text: "Launch models reliably and continuously improve real-world performance." },
            { label: "Responsible AI governance and compliance", text: "Apply controls for transparency, fairness, and regulatory readiness." },
            { label: "AI team training and adoption consulting", text: "Enable teams to adopt AI confidently through practical guidance." },
        ],
    },
    {
        id: "cyber",
        title: "Cyber Security Services",
        summary:
            "Threat assessment, SOC support, security hardening, incident response, and vulnerability management.",
        tagline:
            "Risk-focused protection services for resilient operations and trusted governance.",
        icon: ShieldCheck,
        details: [
            { label: "Threat and vulnerability assessment", text: "Identify risks across infrastructure, apps, and endpoints." },
            { label: "Security hardening", text: "Improve system resilience through secure configuration and control baselines." },
            { label: "Incident response planning", text: "Build playbooks and escalation processes for fast containment and recovery." },
            { label: "Continuous monitoring and SOC support", text: "Detect, triage, and respond to threats in real time." },
            { label: "Compliance alignment", text: "Support policy and control readiness for regulatory frameworks." },
        ],
    },
    {
        id: "audit",
        title: "Audit Services",
        summary:
            "Operational, compliance, and process audits with actionable controls to improve trust and performance.",
        tagline:
            "Operational and compliance audit services with practical control improvements.",
        icon: FileSearch,
        details: [
            { label: "Operational audits", text: "Review processes to improve efficiency, accountability, and execution quality." },
            { label: "Compliance audits", text: "Validate controls and evidence for internal and external requirements." },
            { label: "Control design and remediation", text: "Define practical controls and close critical gaps quickly." },
            { label: "Risk-based audit planning", text: "Prioritize audit scope based on business impact and exposure." },
        ],
    },
    {
        id: "marketing",
        title: "Marketing",
        summary:
            "Brand strategy, performance marketing, conversion optimization, and data-backed growth planning.",
        tagline:
            "We help brands grow through strategic marketing solutions designed to strengthen positioning, improve performance, and create impactful customer experiences across digital and physical platforms.",
        icon: Megaphone,
        details: [
            { label: "Brand Strategy", text: "We build clear and effective brand strategies that define your positioning, messaging, and market presence." },
            { label: "Performance Marketing", text: "Our campaigns focus on qualified traffic, visibility, and maximum return on investment." },
            { label: "Conversion Optimization", text: "We improve user journeys to turn more visitors into customers through data-backed changes." },
            { label: "Data-Backed Growth Planning", text: "We use analytics and market insights to create scalable growth plans." },
            { label: "Marketing Campaigns and Promotions", text: "We run online and offline campaigns to drive measurable business impact." },
        ],
    },
    {
        id: "consulting",
        title: "Consulting",
        summary:
            "Executive guidance for digital transformation, process optimization, and innovation governance.",
        tagline:
            "Executive and transformation consulting to align strategy, operations, and growth.",
        icon: Lightbulb,
        details: [
            { label: "Digital transformation advisory", text: "Build practical roadmaps across people, process, and technology." },
            { label: "Process optimization", text: "Remove operational bottlenecks and improve service delivery speed." },
            { label: "Innovation governance", text: "Create decision frameworks for scalable and controlled growth." },
            { label: "Executive advisory support", text: "Provide leadership-level guidance for complex initiatives." },
        ],
    },
    {
        id: "managed",
        title: "Managed Advisory",
        summary:
            "Ongoing multi-domain support combining technology, operations, and strategy under one team.",
        tagline:
            "Ongoing multi-domain advisory for technology, operations, and strategic growth.",
        icon: LifeBuoy,
        details: [
            { label: "Cross-functional monthly strategy", text: "Coordinate IT, AI, security, and growth initiatives." },
            { label: "KPI and performance reviews", text: "Track outcomes with clear dashboards and action plans." },
            { label: "Continuous optimization", text: "Improve systems and campaigns as business needs evolve." },
            { label: "Single accountable advisory team", text: "Maintain one partner for multi-domain execution." },
        ],
    },
]

export type Project = {
    title: string
    metric: string
    metricLabel: string
    description: string
}

export const PROJECTS: Project[] = [
    {
        title: "AI Lead Scoring Platform",
        metric: "+43%",
        metricLabel: "sales-qualified leads",
        description:
            "Increased sales-qualified leads by 43% using custom AI models integrated into CRM workflows.",
    },
    {
        title: "Enterprise Security & Audit Program",
        metric: "-62%",
        metricLabel: "audit findings",
        description:
            "Reduced audit findings by 62% through governance redesign, policy automation, and control monitoring.",
    },
    {
        title: "Data-Driven Marketing Transformation",
        metric: "2.6x",
        metricLabel: "campaign ROI",
        description:
            "Lifted campaign ROI by 2.6x with omnichannel strategy, analytics infrastructure, and creative testing systems.",
    },
]

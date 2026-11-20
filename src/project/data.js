export const personalInfo = {
  name: 'Mudit Choudhary',
  role: 'Machine Learning & Applied Cryptography Engineer',
  bioShort:
    'MSc Cybersecurity candidate at Nanyang Technological University (NTU), Singapore. I build post-quantum cryptographic systems, zero-knowledge architectures, and geospatial AI pipelines.',
  email: 'muditchoudhary099@gmail.com',
  location: 'Singapore (NTU)',
  github: 'https://github.com/mudit2210',
  linkedin: 'https://www.linkedin.com/in/mudit-choudhary-sg/',
  scholar: 'https://scholar.google.com',
  resumeUrl: '/resume.pdf',
}

export const aboutNarrative = {
  p1: 'I engineer at the convergence of enterprise Linux/cloud infrastructure, scalable machine intelligence, and applied cryptography.',
  p2: 'My experience bridges Linux server operations at NTT DATA, architecting encrypted GCP cloud pipelines processing 14.6M+ geospatial records at Geo Planet Solutions, to graduate research at NTU Singapore focused on post-quantum cryptographic primitives (ML-KEM/Kyber) and verifiable AI security.',
  focusAreas: [
    'Post-Quantum Crypto',
    'Zero-Knowledge Sys',
    'Geospatial ML',
    'Linux & Cloud Security',
  ],
  location: 'Singapore (NTU)',
  recognition: ['Indian Design Patent', 'SIH National Winner'],
}

export const featuredProjects = [
  {
    slug: 'the-dream-welfare-society',
    numeral: '01',
    category: 'FULL-STACK WEB & CLOUD',
    logo: '/tdws-logo.png',
    title: 'The Dream Welfare Society — Non-Profit Platform & CMS',
    description:
      'High-impact NGO web platform built with Next.js & Sanity CMS, powered by a $10,000/mo Google NGO Grant for community empowerment across India.',
    tags: [
      'Next.js',
      'Sanity CMS',
      'React',
      'Tailwind CSS',
      'Google Ad Grants',
      'GROQ',
      'SEO & Analytics',
    ],
    summary: [
      'The Dream Welfare Society (TDWS) is a registered Indian non-governmental organization (Reg. under Rajasthan Societies Act, 1958; 12A, 80G, CSR-1, and FCRA compliant) headquartered in Jaipur, dedicated to sustainable community development, environmental conservation, education, healthcare, and economic empowerment across India.',
      'Serving as the Full-Stack Web Developer and Technical Architect, I designed and built the organization’s official production web platform (thedreamwelfaresociety.org) using Next.js and Sanity CMS. I architected Sanity’s Content Lake to serve as a headless, real-time document database—defining structured content schemas, relationship models, and GROQ query endpoints so non-technical NGO administrators can publish verified stories, initiatives, and financial reports with zero code deployments.',
      'Furthermore, I led the successful qualification and setup for the Google for Nonprofits program, securing a recurring $10,000/month Google Ad Grant. I engineered the digital growth infrastructure, setting up high-conversion landing funnels, tracking telemetry, and search campaign architectures that connect donors and volunteers with grassroots humanitarian causes.',
    ],
    github: null,
    demo: 'https://www.thedreamwelfaresociety.org/',
    links: [
      {
        label: 'Official Website',
        url: 'https://www.thedreamwelfaresociety.org/',
      },
      {
        label: 'Grants & Funding',
        url: 'https://www.thedreamwelfaresociety.org/involved/grants/',
      },
      {
        label: 'Initiatives & Stories',
        url: 'https://www.thedreamwelfaresociety.org/work/stories/',
      },
      {
        label: 'Who We Are',
        url: 'https://www.thedreamwelfaresociety.org/about/who-we-are/',
      },
    ],
    metrics: [
      { label: 'Google NGO Grant', value: '$10,000/mo', sub: 'Google for Nonprofits Ad Grant' },
      { label: 'Frontend Stack', value: 'Next.js App', sub: 'Turbopack + React Server Components' },
      { label: 'Headless Database', value: 'Sanity Lake', sub: 'Dynamic GROQ real-time content store' },
      { label: 'Statutory Compliances', value: '80G / 12A', sub: 'FCRA & CSR-1 certified non-profit' },
    ],
    milestones: [
      {
        title: 'Google for Nonprofits & $10,000/Month Ad Grant Secured',
        bullets: [
          'Successfully qualified the non-profit for Google for Nonprofits certification and unlocked the $10,000/month recurring Google Ad Grant for high-intent search campaigns.',
          'Engineered search campaign structures, negative-keyword filtering, and conversion event tracking to maximize quality impressions for donation drives and volunteer sign-ups.',
        ],
      },
      {
        title: 'Production Next.js Architecture & High-Performance UI',
        bullets: [
          'Developed a modern, accessible, mobile-first web application using Next.js App Router, React Server Components (RSC), and Tailwind CSS.',
          'Optimized Core Web Vitals to deliver sub-second First Contentful Paint (FCP) and seamless navigation across mobile devices in low-connectivity rural areas.',
        ],
      },
      {
        title: 'Headless Database & Schema Modeling in Sanity CMS',
        bullets: [
          'Engineered custom document schemas within Sanity Content Lake, utilizing it as the primary structured database for social initiatives, impact stories, blogs, and regulatory disclosures.',
          'Wrote performant GROQ (Graph-Relational Object Queries) projection queries, eliminating unnecessary payload overhead and enabling instant live content synchronization.',
        ],
      },
      {
        title: 'Donor Trust & Regulatory Transparency Portals',
        bullets: [
          'Built dedicated public verification pages showcasing statutory credentials, including 12A, 80G tax exemptions, CSR-1 registration, and FCRA certifications.',
          'Integrated secure donor contact pathways, volunteer onboarding pipelines, and responsive multimedia photo galleries.',
        ],
      },
    ],
    architecture:
      'Engineered an enterprise-grade headless web architecture combining Next.js server-side performance with Sanity CMS Content Lake as the dynamic document database and Google Ad Grants growth telemetry:',
    architecturePoints: [
      {
        layer: 'Frontend & Presentation Tier',
        title: 'Next.js App Router & Responsive UI Engine',
        bullets: [
          'Server-Side Rendering (SSR) & Static Site Generation (SSG): Combines pre-rendered static shells with server-rendered dynamic data for optimal SEO ranking and lightning-fast load times.',
          'Modern Component Design: Built with React and Tailwind CSS, featuring custom accessible modals, donation guides, and responsive layouts tailored for mobile accessibility.',
          'Enterprise SEO & Metadata: Automated OpenGraph tags, semantic HTML5 markup, canonical URLs, and dynamic XML sitemaps for maximum search engine discoverability.',
        ],
      },
      {
        layer: 'Content & Database Tier',
        title: 'Sanity CMS Headless Content Lake as Document Store',
        bullets: [
          'Dynamic Document Schema: Custom content models for Initiatives, Impact Stories, Beneficiary Testimonials, Event Schedules, and Legal Registrations.',
          'GROQ Query Optimization: Leveraged Graph-Relational Object Queries with selective field projections and relational joins to retrieve structured data efficiently.',
          'Real-Time Editorial Workflow: Provided NGO staff with an intuitive Sanity Studio dashboard with live previews, media asset pipelines, and zero-downtime publishing.',
        ],
      },
      {
        layer: 'Outreach & Analytics Tier',
        title: 'Google for Nonprofits & Google Ad Grants Telemetry',
        bullets: [
          'Google Ad Grants Funnels: Configured search advertising funnels utilizing the $10,000/month credit allocation to acquire high-intent donors and institutional partners.',
          'Conversion Tracking & Telemetry: Implemented Google Tag Manager and Google Analytics 4 (GA4) with custom events for donor intent, form submissions, and volunteer registrations.',
          'Compliance Adherence: Maintained required Google Ad Grants policy benchmarks, including >5% CTR, active keyword quality management, and geo-targeting.',
        ],
      },
    ],
    threatModel:
      'Non-profit digital platforms require robust safeguards against fraudulent misrepresentation, donor data compromise, form spam, and defacement. Preserving donor trust and maintaining strict regulatory compliance under Indian non-profit statutes are fundamental.',
    threatModelPoints: [
      {
        title: 'Decoupled Headless Security',
        description:
          'By separating the public Next.js frontend from the Sanity Content Lake backend, direct database access is eliminated, mitigating common injection vectors and securing administrative panels.',
      },
      {
        title: 'Granular Role-Based Access Control (RBAC)',
        description:
          'Sanity Studio is hardened with role-based access tokens, ensuring only authorized NGO personnel can update verified financial reports, compliance documents, and public statements.',
      },
      {
        title: 'Anti-Spam & Sanitized Submissions',
        description:
          'Input validation, rate-limiting, and sanitized form handlers across volunteer and donor contact endpoints protect the platform against automated bots, scraping, and injection attacks.',
      },
      {
        title: 'Statutory Verification & Trust Proofing',
        description:
          'Direct hosting of certified tax-exemption certificates (80G/12A) and official registration numbers prevents credential spoofing and establishes donor legitimacy.',
      },
    ],
    tradeoffs:
      'Choosing Next.js paired with Sanity CMS over traditional monolithic CMS solutions (like WordPress or Drupal) eliminated security vulnerabilities, server patching overhead, and plugin bloat, delivering near-instant page transitions while giving non-technical staff complete control over content.',
    tradeoffPoints: [
      {
        title: 'Headless CMS vs Monolithic SQL Stack',
        description:
          'Sanity Content Lake removed the need for maintaining database servers, migrations, and backups, while GROQ queries gave precise GraphQL-like querying without GraphQL server overhead.',
      },
      {
        title: 'Next.js Hybrid Rendering vs Pure Client SPA',
        description:
          'Using Next.js Server Components and SSG achieved near-perfect Lighthouse SEO scores and sub-second paint times, which were essential for maintaining Google Ad Grant quality score requirements.',
      },
    ],
  },
  {
    slug: 'haryalo-raj-guide',
    numeral: '02',
    category: 'GEOSPATIAL AI & PLATFORMS',
    logo: '/haryalo_raj.png',
    title: 'Haryalo Rajasthan — Environmental Conservation & Tree Plantation Initiative',
    description:
      'State-wide digital afforestation initiative ("Ek Ped Maa Ke Naam") tracking 14.68+ Cr trees, 2.54 Cr single-day record, and 10,000+ nurseries across Rajasthan.',
    tags: [
      'Django',
      'Google Cloud (GCP)',
      'React',
      'PostgreSQL / PostGIS',
      'GIS & GPS',
      'Mobile Telemetry',
      'Offline Sync',
    ],
    summary: [
      'Haryalo Rajasthan ("Ek Ped Maa Ke Naam") is a state-wide afforestation initiative by the Government of Rajasthan and Geo Planet Solution Pvt. Ltd., leveraging real-time GPS tracking, GIS mapping, and geo-tagging to monitor tree plantation and survival across the state.',
      'Serving as Web & Database Developer on this initiative at Geo Planet Solution Pvt. Ltd., I engineered and built the core responsive web pages and governance dashboard interfaces across the platform in React. I architected the underlying PostgreSQL/PostGIS relational database schema from scratch—defining field data types, relational interconnections, and foreign-key constraints, and rigorously structuring the entire schema to 3rd Normal Form (3NF) to eliminate data redundancy, guarantee referential integrity, and optimize spatial query performance across 14.68 Cr+ geo-tagged tree records.',
    ],
    github: null,
    demo: 'https://hariyalo.rajasthan.gov.in/portaldash/portaldash',
    links: [
      {
        label: 'Web Dashboard',
        url: 'https://hariyalo.rajasthan.gov.in/portaldash/portaldash',
      },
      {
        label: 'Google Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.hariyalorajasthan.gpsplit',
      },
      {
        label: 'Apple App Store',
        url: 'https://apps.apple.com/in/app/haryalo-rajasthan/id6748052717',
      },
      {
        label: 'GeoPlanet Case Study',
        url: 'https://geoplanetsolution.com/projects/haryalo-raj-guide',
      },
    ],
    metrics: [
      { label: 'Massive Plantation Scale', value: '14.68 Cr+', sub: 'Total trees planted across Rajasthan' },
      { label: 'Single-Day World Record', value: '2.54 Cr', sub: 'Planted on Hariyali Teej (July 27, 2025)' },
      { label: 'Target Milestone', value: '< 5 Months', sub: '10 Cr annual target exceeded early' },
      { label: 'Nursery Network', value: '10,000+', sub: 'Geotagged state & private nurseries' },
    ],
    milestones: [
      {
        title: 'Massive Plantation Scale (14.68 Crore+ Trees)',
        bullets: [
          'Over 14.68 crore (146.8M+) trees digitally mapped, geo-tagged, and monitored across all 41 districts of Rajasthan.',
          'Established India’s largest digitally audited state-wide afforestation database, replacing paper records with live telemetry.',
        ],
      },
      {
        title: 'Single-Day World Record (2.54 Crore Trees)',
        bullets: [
          'Planted 2.54 crore trees in a single 24-hour window on Hariyali Teej (July 27, 2025).',
          'Featured in the World Book of Records for historic large-scale digital afforestation mobilization.',
        ],
      },
      {
        title: 'Annual Target Exceeded Ahead of Schedule',
        bullets: [
          'Achieved the 10-crore annual state plantation target for FY 2025–26 in under 5 months (April 1 – August 19, 2025).',
          'Demonstrated unprecedented execution velocity through multi-departmental citizen and institutional collaboration.',
        ],
      },
      {
        title: 'Continuous Supply via 10,000+ Geotagged Nurseries',
        bullets: [
          'Geotagged and digitally integrated 10,000+ government and private nurseries with live inventory monitoring.',
          'Secured uninterrupted distribution of resilient native saplings (Neem, Babool, Ber, Seesam, Karanj) tailored to Rajasthan’s arid ecology.',
        ],
      },
    ],
    departments: [
      { name: 'Education Department', count: '4.93 Cr+' },
      { name: 'RDPR (MGNREGA, WDSC, Rajeevika)', count: '3.54 Cr+' },
      { name: 'Forest Department', count: '3.05 Cr+' },
    ],
    topSpecies: [
      { name: 'Neem', count: '~1.15 Cr' },
      { name: 'Babool', count: '~76.3 Lakh' },
      { name: 'Ber', count: '~61.1 Lakh' },
    ],
    architecture:
      'Architected an enterprise-grade multi-tier geospatial tracking ecosystem deployed across 41 districts in Rajasthan, powered by Django, Google Cloud, React, and PostgreSQL/PostGIS:',
    architecturePoints: [
      {
        layer: 'Field Telemetry Tier',
        title: 'Cross-Platform Mobile Applications (Android & iOS)',
        bullets: [
          'Offline-First GPS Telemetry: Capture sub-meter coordinates, timestamp attestation, and tree images in remote arid regions with local SQLite caching.',
          'Django REST Integration: Seamless batch synchronization to the scalable Django backend as soon as network connectivity is restored.',
          'Citizen Engagement & Verification: Native apps (com.hariyalorajasthan.gpsplit) delivering localized tutorials, camera verification, and instant digital certificates.',
        ],
      },
      {
        layer: 'Data & Processing Tier (Django + GCP + PostGIS)',
        title: 'High-Throughput Spatial Ingestion Pipeline',
        bullets: [
          'Google Cloud Platform (GCP) Infrastructure: Scalable cloud services and worker pipelines engineered to process massive concurrent writes during statewide drives.',
          'PostgreSQL & PostGIS Spatial Indexing: High-performance spatial querying and validation against GIS administrative shapefiles, revenue village boundaries, and KML/KMZ spatial layers.',
          'Automated De-duplication & Burst Scalability: Spatial proximity algorithms prevent double-logging—successfully processing 2.54 crore tree logs in 24 hours on Hariyali Teej with zero packet drop.',
        ],
      },
      {
        layer: 'Command Center Tier (React)',
        title: 'Multi-Level Administrative Governance Dashboard',
        bullets: [
          'React Interactive Frontend: High-performance component-driven interface providing real-time geospatial visualization and drill-downs from State to District, Block, and Gram Panchayat levels.',
          'Department-Wise Tracking: Live performance analytics across Education, RDPR (MGNREGA), Forest, and Local Self Government departments.',
          'Exportable Spatial Reports: One-click export of GIS overlays, compliance verification digests, and survival audit reports for government oversight.',
        ],
      },
    ],
    threatModel:
      'Large-scale environmental drives face critical monitoring hurdles: phantom plantations, duplicate tree logging, fabricated coordinates, and unverifiable survival rates in arid terrain. Traditional sample audits cannot verify millions of trees distributed across thousands of villages simultaneously.',
    threatModelPoints: [
      {
        title: 'Geospatial Falsification & Duplicate Logging',
        description:
          'Eliminated fraudulent coordinates and replay attacks via device-level GPS validation, timestamp attestation, and spatial proximity checks.',
      },
      {
        title: 'Long-Term Tree Survival Auditing',
        description:
          'Ensured verified ecological permanence through periodic geo-tagged photo uploads and multi-year health audits across 41 arid districts.',
      },
    ],
    tradeoffs:
      'Engineered the mobile telemetry ingestion engine to withstand peak burst loads—powering the seamless, real-time logging of 2.54 crore tree plantations in a single 24-hour window on Hariyali Teej without downtime or telemetry corruption.',
    tradeoffPoints: [
      {
        title: 'Offline-First Telemetry vs. Immediate Sync',
        description:
          'Prioritized resilient local SQLite caching and batch synchronization to guarantee zero data loss in remote desert regions with intermittent cellular coverage.',
      },
      {
        title: 'Granular Drill-Downs vs. Query Latency',
        description:
          'Pre-aggregated spatial boundary indexes across Gram Panchayat, Block, and District hierarchies to maintain sub-second dashboard rendering over 14.68 Cr records.',
      },
    ],
  },
  {
    slug: 'geotree-verification-pipeline',
    numeral: '03',
    category: 'GEOSPATIAL AI & SECURITY',
    title: 'GeoTree Verification Pipeline',
    description:
      'Drone/GIS + AES/RSA encrypted carbon-credit ML verification for high-integrity environmental auditing.',
    tags: ['PyTorch', 'GCP', 'AES/RSA', 'GIS'],
    summary:
      'Cloud-native geospatial computer vision pipeline verifying afforestation and carbon-credit claims with cryptographic provenance and tamper-evident audit trails.',
    github: 'https://github.com/mudit2210',
    demo: 'https://github.com/mudit2210',
    metrics: [
      { label: 'Records Processed', value: '14.6M+', sub: 'Geospatial records' },
      { label: 'Canopy mAP', value: '91.4%', sub: 'High-res aerial segmentation' },
      { label: 'Integrity Seal', value: 'AES-256 + RSA', sub: 'Tamper-evident hash chain' },
    ],
    threatModel:
      'Carbon credit fraud often relies on fabricated drone imagery, synthetic GIS coordinates, and unverified canopy claims. The threat model counters image tampering, replay attacks, and false reporting in voluntary carbon markets.',
    architecture:
      'Drone-captured high-resolution orthomosaics are partitioned and ingested into a PyTorch Vision Transformer (ViT) pipeline on GCP. Every verified canopy mask and carbon estimate is digitally signed using hardware-backed RSA keys and stored with encrypted immutable telemetry.',
    tradeoffs:
      'Accelerated pipeline batch inference by 3.8x, enabling automated verification of 100+ square kilometers of afforestation parcels in under 45 minutes.',
  },
  {
    slug: 'ufdr-forensic-triage-engine',
    numeral: '04',
    category: 'DIGITAL FORENSICS',
    title: 'UFDR Forensic Triage Engine',
    description:
      'AI-assisted digital evidence parsing and forensic artifact extraction (SIH National Winner).',
    tags: ['Python', 'NLP', 'Forensics', 'FastAPI'],
    summary:
      'National award-winning forensic intelligence tool that ingests Cellebrite UFDR forensic extraction reports, automatically correlating suspect timelines and multi-app communication chains.',
    github: 'https://github.com/mudit2210',
    demo: 'https://github.com/mudit2210',
    metrics: [
      { label: 'Triage Acceleration', value: '72h → 8min', sub: 'Per standard forensic dump' },
      { label: 'Parsing Speed', value: '100k+/min', sub: 'Structured event records' },
      { label: 'National Recognition', value: 'Winner', sub: 'Smart India Hackathon (SIH)' },
    ],
    threatModel:
      'Law enforcement investigators face gigabytes of unstructured extraction dumps per seized mobile device, requiring days of manual review. Critical evidence often remains buried in distributed chats, deleted logs, and multi-app communication patterns.',
    architecture:
      'Constructed with a multi-threaded Python ingestion core and NLP relation-extraction model. Ingests raw XML/JSON forensic archives, standardizes timestamps across timezones, and generates tamper-evident investigation digests with cryptographic hash verification.',
    tradeoffs:
      'Reduced manual triage duration from 72 hours to under 8 minutes per standard mobile dump, evaluated and recognized by national cyber defense bodies.',
  },
]

export const publicationsAndPatents = [
  {
    id: 'patent-2026',
    type: 'Patent',
    year: '2026',
    title: 'AI-Driven Employee Behavioral Risk Assessment System',
    venue: 'Indian Design Patent No. 481563-001 (Journal No. 04/2026)',
    authority: 'Indian Design Patent Office',
    abstract:
      'A novel ergonomic apparatus and computational system for monitoring, identifying, and evaluating workforce behavioral risk metrics, integrating edge sensor telemetry with real-time neural pattern recognition while preserving employee data confidentiality.',
    doi: null,
    link: null,
    bibtex: `@patent{choudhary2026behavioral,
  title={AI-Driven Employee Behavioral Risk Assessment System},
  author={Choudhary, Mudit and Collaborators},
  year={2026},
  number={481563-001},
  note={Indian Design Patent, Journal No. 04/2026}
}`,
  },
  {
    id: 'ieee-2025',
    type: 'Peer-Reviewed Paper',
    year: '2025',
    title: 'Secure Intelligence at the Smart City Edge: Edge-Native Cryptographic Verification',
    venue: 'ICETCE 2025 Conference Proceedings — IEEE Xplore',
    authority: 'IEEE',
    abstract:
      'Proposes a lightweight cryptographic verification paradigm for edge intelligence nodes deployed in smart urban infrastructures. Explores hardware-accelerated signature verification and zero-trust IoT attestation against sensor spoofing and man-in-the-middle exploits.',
    doi: '10.1109/ICETCE64319.2025.10931234',
    link: 'https://doi.org/10.1109/ICETCE64319.2025.10931234',
    bibtex: `@inproceedings{choudhary2025secure,
  title={Secure Intelligence at the Smart City Edge: Edge-Native Cryptographic Verification},
  author={Choudhary, Mudit and Sharma, P. and Gupta, R.},
  booktitle={2025 7th International Conference on Emerging Technologies in Computer Engineering (ICETCE)},
  pages={1--6},
  year={2025},
  publisher={IEEE},
  doi={10.1109/ICETCE64319.2025.10931234}
}`,
  },
  {
    id: 'chapter-2026',
    type: 'Book Chapter',
    year: '2026',
    title: 'Scalable Machine Intelligence for Environmental Monitoring & Cryptographic Carbon Verification',
    venue: 'IIP Book Series on Sustainable Computational Intelligence / ICNGC 2025',
    authority: 'Iterative International Publishers',
    abstract:
      'Explores the integration of satellite imagery, drone GIS segmentation networks, and public-key cryptography to build tamper-evident environmental monitoring pipelines for voluntary carbon markets.',
    doi: '10.58868/IIP-SCI-2026-CH09',
    link: 'https://doi.org',
    bibtex: `@incollection{choudhary2026scalable,
  title={Scalable Machine Intelligence for Environmental Monitoring and Cryptographic Carbon Verification},
  author={Choudhary, Mudit and Singh, A.},
  booktitle={Sustainable Computational Intelligence in Environmental Systems},
  series={IIP Book Series},
  year={2026},
  publisher={Iterative International Publishers}
}`,
  },
]

export const experienceList = [
  {
    period: 'Aug 2026 – Oct 2026 · 3 mos',
    role: 'Systems Administration Senior Associate',
    company: 'NTT DATA',
    employmentType: 'Full-time',
    location: 'Noida, Uttar Pradesh, India · Remote',
    logo: '/nttdata-logo.svg',
    description:
      'Supported system administration and Linux server operations. Assisted with system monitoring, troubleshooting, performance optimization, and incident resolution following enterprise IT security best practices.',
    points: [
      'Supported system administration and Linux server operations.',
      'Assisted with system monitoring, troubleshooting, and incident resolution.',
      'Worked on system performance, availability, and operational reliability.',
      'Followed IT security best practices and standard operating procedures.',
    ],
    skills: ['System Administration', 'Linux System Administration'],
  },
  {
    period: 'Jun 2024 – Aug 2026 · 2 yrs 3 mos',
    role: 'Machine Learning & Web Developer',
    company: 'Geo Planet Solution Pvt. Ltd.',
    employmentType: 'Full-time',
    location: 'Jaipur, Rajasthan, India · On-site',
    logo: '/geoplanet-logo.png',
    description:
      'Engineered core web pages and analytical dashboards for large-scale geospatial platforms. Architected 3NF relational database schemas in PostgreSQL/PostGIS and scalable GCP ML pipelines.',
    points: [
      'Built and deployed responsive web pages and administrative dashboard interfaces across the Haryalo Rajasthan platform using React and Django.',
      'Architected the core relational database schema in PostgreSQL/PostGIS, defining data types, foreign-key relationships, and structuring to 3rd Normal Form (3NF) across 14.68 Cr+ records.',
      'Developed Vision Transformer (ViT) models and cloud pipelines on GCP for automated aerial canopy segmentation and verified environmental auditing.',
      'Implemented AES-256 and RSA cryptographic verification seals ensuring tamper-evident audit trails.',
    ],
    skills: ['React', 'Django', 'PostgreSQL / 3NF', 'PostGIS', 'GCP', 'PyTorch', 'Vision Transformers', 'AES/RSA'],
  },
  {
    period: 'Jun 2023 – Sep 2023 · 4 mos',
    role: 'Cloud Infra & Security Intern',
    company: 'Celebal Technologies',
    employmentType: 'Internship',
    location: 'India · On-site',
    logo: '/celebal-logo.png',
    description:
      'Hands-on cloud infrastructure and security with Microsoft Azure, including networking, virtual machines, identity & access management (IAM), load balancing, and cloud security configurations.',
    points: [
      'Gained hands-on experience in cloud infrastructure and security using Microsoft Azure.',
      'Worked with Azure networking, virtual machines, identity and access management (IAM), and security configurations.',
      'Explored network load balancing, cloud monitoring, and infrastructure deployment.',
      'Developed practical knowledge of cloud security best practices and enterprise IT environments.',
    ],
    skills: ['Microsoft Azure', 'Microsoft Entra ID', 'Cloud Security', 'IAM'],
  },
  {
    period: 'Jul 2022 · 1 mo',
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    employmentType: 'Internship',
    location: 'Jaipur, Rajasthan, India · Remote',
    logo: '/celebal-logo.png',
    description:
      'Conducted exploratory data analysis, data pre-processing, and feature engineering. Built machine learning models for predictive analytics and structured reporting.',
    points: [
      'Conducted exploratory data analysis, data pre-processing, and feature engineering.',
      'Built machine learning models for predictive analysis and structured reporting.',
    ],
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Exploratory Data Analysis'],
  },
]

export const educationList = [
  {
    period: '2026 – Present',
    degree: 'MSc in Cybersecurity (Applied Cryptography)',
    institution: 'Nanyang Technological University (NTU), Singapore',
    location: 'Singapore',
    logo: '/ntu-logo.png',
    image: '/ntu-logo.png',
    description:
      'Graduate research concentrating on post-quantum cryptographic primitives, lattice-based Key Encapsulation Mechanisms (ML-KEM/Kyber), zero-knowledge systems, and hardware security.',
  },
  {
    period: '2020 – 2024',
    degree: 'B.Tech in Computer Science & Engineering (8.83/10)',
    institution: 'SKIT Jaipur (RTU)',
    location: 'Jaipur, India',
    logo: '/skit-logo.png',
    image: '/skit-logo.png',
    description:
      'Graduated with honors (8.83/10 CGPA). Winner of the Smart India Hackathon (SIH) National Finals for forensic extraction intelligence. Led technical teams with focus on cryptographic algorithms and distributed systems.',
  },
  {
    period: '2018 – 2020',
    degree: 'Senior Secondary (Class XII) — Science (PCM + IP)',
    institution: 'Maharaja Sawai Bhawani Singh School (MSBSS), Jaipur',
    location: 'Jaipur, Rajasthan, India',
    logo: '/msbss-logo.png',
    image: '/msbss-logo.png',
    description:
      'Completed Senior Secondary Education majoring in Physics, Chemistry, Mathematics (PCM), and Informatics Practices (IP), establishing core foundations in analytical problem solving, algorithms, and software programming.',
  },
]

export const experienceAndEducation = [
  ...educationList.map((e) => ({
    period: e.period,
    role: e.degree,
    institution: e.institution,
    type: 'Education',
    description: e.description,
  })),
  ...experienceList.map((e) => ({
    period: e.period,
    role: e.role,
    institution: e.company,
    type: 'Experience',
    description: e.description,
  })),
]

export const certificationsList = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    degree: 'Professional Certificate (9 Courses)',
    period: 'Jan 2026',
    location: 'Coursera Verified',
    logo: '/google-logo.svg',
    credentialId: 'BEF3Z5YH43EC',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/BEF3Z5YH43EC',
    image: null,
    description:
      'Completed 9 rigorous courses developed by Google, covering Python automation, Linux and SQL administration, SIEM security event correlation, and Intrusion Detection Systems (IDS). Hands-on practice in identifying cyber threats, vulnerabilities, and incident response mitigation.',
    skills: [
      'Python Automation',
      'Linux & SQL',
      'SIEM Tools',
      'Threats & Vulnerabilities',
      'Network Security',
    ],
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    degree: 'Cloud Architecture & Security Fundamentals',
    period: '2023',
    location: 'Microsoft Learn Verified',
    logo: '/microsoft-logo.svg',
    credentialId: '809961c17ed0fb7a',
    link: 'https://learn.microsoft.com/en-us/users/muditchoudhary-9606/credentials/809961c17ed0fb7a?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    image: null,
    description:
      'Demonstrated foundational knowledge of cloud concepts, Azure architecture and core services, along with Azure management, governance, security, and compliance.',
    skills: ['Microsoft Azure', 'Cloud Security', 'IAM', 'Virtual Networks'],
  },
  {
    title: 'Journey to Cloud: Envisioning Your Solution',
    issuer: 'IBM',
    degree: 'Cloud Transformation & Solution Architecture',
    period: '2023',
    location: 'Credly Verified',
    logo: '/ibm-journey-to-cloud-badge.png',
    credentialId: '92e10d14-4d7b-4cda-b768-774bc68d995b',
    link: 'https://www.credly.com/badges/92e10d14-4d7b-4cda-b768-774bc68d995b/public_url',
    image: null,
    description:
      'Demonstrated understanding of digital transformation drivers enabled by cloud technologies, delivery models (IaaS, SaaS, PaaS), Agile & IBM Garage Method, Enterprise Design Thinking, and deploying cloud pilot applications using IBM Code Engine.',
    skills: [
      'IBM Cloud',
      'Solution Architecture',
      'IaaS / PaaS / SaaS',
      'IBM Code Engine',
      'Design Thinking',
    ],
  },
]

export const technicalStack = [
  {
    domain: 'Cryptography & Security',
    category: 'Cryptography & Security',
    skills: [
      'ML-KEM (Kyber)',
      'Dilithium',
      'AES/RSA',
      'E2EE',
      'Zero-Knowledge Systems',
      'liboqs',
      'PKI',
    ],
  },
  {
    domain: 'AI & Machine Learning',
    category: 'AI & Machine Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Vision Transformers (ViT)',
      'Scikit-learn',
      'GIS AI',
      'OpenCV',
      'NLP',
    ],
  },
  {
    domain: 'Systems, Cloud & Infrastructure',
    category: 'Systems, Cloud & Infrastructure',
    skills: [
      'Linux (SysAdmin)',
      'GCP',
      'Microsoft Azure',
      'PostgreSQL / PostGIS',
      'Django',
      'React',
      'Next.js',
      'Sanity CMS',
      'Docker',
      'Python',
      'C++',
      'TypeScript',
      'Node.js',
      'WebSockets',
    ],
  },
]

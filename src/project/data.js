export const personalInfo = {
  name: 'Mudit Choudhary',
  role: 'Machine Learning & Applied Cryptography Engineer',
  bioShort:
    'MSc Cybersecurity candidate at Nanyang Technological University (NTU), Singapore. I build post-quantum cryptographic systems, zero-knowledge architectures, and geospatial AI pipelines.',
  email: 'mudit@example.com',
  location: 'Singapore (NTU)',
  github: 'https://github.com/mudit-choudhary',
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
    slug: 'post-quantum-crypto-benchmark',
    numeral: '01',
    category: 'APPLIED CRYPTOGRAPHY',
    title: 'Post-Quantum Crypto Benchmark',
    description:
      'Latency, RAM & handshake cost of ML-KEM/Dilithium vs RSA under constrained environments.',
    tags: ['C++', 'Python', 'ML-KEM', 'Dilithium'],
    summary:
      'Comprehensive benchmark suite evaluating post-quantum cryptographic primitives (ML-KEM/Dilithium) against classical asymmetric schemes (RSA/ECC) under varying hardware and network constraints.',
    github: 'https://github.com/mudit-choudhary',
    demo: 'https://github.com/mudit-choudhary',
    metrics: [
      { label: 'KeyGen Latency', value: '0.14 ms', sub: 'Kyber-768 / Cortex-A72' },
      { label: 'Peak Memory Overhead', value: '2.4 KB', sub: 'Zero heap fragmentation' },
      { label: 'Throughput', value: '7,140/s', sub: 'Simulated TLS 1.3 handshakes' },
    ],
    threatModel:
      "Shor's algorithm threatens classical public-key cryptography (RSA-2048, ECDSA). Migrating to lattice-based primitives (NIST FIPS 203/204) introduces substantial ciphertext and public-key expansion that severely impacts constrained microcontrollers and real-time edge networks.",
    architecture:
      'Constructed in C++ using liboqs bindings and a Python telemetry orchestrator. Benchmarks execution cycles, dynamic RAM usage, and packet fragmentation across simulated lossy networks for ML-KEM-512/768/1024 and Dilithium-2/3/5.',
    tradeoffs:
      'ML-KEM-768 demonstrates 8.2x faster key generation than RSA-2048 at the cost of 1,184-byte ciphertexts (vs. 256 bytes for RSA). Dilithium signatures exhibit negligible verification latency while requiring hardened resistance against side-channel power attacks.',
  },
  {
    slug: 'zero-knowledge-e2ee-messenger',
    numeral: '02',
    category: 'ZERO-KNOWLEDGE SYSTEMS',
    title: 'Zero-Knowledge E2EE Messenger',
    description:
      'Forward-secure Node.js relay with client-side key rotation and zero knowledge of user payloads.',
    tags: ['Node.js', 'AES-GCM', 'Express', 'WebSocket'],
    summary:
      'End-to-end encrypted messaging engine engineered with double-ratchet key rotation, authenticated payload exchange, and zero-knowledge message relaying.',
    github: 'https://github.com/mudit-choudhary',
    demo: 'https://github.com/mudit-choudhary',
    metrics: [
      { label: 'Encryption Latency', value: '< 1.2 ms', sub: 'Per-frame AES-256-GCM' },
      { label: 'Relay Knowledge', value: '0 bits', sub: 'Zero plaintext inspection' },
      { label: 'Ratchet Interval', value: 'Per-message', sub: 'Immediate forward secrecy' },
    ],
    threatModel:
      'Centralized communication servers often inspect traffic metadata and risk retroactive decryption if long-term server keys are compromised. The threat model assumes an untrusted network relay and active adversaries capable of intercepting transit traffic.',
    architecture:
      'Implements client-side ephemeral Diffie-Hellman key agreement with AES-256-GCM authenticated cipher blocks. The Node.js WebSocket relay exclusively routes blind ciphertext tokens, preserving zero knowledge of sender identity, recipient graphs, and message plaintext.',
    tradeoffs:
      'Maintains sub-15ms message delivery across intercontinental clusters while guaranteeing forward secrecy and break-in recovery after ephemeral key compromise.',
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
    github: 'https://github.com/mudit-choudhary',
    demo: 'https://github.com/mudit-choudhary',
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
    github: 'https://github.com/mudit-choudhary',
    demo: 'https://github.com/mudit-choudhary',
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
    role: 'Machine Learning Engineer',
    company: 'Geo Planet Solution Pvt. Ltd.',
    employmentType: 'Full-time',
    location: 'Jaipur, Rajasthan, India · On-site',
    logo: '/geoplanet-logo.png',
    description:
      'Architected encrypted cloud pipelines on GCP processing 14.6M+ geospatial records. Developed Vision Transformer models for automated aerial canopy segmentation and verified carbon credit auditing.',
    points: [
      'Architected encrypted cloud pipelines on GCP processing 14.6M+ geospatial records.',
      'Developed Vision Transformer (ViT) models for automated aerial canopy segmentation and verified carbon credit auditing.',
      'Implemented AES-256 and RSA cryptographic verification seals ensuring tamper-evident audit trails.',
    ],
    skills: ['PyTorch', 'Vision Transformers', 'GCP', 'Geospatial AI', 'AES/RSA'],
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
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    period: 'Issued 2023',
    credentialId: 'AZ-900',
    link: 'https://learn.microsoft.com',
    skills: ['Microsoft Azure', 'Cloud Security', 'IAM', 'Virtual Networks'],
  },
  {
    title: 'IBM Cloud Essentials / Cloud Core',
    issuer: 'IBM',
    period: 'Issued 2022',
    credentialId: 'Verified Credly Badge',
    link: 'https://www.credly.com',
    skills: ['IBM Cloud', 'Containerization', 'Cloud Security'],
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
      'Microsoft Azure',
      'GCP',
      'Docker',
      'Python',
      'C++',
      'TypeScript',
      'Node.js',
      'WebSockets',
    ],
  },
]

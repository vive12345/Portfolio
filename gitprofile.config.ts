// gitprofile.config.ts
// import TestimonialCard from './';
const CONFIG = {
  github: {
    username: "vive12345", // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: "/gitprofile/",
  projects: {
    custom: {
      display: true,
      header: "Project Highlights",
      projects: [
        {
          name: "BIM Agentic Assistant with AI Avatar",
          about:
            "I am building this full-stack agentic assistant with AutoBIM Route so reviewers can see every plan, validation, and answer forming in real time. The problem was that project stakeholders had to trust opaque AI outputs; I rewired the workflow with RAGFlow, ReVIT, and AutoReVIST so the assistant narrates the “why,” keeps BIM docs indexed, and answers with evidence over a single embedding space. A GPU-free avatar now lip-syncs to the assistant’s voice, turning auditing sessions into natural conversations instead of reading transcripts.",
          timeline: "Aug 2025 – Present",
          whatIDid: [
            "I created a browser-based avatar using a lightweight Hugging Face animation model and chunked audio streaming so reviewers get real-time answers without GPU latency.",
            "I created a deep-thinking trace using adaptive reasoning bursts and transparent logs so engineers always understand why every answer forms.",
            "I created a concurrent retrieval router using doc stores, live web search, and knowledge-graph signals to lift evidence coverage to roughly 80% and spotlight drifting sources early.",
          ],
          improvements:
            "This lets BIM stakeholders watch the agent plan, validate, and respond with sub-second feedback instead of waiting for black-box outputs.",
          techStack: [
            "RAGFlow",
            "ReVIT",
            "AutoReVIST",
            "TypeScript",
            "React",
            "Web Audio API",
            "Hugging Face",
          ],
          domain: "Agentic AI",
          category: "industrial",
          companyUrl: "https://autobimroute.com/",
        },
        {
          name: "StockExpert: Real-Time Trading & Analytics Platform",
          about:
            "I built StockAI Expert so retail investors can stay aligned with real-time market motion. The Angular 17 front end stitches together autosuggest search, modular Highcharts dashboards, and 15-second quote polling so users glide between ticker discovery, watchlist triage, and portfolio health without waiting on reloads. The Express/Node backend fans out to Finnhub and Polygon while persisting positions, balances, and alerts in MongoDB so every surface shares the same truth.",
          timeline: "May 2025 – Aug 2025",
          whatIDid: [
            "I created an Angular 17 single-page cockpit using RxJS autosuggest, modular Highcharts dashboards, and 15-second polling so investors glide between tickers without reloads.",
            "I created a Node/Express fan-out layer using Finnhub and Polygon APIs so every surface reads from a single MongoDB Atlas truth.",
            "I created portfolio workflows using Ngb modal trades, alert timelines, and router deep links so analytics jump out in one click.",
            "I created a session-storage caching loop using hydrated datasets so repeat lookups skip redundant calls and stay sub-second.",
          ],
          improvements:
            "This keeps everyday investors in flow—live analytics surface the moment markets move while the autosuggest and caching layers keep navigation fluid.",
          techStack: [
            "Angular 17",
            "RxJS",
            "Highcharts",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB Atlas",
            "GCP",
            "Finnhub API",
            "Polygon.io",
          ],
          domain: "FinTech",
          githubUrl: "https://github.com/vive12345/StockAIExpert",
          category: "industrial",
          achievements: ["60% faster load times", "30% faster data retrieval"],
        },
        {
          name: "WorkScope – AI Workforce Insights",
          about:
            "I partnered with an operations team to build WorkScope, an internal AI assistant that replaces manual employee monitoring with face detection and real-time productivity tracking.",
          timeline: "Jan 2025 – Apr 2025",
          whatIDid: [
            "I created an AI attendance pipeline using MediaPipe facial presence detection and Spring Boot telemetry so managers see focus metrics in real time.",
            "I created productivity services using REST endpoints that stitch keystroke, application, and screenshot data into timelines the admin UI can trust.",
            "I created a Python inference microservice using lightweight classifiers so focus states sync back to JVM services without lag.",
          ],
          improvements:
            "This delivered privacy-conscious productivity analytics that stay on-prem while giving managers responsive dashboards they can trust.",
          techStack: [
            "MediaPipe",
            "Spring Boot",
            "RESTful APIs",
            "Java",
            "Python",
            "AI/ML",
          ],
          domain: "Workplace AI",
          githubUrl: "https://github.com/vive12345/WorkScope",
          category: "academic/personal",
          achievements: [
            "40% latency reduction across productivity dashboards",
          ],
        },
        {
          name: "RoadSense: Autonomous Vehicle Simulator",
          about:
            "I built RoadSense to stress-test autonomous driving assists by replaying real-world segments and generating curve-aware alerts before a driver enters a risky turn.",
          timeline: "Feb 2025 – Apr 2025",
          whatIDid: [
            "I created a receiver pipeline using nanosecond logging, bounded queues, and custom formatting so simulated drives stay under 1.6 ms of jitter.",
            "I created a segment detector using buffered GPS headings and curve geometry so ADAS runs can reuse dangerous segments on demand.",
            "I created Curve Warning Assist using Swing HMI modules and distance-to-warning math so drivers get multimodal alerts before risky turns.",
          ],
          improvements:
            "This keeps our ADAS research team focused on dangerous segments because playback stays stable and alerts stay actionable even as datasets grow.",
          techStack: [
            "Java",
            "WebSocket",
            "Multithreading",
            "Blocking Queues",
            "Java Swing",
          ],
          domain: "Autonomous Systems",
          githubUrl: "https://github.com/vive12345/RoadSense",
          youtubeUrl: "https://www.youtube.com/watch?v=eILOWdh2HVo",
          category: "academic/personal",
          achievements: [
            "Maintained <1.6 ms latency during high-speed telemetry playback",
          ],
        },
        {
          name: "Poodle Programming Language",
          about:
            "We designed Poodle as a statically typed programming language that blends Python’s ergonomics with the performance mindset of C++, giving classmates a friendlier path into compiler theory.",
          whatIDid: [
            "I created Poodle's grammar parsee using Prolog so developers get static typing with Python-like syntax.",
            "I created semantic safeguards using SWI-Prolog type checks so operator overloading and generics stay predictable.",
          ],
          techStack: [
            "Python",
            "PLY",
            "SWI-Prolog",
            "Lexical Analysis",
            "Parsing",
          ],
          domain: "Programming Languages",
          githubUrl:
            "https://github.com/vive12345/Poodle-The-Programming-Language-",
          youtubeUrl: "https://youtu.be/odOh4-f9qrM",
          category: "academic/personal",
          achievements: [
            "Delivered a full compiler implementation with REPL support",
          ],
        },
        {
          name: "ScrumSim",
          about:
            "I built ScrumSim so instructors can demonstrate Scrum ceremonies, roles, and burndown dynamics inside a responsive Java simulator.",
          whatIDid: [
            "I created ScrumSim's core using strategy and observer patterns so instructors can toggle ceremonies live.",
            "I created the classroom UI using Java Swing timelines, burndown charts, and Gradle automation so progress stays visible.",
            "I created reliability guardrails using JUnit 5 regression suites and GitHub Actions so demos never break between sessions.",
          ],
          improvements:
            "This empowers instructors to demo Scrum anti-patterns interactively while keeping the simulator classroom-ready.",
          techStack: [
            "Java 21",
            "Swing UI",
            "Gradle",
            "JUnit 5",
            "CI/CD",
            "Design Patterns",
          ],
          domain: "EdTech",
          githubUrl: "https://github.com/vive12345/Scrum-Simulator-Project",
          category: "academic/personal",
          articleUrl:
            "https://www.linkedin.com/posts/vipsak_softwareengineering-agileproject-studentsuccess-activity-7251777198045478912-ERhe?utm_source=share&utm_medium=member_desktop&rcm=ACoAACACRswBMSeUs20UnYBBO_AXQYZxq1IDnkI",
          achievements: [
            "85% automated test coverage across simulator workflows",
          ],
        },
        {
          name: "Health Manager System",
          about:
            "I built Health Manager, a digital healthcare coordination system that helps clinics manage vitals, prescriptions, reminders, and chatbot-based triage—eliminating spreadsheet dependencies and manual communication loops.",
          whatIDid: [
            "Developed Flask-based microservices to handle patient vitals, prescriptions, and reminders under unified REST APIs.",
            "Implemented a KNN-driven recommendation engine enhanced by clinician feedback, delivering personalized care suggestions.",
            "Built a Twilio and ChatGPT-powered chatbot for proactive patient reminders and real-time symptom triage.",
          ],
          improvements:
            "Unified care data, automated patient engagement, and showcased how lightweight ML accelerates clinician follow-up during pilot testing.",
          techStack: [
            "Flask",
            "Python",
            "JavaScript",
            "KNN Algorithm",
            "ChatGPT API",
            "Twilio",
          ],
          domain: "Healthcare",
          githubUrl: "https://github.com/vive12345/Health-Manager-system",
          documentationUrl:
            "https://github.com/vive12345/Health-Manager-system/blob/main/CSE_Report_IU1941230181_UDP.pdf",
          articleUrl:
            "https://github.com/vive12345/Health-Manager-system/blob/main/Poster_health_manager_system.pptx",
          category: "academic/personal",
          achievements: [
            "ML-powered recommendations improved adherence for pilot users",
          ],
        },
        {
          name: "Student Dropout Prediction",
          about:
            "I developed a student dropout prediction system to help academic advisors identify at-risk students early, using ensemble machine learning models and explainable dashboards for proactive outreach.",
          whatIDid: [
            "Engineered a balanced training dataset using SMOTE oversampling, outlier removal, and feature scaling for multi-year academic records.",
            "Built ensemble predictors using XGBoost and Random Forest, optimized with cross-validation to maintain accuracy and prevent bias drift.",
            "Created advisor dashboards featuring explainability overlays and weekly review reports for transparent decision-making.",
            "Authored a research paper detailing methodology, feature importance analysis, and ethical considerations for predictive outreach.",
          ],
          improvements:
            "Achieved 92% accuracy in identifying high-risk students across validation cohorts, enabling early academic interventions.",
          techStack: [
            "Python",
            "XGBoost",
            "Random Forest",
            "SMOTE",
            "scikit-learn",
          ],
          domain: "Education Analytics",
          githubUrl:
            "https://github.com/vive12345/Predicting-Student-Dropout-and-Academic-Success-",
          documentationUrl:
            "https://github.com/vive12345/Predicting-Student-Dropout-and-Academic-Success-/blob/main/Report.pdf",
          category: "academic/personal",
          achievements: [
            "92% accuracy identifying high-risk students in validation cohorts",
          ],
        },
        {
          name: "Omeda (Repzone Startup, USA)",
          about:
            "I helped Repzone replace manual route planning by building a data-driven playbook for its field reps in Turkey.",
          timeline: "Feb 2025 – Jun 2025",
          whatIDid: [
            "I created a Flask API endpoint using OpenRouteService so every RFI submission comes back with optimized multi-stop routes.",
            "I created balanced KMeans clustering in Python so every customer is attached to the closest Repzone office without overloading a single team.",
            "I created folium map summaries and JSON schedules so planners can review weekly visits and share them with the wider field team with zero manual cleanup.",
          ],
          improvements:
            "This lets field reps hit balanced schedules with real road network data and gives planners instant visibility into weekly coverage.",
          techStack: [
            "Flask",
            "Python",
            "OpenRouteService",
            "KMeans",
            "Folium",
          ],
          domain: "Field Operations AI",
          category: "industrial",
          companyUrl: "https://repzone.com/aboutus?culture=en",
          achievements: [
            "Cut manual route planning from hours to minutes while balancing workload across offices",
          ],
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: "Github Projects",
      mode: "manual", // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: "stars", // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          "vive12345/ser515-VARNS",
          "vive12345/Poodle-The-Programming-Language-",
          "vive12345/Health-Manager-system",
          "vive12345/Predicting-Student-Dropout-and-Academic-Success-",
          "vive12345/travel_web_app",
          "vive12345/",
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: "My Open Source Project Commits",
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "scikit-learn #30630",
          description:
            "ENHANCE: Improved color distinction in Gradient Boosting Regression for enhanced accessibility",
          link: "https://github.com/scikit-learn/scikit-learn/pull/30630",
        },
        {
          title: "workflows4s #30",
          description:
            "DOCS: Added Airflow comparison documentation to help developers understand framework differences",
          link: "https://github.com/workflows4s/workflows4s/pull/30",
        },
        {
          title: "PostHog #11664",
          description:
            "FIX: Corrected typo in .NET SDK configuration docs improving developer experience",
          link: "https://github.com/PostHog/posthog/pull/11664",
        },
      ],
    },
  },
  journey: {
    title: "My Journey",
    paragraphs: [
      "My curiosity for programming started in childhood when I watched my uncle type commands on a screen that felt like pure magic.",
      "During a summer break in 10th grade, my first computer teacher, Urvi mam, encouraged me to keep going after I solved my first pattern problem on my own.",
      "After finishing high school I chose Computer Science and Engineering, later joined Arizona State University, and earned the Namu Scholarship for their Software Engineering master’s program—turning early interest into lasting passion.",
    ],
  },
  seo: {
    title: "Portfolio of Vipsa Kamani",
    description:
      "Software Engineering student with expertise in scalable applications and clean coding practices and maintained code.",
    imageURL: "",
  },
  social: {
    linkedin: "vipsa-kamani",
    x: "",
    mastodon: "",
    researchGate: "",
    facebook: "",
    instagram: "",
    reddit: "",
    threads: "",
    youtube: "", // example: 'pewdiepie'
    udemy: "",
    dribbble: "",
    behance: "",
    medium: "",
    dev: "",
    stackoverflow: "", // example: '1/jeff-atwood'
    skype: "",
    telegram: "",
    website: "",
    phone: "",
    email: "vipsakamani141100@gmail.com",
  },
  resume: {
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // Languages & Frameworks
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "SQL",
    "React",
    "Node.js",
    "Flask",
    "Spring Boot",

    // Cloud, Data, Infrastructure
    "MongoDB",
    "PostgreSQL",
    "NoSQL",
    "GCP",
    "AWS",
    "Docker",
    "Kubernetes",

    // AI & Tools
    "Hugging Face",
    "Transformers",
    "LLMs",
    "LangChain",
    "scikit-learn",
    "YOLOv8",
    "OpenCV",
    "Git",
    "GitHub",
    "CI/CD",
    "Jest",
    "Postman",
    "Jira",
    "VS Code",
    "Eclipse",
    "PyCharm",
    "Linux",

    // Domains & Practices
    "Generative AI",
    "Retrieval-Augmented Generation",
    "Agentic Workflows",
    "Software Development & Engineering",
    "Machine Learning",
    "Object-Oriented Programming",
  ],
  experiences: [
    {
      company: "Arizona State University",
      position: "IT support & Data Management",
      from: "December 2024",
      to: "Present",
      companyLink: "https://asu.edu",
      description: [
        "Admissions and marketing teams were exporting batches of monthly spreadsheets and manually loading them into Salesforce Campaign, creating long delays, more manual work and possibility of human error. I helped ship a Drupal-to-Salesforce pipeline that now auto-generates program pages and streams RFI submissions through AWS Lambda/SQS without manual uploads.",
        "Automated the hand-off: I created the RFI proxy so each form now shoots clean, Source-ID-ready data into Salesforce instantly, cutting campaign setup from about an hour to roughly 10 seconds and removing the need for batch exports.",
        "Fixed the scholarship tagging mess: I traced the wrong-state issue to outdated Salesforce queries and a deprecated API, updated them, and saved analysts from repairing thousands of records before every monthly batch run.",
        "Accelerated follow-up: I worked with the backend engineer on the Lambda/SQS routing logic so inquiries land with the right department and Source ID, reducing the wait for international student responses from five business days to just one or two.",
      ],
    },
    {
      company: "Rapidise",
      position: "Software Engineer Intern",
      from: "May 2023",
      to: "October 2023",
      companyLink: "https://rapidise.io/",
      description: [
        "Collaborated with a team of 3 engineers to develop an AI-driven workplace productivity monitoring system using MediaPipe for precise facial detection and real-time employee tracking.",
        "Engineered high-performance RESTful APIs with Spring Boot to enable seamless real-time communication between the Java dashboard and Python AI modules, reducing data latency by 40%.",
        "Designed and deployed a microservice to automatically match employee records with live camera inputs, minimizing manual verification efforts.",
        "Implemented and optimized Python-based object detection workflows to enhance tracking accuracy and ensure reliability during client demonstrations.",
      ],
    },
    {
      company: "EzTechStack",
      position: "Software Developer Intern",
      from: "January 2022",
      to: "September 2022",
      companyLink: "https://clutch.co/profile/eztechstack",
      description: [
        "Built a full-stack NGO engagement portal on the MERN stack so volunteers could submit programs, track approvals, and stay informed in one place.",
        "Engineered a full-stack NGO portal using the MERN stack, resulting in a 25% improvement in user submission rates.",
        "Constructed multi-layer security using Joi for input validation, bcrypt.js for encryption, and JWT for authentication.",
        "Implemented scripts for unit, integration, and API testing using Jest and Postman, achieving roughly 90% code coverage.",
      ],
    },
  ],
  educations: [
    {
      institution: "Arizona State University",
      Ilocation: "Tempe, Arizona, USA",
      degree: "M.S. in Software Engineering",
      from: "January 2024",
      to: "December 2025",
      summary: "",
      institutionLink: "https://www.asu.edu",
    },
    {
      institution: "Indus University",
      degree: "B.Tech in Computer Science & Engineering",
      Ilocation: "Ahmedabad, Gujarat, India",
      from: "August 2019",
      to: "May 2023",
      summary: "",
      institutionLink: "https://www.indusuni.ac.in/",
    },
  ],
  certifications: [
    {
      name: "Oracle AI Vector Search Certified Professional",
      organization: "Oracle",
      year: "Oct 2025",
      body: "I learned how to design and tune Oracle AI Vector Search, build vector indexes, and serve semantic search workloads that keep latency predictable for AI assistants.",
      image: "src/assets/Images/genai.png",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      organization: "Oracle",
      year: "Oct 2025",
      body: "I mastered OCI AI foundations—standing up data lakes, wiring model endpoints, and choosing the right managed services so teams can ship responsible AI safely.",
      image: "src/assets/Images/foundAI.png",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      organization: "Oracle",
      year: "Oct 2025",
      body: "I deepened my generative AI skills by fine-tuning foundation models on OCI, managing guardrails, and delivering compliant AI copilots for enterprise workflows.",
      image: "src/assets/Images/genai.png",
    },
  ],
  publications: [
    {
      title: "Dr Ashwin Patani",
      conferenceName: "",
      journalName: "Journal Name",
      authors: "John Doe, Jane Smith",
      link: "https://example.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Publication Title",
      conferenceName: "Conference Name",
      journalName: "",
      authors: "John Doe, Jane Smith",
      link: "https://example.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Dr Ashwin Patani",
      conferenceName: "",
      journalName: "Journal Name",
      authors: "John Doe, Jane Smith",
      link: "https://example.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Publication Title",
      conferenceName: "Conference Name",
      journalName: "",
      authors: "John Doe, Jane Smith",
      link: "https://example.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  testimonials: [
    {
      testimonial:
        "I had the pleasure of working alongside Vipsa during her internship at TEKSUN IoT and AI Solutions. Her sharp analytical mind and deep understanding of AI technologies stood out from day one. Vipsa played a key role in the development and optimization of several machine learning models, consistently delivering high-quality work. Her ability to quickly adapt to complex tools and frameworks made her an invaluable asset to our team. I am confident she will continue to excel in any AI-related role she pursues.",
      name: "Utkarsh Chalsey",
      title:
        "AI Engineer at Teksun Iot and AI Solutions (Subsidiary of Rapidise)",
    },
    {
      testimonial:
        'I have known her as a hardworking student with great abilities for the past two years. I taught her courses on The Internet of Things and Computer organization and Architecture. In the assignment work and practical work on these themes, Vipsa clearly demonstrated her ability to work both independently and in groups with tremendous energy and passion. As part of her Final semester project, she worked under my guidance to create "The Health Manager" using ML algorithms and python technologies. Her project demonstrated her critical thinking abilities as well as the logical reasoning she employed to get the desired results. Moreover, she demonstrated innovative functionality in order to make her project stand out from others.',
      name: "Dr Ashwin Patani",
      title: "Assistant Professor at Indus University",
    },
  ],
  // Add this to your gitprofile.config.ts

  lifeOutsideWork: [
    {
      title: "Fitness & Wellness",
      description:
        "I'm passionate about maintaining a healthy lifestyle through yoga, running, and strength training. Regular exercise helps me stay energized, focused, and balanced both mentally and physically.",
      icon: "FaRunning",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Continuous Learning",
      description:
        "I'm always expanding my knowledge through online courses, books, and podcasts. I believe in lifelong learning and regularly dive into new subjects beyond software engineering.",
      icon: "FaBrain",
      imageUrl:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Music & Creativity",
      description:
        "Playing and listening to music fuels my creativity. I enjoy learning new songs and occasionally performing. Music provides a perfect balance to my technical work.",
      icon: "FaGuitar",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Travel & Exploration",
      description:
        "Exploring new cultures, cuisine, and landscapes is one of my greatest joys. Travel broadens my perspective and inspires creativity in both my personal and professional life.",
      icon: "FaPlane",
      imageUrl:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Reading & Literature",
      description:
        "Books on technology, science fiction, and personal development fill my shelves. Reading widely helps me gain new perspectives and continuously evolve my thinking.",
      icon: "FaBookOpen",
      imageUrl:
        "https://images.unsplash.com/photo-1515592302748-6937af5c5268?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Open Source & Side Projects",
      description:
        "I contribute to open source and develop personal projects to experiment with new technologies. Building things for fun keeps my skills sharp and feeds my curiosity.",
      icon: "FaCode",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Hiking & Nature",
      description:
        "Weekends often find me on mountain trails, disconnecting from technology and reconnecting with nature. The outdoors provides perspective and balance to my tech-focused career.",
      icon: "GiMountainClimbing",
      imageUrl:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Cooking & Culinary Arts",
      description:
        "I love experimenting with recipes from around the world. Cooking is both creative and analytical - much like programming - and sharing meals brings people together.",
      icon: "MdFoodBank",
      imageUrl:
        "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ],
  // Add this to your gitprofile.config.ts

  volunteerWork: [
    {
      title: "Junior ML Engineer",
      organization: "Omeda (Repzone Startup, USA)",
      location: "Remote",
      period: "Feb 2025 - Jun 2025",
      icon: "GiArtificialIntelligence",
      organizationLink: "https://repzone.com/aboutus?culture=en",
      points: [
        "Partnered with a USA startup on Repzone, a five-month project that helps field reps in Turkey plan balanced customer visits using real road network data.",
        "Built a Flask API endpoint that pulls OpenRouteService travel times and returns optimized multi-stop routes for every sales region.",
        "Implemented balanced KMeans clustering in Python so each customer is assigned to the closest Repzone office without overloading any team.",
        "Generated folium map summaries and JSON schedules so planners can review weekly visits and share plans with the wider field team.",
      ],
    },
    {
      title: "Event Coordinator",
      organization: "Indus University SCAI Community",
      location: "Ahmedabad, India",
      period: "Aug 2019 - Jul 2020",
      icon: "FaCalendarCheck",
      organizationLink: "https://www.indusuni.ac.in/",
      points: [
        "Coordinated 50+ annual tech events for the SCAI community, troubleshooting logistics and keeping each session on schedule.",
        "Secured sponsorships and workshops from local partners and national tech brands such as Flipkart.",
        "Collaborated with the college president and a 35+ student crew to book venues, manage budgets, and deliver polished programs.",
      ],
    },
    {
      title: "Social Service Volunteer",
      organization: "Rotaract Club, Indus University",
      location: "Ahmedabad, India",
      period: "Feb 2022 - Jun 2022",
      icon: "FaUsers",
      points: [
        "Led fundraising to provide food, study support, and career coaching for high-school students at a local orphanage.",
        "Organized volunteer-led study sessions and mentorship days to keep students engaged with school goals.",
        "Won the Rotaract speaker series focused on social impact, representing the club’s community work.",
      ],
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: "dev", // medium | dev
    username: "", // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: "", // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "lofi",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ["light", "dark"],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/vive12345"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

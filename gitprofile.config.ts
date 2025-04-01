// gitprofile.config.ts
// import TestimonialCard from './';
const CONFIG = {
  github: {
    username: 'vive12345', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['vive12345/ser515-VARNS', 'vive12345/Poodle-The-Programming-Language-', 'vive12345/Health-Manager-system', 'vive12345/Predicting-Student-Dropout-and-Academic-Success-', 'vive12345/travel_web_app', 'vive12345/'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Open Source Project Commits',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI-Powered Agricultural Assistant',
          description:
            'Open source project using Matplotlib & Seaborn for data analysis of 11 years of Kano State data, providing ML-driven planting recommendations.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '', // Add your project link
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Vipsa Kamani',
    description:
      'Software Engineering student with expertise in scalable applications and clean coding practices and maintained code.',
    imageURL: '',
  },
  social: {
    linkedin: 'vipsa-kamani',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'vipsakamani141100@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'Java',
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Spring Boot',
    'Flask',
    'REST API',
    'JWT',
    'MERN Stack',
    'Docker',
    'Kubernetes',
    'AWS',
    'MongoDB',
    'SQL',
    'Computer Vision',
    'YOLOv7',
    'pandas',
    'Git',
    'CI/CD',
    'JUnit5',
    'JaCoCo',
    'Jest',
    'Enzyme',
    'Swagger UI',
    'Jira',
    'Agile',
],
  experiences: [
    {
      company: 'Arizona State University',
      position: 'IT support & Data Management',
      from: 'December 2024',
      to: 'Present',
      companyLink: 'https://asu.edu',
      description: [
        'Managed IT support tickets and resolved technical issues',
        'Organized and maintained database systems'
      ],
      letterLink: 'https://example.com/offer-letter.pdf',
    },
    {
      company: 'Teksun IoT & AI Solutions',
      position: 'Software Engineer Intern',
      from: 'May 2023',
      to: 'October 2023',
      companyLink: 'https://teksun.com/', 
      description: [
        'Managed IT support tickets and resolved technical issues',
        'Organized and maintained database systems'
      ],
      letterLink: 'https://example.com/offer-letter.pdf',
    },
    {
      company: 'EzTechStack',
      position: 'Software Developer Intern',
      from: 'January 2022',
      to: 'September 2022',
      companyLink: 'https://clutch.co/profile/eztechstack', 
      description: [
        'Managed IT support tickets and resolved technical issues',
        'Organized and maintained database systems'
      ],
      letterLink: 'https://example.com/offer-letter.pdf',
    },
  ],
  educations: [
    {
      institution: 'Arizona State University',
      Ilocation:'Tempe, Arizona, USA',
      degree: 'M.S. in Software Engineering',
      from: '2024',
      to: '2025',
      GPA: '3.56/4.00',
      transcript:'www.google.com',
      relevantCourses: ['dejhbjd', 'bjvv'],
    },
    {
      institution: 'Indus University',
      degree: 'B.Tech in Computer Science & Engineering',
      Ilocation:'Ahmedabad, Gujarat, India',
      from: '2019',
      to: '2023',
      GPA: '3.72/4.00',
      transcript:'https://drive.google.com/file/d/1Fbdo9PxUj8vu7OMeFHeSTqvo86XKHaoa/view?usp=sharing',
      relevantCourses: ['dejhbjd'],
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  testimonials:[
    {
      testimonial: 'Publication Tit11111111le',
      name: 'Journal Name',
      },
    {
      testimonial: 'Publication Title',
      name: 'Journal Name', },
  ],
 // Add this to your gitprofile.config.ts

lifeOutsideWork: [
  {
    title: "Fitness & Wellness",
    description: "I'm passionate about maintaining a healthy lifestyle through yoga, running, and strength training. Regular exercise helps me stay energized, focused, and balanced both mentally and physically.",
    icon: "FaRunning", 
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Continuous Learning",
    description: "I'm always expanding my knowledge through online courses, books, and podcasts. I believe in lifelong learning and regularly dive into new subjects beyond software engineering.",
    icon: "FaBrain",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Music & Creativity",
    description: "Playing and listening to music fuels my creativity. I enjoy learning new songs and occasionally performing. Music provides a perfect balance to my technical work.",
    icon: "FaGuitar",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Travel & Exploration",
    description: "Exploring new cultures, cuisine, and landscapes is one of my greatest joys. Travel broadens my perspective and inspires creativity in both my personal and professional life.",
    icon: "FaPlane",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Reading & Literature",
    description: "Books on technology, science fiction, and personal development fill my shelves. Reading widely helps me gain new perspectives and continuously evolve my thinking.",
    icon: "FaBookOpen",
    imageUrl: "https://images.unsplash.com/photo-1515592302748-6937af5c5268?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Open Source & Side Projects",
    description: "I contribute to open source and develop personal projects to experiment with new technologies. Building things for fun keeps my skills sharp and feeds my curiosity.",
    icon: "FaCode",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Hiking & Nature",
    description: "Weekends often find me on mountain trails, disconnecting from technology and reconnecting with nature. The outdoors provides perspective and balance to my tech-focused career.",
    icon: "GiMountainClimbing",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cooking & Culinary Arts",
    description: "I love experimenting with recipes from around the world. Cooking is both creative and analytical - much like programming - and sharing meals brings people together.",
    icon: "MdFoodBank",
    imageUrl: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
],
  // Add this to your gitprofile.config.ts

volunteerWork: [
  {
    title: "ML Engineer",
    organization: "MOEDA Foundation",
    location: "Remote",
    period: "Jun 2023 - Present",
    description: "Develop machine learning models to support sustainable agricultural practices in developing regions. Created prediction algorithms for crop yields and resource optimization that helped small-scale farmers increase productivity by 15-20% while reducing input costs.",
    icon: "GiArtificialIntelligence",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Event Management Core Member",
    organization: "Rotaract Club",
    location: "University Chapter",
    period: "Jan 2021 - Dec 2022",
    description: "Led a team of 12 volunteers to plan and execute community service events, including fundraisers and educational workshops. Coordinated logistics, managed budgets, and ensured successful event execution with over 95% positive feedback from attendees.",
    icon: "SiRotaryinternational",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Core Committee Member",
    organization: "Rotaract Club",
    location: "District Level",
    period: "Mar 2022 - Present",
    description: "Serve on the district-level committee overseeing 15+ university chapters. Develop strategic initiatives to increase membership, improve community impact, and strengthen relationships with partner organizations. Helped expand club reach by 30%.",
    icon: "FaUsers",
    imageUrl: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  
],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
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

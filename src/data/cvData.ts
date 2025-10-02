import { CVData } from '../types/cv';

export const cvData: CVData = {
  contact: {
    name: "Vitalii Khymynets",
    phone: "+44 74 8 17 6 39 51",
    email: "vtlkand@gmail.com",
    location: "Leeds, UK",
    linkedin: "https://www.linkedin.com/in/vitalii-khymynets-18792375/"
  },
  summary: "A Senior QA Engineer with nearly 5 years of experience, specialising in a wide range of testing disciplines. I combine a customer-centric mindset with deep skills in manual, API, and database testing to develop and maintain robust automated test suites with Playwright and TypeScript. As a passionate advocate for built-in quality, I actively find innovative ways to boost team efficiency, including the use of AI-powered tools to accelerate development cycles. I use my experience in process improvement to deliver secure and scalable solutions that meet business goals at speed.",
  skills: [
    {
      category: "Test Automation",
      items: ["Playwright", "WebdriverIO & Mocha", "TypeScript", "JavaScript", "Page Object Model (POM)", "CI/CD Integration", "ReportPortal"]
    },
    {
      category: "Manual Testing",
      items: ["Test Design & Strategy", "End-to-End Testing", "Functional & Non-Functional Testing", "Exploratory", "Regression", "Acceptance", "Sanity & Smoke Testing", "Defect Management"]
    },
    {
      category: "Database Testing & Cloud",
      items: ["SQL", "DynamoDB", "AWS"]
    },
    {
      category: "API Testing",
      items: ["Postman", "REST API Automation"]
    },
    {
      category: "CI/CD & Tools",
      items: ["Git", "Bitbucket", "Docker", "VS Code", "Cursor", "Playwright MCP", "Honeycomb", "Jira", "Confluence"]
    },
    {
      category: "Methodologies",
      items: ["Agile (Scrum, Kanban)", "Shift-Left", "BDD", "Risk-Based Testing", "Continuous Improvement"]
    }
  ],
  education: [
    {
      institution: "Uzhhorod National University",
      degree: "Master's Degree, Management and Marketing",
      year: "2011"
    },
    {
      institution: "Snyk Learn",
      degree: "OWASP Top 10"
    },
    {
      institution: "AWS Skill Builder",
      degree: "AWS Technical Essentials"
    },
    {
      institution: "Udemy",
      degree: "The Complete SQL Bootcamp"
    }
  ],
  experience: [
    {
      title: "QA Engineer",
      company: "Awesome Technology",
      location: "London",
      period: "January 2021 - Present",
      achievements: [
        "Led the quality strategy for a new platform in a fast-paced, agile environment, successfully balancing rapid time-to-market with evolving quality standards. By championing a 'built-in quality' culture and promoting cross-functional collaboration through paired testing sessions, I equipped engineers with the skills to test their own code effectively, which reduced the traditional QA bottleneck and enabled confident, continuous deployments to production.",
        "To accelerate feature delivery for a new service, I designed and launched an e2e automation framework using Playwright and TypeScript. By implementing the Page Object Model, I created a scalable and easy-to-maintain test suite that provided rapid feedback on new builds, empowering developers to merge code with higher confidence and directly supporting a faster time-to-market.",
        "To mitigate the risks associated with a complex data migration, I designed and executed a multi-layered validation strategy that combined SQL test queries, targeted automation for result verification and reporting, and manual exploratory testing. This proactive approach ensured a high level of confidence in data integrity, driving a seamless and on-time deployment.",
        "To enhance the team's data validation capabilities, I designed and delivered a series of SQL workshops for the QA team. This initiative helped to upskill 4 team members, fostering a more proactive and efficient testing process and embedding a culture of continuous learning and improvement.",
        "Actively participated in Agile ceremonies, including sprint planning, retrospectives, and daily stand-ups, providing quality-focused input on story refinement, acceptance criteria definition, and risk assessment to ensure cross-functional alignment and shared ownership of quality across the development lifecycle."
      ]
    }
  ]
};


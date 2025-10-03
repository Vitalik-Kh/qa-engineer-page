import { CVData } from '../types/cv';

export const cvData: CVData = {
  contact: {
    name: "Vitalii Khymynets",
    phone: "+44 748 176 39 51",
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
};


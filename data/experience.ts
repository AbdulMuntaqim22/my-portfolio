export type ExperienceItem = {
  role: string;
  company: string;
  type?: string;
  period: string;
  description: string[];
  isPrimary?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "SQA Analyst",
    company: "Contour Software",
    type: "Primary Role",
    period: "November 2021 - Present",
    description: [
      "Led end-to-end test automation, performance engineering, and CI/CD integration across core enterprise web applications.",
      "Reduced regression execution time by 50% through scalable automation design and execution strategy.",
      "Architected UI and API automation frameworks using Playwright, TypeScript, C#, and Java with Page Object Model patterns and BDD methodologies.",
      "Automated REST API testing using Playwright TypeScript and integrated execution results into TestRail for requirement traceability and reporting.",
      "Built and optimized CI/CD automation pipelines with GitLab and Azure DevOps, including scheduled daily test runs and faster release feedback loops.",
      "Executed load and performance testing using Artillery to identify bottlenecks and improve system throughput under peak traffic.",
      "Standardized cross-functional defect triage using JIRA and mentored junior QA engineers in automation best practices.",
    ],
    isPrimary: true,
  },
  {
    role: "Senior QA Automation",
    company: "Part Time - Contract",
    type: "Concurrent Contract",
    period: "September 2021 - Present",
    description: [
      "Developed an end-to-end web automation suite using Playwright and TypeScript.",
      "Replaced manual regression workflows for core client modules and improved execution stability across CI builds.",
      "Implemented cross-browser automated testing across Chrome, Firefox, and Safari.",
      "Designed modular Page Object Model test architectures to reduce maintenance overhead and improve reliability.",
    ],
  },
  {
    role: "QA Automation Engineer",
    company: "Part Time - Contract",
    type: "Contract",
    period: "January 2021 - August 2021",
    description: [
      "Built a BDD automation framework using Selenium C# and SpecFlow for complex user journeys in legacy web platforms.",
      "Created maintainable Gherkin feature files aligned with business requirements and acceptance criteria.",
      "Expanded automated regression coverage across critical user flows and reduced manual verification effort before production deployments.",
    ],
  },
];

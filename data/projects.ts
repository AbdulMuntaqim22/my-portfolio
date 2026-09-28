export type Project = {
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  architecture: string[];
  strategy: string[];
  details: string[];
};

export const projects: Project[] = [
  {
    title: "Selenium + C# + SpecFlow BDD Framework",
    shortTitle: "BDD automation framework",
    category: "Legacy web automation",
    description:
      "A modular BDD automation framework designed to automate complex user journeys for legacy web platforms while keeping test code maintainable and aligned to product behavior.",
    technologies: ["Selenium", "C#", "SpecFlow", "Gherkin", "Page Objects"],
    problem:
      "Legacy web flows were difficult to validate consistently because manual checks were slow, repetitive, and vulnerable to regressions during release cycles.",
    solution:
      "Built a behavior-driven test framework that organized workflows into readable scenarios, reusable page objects, and structured test data to improve maintainability and business alignment.",
    architecture: [
      "Feature Files",
      "Step Definitions",
      "Page Objects",
      "Utilities",
      "Application Under Test",
    ],
    strategy: [
      "Separated concerns across feature definitions, UI interaction layers, and shared utilities.",
      "Used Gherkin scenarios to reflect business-readable user journeys.",
      "Created reusable automation components to keep code maintainable as product flows evolved.",
    ],
    details: [
      "Designed maintainable automation around business flows rather than brittle UI selectors alone.",
      "Improved regression coverage across critical legacy workflows before production deployment.",
      "Aligned coverage to acceptance criteria and business requirements.",
    ],
  },
  {
    title: "Playwright Automation Framework",
    shortTitle: "Playwright + TypeScript automation",
    category: "Modern end-to-end automation",
    description:
      "A modern end-to-end automation framework built for UI and API validation with traceable execution reporting and CI/CD integration.",
    technologies: ["Playwright", "TypeScript", "TestRail", "GitLab", "Azure DevOps"],
    problem:
      "The team needed a quicker, more reliable way to automate major user journeys while connecting execution results to requirement traceability and release feedback.",
    solution:
      "Implemented Playwright-based automation for end-to-end workflows and REST API validation, then connected test execution to TestRail and CI/CD pipelines for scheduled runs and release visibility.",
    architecture: [
      "Test runner",
      "Page objects",
      "API client layer",
      "Reporting layer",
      "CI/CD pipeline",
    ],
    strategy: [
      "Used Playwright TypeScript for UI and API automation in a consistent, reusable framework.",
      "Connected runs to TestRail for reporting and requirement traceability.",
      "Scheduled daily execution to reduce release feedback delays and support faster decision-making.",
    ],
    details: [
      "Integrated execution results into TestRail for requirement traceability and reporting.",
      "Used modular Page Object Model patterns to reduce maintenance overhead.",
      "Enabled automated quality feedback inside active CI pipelines.",
    ],
  },
  {
    title: "Salesforce Automation",
    shortTitle: "Salesforce regression coverage",
    category: "Multi-environment workflow validation",
    description:
      "Developed Selenium-based automation for complex Salesforce workflows across multiple environments to improve reliability of critical business user journeys.",
    technologies: ["Selenium", "Java"],
    problem:
      "Critical Salesforce workflows needed trustworthy automation across environments because manual verification was slow and inconsistent for complex business flows.",
    solution:
      "Built Selenium Java automation around essential user journeys, validating application behavior through business-critical flows and reducing repeated manual effort.",
    architecture: [
      "Environment setup",
      "Authentication flow",
      "Business workflow logic",
      "Validation checkpoints",
      "Regression coverage",
    ],
    strategy: [
      "Focused on reliable validation of critical business logic instead of only superficial page checks.",
      "Created maintainable flow-based tests for repeated validation across environments.",
      "Improved confidence in release readiness for business-critical actions.",
    ],
    details: [
      "Handled multi-environment automation for critical workflow validation.",
      "Improved reliability across key business logic paths.",
      "Reduced manual verification effort before deployment.",
    ],
  },
];

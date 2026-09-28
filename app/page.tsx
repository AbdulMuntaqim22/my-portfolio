"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50%", label: "Regression Time Reduction" },
  { value: "3", label: "Primary Automation Languages" },
  { value: "UI + API", label: "Automation Focus" },
];

function InteractiveCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateY = useSpring(useTransform(x, [-1, 1], [-10, 10]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(y, [-1, 1], [10, -10]), {
    stiffness: 180,
    damping: 18,
  });

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        x.set(px * 2 - 1);
        y.set(py * 2 - 1);
        glowX.set(px * 100);
        glowY.set(py * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        glowX.set(50);
        glowY.set(50);
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        aria-hidden="true"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(34,211,238,0.18), rgba(34,211,238,0.03) 18%, transparent 48%)`
          ),
        }}
        className="pointer-events-none absolute inset-0"
      />
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowY = useTransform(scrollYProgress, [0, 0.35], [0, -30]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#06070B] text-slate-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-200">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <motion.div style={{ y: gridY }} className="absolute inset-0">
          <div className="bg-cyber-grid absolute inset-0" />
        </motion.div>
        <div className="scanlines absolute inset-0" />
      </div>

      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none fixed left-1/2 top-10 z-0 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.16),_transparent_58%)] blur-3xl"
      />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-slate-800/80 bg-[#06070B]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/40 bg-slate-950/80 shadow-[0_0_25px_rgba(34,211,238,0.2)] transition group-hover:border-cyan-300">
              <span className="text-sm font-semibold text-cyan-300">AM</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-white">ABDUL</div>
              <div className="text-[9px] uppercase tracking-[0.26em] text-slate-400">MUNTAQIM</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.22em] text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:abdulmuntaqim120@gmail.com"
            className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition hover:border-cyan-300 hover:bg-cyan-500/15"
          >
            Send Email
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-24">
        <section id="hero" className="px-4 pb-20 pt-6 md:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                Senior QA Automation Engineer
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl lg:text-[5rem]">
                Engineering reliable software<br />
                <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-300 bg-clip-text text-transparent">
                  through automation.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                I design scalable test automation frameworks, automate UI and API workflows, and integrate quality into CI/CD pipelines so teams can ship with greater confidence and faster feedback.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:translate-y-[-1px]"
                >
                  View work
                </a>
                <a
                  href="mailto:abdulmuntaqim120@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  Send Email
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <InteractiveCard className="rounded-[28px] border border-slate-800 bg-[#0B0D12]/90 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.38)]">
                <div className="rounded-[22px] border border-slate-800 bg-slate-950/80 p-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.22em] text-slate-500">automation flow</span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-slate-800 bg-[#11141b] p-3">
                        <div className="text-[9px] uppercase tracking-[0.18em] text-slate-500">Code</div>
                        <div className="mt-2 text-sm text-cyan-300">UI</div>
                      </div>
                      <div className="rounded-xl border border-slate-800 bg-[#11141b] p-3">
                        <div className="text-[9px] uppercase tracking-[0.18em] text-slate-500">Flow</div>
                        <div className="mt-2 text-sm text-violet-300">API</div>
                      </div>
                      <div className="rounded-xl border border-slate-800 bg-[#11141b] p-3">
                        <div className="text-[9px] uppercase tracking-[0.18em] text-slate-500">Gate</div>
                        <div className="mt-2 text-sm text-emerald-300">CI/CD</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-[#11141b] p-3">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        <span>Pipeline health</span>
                        <span className="text-cyan-300">Stable</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-[#11141b] p-3">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        <span>Release signal</span>
                        <span className="text-cyan-300">1.4m</span>
                      </div>
                      <div className="flex items-end gap-2">
                        {[42, 52, 48, 62, 58, 75, 80, 93].map((bar, index) => (
                          <div key={index} className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500/40 to-cyan-300/90" style={{ height: `${bar}px` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.26em] text-slate-300">
                About
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                Quality is a delivery system, not a final checkpoint.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  title: "Automation architecture",
                  text: "I focus on scalable frameworks, maintainable abstractions, and resilient workflows so automation supports product delivery instead of slowing it down.",
                },
                {
                  title: "Reliable feedback",
                  text: "Test automation should shorten the feedback loop. I build systems that make regressions visible earlier, help teams act faster, and improve confidence in the release process.",
                },
                {
                  title: "Practical quality engineering",
                  text: "My work combines UI and API validation, CI/CD integration, performance testing, and traceability so quality is part of the workflow from implementation to deployment.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950/65 p-5"
                >
                  <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-cyan-300">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-t border-slate-800/60 bg-slate-950/40 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                Expertise
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                Systems built for confident delivery.
              </h2>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Automation Frameworks",
                  text: "Scalable UI and API automation using Playwright, Selenium, TypeScript, C#, and Java to validate critical workflows with maintainable architecture.",
                  accent: "cyan",
                },
                {
                  title: "Quality Pipelines",
                  text: "CI/CD automation using GitLab and Azure DevOps to support scheduled validation, faster feedback, and release-confidence checks.",
                  accent: "violet",
                },
                {
                  title: "API Quality",
                  text: "REST API validation and traceability integrated with TestRail to connect automated results to business requirements and reporting.",
                  accent: "emerald",
                },
                {
                  title: "Performance Engineering",
                  text: "Load and performance testing using Artillery JS to understand traffic behavior and identify bottlenecks before release risk becomes product risk.",
                  accent: "cyan",
                },
                {
                  title: "Cross-Browser Quality",
                  text: "Automated validation across Chrome, Firefox, and Safari as part of a reliable browser-coverage strategy.",
                  accent: "violet",
                },
                {
                  title: "Quality Collaboration",
                  text: "Defect triage, requirements alignment, UAT support, and mentoring junior QA engineers to strengthen team quality practices.",
                  accent: "emerald",
                },
              ].map((item, index) => (
                <InteractiveCard key={item.title} className="rounded-3xl border border-slate-800 bg-[#0B0D12] p-6">
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border text-base ${
                      item.accent === "cyan"
                        ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                        : item.accent === "violet"
                          ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                          : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-slate-300">
                Experience
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                A career shaped by practical automation engineering.
              </h2>
            </motion.div>

            <div className="relative mx-auto max-w-5xl">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800" />
              <div className="space-y-8">
                {[
                  {
                    role: "SQA Analyst",
                    company: "Contour Software",
                    type: "Primary Role",
                    period: "November 2021 - Present",
                    bullets: [
                      "Led end-to-end test automation, performance engineering, and CI/CD integration across enterprise web applications.",
                      "Reduced regression execution time by 50% through automation framework design and execution optimization.",
                      "Architected UI and API automation frameworks using Playwright, TypeScript, C#, and Java with Page Object Model patterns and BDD methodologies.",
                      "Automated REST API testing using Playwright TypeScript and integrated results into TestRail for requirement traceability and reporting.",
                      "Built and optimized CI/CD automation pipelines using GitLab and Azure DevOps, including scheduled daily test runs and faster release feedback loops.",
                      "Executed load and performance testing using Artillery to identify bottlenecks and improve throughput under peak traffic.",
                      "Standardized cross-functional defect triage using JIRA and mentored junior QA engineers in automation best practices.",
                    ],
                  },
                  {
                    role: "Senior QA Automation",
                    company: "Part Time - Contract",
                    type: "Concurrent Contract",
                    period: "September 2021 - Present",
                    bullets: [
                      "Developed an end-to-end web automation suite using Playwright and TypeScript.",
                      "Replaced manual regression workflows for core client modules and improved execution stability across CI builds.",
                      "Implemented cross-browser automated testing across Chrome, Firefox, and Safari.",
                      "Designed modular Page Object Model architectures to lower maintenance overhead and improve reliability.",
                    ],
                  },
                  {
                    role: "QA Automation Engineer",
                    company: "Part Time - Contract",
                    type: "Contract",
                    period: "January 2021 - August 2021",
                    bullets: [
                      "Built a BDD automation framework using Selenium C# and SpecFlow for complex user journeys in legacy web platforms.",
                      "Created maintainable Gherkin feature files aligned with business requirements and acceptance criteria.",
                      "Expanded automated regression coverage across critical user flows and reduced manual verification effort before production deployments.",
                    ],
                  },
                ].map((item) => (
                  <motion.article
                    key={item.role + item.period}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="relative ml-11 rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                  >
                    <span className="absolute -left-[1.9rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0B0D12] text-[10px] font-semibold text-cyan-300">
                      •
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">{item.type}</div>
                        <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                        <div className="mt-1 text-sm text-slate-400">{item.company}</div>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.period}</div>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-slate-800/60 bg-slate-950/30 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-emerald-300">
                Projects
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                Concrete automation work.
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {[
                {
                  title: "Selenium + C# + SpecFlow BDD Framework",
                  type: "Legacy web automation",
                  description: "A modular BDD automation framework designed to automate complex user journeys for legacy web platforms while keeping the framework maintainable and aligned to business requirements.",
                  technologies: ["Selenium", "C#", "SpecFlow", "Gherkin", "Page Objects"],
                  problem: "Legacy user flows were difficult to validate consistently because manual checks were slow and repeated across releases.",
                  solution: "Built a behavior-driven testing framework with reusable page objects, feature files, and structured utilities to keep UI automation maintainable and business-readable.",
                },
                {
                  title: "Playwright Automation Framework",
                  type: "Modern end-to-end automation",
                  description: "A modern UI and API automation framework designed to support faster release validation, traceability, and CI/CD feedback loops.",
                  technologies: ["Playwright", "TypeScript", "TestRail", "GitLab", "Azure DevOps"],
                  problem: "The team needed faster and more reliable validation for critical user journeys while connecting execution results to reporting and release decisions.",
                  solution: "Implemented automation with Playwright TypeScript and connected execution results to TestRail and CI pipelines for scheduled validation and traceability.",
                },
                {
                  title: "Salesforce Automation",
                  type: "Multi-environment workflow validation",
                  description: "Developed Selenium-based automation for complex Salesforce workflows across multiple environments to improve reliability for critical business logic.",
                  technologies: ["Selenium", "Java"],
                  problem: "Complex business flows across environments needed dependable validation without repeated manual verification overhead.",
                  solution: "Built flow-oriented automated coverage around authentication and business-critical interactions to increase confidence in release readiness.",
                },
              ].map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">{project.type}</div>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-700 bg-[#0C0F13] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-[#0B0D12] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Problem</div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-[#0B0D12] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Solution</div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{project.solution}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="automation" className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                Automation architecture
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">Representative automation architecture.</h2>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-7">
              {[
                { label: "Test cases", note: "Business scenarios and functional requirements" },
                { label: "Test runner", note: "Coordinates execution and retries" },
                { label: "UI", note: "Browser automation for end-to-end validation" },
                { label: "API", note: "Service validations and response assertions" },
                { label: "Page objects", note: "Encapsulate UI interactions and reduce maintenance" },
                { label: "Reporting", note: "Connects results to traceability and release insight" },
                { label: "CI/CD", note: "Runs automation continuously and feeds quality feedback" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-800 bg-[#0B0D12] p-4"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.note}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <div className="mb-4 text-[10px] uppercase tracking-[0.24em] text-cyan-300">Automation principles</div>
                <div className="space-y-5">
                  {[
                    ["01", "Maintainability", "Automation code should be treated with the same engineering discipline as production code."],
                    ["02", "Fast Feedback", "Automation should shorten the feedback loop rather than become another bottleneck."],
                    ["03", "Reliable Execution", "Flaky tests reduce trust in automation and require systematic investigation."],
                    ["04", "Traceability", "Automated execution should connect results to requirements and release validation."],
                    ["05", "Continuous Quality", "Testing should participate throughout the delivery pipeline, not just at the end."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="rounded-2xl border border-slate-800 bg-[#0B0D12] p-4">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">{number}</div>
                      <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <div className="mb-5 text-[10px] uppercase tracking-[0.24em] text-cyan-300">Testing pyramid</div>
                <div className="space-y-3">
                  {[
                    ["UI / E2E", "w-[94%]"],
                    ["API", "w-[78%]"],
                    ["Integration", "w-[62%]"],
                    ["Unit", "w-[46%]"],
                  ].map(([level, width]) => (
                    <div key={level}>
                      <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">{level}</div>
                      <div className="h-10 rounded-xl border border-slate-800 bg-[#0B0D12] p-1">
                        <div className={`h-full rounded-lg bg-gradient-to-r from-cyan-500/60 to-cyan-400 ${width}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Different testing layers serve different purposes. UI automation and API validation support quality at product interfaces, while faster feedback loops help release validation throughout delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
              <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-300">Representative quality pipeline</div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Developer push</div>
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Pipeline trigger</div>
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Build / validation</div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">UI tests</div>
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">API tests</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Test results</div>
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">TestRail reporting</div>
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Quality feedback</div>
                <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Release</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
              <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-300">Performance engineering</div>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-white">Beyond functional testing.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Abdul has used Artillery JS for load and performance testing to understand how applications behave under traffic pressure, identify bottlenecks, and provide engineering feedback before release risk escalates.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Load profile",
                  "Virtual users",
                  "Application under traffic",
                  "Response metrics",
                  "Bottleneck analysis",
                  "Engineering feedback",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0B0D12] px-3 py-2 text-sm text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-300">TestRail integration</div>
                <div className="mt-5 space-y-4 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Automated test run</div>
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Execution result</div>
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">TestRail API</div>
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Requirement traceability</div>
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] p-3">Release reporting</div>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-300">Cross-browser quality</div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  {[
                    "Chrome ✓",
                    "Firefox ✓",
                    "Safari ✓",
                  ].map((browser) => (
                    <span key={browser} className="rounded-full border border-slate-700 bg-[#0B0D12] px-3 py-2 text-slate-200">
                      {browser}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Cross-browser validation is an essential part of product confidence for QA automation work, and Abdul has implemented automated browser coverage across major environments using Playwright.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-slate-300">
                Automation in practice
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">Representative code.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-slate-800 bg-[#0A0D12] p-5">
                <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-cyan-300">Playwright + TypeScript</div>
                <pre className="code-block overflow-x-auto text-[12px] leading-6 text-slate-300">{`test('user completes workflow', async ({ page }) => {
  await page.goto('/checkout');
  await page.locator('[data-testid="pay-btn"]').click();
  await expect(page.locator('.status-badge')).toHaveText('CONFIRMED');
});`}</pre>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-[#0A0D12] p-5">
                <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-cyan-300">Selenium + C#</div>
                <pre className="code-block overflow-x-auto text-[12px] leading-6 text-slate-300">{`[Test]
public void UserCanCompleteWorkflow()
{
    _driver.Navigate().GoToUrl(baseUrl);
    _loginPage.Login("user", "password");
    Assert.That(_checkoutPage.IsConfirmationVisible(), Is.True);
}`}</pre>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-[#0A0D12] p-5">
                <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-cyan-300">Gherkin</div>
                <pre className="code-block overflow-x-auto text-[12px] leading-6 text-slate-300">{`Feature: User workflow

Scenario: User completes a valid workflow
  Given the user is authenticated
  When the user completes the required steps
  Then the expected result is displayed`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-violet-300">
                Education & certifications
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">Education</div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Bachelor of Science in Software Engineering</h3>
                <div className="mt-3 text-sm text-slate-400">Mohammad Ali Jinnah University</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">February 2018 - February 2022</div>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">Certifications</div>
                <div className="mt-4 space-y-4">
                  {[
                    ["ISTQB Certified Tester", "Foundation Level", "ISTQB", "February 2022"],
                    ["Certified Scrum Master", "Scrum Alliance", "Scrum Alliance", "January 2025"],
                  ].map(([title, subtitle, issuer, date]) => (
                    <div key={title} className="rounded-2xl border border-slate-800 bg-[#0B0D12] p-4">
                      <div className="text-lg font-semibold text-white">{title}</div>
                      <div className="mt-2 text-sm text-slate-400">{subtitle} • {issuer}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">{date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800/60 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-slate-800 bg-slate-950/70 p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-300">
                    Contact
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                    Let’s build quality into the next release.
                  </h2>
                </div>

                <div className="space-y-3 text-sm text-slate-300">
                  <a href="mailto:abdulmuntaqim120@gmail.com" className="block rounded-xl border border-slate-800 bg-[#0B0D12] px-4 py-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
                    Email: abdulmuntaqim120@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/abdulmuntaqim/" target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-800 bg-[#0B0D12] px-4 py-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
                    LinkedIn: linkedin.com/in/abdulmuntaqim
                  </a>
                  <div className="rounded-xl border border-slate-800 bg-[#0B0D12] px-4 py-3">
                    Location: Karachi, Sindh, Pakistan
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="/resume/Abdul-Muntaqim-Resume.pdf" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:translate-y-[-1px]">
                  Download Resume
                </a>
                <a href="mailto:abdulmuntaqim120@gmail.com" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 px-4 py-8 text-center text-[10px] uppercase tracking-[0.2em] text-slate-500">
        © 2026 Abdul Muntaqim // quality-first engineering
      </footer>
    </main>
  );
}

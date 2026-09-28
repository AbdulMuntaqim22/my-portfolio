"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const expertise = [
  "C#",
  "TypeScript",
  "Java",
  "Selenium",
  "Playwright",
  "SpecFlow",
  "NUnit",
  "xUnit",
  "MSTest",
  "Artillery JS",
  "GitLab",
  "Azure",
  "Jira",
  "TestRail",
  "CI/CD",
];

const highlights = [
  { value: "4+", label: "Years in QA automation" },
  { value: "50%", label: "Regression cycle reduction" },
  { value: "3", label: "Core automation stacks" },
  { value: "ISTQB", label: "Certified foundation level" },
];

const experiences = [
  {
    role: "SQA Analyst",
    company: "Contour Software",
    period: "Nov 2021 – Present",
    summary:
      "Leading end-to-end test automation, performance engineering, and CI/CD integration for enterprise web applications while mentoring QA engineers and improving release reliability.",
  },
  {
    role: "Senior QA Automation",
    company: "Contract / Freelance",
    period: "Sep 2021 – Present",
    summary:
      "Built Playwright TypeScript suites for key client modules, implemented cross-browser validation, and established modular test architecture for faster maintenance.",
  },
  {
    role: "QA Automation Engineer",
    company: "Contract / Freelance",
    period: "Jan 2021 – Aug 2021",
    summary:
      "Delivered BDD-driven automation using Selenium C# and SpecFlow to cover critical user journeys and reduce manual verification before production release.",
  },
];

const projects = [
  {
    title: "Playwright Automation Framework",
    description:
      "Built a reusable end-to-end automation framework integrated with TestRail API and scheduled CI/CD execution reporting for reliable release validation.",
    stack: ["Playwright", "TypeScript", "TestRail", "GitLab"],
  },
  {
    title: "Selenium with C# & SpecFlow",
    description:
      "Designed a modular BDD test framework separating feature files, page objects, and structured data management to speed up execution and reduce maintenance effort.",
    stack: ["Selenium", "C#", "SpecFlow", "NUnit"],
  },
  {
    title: "Salesforce Automation Suite",
    description:
      "Developed Selenium-based automation for complex Salesforce workflows across environments, improving confidence in key business-critical logic.",
    stack: ["Java", "Selenium", "CI/CD", "Jira"],
  },
];

const qualitySignals = [
  { label: "Coverage", value: "94%", width: "w-[94%]" },
  { label: "Defect prevention", value: "88%", width: "w-[88%]" },
  { label: "Release confidence", value: "96%", width: "w-[96%]" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroGlow = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, -60]);
  const heroCardY = useTransform(scrollYProgress, [0, 0.35], [0, 58]);
  const heroCardOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.72]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ opacity: heroGlow }}
          className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.10),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      </div>

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-500/10 text-sm font-semibold text-cyan-300">
            AM
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-200/80">Portfolio</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
        >
          Let&apos;s Talk
        </a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-12">
        <motion.div
          style={{ y: heroY }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-col justify-center"
        >
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-violet-200">
            Senior QA Automation Engineer
          </span>

          <h1 className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white md:text-7xl">
            Abdul Muntaqim
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
            I build reliable quality systems that help teams ship faster, reduce risk,
            and turn automation into a strategic advantage.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_35px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="#experience"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/80"
            >
              Experience
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-5 text-sm text-slate-300">
            {highlights.map((item) => (
              <div key={item.label} className="min-w-[120px] rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: heroCardY, opacity: heroCardOpacity }}
          className="relative"
        >
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_rgba(14,116,144,0.14)] backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between px-2 pt-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Quality signal</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Release confidence</h2>
              </div>
              <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                Live
              </span>
            </div>

            <div className="rounded-[26px] border border-cyan-400/20 bg-slate-950/80 p-5">
              <div className="relative mx-auto flex h-52 w-52 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 border-t-cyan-300/90 border-r-violet-400/90 border-b-slate-700/70 border-l-slate-700/70" />
                <div className="absolute inset-5 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-500/15" />
                <div className="relative flex flex-col items-center">
                  <span className="text-4xl font-black text-white">94%</span>
                  <span className="mt-2 text-[10px] uppercase tracking-[0.38em] text-slate-400">coverage</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-slate-200">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <div className="text-lg font-bold text-cyan-300">4.2x</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">faster</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <div className="text-lg font-bold text-violet-300">27%</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">slower</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <div className="text-lg font-bold text-emerald-300">1.8h</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">saved</div>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-4 rounded-[24px] border border-slate-800 bg-slate-950/60 p-4">
              {qualitySignals.map((signal) => (
                <div key={signal.label}>
                  <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    <span>{signal.label}</span>
                    <span className="text-slate-200">{signal.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 ${signal.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">Engineering quality into every release.</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 80, x: -18 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[28px] border border-slate-800 bg-slate-900/75 p-8 shadow-[0_25px_75px_rgba(15,23,42,0.38)]"
          >
            <p className="text-lg leading-8 text-slate-300">
              Results-driven Senior QA Automation Engineer with 4+ years of experience
              architecting scalable test automation frameworks and CI/CD pipelines for web
              and mobile applications. I specialize in reducing release risk, cutting regression
              time, and helping product teams deliver with confidence.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              From Playwright and Selenium to TestRail reporting, GitLab pipelines, and
              performance testing with Artillery, I connect automation strategy with real
              business outcomes and team velocity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80, x: 18 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[28px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 shadow-[0_25px_75px_rgba(168,85,247,0.10)]"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">Core impact</p>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /> Cut regression execution time by 50%</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-violet-400" /> Improved release velocity through CI/CD automation</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Standardized defect triage with Jira and GitLab</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-sky-300" /> Mentored junior QA engineers and raised test quality</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-violet-300">Experience</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">Career progression built on delivery and leadership.</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 90, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
              className="rounded-[28px] border border-slate-800 bg-slate-900/75 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.45)] lg:p-8"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xl font-bold text-white">{item.role}</p>
                  <p className="mt-1 text-cyan-300">{item.company}</p>
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
              </div>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">Automation solutions that improve confidence and speed.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 90, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="rounded-[28px] border border-slate-800 bg-slate-900/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.4)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 text-lg font-bold text-cyan-200">
                {project.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/50 p-8 shadow-[0_35px_90px_rgba(124,58,237,0.12)] lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-violet-300">Certifications</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white">Validated expertise.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/75 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">ISTQB</p>
                <p className="mt-3 text-xl font-semibold text-white">Certified Tester</p>
                <p className="mt-2 text-slate-300">Foundation Level</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/75 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Scrum</p>
                <p className="mt-3 text-xl font-semibold text-white">Certified Scrum Master</p>
                <p className="mt-2 text-slate-300">Scrum Alliance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[30px] border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 shadow-[0_35px_90px_rgba(34,211,238,0.08)] lg:p-10"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">Let&apos;s build reliable software together.</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:abdulmuntaqim120@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/abdulmuntaqim/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

import Image from "next/image";

const profile = {
  name: "Asif Liton",
  role: "Senior Software Engineer",
  summary:
    "I build dependable web products with React, TypeScript, and PHP, pairing polished interfaces with pragmatic backend delivery.",
  links: {
    github: "https://github.com/asifliton",
    linkedin: "https://www.linkedin.com/in/aoeasif/",
  },
};

const strengths = [
  {
    label: "7 years",
    value: "Product engineering",
    detail: "Shipping, maintaining, and improving real web systems.",
  },
  {
    label: "React + TS",
    value: "Frontend architecture",
    detail: "Typed UI foundations, component systems, and reliable flows.",
  },
  {
    label: "PHP",
    value: "Full-stack execution",
    detail: "Server-rendered apps, APIs, integrations, and legacy modernization.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["PHP", "REST APIs", "Data modeling", "Auth flows", "Integrations"],
  },
  {
    title: "Engineering Practice",
    items: ["Code review", "Performance", "Accessibility", "Testing", "Vercel deploys"],
  },
];

const workThemes = [
  {
    title: "Typed React Product Interfaces",
    description:
      "Designing maintainable frontends where state, forms, tables, dashboards, and edge cases stay readable as the product grows.",
    stack: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "PHP Platform Development",
    description:
      "Building and improving PHP-backed applications with practical API boundaries, stable release paths, and clear operational ownership.",
    stack: ["PHP", "REST", "SQL"],
  },
  {
    title: "Modernization and Delivery",
    description:
      "Turning older interfaces and workflows into faster, cleaner experiences without losing the business rules that already work.",
    stack: ["Refactoring", "UX", "Deployment"],
  },
];

const timeline = [
  {
    period: "Now",
    title: "Senior Software Engineer",
    detail:
      "Focused on React, TypeScript, PHP, scalable UI architecture, and product-minded delivery.",
  },
  {
    period: "7 years",
    title: "Production Web Engineering",
    detail:
      "Experience across frontend builds, backend features, debugging, maintenance, and launch workflows.",
  },
  {
    period: "Next",
    title: "Portfolio on Vercel",
    detail:
      "A fast static portfolio that can evolve into case studies, writing, and proof of impact.",
  },
];

const workflow = [
  "Clarify the product outcome before choosing the implementation shape.",
  "Make UI states explicit so screens remain predictable under real data.",
  "Use TypeScript to document contracts and prevent avoidable regressions.",
  "Ship in small, reviewable steps with build checks before deployment.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#132018]">
      <section className="border-b border-[#dbe7df] bg-[#f7fbff]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-12">
          <div className="flex flex-col justify-between gap-12">
            <nav
              className="flex flex-col items-start gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"
              aria-label="Primary"
            >
              <a className="font-semibold text-[#132018]" href="#top">
                {profile.name}
              </a>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  className="rounded-md border border-[#9db4a6] px-3 py-2 font-medium text-[#234335] transition hover:border-[#0f766e] hover:text-[#0f766e]"
                  href={profile.links.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  className="rounded-md bg-[#0f766e] px-3 py-2 font-semibold text-white transition hover:bg-[#115e59]"
                  href={profile.links.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </nav>

            <div id="top" className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-md border border-[#9db4a6] bg-white px-3 py-2 text-sm font-semibold text-[#0f766e]">
                React + TypeScript + PHP
              </p>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] text-[#132018] sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-5 text-2xl font-semibold text-[#24483a]">
                {profile.role}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4b6358]">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-md bg-[#132018] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24483a]"
                  href="#work"
                >
                  View work focus
                </a>
                <a
                  className="rounded-md border border-[#9db4a6] bg-white px-5 py-3 text-sm font-semibold text-[#24483a] transition hover:border-[#d6533c] hover:text-[#a43e2d]"
                  href="#contact"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>

          <aside className="grid min-w-0 content-start gap-4 lg:pt-16" aria-label="Profile snapshot">
            <div className="grid min-w-0 gap-4 rounded-[8px] border border-[#dbe7df] bg-white p-5 shadow-sm sm:grid-cols-[148px_1fr]">
              <Image
                alt="Asif Liton profile portrait"
                className="aspect-square rounded-[8px] object-cover"
                height={148}
                priority
                src="https://avatars.githubusercontent.com/u/49468954?v=4"
                width={148}
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#0f766e]">Portfolio signal</p>
                <p className="mt-2 text-2xl font-bold text-[#132018]">
                  Senior engineer for practical web products.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5b7067]">
                  Built to highlight technical judgment, delivery habits, and the stack you work in every day.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-[8px] border border-[#243e33] bg-[#132018] p-5 text-white shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-white/15 pb-3 font-mono text-xs text-[#b9d9d1]">
                <span>profile.ts</span>
                <span>ready</span>
              </div>
              <pre className="max-w-full overflow-hidden whitespace-pre-wrap break-words font-mono text-sm leading-6 text-[#e8f3ef]">
                {`const engineer = {
  focus: ["React", "TypeScript", "PHP"],
  experience: "7 years",
  mode: "clear code, durable systems",
  deployTarget: "Vercel"
};`}
              </pre>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {strengths.map((item) => (
            <article
              className="rounded-[8px] border border-[#dbe7df] bg-[#fbfdfc] p-5"
              key={item.label}
            >
              <p className="text-3xl font-bold text-[#d6533c]">{item.label}</p>
              <h2 className="mt-3 text-lg font-semibold text-[#132018]">{item.value}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5b7067]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dbe7df] bg-[#edf7f3]" id="skills">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-[#0f766e]">Core strengths</p>
            <h2 className="mt-3 text-3xl font-bold text-[#132018] sm:text-4xl">
              A stack that covers the product surface and the system underneath it.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article className="rounded-[8px] border border-[#cce0d7] bg-white p-5" key={group.title}>
                <h3 className="text-xl font-bold text-[#132018]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-md border border-[#dbe7df] bg-[#f7fbff] px-3 py-2 text-sm font-medium text-[#24483a]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="work">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#d6533c]">Representative work</p>
              <h2 className="mt-3 text-3xl font-bold text-[#132018] sm:text-4xl">
                The portfolio should make your engineering judgment easy to trust.
              </h2>
              <p className="mt-4 leading-7 text-[#5b7067]">
                These cards are intentionally written as work themes, so you can later replace them with named case studies when you are ready to publish client or product details.
              </p>
            </div>
            <div className="grid gap-4">
              {workThemes.map((theme) => (
                <article className="rounded-[8px] border border-[#dbe7df] bg-[#fbfdfc] p-5" key={theme.title}>
                  <h3 className="text-xl font-bold text-[#132018]">{theme.title}</h3>
                  <p className="mt-3 leading-7 text-[#5b7067]">{theme.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {theme.stack.map((item) => (
                      <span className="rounded-md bg-[#e8f3ef] px-3 py-2 text-sm font-semibold text-[#0f766e]" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe7df] bg-[#fff7f2]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#a43e2d]">How I work</p>
            <h2 className="mt-3 text-3xl font-bold text-[#132018] sm:text-4xl">
              Calm delivery, clear tradeoffs, and code that future teammates can read.
            </h2>
          </div>
          <ol className="grid gap-3">
            {workflow.map((item, index) => (
              <li className="rounded-[8px] border border-[#ead7ca] bg-white p-4 text-[#43584e]" key={item}>
                <span className="mr-3 font-mono text-sm font-bold text-[#d6533c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-[#0f766e]">Experience shape</p>
            <h2 className="mt-3 text-3xl font-bold text-[#132018] sm:text-4xl">
              Built for a senior engineering narrative.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timeline.map((item) => (
              <article className="rounded-[8px] border border-[#dbe7df] bg-[#fbfdfc] p-5" key={item.title}>
                <p className="font-mono text-sm font-bold text-[#0f766e]">{item.period}</p>
                <h3 className="mt-4 text-xl font-bold text-[#132018]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5b7067]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#132018] text-white" id="contact">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#96d7cc]">Available online</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let the portfolio do the first round of explaining.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#cce0d7]">
              Next step: add real project names, measurable outcomes, and a custom domain after the first Vercel deploy is live.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#132018] transition hover:bg-[#e8f3ef]"
              href={profile.links.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
            <a
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#96d7cc] hover:text-[#96d7cc]"
              href={profile.links.github}
              rel="noreferrer"
              target="_blank"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

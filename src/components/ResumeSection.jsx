function ResumeSection() {
  return (
    <section id="resume" className="bg-slate-100 px-0 py-8">
      <p className="mb-3 text-center text-xs text-slate-500 lg:hidden">
        Swipe horizontally to view full resume.
      </p>

       <div className="w-screen overflow-x-auto px-4">
        <div className="min-h-[11in] w-[8.5in] shrink-0 rounded-sm bg-white px-10 py-12 shadow-xl">
          {/* Header */}
          <header className="grid grid-cols-3 items-start pb-8 text-sm">
            <div>
              <p>New York, NY</p>
              <a href="https://christopherzaman.com" className="text-primary">
                christopherzaman.com
              </a>
              <br />
              <a
                href="https://github.com/christopher-zaman"
                className="text-primary"
              >
                github.com/christopher-zaman
              </a>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-bold tracking-wide text-slate-950">
                Christopher Zaman
              </h2>
            </div>

            <div className="text-right text-primary">
              <a href="mailto:zamanchristopher@gmail.com">
                zamanchristopher@gmail.com
              </a>
              <br />
              <a href="https://linkedin.com/in/christopher-zaman">
                linkedin.com/in/christopher-zaman
              </a>
            </div>
          </header>

          {/* Employment */}
          <ResumeSectionBlock title="Employment">
            <ResumeItem
              left="Data Analyst"
              center="Tri-County Care"
              right="Aug 2025 – Present"
              bullets={[
                "Build SQL and SSRS reports for operational, compliance, and management workflows.",
                "Create parameterized Report Builder reports used by internal stakeholders.",
                "Analyze data quality issues, troubleshoot report logic, and support business reporting needs.",
              ]}
            />

            <ResumeItem
              left="Senior Sourcing Specialist"
              center="Full Stack Solutions"
              right="Jan 2017 – Nov 2022"
              bullets={[
                "Sourced senior software engineers for direct hire roles across firms including Bloomberg, Citadel, Two Sigma.",
                "Built targeted sourcing strategies to identify top technical talent for highly competitive software engineering positions.",
              ]}
            />
          </ResumeSectionBlock>

          {/* Projects */}
          <ResumeSectionBlock title="Projects">
            <ResumeItem
              left="Ultimate Health DPC Website"
              center="React, Tailwind, MongoDB, Vercel"
              right=""
              bullets={[
                "Built a healthcare website with service pages, SEO structure, MongoDB-backed forms, and email notifications.",
              ]}
            />

            <ResumeItem
              left="christopherzaman.com"
              center="React, Tailwind, Node, MongoDB"
              right=""
              bullets={[
                "Personal portfolio website with searchable projects, contact form, and modern responsive UI.",
              ]}
            />
          </ResumeSectionBlock>

          {/* Education */}
          <ResumeSectionBlock title="Education">
            <ResumeItem
              left="New York, NY"
              center="Baruch College, Zicklin School of Business"
              right="Sept 2023 – May 2025"
              bullets={["Master of Science in Data Analytics"]}
            />

            <ResumeItem
              left="New York, NY"
              center="Baruch College, Zicklin School of Business"
              right="Sept 2013 – May 2017"
              bullets={[
                "Bachelor of Business Administration in Computer Information Systems",
              ]}
            />
          </ResumeSectionBlock>

          {/* Skills */}
          <ResumeSectionBlock title="Languages and Technologies">
            <ul className="ml-5 list-disc text-sm leading-6">
              <li>
                <strong>Proficient:</strong> SQL, Report Builder, React,
                Tailwind CSS, JavaScript
              </li>
              <li>
                <strong>Familiar:</strong> MongoDB, Node.js, Vercel, Python,
                Pandas, data visualization
              </li>
            </ul>
          </ResumeSectionBlock>
        </div>
      </div>
    </section>
  );
}

function ResumeSectionBlock({ title, children }) {
  return (
    <section className="mt-5">
      <h3 className="border-b border-slate-900 text-xs font-bold uppercase">
        {title}
      </h3>

      <div className="mt-2 space-y-4">{children}</div>
    </section>
  );
}

function ResumeItem({ left, center, right, bullets }) {
  return (
    <div className="text-sm">
      <div className="relative flex items-center">
        {/* Left */}
        <div className="w-1/4 font-semibold">
          <p>{left}</p>
        </div>

        {/* True center */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center font-semibold">
          <p>{center}</p>
        </div>

        {/* Right */}
        <div className="ml-auto text-right">
          <p className="whitespace-nowrap text-primary">{right}</p>
        </div>
      </div>

      {bullets.length > 0 && (
        <ul className="mt-1 ml-5 list-disc leading-6">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResumeSection;
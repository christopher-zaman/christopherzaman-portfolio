import { useMemo, useState } from "react";

const projects = [
  {
    title: "Ultimate Health DPC",
    category: "Websites",
    stack: ["React", "Tailwind", "MongoDB", "Vercel"],
    description:
      "Healthcare website with service pages, SEO structure, forms, and email notifications.",
    status: "Live",
  },
  {
    title: "SSRS Operations Reports", //sql server reporting services
    category: "SQL",
    stack: ["SQL", "SSRS", "Report Builder"],
    description:
      "Operational reports for tracking compliance, billing, staffing, and management workflows.",
    status: "Internal",
  },
  {
    title: "Portfolio Website",
    category: "React",
    stack: ["React", "Tailwind", "Node", "MongoDB"],
    description:
      "Personal portfolio with searchable projects and a MongoDB-backed contact form.",
    status: "In Progress",
  },
  {
    title: "Python Data Analysis",
    category: "Python",
    stack: ["Python", "Pandas", "Seaborn", "PySpark"],
    description:
      "Data cleaning, analysis, and visualization projects using Python.",
    status: "Preview",
  },
];

const categories = [
  "All",
  "React",
  "Websites",
  "SQL",
  "Python",
  "Data",
  "Visualizations",
];

function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory ||
        project.stack.includes(activeCategory);

      const searchText = `
        ${project.title}
        ${project.category}
        ${project.stack.join(" ")}
        ${project.description}
        ${project.status}
      `.toLowerCase();

      return matchesCategory && searchText.includes(searchTerm.toLowerCase());
    });
  }, [activeCategory, searchTerm]);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white via-blue-50/30 to-slate-50 px-6 py-24 text-slate-900"
    >
      <div className="mx-auto px-5 max-w-6xl">
        <div className="mb-10">
          <p className="text-2xl font-semibold uppercase tracking-widest text-primary">
            Projects
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid min-h-[540px] md:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-slate-200 bg-slate-50 p-6 md:border-b-0 md:border-r">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                Categories
              </p>

              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      activeCategory === category
                        ? "bg-white text-primary shadow-sm"
                        : "text-slate-500 hover:bg-white hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main area */}
            <div className="bg-white">
              <div className="border-b border-slate-200 p-6">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent focus:bg-white"
                />
              </div>

              <div className="p-6">
                <p className="mb-5 text-sm font-semibold text-slate-500">
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                </p>

                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <article
                      key={project.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-bold text-dark">
                              {project.title}
                            </h3>

                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
                              {project.category}
                            </span>
                          </div>

                          <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
                            {project.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                          {project.status}
                        </span>
                      </div>
                    </article>
                  ))}

                  {filteredProjects.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                      <p className="font-semibold text-slate-700">
                        No projects found.
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Try another category or search term.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
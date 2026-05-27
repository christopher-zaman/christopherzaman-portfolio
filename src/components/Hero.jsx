import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative min-h-[45vh]overflow-hidden bg-white">
      {/* Background clouds */}
      <div className="cloud left-0 top-20 h-96 w-96 bg-blue-200" />
      <div className="cloud top-20 right-180 h-89 w-89 bg-gray-100" />
      <div className="cloud right-10 top-40 h-80 w-80 bg-amber-100" />
      <div className="cloud bottom-10 left-1/2 h-72 w-72 bg-emerald-100" />

      {/* Main content */}
      <div className="
          relative
          z-10
          mx-auto
          grid
          min-h-[10vh]
          max-w-6xl
          items-center
          gap-12
          px-5
          py-12
          md:grid-cols-2
          ">
        <div>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-primary">
            Data Analyst · Web Developer
          </h1>
          <p className="font-mono mt-6 text-lg leading-8 text-secondary">
            I build websites, dashboards, reports, and data-driven tools that help
            organizations streamline workflows, improve efficiency, and make better decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
           <Link
            to="/projects"
            className="
              rounded-full
              bg-primary
              px-6
              py-3
              font-semibold
              text-white
              shadow-sm
              hover:bg-blue-800
            "
          >
            View Projects
          </Link>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-primary hover:border-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
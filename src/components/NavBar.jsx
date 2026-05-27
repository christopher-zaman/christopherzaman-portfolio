import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="./" className="text-xl font-bold tracking-tight text-slate-900">
          Christopher Zaman
        </a>

        <div className="hidden items-center gap-8 text-lg font-medium text-slate-700 md:flex">
          <HashLink
            smooth
            to="/#about"
            className="hover:text-primary"
          >
            About
          </HashLink>
         
          <HashLink
            smooth
            to="/#contact"
            className="hover:text-primary"
          >
            Contact
          </HashLink>
          <Link
            to="/resume"
            className="hover:text-primary"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="hover:text-primary"
          >
            Projects
          </Link>
        </div>

        <a
          href="#contact"
          className="button-animation rounded-full px-5 py-2 text-lg font-semibold"
        >
          Let’s Talk
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
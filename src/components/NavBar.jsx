import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-primary"
        >
          Christopher Zaman
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-lg font-medium text-slate-700 md:flex">
          <HashLink smooth to="/#about" className="hover:text-primary">
            About
          </HashLink>

          <HashLink smooth to="/#contact" className="hover:text-primary">
            Contact
          </HashLink>

          <Link to="/resume" className="hover:text-primary">
            Resume
          </Link>

          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
            <HashLink
              smooth
              to="/#about"
              onClick={closeMenu}
              className="hover:text-primary"
            >
              About
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              onClick={closeMenu}
              className="hover:text-primary"
            >
              Contact
            </HashLink>

            <Link
              to="/resume"
              onClick={closeMenu}
              className="hover:text-primary"
            >
              Resume
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="hover:text-primary"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

function ResumeLinks() {
  return (
    <aside className="
sticky
top-0
m-5
self-start
hidden
flex-col
gap-3
rounded-2xl
bg-white
p-3
shadow-lg
ring-1
ring-slate-200
lg:flex
">
      <a
        href="https://github.com/christopher-zaman"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-fuchsia-700 transition hover:text-primary"
      >
        <FaGithub size={34} />
      </a>

      <a
        href="https://www.linkedin.com/in/christopher-zaman"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-blue-700 transition hover:text-primary"
      >
        <FaLinkedin size={34} />
      </a>

      <a
        href="https://leetcode.com/u/christopher-zaman/"
        target="_blank"
        rel="noreferrer"
        className="text-accent transition hover:text-primary"
      >
        <SiLeetcode size={32} />
      </a>

      <a
        href="/Christopher-Zaman-Resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="Resume PDF"
        className="text-red-700 transition hover:text-primary"
      >
        <HiDocumentText size={36} />
      </a>
    </aside>
  );
}

export default ResumeLinks;
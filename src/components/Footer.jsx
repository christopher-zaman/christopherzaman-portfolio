function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">Christopher Zaman</p>
          <p className="mt-1 text-sm text-slate-500">
            Data Analyst & Web Developer
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-600">
          <a href="mailto:zamanchristopher@gmail.com" className="hover:text-sky-800">
            Email
          </a>
          <a href="https://github.com/christopher-zaman" className="hover:text-sky-800">
            GitHub
          </a>
          <a href="https://www.linkedin.com/christopher-zaman" className="hover:text-sky-800">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import NavBar from "../components/NavBar";
import ResumeSection from "../components/ResumeSection";
import ResumeLinks from "../components/ResumeLinks";

function Resume() {
  return (
    <>
      <NavBar />

      <main className="bg-slate-100 px-6 pt-20">
        <div className="mx-auto flex max-w-6xl items-start justify-center gap-8">
        {/* Main content */}
          <div className="flex-1">
            <ResumeSection />

            {/* Mobile links under resume */}
            <ResumeLinks mobile />
          </div>

          {/* Desktop floating links */}
          <ResumeLinks />
        </div>
      </main>
    </>
  );
}

export default Resume;
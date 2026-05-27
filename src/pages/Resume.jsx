import Navbar from "../components/Navbar";
import ResumeSection from "../components/ResumeSection";
import ResumeLinks from "../components/ResumeLinks";

function Resume() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-100 px-6">
        <div className="mx-auto flex max-w-6xl items-start justify-center gap-8">
        <ResumeSection />
        <ResumeLinks />
        </div>
      </main>
    </>
  );
}

export default Resume;
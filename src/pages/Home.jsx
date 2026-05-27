import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/50text-slate-900">
      <Navbar />
      <main>
      <Hero />
      <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-0">
        <p className="text-2xl font-semibold uppercase tracking-widest text-primary">
          About Me
        </p>
        <p className="font-mono mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I’m Christopher Zaman, a data analyst and web developer with
          experience in SQL, React, Tailwind CSS, MongoDB, and full-stack
          web projects.
        </p>
      </section>
      </main>
      <ContactSection />
      <Footer />
    </div>
    </>
  );
}
export default Home;
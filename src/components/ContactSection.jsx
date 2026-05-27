import { useState } from "react";

function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  setStatus("Sending...");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus(result.message || "Something went wrong. Please try again.");
      return;
    }

    setStatus("✓ Message sent successfully. I’ll get back to you soon.");

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setStatus("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl md:grid-cols-2">
        {/* Left panel */}
        <div className="bg-primary p-10 text-white md:p-14">
          <p className="text-lg font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let’s build something useful.
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Have a website, dashboard, report, or data project in mind? Send me
            a message and I’ll get back to you.
          </p>

          <ul className="mt-8 space-y-4 text-emerald-100">
            <li>✓ React, Tailwind, and full-stack websites</li>
            <li>✓ SQL, dashboards, and reporting</li>
            <li>✓ MongoDB-backed forms and email notifications</li>
          </ul>
        </div>

        {/* Right form panel */}
        <div className="bg-slate-50 p-6 md:p-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="contact-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="contact-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                name="company"
                type="text"
                placeholder="Company"
                className="contact-input"
                value={formData.company}
                onChange={handleChange}
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="contact-input resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="demo-button text-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="
                  rounded-lg
                bg-emerald-50
                  px-4
                  py-2
                  text-sm
                text-emerald-700">{status}
              </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
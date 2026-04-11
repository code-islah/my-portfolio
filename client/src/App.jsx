import { useMemo, useState } from "react";
import axios from "axios";

const rankStats = [
  { label: "Email", value: "alamin.coder284@gmail.com" },
  { label: "Location", value: "Bangladesh" },
  { label: "Birthday", value: "January 5, 1997" },
  { label: "Freelance", value: "Available" }
];

const stackRanks = [
  { stack: "Frontend", rank: "Advanced", progress: 86 },
  { stack: "Backend", rank: "Advanced", progress: 82 },
  { stack: "Tools & Others", rank: "Intermediate", progress: 74 },
  { stack: "MERN Stack", rank: "Specialized", progress: 88 }
];

const projects = [
  {
    title: "Al Quran",
    description:
      "A Quran app with 114 chapters, 6236 verses, audio, bookmarks, and last-read tracking.",
    tech: "React, Node.js, MongoDB, Stripe",
    difficulty: "Featured",
    image: "/project-images/alQuran.png",
    liveUrl: "https://quranmajid.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Al-Quran"
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with cart, payments, and admin dashboard.",
    tech: "React, Node.js, MongoDB, Express",
    difficulty: "Featured",
    image: "/project-images/tazkiya-store.png",
    liveUrl: "https://tazkiya-store.vercel.app/",
    sourceUrl: "https://github.com/code-islah/tazkiya-store"
  },
  {
    title: "Inventory Management",
    description:
      "Agam-Hisab is a lightweight web app designed to help small business owners manage daily accounts on the go. It works fully offline using the browser's built-in IndexedDB, so your data stays on your device and under your control.",
    tech: "Vue.js, Express, Socket.io, Tailwind",
    difficulty: "Featured",
    image: "/project-images/agamHisab.png",
    liveUrl: "https://agamhisab.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Agam-Hisab"
  },
  {
    title: "Learning Platform - Code Islah",
    description:
      "A modern web-based learning platform designed to provide structured educational content, helping users learn and explore various topics in an organized and interactive way.",
    tech: "HTML, CSS, JavaScript",
    difficulty: "Featured",
    image: "/project-images/codeIslah.png",
    liveUrl: "https://codeislah.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Code-Islah-Official-Website"
  },
  {
    title: "Learning Platform - Code Islah",
    description:
      "A modern web-based learning platform designed to provide structured educational content, helping users learn and explore various topics in an organized and interactive way.",
    tech: "HTML, CSS, JavaScript",
    difficulty: "Featured",
    image: "/project-images/codeIslah.png",
    liveUrl: "https://codeislah.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Code-Islah-Official-Website"
  },
  {
    title: "Social Media - Bayan-Connector",
    description:
      "A modern full-stack social media web application built with React, Node.js, Express, MongoDB, and Socket.IO.",
    tech: "React.js, Express, Socket.io, Tailwind",
    difficulty: "Featured",
    image: "/project-images/bayanConnector.png",
    liveUrl: "https://bayan-connector.vercel.app/",
    sourceUrl: "https://github.com/code-islah/bayan-connector"
  }
];

const activities = [
  "Full-Stack MERN Developer Building Scalable Web Applications.",
  "I create fast, secure, and user-friendly eCommerce and business applications that help companies grow and operate efficiently.",
  "I'm currently available for freelance work or full-time positions.",
  "Feel free to reach out if you have any questions or just want to say hi."
];

const experiences = [
  {
    company: "About Me",
    role: "I'm a Developer passionate about creating amazing digital experiences",
    period: "Profile",
    detail:
      "I'm a self-taught full-stack developer specializing in the MERN stack. I focus on building real-world applications that solve business problems and deliver smooth user experiences."
  },
  {
    company: "About Me",
    role: "Product-Focused Engineering",
    period: "Mindset",
    detail:
      "I enjoy working on scalable systems, improving performance, and turning ideas into production-ready products."
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await axios.post(`${apiBaseUrl}/api/contact`, formData);
      setFeedback({
        type: "success",
        message: response.data.message || "Thank you for your message! I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.response?.data?.message ||
          "Could not send message right now. Please try again."
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#home">
            <span className="brand-mark">[]</span>
            <span>Md Alamin - Portfolio</span>
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#experience">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="dojo-layout">
        <section id="home" className="hero section panel dojo-hero">
          <div>
            <p className="eyebrow">PROFILE OVERVIEW</p>
            <h1>Hi, I'm Md Alamin</h1>
            <p className="hero-text">
              Full-Stack MERN Developer Building Scalable Web Applications.
            </p>
            <p className="hero-text">
              I create fast, secure, and user-friendly eCommerce and business
              applications that help companies grow and operate efficiently.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Project
              </a>
            </div>
          </div>
          <div className="hero-feed">
            <p className="eyebrow">LET'S TALK</p>
            <ul>
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="dojo-sidebar reveal">
          <div className="profile-head">
            <img
              className="avatar-photo"
              src="/project-images/dp.jpg"
              alt="Md Alamin profile"
              loading="eager"
            />
            <div>
              <p className="eyebrow">PROFILE</p>
              <h2>Md Alamin</h2>
              <p className="muted">Full-Stack MERN Developer</p>
            </div>
          </div>

          <div className="stat-grid">
            {rankStats.map((stat) => (
              <article key={stat.label}>
                <p>{stat.label}</p>
                <h3>{stat.value}</h3>
              </article>
            ))}
          </div>

          <div className="rank-panel">
            <p className="eyebrow">My Skills</p>
            {stackRanks.map((item) => (
              <div key={item.stack} className="rank-row">
                <div className="rank-meta">
                  <span>{item.stack}</span>
                  <span>{item.rank}</span>
                </div>
                <div className="rank-bar">
                  <span style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="content-stream">
          <section id="projects" className="section">
            <div className="section-heading">
              <p className="eyebrow">MY PROJECTS</p>
              <h2>Selected Work</h2>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article key={`${project.title}-${index}`} className="project-card reveal">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <span>{project.difficulty}</span>
                  </div>
                  <p>{project.description}</p>
                  <span>{project.tech}</span>
                  <div className="project-actions">
                    <a
                      className="btn btn-primary project-btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                    <a
                      className="btn btn-outline project-btn"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <div className="section-heading">
              <p className="eyebrow">ABOUT ME</p>
              <h2>Who I Am</h2>
            </div>
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item reveal" key={experience.role}>
                  <h3>{experience.role}</h3>
                  <p className="meta">
                    {experience.company} | {experience.period}
                  </p>
                  <p>{experience.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section contact">
            <div className="section-heading">
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>Send Message</h2>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn btn-primary" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {feedback.message && (
                <p className={`feedback ${feedback.type}`}>{feedback.message}</p>
              )}
            </form>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Md Alamin. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/alamin-coder284" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alamin284/" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://www.fiverr.com/s/1qyLby6" aria-label="Fiverr">
            Fiverr
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

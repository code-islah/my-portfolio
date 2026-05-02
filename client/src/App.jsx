import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { postAnalyticsEvent } from "./utils/analytics";

const rankStats = [
  { label: "Email", value: "alamin.coder284@gmail.com" },
  { label: "Location", value: "Bangladesh" },
  { label: "Birthday", value: "January 5, 1997" },
  { label: "Freelance", value: "Available" }
];

const skillTracks = [
  {
    stack: "Frontend",
    rank: "Advanced",
    signal: "Production UI",
    tools: ["React", "Responsive CSS", "State UX"]
  },
  {
    stack: "Backend",
    rank: "Advanced",
    signal: "API Ownership",
    tools: ["Node", "Express", "MongoDB"]
  },
  {
    stack: "Product Flow",
    rank: "Specialized",
    signal: "MERN Delivery",
    tools: ["Auth", "Dashboards", "Checkout"]
  },
  {
    stack: "Deployment",
    rank: "Practiced",
    signal: "Ship Ready",
    tools: ["Vercel", "Netlify", "Render"]
  }
];

const projects = [
  {
    title: "Al Quran",
    description:
      "A Quran app with 114 chapters, 6236 verses, audio, bookmarks, and last-read tracking.",
    tech: "Vanilla HTML, CSS, JS",
    difficulty: "Featured",
    image: "/project-images/alQuran.png",
    liveUrl: "https://quranmajid.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Al-Quran",
    caseStudy: {
      role: "Frontend Developer",
      challenge:
        "Users needed a simple Quran experience with fast navigation, audio access, and consistent reading continuity.",
      solution:
        "Built a chapter/verse browsing flow with bookmark and last-read persistence to reduce friction between sessions.",
      impact:
        "Delivered a lightweight reader that is easier to return to daily and simpler to navigate across all 114 chapters."
    }
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with cart, payments, and admin dashboard.",
    tech: "React, Node.js, MongoDB, Express",
    difficulty: "Featured",
    image: "/project-images/tazkiya-store.png",
    liveUrl: "https://tazkiya-store.vercel.app/",
    sourceUrl: "https://github.com/code-islah/tazkiya-store",
    caseStudy: {
      role: "Full Stack MERN Developer",
      challenge:
        "The business required an end-to-end store setup that could manage product catalog, checkout reliability, and admin operations.",
      solution:
        "Implemented modular product management, secure checkout flow, and admin-ready dashboard patterns in a unified architecture.",
      impact:
        "Created a production-ready commerce foundation that supports both customer conversion flow and internal operations."
    }
  },
  {
    title: "Inventory Management",
    description:
      "Agam-Hisab is a lightweight web app designed to help small business owners manage daily accounts on the go. It works fully offline using the browser's built-in IndexedDB, so your data stays on your device and under your control.",
    tech: "Vanilla CSS, JS, IndexedDB",
    difficulty: "Featured",
    image: "/project-images/agamHisab.png",
    liveUrl: "https://agamhisab.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Agam-Hisab",
    caseStudy: {
      role: "Frontend and Product Engineer",
      challenge:
        "Small business users needed account tracking that works even with unstable internet and no dependency on cloud login.",
      solution:
        "Used IndexedDB-first architecture and lightweight UI interactions for true offline bookkeeping on low-resource devices.",
      impact:
        "Enabled uninterrupted day-to-day account tracking with local-first reliability and low operational complexity."
    }
  },
  {
    title: "Learning Platform - Code Islah",
    description:
      "A modern web-based learning platform designed to provide structured educational content, helping users learn and explore various topics in an organized and interactive way.",
    tech: "HTML, CSS, JavaScript",
    difficulty: "Featured",
    image: "/project-images/codeIslah.png",
    liveUrl: "https://codeislah.netlify.app/",
    sourceUrl: "https://github.com/code-islah/Code-Islah-Official-Website",
    caseStudy: {
      role: "Frontend Developer",
      challenge:
        "Learners needed structured educational flow instead of scattered static pages.",
      solution:
        "Organized content into clear sections and interaction patterns to make progression intuitive and discoverable.",
      impact:
        "Improved content discoverability and created a more guided learning journey for new users."
    }
  },
  {
    title: "Resume Analyzer - with AI",
    description:
      "AI Resume Analyzer helps job seekers quickly evaluate how well their resume matches a target role. Instead of manually reviewing formatting, wording, and keyword relevance, users can upload their resume and get an immediate AI-generated breakdown.",
    tech: "Next.js, React.js, Gemini AI, TailwindCSS & W3Schools",
    difficulty: "Featured",
    image: "/project-images/ai-res-anaz.png",
    liveUrl: "https://resume-analyzer284.vercel.app/",
    sourceUrl: "https://github.com/alamin-coder284/ai-resume-analyzer.git",
    caseStudy: {
      role: "AI Product Builder",
      challenge:
        "Job seekers needed actionable resume feedback quickly, without long manual review loops.",
      solution:
        "Integrated AI-assisted evaluation pipeline to score role-fit signals and return immediate guidance.",
      impact:
        "Reduced resume feedback turnaround from hours to near-instant and improved iteration speed for applicants."
    }
  },
  {
    title: "Social Media - Bayan-Connector",
    description:
      "A modern full-stack social media web application built with React, Node.js, Express, MongoDB, and Socket.IO.",
    tech: "React.js, Express, Socket.io, Tailwind",
    difficulty: "Featured",
    image: "/project-images/bayanConnector.png",
    liveUrl: "https://bayan-connector.vercel.app/",
    sourceUrl: "https://github.com/code-islah/bayan-connector",
    caseStudy: {
      role: "Full Stack Developer",
      challenge:
        "Social product behavior required responsive UI, persistent data, and low-latency interaction patterns.",
      solution:
        "Combined React UI architecture with real-time channel updates and scalable REST/service patterns.",
      impact:
        "Delivered an interactive social platform prototype with strong baseline for engagement-focused features."
    }
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

const proofSignals = [
  "50+ deployed features across client and personal products",
  "End-to-end MERN ownership from UI to API to database",
  "Production shipping experience with Netlify, Vercel, and Render",
  "Reusable component and API patterns for faster delivery"
];

const testimonials = [
  {
    quote:
      "Alamin delivered with speed and professionalism. Communication was clear, and every milestone was completed on time.",
    by: "Client Feedback",
    role: "Small Business Founder"
  },
  {
    quote:
      "Strong implementation quality and thoughtful frontend/backend decisions. Very dependable during iterative changes.",
    by: "Project Partner",
    role: "Product Collaborator"
  }
];

const certifications = [
  "MERN Stack Practice Projects",
  "JavaScript and Modern Frontend Workflow",
  "REST API and Backend Fundamentals"
];

const clientLogos = ["Startup Teams", "Small Businesses", "Education Initiatives", "Personal Brands"];

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Proof", target: "proof" },
  { label: "Contact", target: "contact" }
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [isValid, setIsValid] = useState(false);

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_BASE_URL || "https://my-portfolio-nmz0.onrender.com",
    []
  );

  const track = (event, meta = {}) => {
    postAnalyticsEvent(apiBaseUrl, { event, meta });
  };

  useEffect(() => {
    const animatedNodes = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      animatedNodes.forEach((node) => node.classList.add("in-view"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    animatedNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const seen = new Set();

    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            track("section_view", { section: entry.target.id });
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [apiBaseUrl]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFeedback({ type: "", message: "" });

    track("contact_submit_attempt", { source: "contact_form" });

    try {
      const response = await axios.post(`${apiBaseUrl}/api/contact`, formData);
      setFeedback({
        type: "success",
        message: response.data.message || "Thank you for your message! I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
      track("contact_submit_success", { source: "contact_form" });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.response?.data?.message ||
          "Could not send message right now. Please try again."
      });
      track("contact_submit_error", {
        source: "contact_form",
        reason: error.response?.status || "unknown"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={() => track("nav_click", { target: "home" })}>
            <span className="brand-mark">M</span>
            <span>Md Alamin</span>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={() => track("nav_click", { target: item.target })}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="dojo-layout">
        <section id="home" className="hero section panel dojo-hero reveal">
          <div>
            <p className="eyebrow">Interactive portfolio</p>
            <h1>Hi, I'm Md Alamin</h1>
            <p className="hero-text">
              Full-Stack MERN Developer Building Scalable Web Applications.
            </p>
            <p className="hero-text">
              I create fast, secure, and user-friendly eCommerce and business
              applications that help companies grow and operate efficiently.
            </p>
            <div className="hero-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => track("cta_click", { action: "contact" })}
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="btn btn-outline"
                onClick={() => track("cta_click", { action: "view_projects" })}
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-feed" aria-label="Developer activity preview">
            <div className="feed-topbar">
              <span />
              <span />
              <span />
              <p>profile.jsx</p>
            </div>
            <p className="eyebrow">Live notes</p>
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
              decoding="async"
            />
            <div>
              <p className="eyebrow">PROFILE</p>
              <h2>Md Alamin</h2>
              <p className="muted">Full-Stack MERN Developer</p>
            </div>
          </div>

          <div className="stat-grid">
            {rankStats.map((stat, index) => (
              <article key={stat.label} style={{ "--reveal-index": index }}>
                <p>{stat.label}</p>
                <h3>{stat.value}</h3>
              </article>
            ))}
          </div>

          <div className="rank-panel">
            <p className="eyebrow">Capability Map</p>
            {skillTracks.map((item, index) => (
              <div key={item.stack} className="rank-row" style={{ "--reveal-index": index }}>
                <div className="rank-meta">
                  <span>{item.stack}</span>
                  <span>{item.rank}</span>
                </div>
                <div className="skill-signal">
                  <strong>{item.signal}</strong>
                  <div className="tool-chips" aria-label={`${item.stack} tools`}>
                    {item.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="content-stream">
          <section id="availability" className="section availability reveal">
            <div className="availability-card">
              <div>
                <p className="eyebrow">AVAILABILITY</p>
                <h2>Open to Full-time Roles and Freelance Projects</h2>
                <p className="meta-line">
                  Typical response time: within 24 hours / Preferred roles: MERN Developer, Full Stack Engineer
                </p>
              </div>
              <div className="availability-actions">
                <a
                  className="btn btn-primary"
                  href="/resume.pdf"
                  download
                  onClick={() => track("resume_download", { source: "availability" })}
                >
                  Download Resume
                </a>
                <a
                  className="btn btn-outline"
                  href="mailto:alamin.coder284@gmail.com"
                  onClick={() => track("email_click", { source: "availability" })}
                >
                  Email Directly
                </a>
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <div className="section-heading reveal">
              <p className="eyebrow">MY PROJECTS</p>
              <h2>Selected Work</h2>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="project-card reveal"
                  style={{ "--reveal-index": index }}
                >
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <span>{project.difficulty}</span>
                  </div>
                  <p>{project.description}</p>
                  <span>{project.tech}</span>
                  <details className="case-study">
                    <summary>Case Study</summary>
                    <p>
                      <strong>Role:</strong> {project.caseStudy.role}
                    </p>
                    <p>
                      <strong>Challenge:</strong> {project.caseStudy.challenge}
                    </p>
                    <p>
                      <strong>Solution:</strong> {project.caseStudy.solution}
                    </p>
                    <p>
                      <strong>Outcome:</strong> {project.caseStudy.impact}
                    </p>
                  </details>
                  <div className="project-actions">
                    <a
                      className="btn btn-primary project-btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => track("project_live_click", { project: project.title })}
                    >
                      Live
                    </a>
                    <a
                      className="btn btn-outline project-btn"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => track("project_source_click", { project: project.title })}
                    >
                      Source
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {isValid && <section id="proof" className="section proof-section">
            <div className="section-heading reveal">
              <p className="eyebrow">PROOF SIGNALS</p>
              <h2>Trust and Delivery Evidence</h2>
            </div>

            <div className="proof-grid">
              <article className="proof-card reveal">
                <h3>Execution Signals</h3>
                <ul>
                  {proofSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </article>

              <article className="proof-card reveal" style={{ "--reveal-index": 1 }}>
                <h3>Testimonials</h3>
                {testimonials.map((item) => (
                  <blockquote key={item.quote}>
                    <p>{item.quote}</p>
                    <cite>
                      {item.by} | {item.role}
                    </cite>
                  </blockquote>
                ))}
              </article>

              <article className="proof-card reveal" style={{ "--reveal-index": 2 }}>
                <h3>Certifications and Learning</h3>
                <ul>
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </article>

              <article className="proof-card reveal" style={{ "--reveal-index": 3 }}>
                <h3>Client and Collaboration Types</h3>
                <div className="logo-cloud" role="list" aria-label="Client collaboration types">
                  {clientLogos.map((logo) => (
                    <span key={logo} role="listitem">
                      {logo}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </section>}

          <section id="experience" className="section">
            <div className="section-heading reveal">
              <p className="eyebrow">ABOUT ME</p>
              <h2>Who I Am</h2>
            </div>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <article
                  className="timeline-item reveal"
                  key={experience.role}
                  style={{ "--reveal-index": index }}
                >
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
            <div className="section-heading reveal">
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

              <div className="contact-quick-links">
                <a href="mailto:alamin.coder284@gmail.com">Email</a>
                <a href="https://wa.me/8801714994157" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>

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

      <footer className="site-footer reveal">
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


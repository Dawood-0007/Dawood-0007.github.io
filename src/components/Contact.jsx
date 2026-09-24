import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(profile.contactFormAction, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-index">04 · Contact</p>
            <h2 className="section-title">Let&rsquo;s work together</h2>
          </div>
          <p className="section-sub">
            Open to collaborations, internships, and interesting problems.
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <Github size={18} />
              </span>
              <span>
                <strong>GitHub</strong>
                <small>github.com/Dawood-0007</small>
              </span>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <Linkedin size={18} />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <small>in/dawood-khatri</small>
              </span>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="contact-form-icon">
              <Mail size={18} />
            </div>
            <h3>Quick contact</h3>
            <p>Leave your email and I&rsquo;ll reach out.</p>
            <div className="contact-form-row">
              <label htmlFor="contact-email" className="visually-hidden">
                Your email address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
            <p className="contact-form-status" role="status">
              {status === "sent" && "Thanks, I’ll get back to you soon."}
              {status === "error" &&
                "Something went wrong. Please try again."}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

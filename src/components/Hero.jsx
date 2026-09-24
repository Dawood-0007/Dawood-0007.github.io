import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio.js";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="hero-eyebrow">
            <span className="hero-dot" aria-hidden="true" />
            Available for opportunities
          </motion.p>

          <motion.h1 variants={item} className="hero-title">
            Hi, I&rsquo;m {profile.name}
            <br />
            <span className="hero-title-role">{profile.role}</span>
          </motion.h1>

          <motion.p variants={item} className="hero-desc">
            {profile.tagline}. I build clean, scalable, user-focused web
            applications with React, Next.js, and Firebase &mdash; and I enjoy
            turning ideas into functional digital products.
          </motion.p>

          <motion.div variants={item} className="hero-stack">
            {profile.heroStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-social">
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          aria-hidden="true"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { k: "const", n: "developer", v: "{" },
    { pad: 1, n: "name", v: '"Dawood Khatri",' },
    { pad: 1, n: "role", v: '"Software Developer",' },
    { pad: 1, n: "stack", v: "[React, Next.js, Node],", },
    { pad: 1, n: "focus", v: '"clean, scalable UI",' },
    { close: "};" },
  ];

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dot terminal-dot-a" />
        <span className="terminal-dot terminal-dot-b" />
        <span className="terminal-dot terminal-dot-c" />
        <span className="terminal-title">profile.js</span>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            className="terminal-line"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
          >
            {l.close ? (
              <span className="t-punc">{l.close}</span>
            ) : (
              <>
                {l.k && (
                  <>
                    <span className="t-key">{l.k}</span>{" "}
                    <span className="t-var">{l.n}</span>{" "}
                    <span className="t-punc">{l.v}</span>
                  </>
                )}
                {!l.k && (
                  <span style={{ paddingLeft: "1.4em" }}>
                    <span className="t-prop">{l.n}</span>
                    <span className="t-punc">: </span>
                    <span className="t-string">{l.v}</span>
                  </span>
                )}
              </>
            )}
          </motion.div>
        ))}
        <span className="terminal-caret" />
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Code2, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio.js";
import "./About.css";

const points = [
  {
    icon: GraduationCap,
    title: "CS Student",
    desc: "Studying Computer Science while building real-world applications.",
  },
  {
    icon: Code2,
    title: "Modern Web Stack",
    desc: "React, Next.js, and Firebase for functional digital products.",
  },
  {
    icon: Sparkles,
    title: "Clean Code",
    desc: "Focused on good UI/UX, readable code, and thoughtful problem-solving.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-index">01 · About</p>
            <h2 className="section-title">Who I am</h2>
          </div>
          <p className="section-sub">
            A closer look at how I approach software development.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <div className="about-points">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                className="about-point"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
              >
                <p.icon size={18} className="about-point-icon" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

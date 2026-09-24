import { motion } from "framer-motion";
import { skills } from "../data/portfolio.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section-pad skills-section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-index">02 · Skills</p>
            <h2 className="section-title">Technologies I work with</h2>
          </div>
          <p className="section-sub">
            Tools and languages I reach for when building web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              className="skills-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.07,
              }}
            >
              <h3 className="skills-card-title">{group.group}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

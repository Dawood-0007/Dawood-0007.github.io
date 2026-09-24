import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, profile } from "../data/portfolio.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-index">03 · Projects</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <p className="section-sub">
            A few projects I&rsquo;ve built, from full-stack apps to backend
            services.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-row"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.06,
              }}
            >
              <div className="project-row-head">
                <span className="project-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Site <ArrowUpRight size={15} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <Github size={15} /> Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="projects-more">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            View more on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

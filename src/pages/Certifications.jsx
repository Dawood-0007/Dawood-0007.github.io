import { motion } from "framer-motion";
import { Award, ArrowUpRight, FileText } from "lucide-react";
import { certifications } from "../data/portfolio.js";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="section-pad certifications-page">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-index">05 · Certifications</p>
            <h2 className="section-title">Certifications</h2>
          </div>
          <p className="section-sub">
            Course and training certificates, hosted on Google Drive.
          </p>
        </div>

        {certifications.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.driveLink}
                href={cert.driveLink}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 3) * 0.06,
                }}
              >
                <span className="cert-card-icon">
                  <Award size={18} />
                </span>
                <div className="cert-card-body">
                  <h3>{cert.title}</h3>
                  {(cert.issuer || cert.date) && (
                    <p className="cert-card-meta">
                      {cert.issuer}
                      {cert.issuer && cert.date ? " · " : ""}
                      {cert.date}
                    </p>
                  )}
                </div>
                <ArrowUpRight size={16} className="cert-card-arrow" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="cert-empty">
      <FileText size={22} className="cert-empty-icon" />
      <h3>No certifications added yet</h3>
      <p>
        Add entries to the <code>certifications</code> array in{" "}
        <code>src/data/portfolio.js</code> with a title and a Google Drive
        share link (set sharing to &ldquo;Anyone with the link can
        view&rdquo;). They&rsquo;ll appear here automatically.
      </p>
    </div>
  );
}

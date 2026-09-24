import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { profile, sectionLinks, pageLinks } from "../data/portfolio.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>{profile.shortName}</h3>
          <p>{profile.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-social">
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer-copy">© {year} {profile.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

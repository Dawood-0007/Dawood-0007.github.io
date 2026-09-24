import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sectionLinks, pageLinks, profile } from "../data/portfolio.js";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = sectionLinks
      .map((l) => document.querySelector(l.href.replace("/", "")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" aria-label={`${profile.name} home`}>
          <span className="navbar-brand-name">Dawood Khatri</span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={isHome && active === link.href ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? "is-active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-cta">
          <a href="/#contact" className="btn btn-primary btn-sm">
            Contact Me
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile"
          >
            <div className="container mobile-nav-inner">
              {sectionLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              {pageLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <a
                href="/#contact"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

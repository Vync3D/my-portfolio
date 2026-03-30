import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [lightbox, setLightbox] = useState({ open: false, img: "", title: "" });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const openLightbox = (imgSrc, title) => {
    setLightbox({ open: true, img: imgSrc, title });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox({ open: false, img: "", title: "" });
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">Vince Dayapan</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#gallery" className="nav-link">Hobbies</a>
        </div>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            /* Sun icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </nav>

      {/* About Section */}
      <section id="about" className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>About Me</h1>
            <p>
              I'm a fresh graduate with a Bachelor of Science in Information Technology.
              My experience is a bit of a mix — I've worked in BPO as an IT tech support,
              so I'm comfortable dealing with technical issues, troubleshooting, and keeping
              things running. On the side, I also enjoy frontend development, particularly
              the UI part where I get to design and build things people actually interact with.
              I'm not locked into one path — whether it's a support role or a frontend position,
              I'm happy to bring what I know to the table.
            </p>

            <div className="hero-social-links">
              <a href="https://github.com/Vync3D" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a href="https://www.facebook.com/Nganomanioi/" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/vince-dayapan-6a4843246" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>

              <a href="/DayapanCV.pdf" download className="hero-social-icon" aria-label="Download Resume">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/mebato.png" alt="Profile" />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="techstack" className="techstack-section">
        <div className="techstack-container">
          <h2 className="section-title">Tech Stack</h2>

          <div className="techstack-category">
            <h3 className="techstack-category-title">Technologies</h3>
            <div className="techstack-grid">
              {["JavaScript", "TypeScript", "React.js", "Vite", "Tailwind CSS", "MySQL"].map((tech) => (
                <div className="tech-item" key={tech}>{tech}</div>
              ))}
            </div>
          </div>

          <div className="techstack-category">
            <h3 className="techstack-category-title">Developer Tools</h3>
            <div className="techstack-grid">
              {["VS Code", "Git", "GitHub", "Claude AI", "Figma", "Lucidchart"].map((tool) => (
                <div className="tech-item" key={tool}>{tool}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <h2 className="section-title">Work Experience</h2>

          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-role">IT Support Intern</h3>
                <p className="experience-company">Infocom Technologies Inc. / Inspiro</p>
              </div>
              <div className="experience-duration">November 2025 - February 2026</div>
            </div>

            <div className="experience-description">
              <ul className="experience-responsibilities">
                <li>Provided helpdesk support, resolving 25+ tickets weekly across hardware and software issues</li>
                <li>Maintained IT inventory management system tracking 500+ company assets including laptops, monitors, and peripherals</li>
                <li>Performed system administration tasks including user account management in Active Directory and software deployment</li>
                <li>Assisted with network setup and maintenance, ensuring 99.5% uptime across all offices</li>
                <li>Troubleshot hardware issues for desktops, laptops, printers, and other IT equipment</li>
                <li>Created comprehensive documentation and user guides for common technical issues, reducing repeat tickets by 30%</li>
              </ul>
            </div>

            <div className="experience-skills">
              <h4 className="experience-skills-title">Tools & Technologies</h4>
              <div className="experience-skills-grid">
                {["Windows 10/11", "macOS", "Active Directory", "ServiceNow", "Network Troubleshooting", "Hardware Diagnostics", "Microsoft 365", "Asset Management"].map((skill) => (
                  <div className="experience-skill-item" key={skill}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Projects & Applications</h2>
          <div className="projects-grid">
            <a href="https://knotpedia-flame.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-image-screenshot">
                <img src="/images/knot.png" alt="Knotpedia" className="project-screenshot" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Knotpedia</h3>
                <p className="project-description">The ultimate knot guide - your go-to resource for learning and mastering knots with detailed guides and step-by-step tutorials.</p>
              </div>
            </a>

            <a href="https://github.com/nhrl/PGC-E-Commerce" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-image-screenshot">
                <img src="/images/BLUE.png" alt="PGC E-comm" className="project-screenshot" />
              </div>
              <div className="project-content">
                <h3 className="project-title">PlayGround Central E-comm</h3>
                <p className="project-description">An online platform for buying and selling gaming consoles, video games, and controllers.</p>
              </div>
            </a>

            <a href="https://github.com/nhrl/PGC-ERP" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-image-screenshot">
                <img src="/images/GREEN.png" alt="PGC ERP" className="project-screenshot" />
              </div>
              <div className="project-content">
                <h3 className="project-title">PlayGround Central ERP</h3>
                <p className="project-description">An enterprise resource planning system designed to streamline business operations for gaming and electronics retail.</p>
              </div>
            </a>

            <a href="https://chada-a.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-image-screenshot">
                <img src="/images/CHAD.png" alt="Chada-a" className="project-screenshot" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Chada-a</h3>
                <p className="project-description">A comprehensive rental booking application featuring map-based property discovery, real-time availability, and role-based access with dedicated employee and customer interfaces.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <h2 className="section-title">Digital Art & Posters</h2>
          <div className="gallery-grid">
            {[
              { img: "codm.png", title: "Codm Tryout" },
              { img: "codmbr.png", title: "Codm Br Poster" },
              { img: "AGAPE.png", title: "AGAPE Poster" },
              { img: "room.png", title: "Room Poster" },
              { img: "mv.png", title: "Movie Night Poster" },
              { img: "MLBB.png", title: "MLBB Design" }
            ].map((item) => (
              <div
                key={item.title}
                className="gallery-card"
                onClick={() => openLightbox(`/images/${item.img}`, item.title)}
              >
                <div className="gallery-image-real">
                  <img src={`/images/${item.img}`} alt={item.title} className="gallery-img" />
                </div>
                <div className="gallery-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox} style={{ display: 'flex' }}>
          <span className="lightbox-close">&times;</span>
          <img className="lightbox-content" src={lightbox.img} alt={lightbox.title} />
          <div className="lightbox-caption">{lightbox.title}</div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Vince Dayapan. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
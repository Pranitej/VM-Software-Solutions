import { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, ChevronRight, Play } from "lucide-react";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatIn {
        0% { 
          opacity: 0; 
          transform: translateY(40px) scale(0.95);
        }
        100% { 
          opacity: 1; 
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
      }
      
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
      
      .animate-float-in {
        animation: floatIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }
      
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-glow {
        animation: glow 3s ease-in-out infinite;
      }
      
      .portfolio-card {
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      .portfolio-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
      }
      
      .portfolio-image {
        transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      .portfolio-card:hover .portfolio-image {
        transform: scale(1.1);
      }
      
      .technology-tag {
        transition: all 0.3s ease;
      }
      
      .technology-tag:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      
      .case-study-btn:hover svg {
        transform: translateX(5px);
      }
      
      .view-all-btn:hover svg {
        transform: translateX(5px) rotate(90deg);
      }
      
      .image-overlay {
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(0, 0, 0, 0.1) 30%,
          rgba(0, 0, 0, 0.3) 60%,
          rgba(0, 0, 0, 0.7) 100%
        );
        transition: all 0.5s ease;
      }
      
      .portfolio-card:hover .image-overlay {
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(59, 130, 246, 0.1) 30%,
          rgba(59, 130, 246, 0.3) 60%,
          rgba(59, 130, 246, 0.7) 100%
        );
      }
    `;
    document.head.appendChild(style);

    // Initialize visible projects with animation delay
    const timer = setTimeout(() => {
      setVisibleProjects(projects);
    }, 100);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const projects = [
    {
      id: 1,
      title: "Enterprise ERP System",
      category: "Enterprise Software",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
      description:
        "A comprehensive enterprise resource planning system with real-time analytics, inventory management, and workflow automation for manufacturing industries.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Redis",
        "Docker",
      ],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        clients: "50+",
        efficiency: "40%",
        satisfaction: "98%",
      },
    },
    {
      id: 2,
      title: "Healthcare Platform",
      category: "Healthcare Tech",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800",
      description:
        "Telemedicine platform with video consultations, patient management, and AI-powered diagnostics connecting patients with healthcare providers.",
      technologies: [
        "React Native",
        "Python",
        "Firebase",
        "Twilio",
        "TensorFlow",
        "WebRTC",
      ],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "100K+",
        consultations: "1M+",
        accuracy: "95%",
      },
    },
    {
      id: 3,
      title: "FinTech Dashboard",
      category: "Financial Technology",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",
      description:
        "Real-time financial analytics dashboard with AI-powered trading insights, portfolio management, and risk assessment tools.",
      technologies: ["Vue.js", "Go", "Redis", "Docker", "WebSocket", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        transactions: "1B+",
        latency: "<10ms",
        accuracy: "99.9%",
      },
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Retail Tech",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800",
      description:
        "Scalable e-commerce solution with AI recommendations, real-time inventory, and seamless payment integration.",
      technologies: [
        "Next.js",
        "NestJS",
        "MongoDB",
        "Kubernetes",
        "Stripe",
        "ElasticSearch",
      ],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        conversion: "35%",
        revenue: "$50M+",
        users: "500K+",
      },
    },
  ];

  const styles = {
    section: {
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      padding: isMobile ? "4rem 1rem" : isTablet ? "6rem 2rem" : "8rem 2rem",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "3rem" : "4rem",
      opacity: 0,
    },
    badge: {
      display: "inline-block",
      background:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
      backdropFilter: "blur(10px)",
      color: "#60a5fa",
      padding: "0.5rem 1.5rem",
      borderRadius: "25px",
      fontWeight: "600",
      fontSize: "0.875rem",
      marginBottom: "1rem",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
    },
    title: {
      fontSize: isMobile ? "2.25rem" : isTablet ? "3rem" : "3.5rem",
      fontWeight: "800",
      marginBottom: "1rem",
      lineHeight: 1.2,
      background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: isMobile ? "1.125rem" : "1.25rem",
      color: "#94a3b8",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "1fr"
          : "repeat(2, 1fr)",
      gap: isMobile ? "2rem" : "3rem",
      marginBottom: "4rem",
    },
    card: {
      background: "linear-gradient(145deg, #1e293b, #0f172a)",
      borderRadius: "20px",
      overflow: "hidden",
      position: "relative",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      opacity: 0,
      transform: "translateY(40px) scale(0.95)",
    },
    imageContainer: {
      position: "relative",
      height: "280px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    overlay: {
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
    },
    categoryBadge: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
      zIndex: 2,
    },
    actionButtons: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      display: "flex",
      gap: "0.5rem",
      zIndex: 2,
    },
    actionButton: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      background: "rgba(0, 0, 0, 0.7)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    content: {
      padding: "1.5rem",
    },
    projectTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "white",
      marginBottom: "0.75rem",
      transition: "color 0.3s ease",
    },
    projectDescription: {
      color: "#94a3b8",
      fontSize: "0.95rem",
      lineHeight: 1.6,
      marginBottom: "1.5rem",
      minHeight: "4.5rem",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      marginBottom: "1.5rem",
      padding: "1rem",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
    },
    statItem: {
      textAlign: "center",
      flex: 1,
    },
    statValue: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: "#60a5fa",
      marginBottom: "0.25rem",
    },
    statLabel: {
      fontSize: "0.75rem",
      color: "#94a3b8",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    technologies: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.5rem",
    },
    technologyTag: {
      background:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
      color: "#60a5fa",
      padding: "0.375rem 0.875rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "500",
      border: "1px solid rgba(59, 130, 246, 0.3)",
    },
    caseStudyButton: {
      width: "100%",
      padding: "0.875rem",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "0.95rem",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
    },
    viewAllContainer: {
      textAlign: "center",
      opacity: 0,
    },
    viewAllButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "transparent",
      color: "#60a5fa",
      padding: "1rem 2.5rem",
      borderRadius: "50px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      border: "2px solid rgba(59, 130, 246, 0.3)",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)",
    },
    decorativeElement: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
      filter: "blur(60px)",
      opacity: 0.5,
      animation: "floatIn 4s ease-in-out infinite alternate",
    },
  };

  return (
    <section id="portfolio" style={styles.section}>
      {/* Decorative elements */}
      <div
        style={{
          ...styles.decorativeElement,
          top: "10%",
          left: "5%",
          animationDelay: "0s",
        }}
      />
      <div
        style={{
          ...styles.decorativeElement,
          bottom: "10%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div style={styles.container}>
        {/* Header */}
        <div className="animate-slide-up" style={styles.header}>
          <div style={styles.badge}>Our Work</div>
          <h1 style={styles.title}>
            Featured <span style={{ display: "block" }}>Projects</span>
          </h1>
          <p style={styles.subtitle}>
            Explore our portfolio of innovative software solutions that deliver
            real business value
          </p>
        </div>

        {/* Projects Grid */}
        <div style={styles.grid}>
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card animate-float-in"
              style={{
                ...styles.card,
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div style={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                  style={{
                    ...styles.image,
                    transform:
                      hoveredProject === project.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div className="image-overlay" style={styles.overlay} />

                {/* Category Badge */}
                <div style={styles.categoryBadge}>{project.category}</div>

                {/* Action Buttons */}
                <div style={styles.actionButtons}>
                  <button
                    style={{
                      ...styles.actionButton,
                      transform:
                        hoveredProject === project.id
                          ? "translateY(-2px)"
                          : "translateY(0)",
                    }}
                    aria-label="View project"
                  >
                    <Eye size={18} color="#60a5fa" />
                  </button>
                  <button
                    style={{
                      ...styles.actionButton,
                      transform:
                        hoveredProject === project.id
                          ? "translateY(-2px)"
                          : "translateY(0)",
                    }}
                    aria-label="Open project"
                  >
                    <ExternalLink size={18} color="#60a5fa" />
                  </button>
                  <button
                    style={{
                      ...styles.actionButton,
                      transform:
                        hoveredProject === project.id
                          ? "translateY(-2px)"
                          : "translateY(0)",
                    }}
                    aria-label="View source code"
                  >
                    <Github size={18} color="#60a5fa" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div style={styles.content}>
                <h3
                  style={{
                    ...styles.projectTitle,
                    color: hoveredProject === project.id ? "#60a5fa" : "white",
                  }}
                >
                  {project.title}
                </h3>

                <p style={styles.projectDescription}>{project.description}</p>

                {/* Stats */}
                <div style={styles.statsContainer}>
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} style={styles.statItem}>
                      <div style={styles.statValue}>{value}</div>
                      <div style={styles.statLabel}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div style={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="technology-tag"
                      style={{
                        ...styles.technologyTag,
                        transform:
                          hoveredProject === project.id
                            ? "translateY(-2px)"
                            : "translateY(0)",
                        animationDelay: `${techIndex * 0.05}s`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Button */}
                <button
                  className="case-study-btn"
                  style={{
                    ...styles.caseStudyButton,
                    transform:
                      hoveredProject === project.id
                        ? "scale(1.02)"
                        : "scale(1)",
                    boxShadow:
                      hoveredProject === project.id
                        ? "0 8px 25px rgba(59, 130, 246, 0.6)"
                        : "0 4px 15px rgba(59, 130, 246, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(59, 130, 246, 0.6)";
                    e.currentTarget.querySelector("svg").style.transform =
                      "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(59, 130, 246, 0.4)";
                    e.currentTarget.querySelector("svg").style.transform =
                      "translateX(0)";
                  }}
                >
                  View Case Study
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="animate-fade-in" style={styles.viewAllContainer}>
          <button
            className="view-all-btn"
            style={styles.viewAllButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3b82f6";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(59, 130, 246, 0.3)";
              e.currentTarget.querySelector("svg").style.transform =
                "translateX(5px) rotate(90deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.querySelector("svg").style.transform =
                "translateX(0) rotate(90deg)";
            }}
          >
            View All Projects
            <Play size={18} style={{ transform: "rotate(90deg)" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

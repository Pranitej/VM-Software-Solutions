import { useState, useEffect } from "react";
import {
  Code,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Brain,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      icon: <Code style={{ width: "2rem", height: "2rem" }} />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built from scratch to meet your unique business requirements and challenges.",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      icon: <Cloud style={{ width: "2rem", height: "2rem" }} />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern business needs.",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    },
    {
      icon: <Smartphone style={{ width: "2rem", height: "2rem" }} />,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      icon: <Database style={{ width: "2rem", height: "2rem" }} />,
      title: "Enterprise Systems",
      description:
        "Comprehensive ERP, CRM, and business intelligence solutions.",
      gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    },
    {
      icon: <Shield style={{ width: "2rem", height: "2rem" }} />,
      title: "Cyber Security",
      description:
        "End-to-end security solutions to protect your digital assets and data.",
      gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
    },
    {
      icon: <Brain style={{ width: "2rem", height: "2rem" }} />,
      title: "AI & ML Solutions",
      description:
        "Intelligent automation and predictive analytics powered by artificial intelligence.",
      gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    },
  ];

  // Add CSS animations to head
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
      }
      .animate-slide-up {
        animation: slideUp 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getResponsiveStyles = () => {
    return {
      section: {
        padding: isMobile ? "5rem 0" : "8rem 0",
        background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
        width: "100%",
      },
      container: {
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : "0 2rem",
      },
      title: {
        fontSize: isMobile ? "2.25rem" : "3rem",
        fontWeight: "bold",
        lineHeight: 1.2,
      },
      grid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: "2rem",
      },
      card: {
        background: "white",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      },
      iconContainer: {
        width: "4rem",
        height: "4rem",
        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.5rem",
        transition: "transform 0.3s ease",
      },
      cardTitle: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#111827",
        marginBottom: "1rem",
        transition: "color 0.3s ease",
      },
      cardDescription: {
        color: "#4b5563",
        marginBottom: "1.5rem",
        lineHeight: 1.6,
      },
      link: {
        display: "inline-flex",
        alignItems: "center",
        color: "#2563eb",
        fontWeight: "600",
        textDecoration: "none",
        transition: "color 0.3s ease",
      },
      arrow: {
        marginLeft: "0.5rem",
        transition: "transform 0.3s ease",
      },
      badge: {
        display: "inline-block",
        backgroundColor: "#dbeafe",
        color: "#1d4ed8",
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        fontWeight: "600",
        marginBottom: "1rem",
      },
      subtitle: {
        fontSize: isMobile ? "1.125rem" : "1.25rem",
        color: "#4b5563",
        maxWidth: "48rem",
        margin: "0 auto",
        lineHeight: 1.6,
      },
    };
  };

  const styles = getResponsiveStyles();

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            animation: "slideUp 0.5s ease-out forwards",
            opacity: 0,
          }}
        >
          <span style={styles.badge}>Our Services</span>
          <h2 style={styles.title}>
            <span style={{ color: "#111827" }}>Comprehensive </span>
            <span
              style={{
                background: "linear-gradient(to right, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Solutions
            </span>
          </h2>
          <p style={styles.subtitle}>
            We deliver end-to-end software services that transform businesses
            and drive innovation
          </p>
        </div>

        <div
          style={{
            ...styles.grid,
            ...(isMobile
              ? {}
              : {
                  "@media (min-width: 1024px)": {
                    gridTemplateColumns: "repeat(3, 1fr)",
                  },
                }),
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{
                ...styles.card,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                transform:
                  hoveredCard === index
                    ? "translateY(-0.5rem)"
                    : "translateY(0)",
                boxShadow:
                  hoveredCard === index
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : styles.card.boxShadow,
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onTouchStart={() =>
                isMobile && setHoveredCard(hoveredCard === index ? null : index)
              }
            >
              <div
                style={{
                  ...styles.iconContainer,
                  background: service.gradient,
                  transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
                }}
              >
                <div style={{ color: "white" }}>{service.icon}</div>
              </div>

              <h3
                style={{
                  ...styles.cardTitle,
                  color: hoveredCard === index ? "#2563eb" : "#111827",
                }}
              >
                {service.title}
              </h3>

              <p style={styles.cardDescription}>{service.description}</p>

              <a
                href="#"
                style={{
                  ...styles.link,
                  color: hoveredCard === index ? "#1d4ed8" : "#2563eb",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.querySelector("svg").style.transform =
                      "translateX(4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.querySelector("svg").style.transform =
                      "translateX(0)";
                  }
                }}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    const svg = e.currentTarget.querySelector("svg");
                    svg.style.transform =
                      svg.style.transform === "translateX(4px)"
                        ? "translateX(0)"
                        : "translateX(4px)";
                  }
                }}
              >
                Learn More
                <svg
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginLeft: "0.5rem",
                    transition: "transform 0.3s ease",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            animation: "fadeIn 0.5s ease-out 0.6s forwards",
            opacity: 0,
          }}
        >
          <button
            style={{
              background: "linear-gradient(to right, #2563eb, #7c3aed)",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
                e.currentTarget.querySelector("svg").style.transform =
                  "translateX(4px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                e.currentTarget.querySelector("svg").style.transform =
                  "translateX(0)";
              }
            }}
            onClick={(e) => {
              if (isMobile) {
                const svg = e.currentTarget.querySelector("svg");
                svg.style.transform =
                  svg.style.transform === "translateX(4px)"
                    ? "translateX(0)"
                    : "translateX(4px)";
              }
            }}
          >
            View All Services
            <ArrowRight
              style={{
                width: "1rem",
                height: "1rem",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
      </div>

      {/* Responsive media query for larger screens */}
      <style>
        {`
          @media (min-width: 1024px) {
            #services > div > div:last-child {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          @media (min-width: 768px) {
            #services {
              padding: 5rem 0;
            }
            
            #services h2 {
              font-size: 3rem;
            }
          }
          
          @media (min-width: 640px) {
            #services > div {
              padding: 0 1.5rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;

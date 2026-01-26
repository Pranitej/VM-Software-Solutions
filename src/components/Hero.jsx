import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Play,
  ChevronRight,
  Shield,
  Rocket,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Add CSS animations with mobile optimizations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatUp {
        0% { 
          opacity: 0; 
          transform: translateY(30px) scale(0.98); 
        }
        100% { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
      }
      
      @keyframes slideFromLeft {
        0% { 
          opacity: 0; 
          transform: translateX(-30px); 
        }
        100% { 
          opacity: 1; 
          transform: translateX(0); 
        }
      }
      
      @keyframes slideFromRight {
        0% { 
          opacity: 0; 
          transform: translateX(30px); 
        }
        100% { 
          opacity: 1; 
          transform: translateX(0); 
        }
      }
      
      @keyframes float {
        0%, 100% { 
          transform: translateY(0) rotate(0deg); 
        }
        50% { 
          transform: translateY(-15px) rotate(3deg); 
        }
      }
      
      @keyframes pulseGlow {
        0%, 100% { 
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2); 
        }
        50% { 
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.4); 
        }
      }
      
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes rotateSlow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .hero-animate-float-up {
        animation: floatUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
        will-change: transform, opacity;
      }
      
      .hero-animate-slide-left {
        animation: slideFromLeft 0.6s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
        will-change: transform, opacity;
      }
      
      .hero-animate-slide-right {
        animation: slideFromRight 0.6s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
        will-change: transform, opacity;
      }
      
      .hero-animate-float {
        animation: float 8s ease-in-out infinite;
      }
      
      .hero-animate-pulse-glow {
        animation: pulseGlow 4s ease-in-out infinite;
      }
      
      .hero-animate-gradient-flow {
        background-size: 200% 200%;
        animation: gradientFlow 12s ease infinite;
      }
      
      .hero-animate-rotate-slow {
        animation: rotateSlow 30s linear infinite;
      }
      
      /* Performance optimizations for mobile */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Mobile-specific animations */
      @media (max-width: 767px) {
        .hero-animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .hero-animate-float-up {
          animation: floatUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
        }
      }
      
      /* Smooth hover states - only on desktop */
      @media (hover: hover) and (pointer: fine) {
        .hero-button-primary:hover .hero-button-icon {
          transform: translateX(8px);
        }
        
        .hero-button-secondary:hover .hero-button-icon {
          transform: rotate(90deg);
        }
        
        .dashboard-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
        
        .stats-item:hover {
          transform: translateY(-5px);
        }
      }
    `;
    document.head.appendChild(style);

    // Handle responsive updates
    checkResponsive();
    window.addEventListener("resize", checkResponsive);

    // Handle mouse move for parallax effect (desktop only)
    const handleMouseMove = (e) => {
      if (windowWidth > 768) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(() => {
          const x = (e.clientX / windowWidth) * 15 - 7.5;
          const y = (e.clientY / window.innerHeight) * 15 - 7.5;
          setMousePosition({ x, y });
        });
      }
    };

    // Handle scroll for stats animation
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 50 && !statsVisible) {
        setStatsVisible(true);
      }
    };

    if (windowWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("scroll", handleScroll);

    // Trigger stats animation after page load
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 1000);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResponsive);
      if (windowWidth > 768) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [windowWidth]);

  const highQualityImages = {
    dashboard:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    analytics:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    mobile:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w-800&q=80",
    code: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  };

  // Responsive styles
  const getResponsiveStyles = () => {
    return {
      section: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: isMobile ? "4rem" : "5rem",
        paddingBottom: isMobile ? "3rem" : "0",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      },
      backgroundElements: {
        position: "absolute",
        inset: "0",
        overflow: "hidden",
      },
      gradientOrb: {
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        opacity: isMobile ? "0.1" : "0.15",
        animation: "float 8s ease-in-out infinite",
      },
      container: {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : "0 2rem",
        position: "relative",
        zIndex: 10,
        width: "100%",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: isMobile ? "2.5rem" : "4rem",
        alignItems: "center",
      },
      content: {
        opacity: 0,
        order: isMobile ? 2 : 1,
      },
      badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
        backdropFilter: "blur(10px)",
        color: "#60a5fa",
        padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
        borderRadius: "50px",
        fontWeight: "600",
        fontSize: isMobile ? "0.8rem" : "0.95rem",
        marginBottom: isMobile ? "1.5rem" : "2rem",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        boxShadow: "0 8px 32px rgba(59, 130, 246, 0.2)",
      },
      title: {
        fontSize: isMobile
          ? "2rem"
          : isTablet
            ? "3rem"
            : "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: "800",
        marginBottom: isMobile ? "1rem" : "1.5rem",
        lineHeight: 1.1,
        background:
          "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundSize: "200% 200%",
      },
      subtitle: {
        fontSize: isMobile ? "1rem" : "1.125rem",
        color: "#cbd5e1",
        marginBottom: isMobile ? "1.5rem" : "2.5rem",
        maxWidth: "600px",
        lineHeight: 1.6,
      },
      buttonGroup: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1rem" : "1.5rem",
        marginBottom: isMobile ? "2rem" : "3rem",
      },
      primaryButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        color: "white",
        padding: isMobile ? "1rem 1.5rem" : "1.25rem 2rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: isMobile ? "0.95rem" : "1rem",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1)",
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
        width: isMobile ? "100%" : "auto",
      },
      secondaryButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        background: "transparent",
        color: "#cbd5e1",
        padding: isMobile ? "1rem 1.5rem" : "1.25rem 2rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: isMobile ? "0.95rem" : "1rem",
        border: "2px solid rgba(255, 255, 255, 0.1)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1)",
        backdropFilter: "blur(10px)",
        width: isMobile ? "100%" : "auto",
      },
      buttonIcon: {
        transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1)",
      },
      statsGrid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
        gap: isMobile ? "1rem" : "1.5rem",
        marginTop: isMobile ? "2rem" : "3rem",
      },
      statItem: {
        textAlign: "center",
        padding: isMobile ? "1rem" : "1.25rem",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1)",
        opacity: 0,
        transform: "translateY(20px)",
      },
      statValue: {
        fontSize: isMobile ? "1.5rem" : "1.75rem",
        fontWeight: "800",
        background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "0.25rem",
      },
      statLabel: {
        fontSize: isMobile ? "0.7rem" : "0.8rem",
        color: "#94a3b8",
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      },
      dashboardContainer: {
        position: "relative",
        opacity: 0,
        order: isMobile ? 1 : 2,
      },
      mainDashboard: {
        position: "relative",
        width: "100%",
        height: isMobile ? "300px" : isTablet ? "400px" : "500px",
        borderRadius: isMobile ? "16px" : "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      },
      dashboardImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1)",
      },
      dashboardOverlay: {
        position: "absolute",
        inset: "0",
        background:
          "linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "1rem" : "2rem",
      },
      dashboardContent: {
        textAlign: "center",
        maxWidth: "400px",
      },
      dashboardTitle: {
        fontSize: isMobile ? "1.125rem" : "1.25rem",
        fontWeight: "700",
        color: "white",
        marginBottom: "0.75rem",
      },
      dashboardDescription: {
        color: "#cbd5e1",
        fontSize: isMobile ? "0.875rem" : "0.95rem",
        lineHeight: 1.5,
        marginBottom: isMobile ? "1rem" : "1.25rem",
        display: isMobile ? "none" : "block",
      },
      dashboardButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        color: "white",
        padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: isMobile ? "0.8rem" : "0.9rem",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      },
      floatingCard: {
        position: "absolute",
        borderRadius: isMobile ? "10px" : "12px",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: isMobile ? "none" : "block",
      },
      cardImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      trustedBy: {
        display: isMobile ? "none" : "flex",
        alignItems: "center",
        gap: "1.5rem",
        marginTop: "2rem",
        padding: "1.25rem",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      },
      trustedLabel: {
        fontSize: "0.8rem",
        color: "#94a3b8",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "1px",
        whiteSpace: "nowrap",
      },
      companyLogos: {
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
        flexWrap: "wrap",
        overflowX: "auto",
        padding: "0.5rem 0",
      },
      companyLogo: {
        fontSize: isMobile ? "1rem" : "1.125rem",
        fontWeight: "700",
        color: "#cbd5e1",
        opacity: 0.7,
        transition: "all 0.3s ease",
        whiteSpace: "nowrap",
      },
      codeSnippet: {
        position: "absolute",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        display: isMobile ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#60a5fa",
        fontWeight: "700",
      },
      scrollIndicator: {
        position: "absolute",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        opacity: 0.7,
        animation: "float 2s ease-in-out infinite",
      },
    };
  };

  const styles = getResponsiveStyles();

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      icon: <Rocket size={isMobile ? 18 : 20} />,
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      icon: <Shield size={isMobile ? 18 : 20} />,
    },
    {
      value: "40%",
      label: "Average ROI",
      icon: <TrendingUp size={isMobile ? 18 : 20} />,
    },
  ];

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "IBM",
    "Samsung",
    "Intel",
  ];

  return (
    <section id="home" style={styles.section}>
      {/* Animated Background Elements */}
      <div style={styles.backgroundElements}>
        <div
          style={{
            ...styles.gradientOrb,
            width: isMobile ? "300px" : "600px",
            height: isMobile ? "300px" : "600px",
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            top: isMobile ? "-100px" : "-150px",
            left: isMobile ? "-100px" : "-150px",
            animationDelay: "0s",
          }}
        />
        <div
          style={{
            ...styles.gradientOrb,
            width: isMobile ? "250px" : "500px",
            height: isMobile ? "250px" : "500px",
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            bottom: isMobile ? "-100px" : "-150px",
            right: isMobile ? "-100px" : "-150px",
            animationDelay: "2s",
          }}
        />

        {/* Grid Lines - Desktop only */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              inset: "0",
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          />
        )}
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Left Column - Content */}
          <div className="hero-animate-slide-left" style={styles.content}>
            <div className="mt-4"></div>
            <div style={styles.badge} className="hero-animate-pulse-glow mt-5">
              <Sparkles size={isMobile ? 14 : 16} />
              <span>Transforming Businesses with Innovative Software</span>
            </div>

            <h1 style={styles.title} className="hero-animate-gradient-flow">
              <span>Enterprise Software</span>
              <span style={{ display: "block" }}>Solutions That Scale</span>
            </h1>

            <p style={styles.subtitle}>
              We craft cutting-edge software solutions that drive digital
              transformation, optimize operations, and accelerate business
              growth for enterprises worldwide.
            </p>

            <div style={styles.buttonGroup}>
              <button
                className="hero-button-primary"
                style={{
                  ...styles.primaryButton,
                  transform:
                    hoveredButton === "primary"
                      ? "translateY(-3px) scale(1.03)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredButton === "primary"
                      ? "0 15px 45px rgba(59, 130, 246, 0.5)"
                      : "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                onMouseEnter={() => setHoveredButton("primary")}
                onMouseLeave={() => setHoveredButton(null)}
                onTouchStart={() => setHoveredButton("primary")}
                onTouchEnd={() => setHoveredButton(null)}
              >
                <span>Start Your Project</span>
                <ArrowRight
                  className="hero-button-icon"
                  style={{
                    ...styles.buttonIcon,
                    transform:
                      hoveredButton === "primary"
                        ? "translateX(8px)"
                        : "translateX(0)",
                  }}
                />
              </button>

              <button
                className="hero-button-secondary"
                style={{
                  ...styles.secondaryButton,
                  transform:
                    hoveredButton === "secondary"
                      ? "translateY(-3px)"
                      : "translateY(0)",
                  borderColor:
                    hoveredButton === "secondary"
                      ? "rgba(59, 130, 246, 0.4)"
                      : "rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={() => setHoveredButton("secondary")}
                onMouseLeave={() => setHoveredButton(null)}
                onTouchStart={() => setHoveredButton("secondary")}
                onTouchEnd={() => setHoveredButton(null)}
              >
                <Play
                  className="hero-button-icon"
                  style={{
                    ...styles.buttonIcon,
                    transform:
                      hoveredButton === "secondary"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trusted By - Desktop only */}
            {!isMobile && (
              <div style={styles.trustedBy}>
                <div style={styles.trustedLabel}>Trusted By</div>
                <div style={styles.companyLogos}>
                  {companies.map((company, index) => (
                    <div
                      key={company}
                      style={{
                        ...styles.companyLogo,
                        transform: `translateX(${scrollY * 0.005}px)`,
                        transitionDelay: `${index * 0.1}s`,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "0.7")
                      }
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats */}
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stats-item hero-animate-float-up"
                  style={{
                    ...styles.statItem,
                    animation: statsVisible
                      ? `floatUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) forwards ${index * 0.15}s`
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (windowWidth > 768) {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.background =
                        "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (windowWidth > 768) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                >
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                  <div style={{ marginTop: "0.75rem", color: "#60a5fa" }}>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Showcase */}
          <div
            className="hero-animate-slide-right"
            style={styles.dashboardContainer}
          >
            <div
              className="dashboard-card"
              style={{
                ...styles.mainDashboard,
                transform:
                  hoveredButton === "dashboard"
                    ? "translateY(-5px) scale(1.02)"
                    : "translateY(0) scale(1)",
              }}
              onMouseEnter={() => setHoveredButton("dashboard")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <img
                src={highQualityImages.dashboard}
                alt="Enterprise Dashboard"
                style={{
                  ...styles.dashboardImage,
                  transform:
                    hoveredButton === "dashboard" ? "scale(1.05)" : "scale(1)",
                }}
                loading="eager"
              />
              <div style={styles.dashboardOverlay}>
                <div style={styles.dashboardContent}>
                  <h3 style={styles.dashboardTitle}>
                    Enterprise Analytics Dashboard
                  </h3>
                  <p style={styles.dashboardDescription}>
                    Real-time insights, predictive analytics, and comprehensive
                    business intelligence in one powerful platform.
                  </p>
                  <button
                    style={styles.dashboardButton}
                    onMouseEnter={(e) => {
                      if (windowWidth > 768) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(59, 130, 246, 0.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (windowWidth > 768) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = "scale(0.98)";
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Explore Features
                    <ChevronRight size={isMobile ? 12 : 14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Cards - Desktop only */}
            {!isMobile && (
              <>
                <div
                  className="hero-animate-float"
                  style={{
                    ...styles.floatingCard,
                    top: "-40px",
                    right: "-20px",
                    width: "150px",
                    height: "100px",
                    animationDelay: "1s",
                    transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                  }}
                >
                  <img
                    src={highQualityImages.analytics}
                    alt="Analytics"
                    style={styles.cardImage}
                  />
                </div>

                <div
                  className="hero-animate-float"
                  style={{
                    ...styles.floatingCard,
                    bottom: "-30px",
                    left: "-20px",
                    width: "130px",
                    height: "85px",
                    animationDelay: "3s",
                    transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
                  }}
                >
                  <img
                    src={highQualityImages.mobile}
                    alt="Mobile App"
                    style={styles.cardImage}
                  />
                </div>

                <div
                  className="hero-animate-float"
                  style={{
                    ...styles.floatingCard,
                    bottom: "50px",
                    right: "80px",
                    width: "120px",
                    height: "75px",
                    animationDelay: "5s",
                    transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
                  }}
                >
                  <img
                    src={highQualityImages.code}
                    alt="Code Editor"
                    style={styles.cardImage}
                  />
                </div>

                {/* Animated Code Snippet */}
                <div
                  className="hero-animate-rotate-slow"
                  style={{
                    ...styles.codeSnippet,
                    top: "50%",
                    left: "-40px",
                    width: "80px",
                    height: "80px",
                    fontSize: "1.25rem",
                  }}
                >
                  {`{ }`}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <div style={styles.scrollIndicator}>
          <div
            style={{
              fontSize: "0.75rem",
              color: "#94a3b8",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            SCROLL TO EXPLORE
          </div>
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
            }}
          ></div>
        </div>
      )}
    </section>
  );
};

export default Hero;

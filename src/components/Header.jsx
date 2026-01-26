import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Home,
  Cpu,
  Layers,
  Briefcase,
  Info,
  Phone,
  Zap,
  Code,
  Cloud,
  Smartphone,
  Shield,
  Brain,
  Database,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textColor, setTextColor] = useState("#ffffff");
  const headerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const checkResponsive = () => {
      setWindowWidth(window.innerWidth);
    };

    // Detect background color for text contrast
    const detectBackgroundColor = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        const elementBelow = document.elementFromPoint(
          window.innerWidth / 2,
          headerBottom + 50,
        );

        if (elementBelow) {
          const computedStyle = window.getComputedStyle(elementBelow);
          const bgColor = computedStyle.backgroundColor;

          // Convert RGB to brightness value
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const brightness =
              (parseInt(rgb[0]) * 299 +
                parseInt(rgb[1]) * 587 +
                parseInt(rgb[2]) * 114) /
              1000;
            // If background is light (brightness > 128), use dark text
            setTextColor(brightness > 128 ? "#1e293b" : "#ffffff");
          }
        }
      }
    };

    // Add CSS animations with glass effects
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideInFromTop {
        0% { 
          opacity: 0; 
          transform: translateY(-30px); 
        }
        100% { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      @keyframes slideInFromRight {
        0% { 
          opacity: 0; 
          transform: translateX(30px); 
        }
        100% { 
          opacity: 1; 
          transform: translateX(0); 
        }
      }
      
      @keyframes slideDown {
        0% { 
          opacity: 0; 
          transform: translateY(-20px); 
          max-height: 0;
        }
        100% { 
          opacity: 1; 
          transform: translateY(0); 
          max-height: 600px;
        }
      }
      
      @keyframes slideUp {
        0% { 
          opacity: 1; 
          transform: translateY(0); 
          max-height: 600px;
        }
        100% { 
          opacity: 0; 
          transform: translateY(-20px); 
          max-height: 0;
        }
      }
      
      @keyframes pulseGlow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.3); 
        }
        50% { 
          box-shadow: 0 0 40px rgba(96, 165, 250, 0.6); 
        }
      }
      
      @keyframes float {
        0%, 100% { 
          transform: translateY(0) rotate(0deg); 
        }
        50% { 
          transform: translateY(-8px) rotate(5deg); 
        }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes lightRay {
        0% { 
          transform: translateX(-100%) rotate(45deg); 
          opacity: 0;
        }
        50% { 
          opacity: 0.5;
        }
        100% { 
          transform: translateX(200%) rotate(45deg); 
          opacity: 0;
        }
      }
      
      .header-animate-slide-in {
        animation: slideInFromTop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .header-animate-slide-right {
        animation: slideInFromRight 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .header-animate-slide-down {
        animation: slideDown 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        overflow: hidden;
      }
      
      .header-animate-slide-up {
        animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        overflow: hidden;
      }
      
      .header-animate-pulse-glow {
        animation: pulseGlow 3s ease-in-out infinite;
      }
      
      .header-animate-float {
        animation: float 8s ease-in-out infinite;
      }
      
      .header-nav-link {
        position: relative;
        overflow: hidden;
      }
      
      .header-nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.2), transparent);
        transition: left 0.6s ease;
      }
      
      .header-nav-link:hover::before {
        left: 100%;
      }
      
      .header-cta-button:hover {
        background-size: 200% 200%;
      }
      
      @media (hover: hover) and (pointer: fine) {
        .header-nav-link:hover {
          transform: translateY(-2px);
        }
      }
      
      @media (max-width: 767px) {
        .header-animate-float {
          animation: float 6s ease-in-out infinite;
        }
      }
    `;
    document.head.appendChild(style);

    // Handle mouse movement for glass effect
    const handleMouseMove = (e) => {
      if (windowWidth > 768) {
        animationFrameRef.current = requestAnimationFrame(() => {
          const x = (e.clientX / windowWidth) * 10 - 5;
          const y = (e.clientY / window.innerHeight) * 10 - 5;
          setMousePosition({ x, y });
        });
      }
    };

    // Handle scroll
    const handleScroll = () => {
      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 100);
        detectBackgroundColor();

        const sections = [
          "home",
          "services",
          "solutions",
          "portfolio",
          "about",
          "contact",
        ];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      });
    };

    // Handle responsive updates
    checkResponsive();
    window.addEventListener("resize", checkResponsive);
    window.addEventListener("scroll", handleScroll);

    if (windowWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Initialize
    handleScroll();
    detectBackgroundColor();

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResponsive);
      window.removeEventListener("scroll", handleScroll);
      if (windowWidth > 768) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [windowWidth]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "Services", href: "#services", icon: <Cpu size={18} /> },
    { name: "Solutions", href: "#solutions", icon: <Layers size={18} /> },
    { name: "Portfolio", href: "#portfolio", icon: <Briefcase size={18} /> },
    { name: "About", href: "#about", icon: <Info size={18} /> },
    { name: "Contact", href: "#contact", icon: <Phone size={18} /> },
  ];

  // Glass effect styles - Dynamic based on scroll and text color
  const glassEffect = {
    background: scrolled
      ? textColor === "#ffffff"
        ? "rgba(15, 23, 42, 0.85)" // Darker for light backgrounds
        : "rgba(255, 255, 255, 0.85)" // Lighter for dark backgrounds
      : textColor === "#ffffff"
        ? "rgba(15, 23, 42, 0.75)"
        : "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: scrolled
      ? textColor === "#ffffff"
        ? "1px solid rgba(255, 255, 255, 0.2)"
        : "1px solid rgba(15, 23, 42, 0.2)"
      : textColor === "#ffffff"
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid rgba(15, 23, 42, 0.1)",
    boxShadow: scrolled
      ? textColor === "#ffffff"
        ? "0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)"
        : "0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)"
      : textColor === "#ffffff"
        ? "0 8px 32px rgba(0, 0, 0, 0.25)"
        : "0 8px 32px rgba(0, 0, 0, 0.1)",
  };

  // Base text color based on background detection
  const baseTextColor = textColor;
  const mutedTextColor = textColor === "#ffffff" ? "#cbd5e1" : "#475569";
  const activeTextColor = "#60a5fa"; // Blue for active items

  const getResponsiveStyles = () => {
    return {
      header: {
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        ...glassEffect,
        padding: isMobile
          ? scrolled
            ? "0.75rem 0"
            : "1rem 0"
          : scrolled
            ? "1rem 0"
            : "1.25rem 0",
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
      },
      container: {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : isTablet ? "0 1.5rem" : "0 2rem",
        width: "100%",
      },
      innerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      logoContainer: {
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "0.75rem" : "1rem",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
      },
      logoIcon: {
        width: isMobile ? "3rem" : "3.5rem",
        height: isMobile ? "3rem" : "3.5rem",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      },
      logoIconInner: {
        width: "calc(100% - 4px)",
        height: "calc(100% - 4px)",
        borderRadius: "10px",
        background:
          textColor === "#ffffff"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(15, 23, 42, 0.1)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      logoText: {
        fontSize: isMobile ? "1.5rem" : "1.75rem",
        fontWeight: "800",
        lineHeight: 1,
        display: "flex",
        flexDirection: "column",
      },
      logoMain: {
        // background:
        //   textColor === "#ffffff"
        //     ? "linear-gradient(135deg, #ffffff, #e5e7eb)"
        //     : "linear-gradient(135deg, #1e293b, #0f172a)",
        background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      },
      logoSub: {
        fontSize: isMobile ? "0.7rem" : "0.8rem",
        fontWeight: "500",
        color: mutedTextColor,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginTop: "2px",
      },
      desktopNav: {
        display: isMobile ? "none" : "flex",
        alignItems: "center",
        gap: isTablet ? "2rem" : "2.5rem",
      },
      navLink: {
        fontSize: isTablet ? "0.95rem" : "1rem",
        fontWeight: "500",
        textDecoration: "none",
        position: "relative",
        padding: "0.75rem 0",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      },
      ctaButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
        backgroundSize: "200% 200%",
        color: "white",
        padding: isTablet ? "0.75rem 1.5rem" : "1rem 2rem",
        borderRadius: "50px",
        border: "none",
        fontSize: isTablet ? "0.9rem" : "1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        boxShadow: "0 8px 32px rgba(96, 165, 250, 0.4)",
        position: "relative",
        overflow: "hidden",
      },
      mobileMenuButton: {
        display: isMobile ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        width: "3rem",
        height: "3rem",
        borderRadius: "12px",
        background:
          textColor === "#ffffff"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(15, 23, 42, 0.1)",
        backdropFilter: "blur(10px)",
        border:
          textColor === "#ffffff"
            ? "1px solid rgba(255, 255, 255, 0.2)"
            : "1px solid rgba(15, 23, 42, 0.2)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      },
      mobileMenu: {
        position: "absolute",
        top: "100%",
        left: isMobile ? "1rem" : "2rem",
        right: isMobile ? "1rem" : "2rem",
        background:
          textColor === "#ffffff"
            ? "rgba(15, 23, 42, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(30px) saturate(200%)",
        WebkitBackdropFilter: "blur(30px) saturate(200%)",
        border:
          textColor === "#ffffff"
            ? "1px solid rgba(255, 255, 255, 0.2)"
            : "1px solid rgba(15, 23, 42, 0.2)",
        borderRadius: "20px",
        boxShadow:
          textColor === "#ffffff"
            ? "0 20px 60px rgba(0, 0, 0, 0.4)"
            : "0 20px 60px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        marginTop: "0.5rem",
      },
      mobileMenuInner: {
        padding: "2rem",
      },
      mobileNavLink: {
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        padding: "1.25rem 0",
        textDecoration: "none",
        fontSize: "1.125rem",
        fontWeight: "500",
        borderBottom:
          textColor === "#ffffff"
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(15, 23, 42, 0.1)",
        transition: "all 0.3s ease",
      },
      mobileCtaButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
        background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
        color: "white",
        padding: "1.25rem",
        borderRadius: "15px",
        border: "none",
        fontSize: "1.125rem",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "2rem",
        boxShadow: "0 12px 40px rgba(96, 165, 250, 0.5)",
        transition: "all 0.3s ease",
      },
      lightRay: {
        position: "absolute",
        top: "0",
        left: "-100%",
        width: "50%",
        height: "2px",
        background:
          textColor === "#ffffff"
            ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)"
            : "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.6), transparent)",
        transform: "rotate(45deg)",
      },
    };
  };

  const styles = getResponsiveStyles();

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mobile menu text color (always visible)
  const mobileTextColor = textColor === "#ffffff" ? "#ffffff" : "#1e293b";
  const mobileMutedColor = textColor === "#ffffff" ? "#cbd5e1" : "#64748b";

  return (
    <header
      ref={headerRef}
      style={styles.header}
      className="header-animate-slide-in"
    >
      {/* Light rays effect - only show on desktop */}
      {!isMobile && (
        <>
          <div
            style={{
              ...styles.lightRay,
              animation: "lightRay 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />
          <div
            style={{
              ...styles.lightRay,
              top: "50%",
              animation: "lightRay 4s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
          <div
            style={{
              ...styles.lightRay,
              top: "100%",
              animation: "lightRay 3.5s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </>
      )}

      <div style={styles.container}>
        <div style={styles.innerContainer}>
          {/* Logo with glass effect */}
          <div
            style={styles.logoContainer}
            onClick={() => handleNavClick("#home")}
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="header-animate-float" style={styles.logoIcon}>
              <div style={styles.logoIconInner}>
                <Zap
                  size={isMobile ? 22 : 24}
                  style={{
                    color: textColor === "#ffffff" ? "white" : "#1e293b",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                  }}
                />
              </div>
            </div>
            <div style={styles.logoText}>
              <span style={styles.logoMain}>VM Software</span>
              <span style={styles.logoSub}>SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={styles.desktopNav}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="header-nav-link"
                style={{
                  ...styles.navLink,
                  color:
                    activeSection === item.name.toLowerCase()
                      ? activeTextColor
                      : hoveredItem === item.name
                        ? activeTextColor
                        : baseTextColor,
                  transform:
                    hoveredItem === item.name
                      ? "translateY(-3px)"
                      : "translateY(0)",
                  animation: `slideInFromRight 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  style={{
                    transition: "transform 0.3s ease, color 0.3s ease",
                    transform:
                      hoveredItem === item.name ? "scale(1.2)" : "scale(1)",
                    color:
                      activeSection === item.name.toLowerCase()
                        ? activeTextColor
                        : hoveredItem === item.name
                          ? activeTextColor
                          : baseTextColor,
                  }}
                >
                  {item.icon}
                </div>
                <span>{item.name}</span>
                {activeSection === item.name.toLowerCase() && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "2px",
                      background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                      borderRadius: "2px",
                    }}
                  ></div>
                )}
              </a>
            ))}

            <button
              className="header-animate-pulse-glow"
              style={{
                ...styles.ctaButton,
                animation: `slideInFromRight 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${navItems.length * 0.1}s`,
                opacity: 0,
                transform:
                  hoveredItem === "cta"
                    ? "translateY(-3px) scale(1.05)"
                    : "translateY(0) scale(1)",
              }}
              onMouseEnter={() => setHoveredItem("cta")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleNavClick("#contact")}
            >
              <Sparkles size={18} />
              <span>Get Started</span>
              <ArrowRight
                size={18}
                style={{
                  transition: "transform 0.3s ease",
                  transform:
                    hoveredItem === "cta" ? "translateX(6px)" : "translateX(0)",
                }}
              />
              {/* Shimmer effect */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  animation: "shimmer 2s infinite",
                }}
              />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              ...styles.mobileMenuButton,
              transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
              background:
                hoveredItem === "menu"
                  ? textColor === "#ffffff"
                    ? "rgba(255, 255, 255, 0.25)"
                    : "rgba(15, 23, 42, 0.15)"
                  : textColor === "#ffffff"
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(15, 23, 42, 0.1)",
            }}
            onClick={handleMobileMenuToggle}
            onMouseEnter={() => setHoveredItem("menu")}
            onMouseLeave={() => setHoveredItem(null)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={22} color="#60a5fa" />
            ) : (
              <Menu size={22} color={baseTextColor} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={
              isMenuOpen
                ? "header-animate-slide-down"
                : "header-animate-slide-up"
            }
            style={styles.mobileMenu}
          >
            <div style={styles.mobileMenuInner}>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    ...styles.mobileNavLink,
                    color:
                      activeSection === item.name.toLowerCase()
                        ? activeTextColor
                        : mobileTextColor,
                    borderBottom:
                      index === navItems.length - 1
                        ? "none"
                        : textColor === "#ffffff"
                          ? "1px solid rgba(255, 255, 255, 0.1)"
                          : "1px solid rgba(15, 23, 42, 0.1)",
                    animation: `slideInFromRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${index * 0.05}s`,
                    opacity: 0,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        color:
                          activeSection === item.name.toLowerCase()
                            ? activeTextColor
                            : mobileTextColor,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight
                    size={18}
                    color={
                      activeSection === item.name.toLowerCase()
                        ? activeTextColor
                        : mobileMutedColor
                    }
                  />
                </a>
              ))}

              <button
                style={{
                  ...styles.mobileCtaButton,
                  animation: `slideInFromRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${navItems.length * 0.05}s`,
                  opacity: 0,
                }}
                onClick={() => {
                  handleMobileMenuToggle();
                  setTimeout(() => handleNavClick("#contact"), 300);
                }}
              >
                <Sparkles size={20} />
                <span>Get Started Now</span>
                <ArrowRight size={20} />
              </button>

              {/* Quick Services */}
              {/* <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "1.5rem",
                  borderTop:
                    textColor === "#ffffff"
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "1px solid rgba(15, 23, 42, 0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: mobileMutedColor,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "1rem",
                  }}
                >
                  Our Services
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    { icon: <Code size={14} />, label: "Development" },
                    { icon: <Cloud size={14} />, label: "Cloud" },
                    { icon: <Smartphone size={14} />, label: "Mobile" },
                    { icon: <Database size={14} />, label: "Database" },
                    { icon: <Shield size={14} />, label: "Security" },
                    { icon: <Brain size={14} />, label: "AI/ML" },
                  ].map((service, index) => (
                    <div
                      key={service.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem",
                        background:
                          textColor === "#ffffff"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(15, 23, 42, 0.05)",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        color: mobileTextColor,
                        animation: `slideInFromRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${(navItems.length + index) * 0.05}s`,
                        opacity: 0,
                      }}
                    >
                      <div style={{ color: activeTextColor }}>
                        {service.icon}
                      </div>
                      <span>{service.label}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

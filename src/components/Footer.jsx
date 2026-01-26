import { useState, useEffect } from "react";
import {
  Mail,
  Heart,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
      }
      
      .animate-float-up {
        animation: floatUp 0.6s ease-out forwards;
      }
      
      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }
      
      .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .footer-link {
        position: relative;
        overflow: hidden;
      }
      
      .footer-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #3b82f6, transparent);
        transition: left 0.3s ease;
      }
      
      .footer-link:hover::after {
        left: 100%;
      }
      
      .social-icon {
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      .social-icon:hover {
        transform: translateY(-5px) rotate(5deg);
      }
      
      .newsletter-input:focus {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
      }
      
      .subscribe-btn:hover svg {
        transform: translateX(5px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Custom Development", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "Enterprise Systems", href: "#" },
    { name: "Cyber Security", href: "#" },
    { name: "AI & ML", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      name: "Facebook",
      color: "#1877F2",
      href: "#",
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      color: "#1DA1F2",
      href: "#",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      color: "#0077B5",
      href: "#",
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      color: "#E4405F",
      href: "#",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: isMobile ? "3rem 1rem" : isTablet ? "4rem 2rem" : "5rem 2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(4, 1fr)",
      gap: isMobile ? "2rem" : "3rem",
      marginBottom: "3rem",
    },
    column: {
      opacity: 0,
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
    },
    logoIcon: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "1.125rem",
      color: "white",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
    },
    logoText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    companyDescription: {
      color: "#9ca3af",
      lineHeight: 1.6,
      marginBottom: "1.5rem",
      fontSize: "0.95rem",
    },
    copyright: {
      fontSize: "0.875rem",
      color: "#6b7280",
    },
    heading: {
      fontSize: "1.125rem",
      fontWeight: "bold",
      color: "white",
      marginBottom: "1.5rem",
      position: "relative",
      display: "inline-block",
    },
    headingUnderline: {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: 0,
      width: "40px",
      height: "3px",
      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
      borderRadius: "2px",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: "0.75rem",
    },
    link: {
      color: "#d1d5db",
      textDecoration: "none",
      fontSize: "0.95rem",
      transition: "all 0.3s ease",
      display: "inline-block",
      padding: "0.25rem 0",
    },
    newsletterContainer: {
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      padding: "1.5rem",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    newsletterText: {
      color: "#9ca3af",
      marginBottom: "1rem",
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    newsletterForm: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    newsletterInput: {
      padding: "0.875rem 1rem",
      background: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "8px",
      color: "white",
      fontSize: "0.95rem",
      outline: "none",
      transition: "all 0.3s ease",
    },
    subscribeButton: {
      padding: "0.875rem 1.5rem",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "0.95rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
    },
    successMessage: {
      color: "#10b981",
      fontSize: "0.875rem",
      textAlign: "center",
      padding: "0.5rem",
      animation: "fadeIn 0.3s ease-out",
    },
    socialContainer: {
      display: "flex",
      gap: "1rem",
      marginTop: "1.5rem",
    },
    socialIcon: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    },
    divider: {
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      marginTop: "3rem",
      paddingTop: "2rem",
    },
    bottomBar: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      opacity: 0,
    },
    madeWithLove: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.95rem",
      color: "#9ca3af",
    },
    heartIcon: {
      color: "#ef4444",
      animation: "pulse 1.5s ease-in-out infinite",
    },
    teamName: {
      color: "#3b82f6",
      fontWeight: "600",
    },
    legalLinks: {
      display: "flex",
      gap: "2rem",
      fontSize: "0.875rem",
      color: "#9ca3af",
    },
    legalLink: {
      color: "#9ca3af",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)",
          filter: "blur(40px)",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)",
          filter: "blur(40px)",
          opacity: 0.5,
        }}
      />

      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Company Info */}
          <div className="animate-float-up" style={styles.column}>
            <div style={styles.logoSection}>
              <div style={styles.logoIcon}>VM</div>
              <div style={styles.logoText}>
                <span style={{ color: "white" }}>vm</span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginLeft: "2px",
                  }}
                >
                  Software
                </span>
              </div>
            </div>
            <p style={styles.companyDescription}>
              We transform businesses with cutting-edge software solutions,
              delivering innovation and excellence since 2015.
            </p>
            <div style={styles.socialContainer}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-icon"
                  style={{
                    ...styles.socialIcon,
                    background: social.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px) rotate(5deg)";
                    e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) rotate(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-float-up"
            style={{ ...styles.column, animationDelay: "0.1s" }}
          >
            <h3 style={styles.heading}>
              Quick Links
              <span style={styles.headingUnderline}></span>
            </h3>
            <ul style={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={link.name} style={styles.linkItem}>
                  <a
                    href={link.href}
                    className="footer-link"
                    style={{
                      ...styles.link,
                      color:
                        hoveredLink === `quick-${index}`
                          ? "#3b82f6"
                          : "#d1d5db",
                      transform:
                        hoveredLink === `quick-${index}`
                          ? "translateX(5px)"
                          : "translateX(0)",
                    }}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className="animate-float-up"
            style={{ ...styles.column, animationDelay: "0.2s" }}
          >
            <h3 style={styles.heading}>
              Our Services
              <span style={styles.headingUnderline}></span>
            </h3>
            <ul style={styles.linkList}>
              {services.map((service, index) => (
                <li key={service.name} style={styles.linkItem}>
                  <a
                    href={service.href}
                    className="footer-link"
                    style={{
                      ...styles.link,
                      color:
                        hoveredLink === `service-${index}`
                          ? "#3b82f6"
                          : "#d1d5db",
                      transform:
                        hoveredLink === `service-${index}`
                          ? "translateX(5px)"
                          : "translateX(0)",
                    }}
                    onMouseEnter={() => setHoveredLink(`service-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="animate-float-up"
            style={{ ...styles.column, animationDelay: "0.3s" }}
          >
            <div style={styles.newsletterContainer}>
              <h3 style={styles.heading}>
                Stay Updated
                <span style={styles.headingUnderline}></span>
              </h3>
              <p style={styles.newsletterText}>
                Get the latest news, updates, and exclusive offers directly in
                your inbox.
              </p>

              {subscribed ? (
                <div style={styles.successMessage}>
                  Thank you for subscribing! 🎉
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={styles.newsletterForm}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={styles.newsletterInput}
                    className="newsletter-input"
                  />
                  <button
                    type="submit"
                    className="subscribe-btn"
                    style={styles.subscribeButton}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(59, 130, 246, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(59, 130, 246, 0.4)";
                    }}
                  >
                    Subscribe
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Bottom Bar */}
        <div className="animate-slide-up" style={styles.bottomBar}>
          <div style={styles.madeWithLove}>
            <span>Made with</span>
            <Heart size={16} style={styles.heartIcon} />
            <span>by</span>
            <span style={styles.teamName}>VM Software Solutions Team</span>
          </div>

          <div style={styles.copyright}>
            © {currentYear} VM Software Solutions. All rights reserved.
          </div>

          <div style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" style={styles.legalLink}>
              Terms of Service
            </a>
            <a href="#" style={styles.legalLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "3rem",
          height: "3rem",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
          transition: "all 0.3s ease",
          zIndex: 100,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow =
            "0 8px 25px rgba(59, 130, 246, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 15px rgba(59, 130, 246, 0.4)";
        }}
        aria-label="Scroll to top"
      >
        <ArrowRight style={{ transform: "rotate(-90deg)" }} size={20} />
      </button>
    </footer>
  );
};

export default Footer;

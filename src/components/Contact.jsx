import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoverStates, setHoverStates] = useState({
    social: {},
    submit: false,
    cards: {},
  });
  // const [animationsLoaded, setAnimationsLoaded] = useState(false);

  // Animation styles
  const animationStyles = `
    @keyframes floatUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideFromLeft {
      0% { opacity: 0; transform: translateX(-50px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideFromRight {
      0% { opacity: 0; transform: translateX(50px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }
    
    @keyframes bounceIn {
      0% { opacity: 0; transform: scale(0.3); }
      50% { opacity: 1; transform: scale(1.05); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes ripple {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(4); opacity: 0; }
    }
    
    @keyframes successCheckmark {
      0% { stroke-dashoffset: 100; opacity: 0; }
      50% { opacity: 1; }
      100% { stroke-dashoffset: 0; opacity: 1; }
    }
    
    .animate-float-up {
      animation: floatUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    .animate-slide-left {
      animation: slideFromLeft 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    .animate-slide-right {
      animation: slideFromRight 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    .animate-pulse-glow {
      animation: pulseGlow 2s infinite;
    }
    
    .animate-bounce-in {
      animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    .ripple-effect {
      position: relative;
      overflow: hidden;
    }
    
    .ripple-effect::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0;
      border-radius: 100%;
      transform: scale(1, 1) translate(-50%);
      transform-origin: 50% 50%;
    }
    
    .ripple-effect:focus:not(:active)::after {
      animation: ripple 1s ease-out;
    }
    
    .success-checkmark-circle {
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      animation: successCheckmark 0.6s ease-in-out forwards;
      animation-delay: 0.2s;
    }
    
    .hover-lift {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .hover-glow {
      transition: all 0.3s ease;
    }
    
    .hover-glow:hover {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    
    .input-focus-effect:focus {
      transform: translateY(-2px);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
    }
  `;

  useEffect(() => {
    // Add animation styles to head
    const styleSheet = document.createElement("style");
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
    // setAnimationsLoaded(true);

    // Stagger animations for elements
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".stagger-animation");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate-float-up");
        }, index * 100);
      });
    }, 100);

    return () => {
      document.head.removeChild(styleSheet);
      clearTimeout(timer);
    };
  }, [animationStyles]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create ripple effect on submit button
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      top: ${y}px;
      left: ${x}px;
      pointer-events: none;
    `;

    button.style.position = "relative";
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Add success animation
      setTimeout(() => {
        const successElement = document.querySelector(
          ".success-checkmark-circle",
        );
        if (successElement) {
          successElement.style.animation =
            "successCheckmark 0.6s ease-in-out forwards";
        }
      }, 300);

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail style={{ width: "1.5rem", height: "1.5rem" }} />,
      title: "Email",
      info: "contact@vmsolutions.com",
      description: "We'll respond within 24 hours",
      color: "#3b82f6",
    },
    {
      icon: <Phone style={{ width: "1.5rem", height: "1.5rem" }} />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "#8b5cf6",
    },
    {
      icon: <MapPin style={{ width: "1.5rem", height: "1.5rem" }} />,
      title: "Office",
      info: "San Francisco, CA",
      description: "Visit our headquarters",
      color: "#10b981",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", color: "#0077b5" },
    { name: "Twitter", color: "#1da1f2" },
    { name: "GitHub", color: "#333" },
    { name: "Dribbble", color: "#ea4c89" },
  ];

  const getResponsiveStyles = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    return {
      section: {
        padding: isMobile ? "4rem 1rem" : isTablet ? "6rem 2rem" : "8rem 2rem",
        background:
          "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #fdf2f8 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      },
      backgroundElement: {
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        filter: "blur(80px)",
        opacity: 0.1,
        animation: "floatUp 4s ease-in-out infinite alternate",
      },
      container: {
        maxWidth: "1280px",
        margin: "0 auto",
        width: "100%",
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
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        color: "white",
        padding: "0.5rem 1.5rem",
        borderRadius: "25px",
        fontWeight: 600,
        fontSize: "0.875rem",
        marginBottom: "1rem",
        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
      },
      title: {
        fontSize: isMobile ? "2rem" : isTablet ? "2.5rem" : "3.5rem",
        fontWeight: 800,
        marginBottom: "1rem",
        lineHeight: 1.2,
        background: "linear-gradient(135deg, #1e40af, #7c3aed)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      },
      subtitle: {
        fontSize: isMobile ? "1rem" : "1.25rem",
        color: "#4b5563",
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: 1.6,
      },
      grid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 2fr",
        gap: isMobile ? "2rem" : "3rem",
      },
      contactCard: {
        background: "white",
        borderRadius: "20px",
        padding: "1.5rem",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        opacity: 0,
        border: "2px solid transparent",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      contactIconContainer: {
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      contactInfo: {
        flex: 1,
      },
      contactTitle: {
        fontSize: "1.125rem",
        fontWeight: 700,
        color: "#111827",
        marginBottom: "0.25rem",
        transition: "color 0.3s ease",
      },
      contactText: {
        fontSize: "1rem",
        fontWeight: 600,
        color: "#374151",
        marginBottom: "0.25rem",
      },
      contactDescription: {
        fontSize: "0.875rem",
        color: "#6b7280",
      },
      socialContainer: {
        background: "linear-gradient(135deg, white, #f8fafc)",
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        marginTop: "2rem",
        border: "1px solid #e5e7eb",
        opacity: 0,
      },
      socialTitle: {
        fontSize: "1.25rem",
        fontWeight: 700,
        color: "#111827",
        marginBottom: "1.5rem",
        textAlign: "center",
      },
      socialGrid: {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
      },
      socialLink: {
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 600,
        color: "white",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: "scale(1)",
      },
      formContainer: {
        background: "white",
        borderRadius: "24px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
        padding: isMobile ? "1.5rem" : "2.5rem",
        opacity: 0,
        border: "1px solid #e5e7eb",
      },
      successContainer: {
        textAlign: "center",
        padding: isMobile ? "2rem 0" : "3rem 0",
      },
      successIcon: {
        width: "6rem",
        height: "6rem",
        margin: "0 auto 2rem",
        position: "relative",
      },
      successCheckmark: {
        width: "100%",
        height: "100%",
      },
      successTitle: {
        fontSize: "1.75rem",
        fontWeight: 700,
        color: "#111827",
        marginBottom: "1rem",
        opacity: 0,
        animation: "fadeIn 0.5s ease-out 0.8s forwards",
      },
      successMessage: {
        fontSize: "1.125rem",
        color: "#6b7280",
        opacity: 0,
        animation: "fadeIn 0.5s ease-out 1s forwards",
      },
      formGrid: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: "1.5rem",
      },
      formGroup: {
        marginBottom: "1.5rem",
      },
      label: {
        display: "block",
        fontSize: "0.875rem",
        fontWeight: 600,
        color: "#374151",
        marginBottom: "0.5rem",
        transition: "color 0.3s ease",
      },
      input: {
        width: "100%",
        padding: "1rem 1.25rem",
        background: "#f8fafc",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "1rem",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        outline: "none",
      },
      textarea: {
        width: "100%",
        padding: "1rem 1.25rem",
        background: "#f8fafc",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "1rem",
        minHeight: "10rem",
        resize: "vertical",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        outline: "none",
      },
      formFooter: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        paddingTop: "1rem",
        marginTop: "1rem",
      },
      requiredNote: {
        fontSize: "0.875rem",
        color: "#6b7280",
        fontStyle: "italic",
      },
      submitButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        color: "white",
        padding: "1rem 2.5rem",
        borderRadius: "50px",
        border: "none",
        fontSize: "1rem",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
        position: "relative",
        overflow: "hidden",
      },
      submitIcon: {
        width: "1.25rem",
        height: "1.25rem",
        transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    };
  };

  const [styles, setStyles] = useState(getResponsiveStyles());

  useEffect(() => {
    const handleResize = () => {
      setStyles(getResponsiveStyles());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSocialHover = (index, isHovering) => {
    setHoverStates((prev) => ({
      ...prev,
      social: {
        ...prev.social,
        [index]: isHovering,
      },
    }));
  };

  const handleCardHover = (index, isHovering) => {
    setHoverStates((prev) => ({
      ...prev,
      cards: {
        ...prev.cards,
        [index]: isHovering,
      },
    }));
  };

  return (
    <section id="contact" style={styles.section}>
      {/* Animated background elements */}
      <div
        style={{
          ...styles.backgroundElement,
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          top: "10%",
          left: "5%",
          animationDelay: "0s",
        }}
      />
      <div
        style={{
          ...styles.backgroundElement,
          background: "linear-gradient(135deg, #10b981, #0ea5e9)",
          bottom: "10%",
          right: "5%",
          animationDelay: "2s",
        }}
      />

      <div style={styles.container}>
        {/* Header */}
        <div className="stagger-animation" style={styles.header}>
          <div style={styles.badge} className="animate-bounce-in">
            Get In Touch
          </div>
          <h1 style={styles.title} className="animate-slide-left">
            <span>Let's Build </span>
            <span style={{ display: "block" }}>Together</span>
          </h1>
          <p style={styles.subtitle} className="animate-fade-in">
            Ready to transform your business? Contact us for a free consultation
          </p>
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={styles.grid}>
            {/* Contact Information */}
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="stagger-animation hover-lift"
                    style={{
                      ...styles.contactCard,
                      borderColor: hoverStates.cards[index]
                        ? item.color
                        : "transparent",
                    }}
                    onMouseEnter={() => handleCardHover(index, true)}
                    onMouseLeave={() => handleCardHover(index, false)}
                  >
                    <div
                      style={{
                        ...styles.contactIconContainer,
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                        transform: hoverStates.cards[index]
                          ? "rotate(10deg) scale(1.1)"
                          : "rotate(0) scale(1)",
                      }}
                    >
                      <div style={{ color: "white" }}>{item.icon}</div>
                    </div>
                    <div style={styles.contactInfo}>
                      <h3
                        style={{
                          ...styles.contactTitle,
                          color: hoverStates.cards[index]
                            ? item.color
                            : "#111827",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={styles.contactText}>{item.info}</p>
                      <p style={styles.contactDescription}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div
                className="stagger-animation hover-lift"
                style={styles.socialContainer}
              >
                <h3 style={styles.socialTitle}>Follow Us</h3>
                <div style={styles.socialGrid}>
                  {socialLinks.map((social, index) => (
                    <div
                      key={social.name}
                      className="social-link hover-lift"
                      style={{
                        ...styles.socialLink,
                        background: `linear-gradient(135deg, ${social.color}, ${social.color}cc)`,
                        transform: hoverStates.social[index]
                          ? "scale(1.2) rotate(5deg)"
                          : "scale(1) rotate(0)",
                      }}
                      onMouseEnter={() => handleSocialHover(index, true)}
                      onMouseLeave={() => handleSocialHover(index, false)}
                      onClick={() =>
                        window.open(
                          `https://${social.name.toLowerCase()}.com`,
                          "_blank",
                        )
                      }
                    >
                      {social.name.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="stagger-animation hover-glow"
              style={styles.formContainer}
            >
              {submitted ? (
                <div style={styles.successContainer}>
                  <div style={styles.successIcon}>
                    <svg style={styles.successCheckmark} viewBox="0 0 52 52">
                      <circle
                        className="success-checkmark-circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                      <path
                        className="success-checkmark-circle"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        d="M14 27l8 8 16-16"
                      />
                    </svg>
                  </div>
                  <h3 style={styles.successTitle}>Message Sent!</h3>
                  <p style={styles.successMessage}>
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div style={styles.formGrid}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="John Doe"
                        className="input-focus-effect ripple-effect"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="john@company.com"
                        className="input-focus-effect ripple-effect"
                      />
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Your Company"
                      className="input-focus-effect ripple-effect"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={styles.textarea}
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      className="input-focus-effect ripple-effect"
                    />
                  </div>

                  <div style={styles.formFooter}>
                    <div style={styles.requiredNote}>* Required fields</div>
                    <button
                      type="submit"
                      className="submit-btn hover-lift animate-pulse-glow"
                      style={{
                        ...styles.submitButton,
                        transform: hoverStates.submit
                          ? "scale(1.05)"
                          : "scale(1)",
                      }}
                      onMouseEnter={() =>
                        setHoverStates((prev) => ({ ...prev, submit: true }))
                      }
                      onMouseLeave={() =>
                        setHoverStates((prev) => ({ ...prev, submit: false }))
                      }
                    >
                      <span>Send Message</span>
                      <Send
                        style={{
                          ...styles.submitIcon,
                          transform: hoverStates.submit
                            ? "translateX(8px)"
                            : "translateX(0)",
                        }}
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

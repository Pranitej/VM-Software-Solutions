import { useState, useEffect } from "react";
import { ChevronUp, ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  useEffect(() => {
    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
        100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
      }
      
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes slideIn {
        0% { transform: translateY(20px) scale(0.8); opacity: 0; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
      }
      
      @keyframes slideOut {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(20px) scale(0.8); opacity: 0; }
      }
      
      .scroll-top-enter {
        animation: slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .scroll-top-exit {
        animation: slideOut 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
      }
      
      .scroll-top-hover {
        animation: bounce 1s ease-in-out infinite, float 3s ease-in-out infinite;
      }
      
      .scroll-top-pulse {
        animation: pulse 2s ease-in-out infinite;
      }
      
      .scroll-top-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    const toggleVisibility = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Create ripple effect
    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 600);

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getButtonStyles = () => {
    const baseStyles = {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      width: "3.5rem",
      height: "3.5rem",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      overflow: "hidden",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      boxShadow: isHovered
        ? "0 10px 30px rgba(59, 130, 246, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)"
        : "0 5px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      background: `conic-gradient(
        from 0deg at 50% 50%,
        #3b82f6 ${scrollProgress}%,
        #8b5cf6 ${scrollProgress}%
      )`,
    };

    if (isVisible) {
      baseStyles.opacity = 1;
      baseStyles.transform = isHovered ? "scale(1.1)" : "scale(1)";
      baseStyles.animation = isHovered
        ? "bounce 1s ease-in-out infinite, float 3s ease-in-out infinite"
        : "pulse 2s ease-in-out infinite";
    } else {
      baseStyles.opacity = 0;
      baseStyles.transform = "translateY(20px) scale(0.8)";
      baseStyles.pointerEvents = "none";
    }

    return baseStyles;
  };

  const getIconStyles = () => ({
    width: "1.5rem",
    height: "1.5rem",
    color: "white",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.2)" : "scale(1)",
  });

  const getProgressRingStyles = () => ({
    position: "absolute",
    top: "-3px",
    left: "-3px",
    right: "-3px",
    bottom: "-3px",
    borderRadius: "50%",
    border: "2px solid transparent",
    background: `conic-gradient(
      #3b82f6 ${scrollProgress}%,
      rgba(59, 130, 246, 0.2) ${scrollProgress}%
    ) border-box`,
    WebkitMask:
      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    opacity: scrollProgress > 0 ? 1 : 0,
    transition: "opacity 0.3s ease",
  });

  return (
    <>
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={getButtonStyles()}
        aria-label="Scroll to top"
        className={isVisible ? "scroll-top-enter" : "scroll-top-exit"}
      >
        {/* Progress Ring */}
        <div style={getProgressRingStyles()}></div>

        {/* Main icon */}
        <ArrowUp style={getIconStyles()} />

        {/* Ripple effect */}
        {clickEffect && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%) scale(0)",
              animation: "ripple 0.6s linear",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Tooltip */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              right: "50%",
              transform: "translateX(50%)",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: "500",
              whiteSpace: "nowrap",
              backdropFilter: "blur(10px)",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              animation: "slideIn 0.2s ease-out",
            }}
          >
            Back to top
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "50%",
                transform: "translateX(50%)",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid rgba(0, 0, 0, 0.8)",
              }}
            ></div>
          </div>
        )}
      </button>

      {/* Scroll indicator for large screens */}
      {window.innerWidth > 768 && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "1.5rem",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 999,
            opacity: isVisible ? 0.3 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "100px",
              background: "rgba(59, 130, 246, 0.2)",
              borderRadius: "2px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: `${scrollProgress}%`,
                background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)",
                borderRadius: "2px",
                transition: "height 0.1s ease",
              }}
            ></div>
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#60a5fa",
              fontWeight: "500",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            Scroll Progress
          </span>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

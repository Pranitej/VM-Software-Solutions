// Utility function for staggered animations
export const getAnimationDelay = (index) => ({
  animationDelay: `${index * 100}ms`,
});

// Predefined animation styles
export const animationStyles = {
  fadeIn: {
    animation: "fadeIn 0.5s ease-in-out forwards",
  },
  slideUp: {
    animation: "slideUp 0.5s ease-out forwards",
  },
  slideDown: {
    animation: "slideDown 0.5s ease-out forwards",
  },
  slideLeft: {
    animation: "slideLeft 0.5s ease-out forwards",
  },
  slideRight: {
    animation: "slideRight 0.5s ease-out forwards",
  },
  float: {
    animation: "float 3s ease-in-out infinite",
  },
  pulseSlow: {
    animation: "pulse-slow 3s ease-in-out infinite",
  },
  gradient: {
    backgroundSize: "200% 200%",
    animation: "gradient 8s ease infinite",
  },
};

const AnimatedCard = ({
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
}) => {
  const animationStyles = {
    fadeIn: { animation: "fadeIn 0.5s ease-in-out forwards" },
    slideUp: { animation: "slideUp 0.5s ease-out forwards" },
    slideDown: { animation: "slideDown 0.5s ease-out forwards" },
    slideLeft: { animation: "slideLeft 0.5s ease-out forwards" },
    slideRight: { animation: "slideRight 0.5s ease-out forwards" },
  };

  return (
    <div
      className={className}
      style={{
        ...animationStyles[animation],
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

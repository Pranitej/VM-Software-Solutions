const GradientText = ({
  children,
  className = "",
  from = "#2563eb",
  to = "#7c3aed",
}) => {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;

import { motion } from "framer-motion";

const variants = {
  primary: "bg-[var(--accent)] text-white border border-[var(--accent)] hover:bg-[var(--accent-dark)] hover:border-[var(--accent-dark)]",
  secondary: "bg-transparent text-[var(--accent)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
  outline: "bg-transparent text-[var(--accent)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-sm",
};

const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  return (
    <motion.button
      className={`rounded-md font-ui font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

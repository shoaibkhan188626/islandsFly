import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-transparent text-[var(--muted)] border border-transparent underline underline-offset-4 hover:text-[var(--text)] hover:border-transparent",
  secondary:
    "bg-transparent text-[var(--muted)] border border-transparent underline underline-offset-4 hover:text-[var(--text)] hover:border-transparent",
  outline:
    "bg-transparent text-[var(--muted)] border border-transparent underline underline-offset-4 hover:text-[var(--text)] hover:border-transparent",
  link:
    "bg-transparent text-[var(--muted)] border border-transparent underline underline-offset-4 hover:text-[var(--text)] hover:border-transparent",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-2.5 text-sm",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  as,
  className = "",
  ...props
}) => {
  const sharedClasses = `rounded-md font-ui font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === "a") {
    return (
      <a className={sharedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <motion.button
      className={sharedClasses}
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

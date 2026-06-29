import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-[var(--text)] text-[var(--bg)] border border-[var(--text)] hover:bg-[var(--muted)] hover:border-[var(--muted)]",
  secondary:
    "bg-[var(--surface-muted)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--border)]",
  outline:
    "bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--text)]",
  link: "bg-transparent text-[var(--muted)] border border-transparent underline underline-offset-4 hover:text-[var(--text)]",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs font-semibold tracking-wider uppercase",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  as,
  className = "",
  ...props
}) => {
  const sharedClasses = `rounded-md font-ui font-medium inline-flex items-center justify-center transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

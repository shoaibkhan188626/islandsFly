import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { key: "resort", label: "Resort" },
  { key: "city-hotels", label: "City Hotels" },
  { key: "guesthouse-hotels", label: "Guesthouse / Hotels" },
  { key: "liveaboard-trips", label: "Liveaboard Trips" },
];

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <motion.button
        onClick={() => setOpen((s) => !s)}
        className="text-sm font-ui uppercase tracking-[0.18em] py-1"
        style={{ color: "var(--accent)" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Categories
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 w-48 rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-md z-40 overflow-hidden"
          >
            {CATEGORIES.map((c) => (
              <Link
                key={c.key}
                to={`/categories/${c.key}`}
                className="block px-4 py-2 text-sm font-ui text-[var(--text)] hover:bg-[var(--bg)]"
                onClick={() => setOpen(false)}
              >
                {c.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'ru', label: 'Russian', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const selected = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const handleSelect = (lng) => {
    setLang(lng.code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded text-sm font-ui"
        style={{
          color: isOpen ? 'var(--accent-dark)' : 'var(--accent)',
          borderColor: isOpen ? 'var(--accent-dark)' : 'var(--accent)',
          borderWidth: '1px',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg">{selected.flag}</span>
        <span>{selected.label}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-lg z-50 overflow-hidden"
          >
            {LANGUAGES.map((l) => (
              <motion.button
                key={l.code}
                onClick={() => handleSelect(l)}
                className="w-full px-4 py-2 text-left text-sm font-ui flex items-center gap-2 whitespace-nowrap cursor-pointer"
                style={{
                  color: selected.code === l.code ? 'var(--accent-dark)' : 'var(--accent)',
                  backgroundColor: selected.code === l.code ? 'var(--surface-muted)' : 'var(--surface)',
                }}
                whileHover={{
                  backgroundColor: 'var(--surface-muted)',
                }}
              >
                <span className="text-base">{l.flag}</span>
                <span>{l.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

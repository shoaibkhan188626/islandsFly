import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import LanguageSelector from "../common/LanguageSelector";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  // MUST be declared inside the component so that t() evaluates on every language state render
  const navItems = [
    { name: t("nav.properties") || "Properties", to: "/properties" },
    { name: t("categories.title") || "Categories", to: "#", dropdown: true },
    { name: t("nav.about") || "About", to: "/about" },
    { name: t("nav.packages") || "Packages", to: "/packages" },
    { name: t("nav.journal") || "Journal", to: "/journal" },
    { name: t("nav.contact") || "Contact", to: "/contact" },
  ];

  const categoryDropdown = [
    { name: t("nav.resort") || "Resort", to: "/categories/resort" },
    {
      name: t("nav.cityHotels") || "City Hotels",
      to: "/categories/city-hotels",
    },
    {
      name: t("nav.guesthouseHotels") || "Guesthouse",
      to: "/categories/guesthouse",
    },
    { name: "Liveboard Trips", to: "/categories/liveboard-trips" },
  ];

  return (
    <header className="sticky top-0 z-40 py-4 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="bg-[#52321f]/70 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg border border-white/10">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#1a1a1a]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
                </svg>
              </div>
              <span className="hidden sm:inline font-semibold text-white text-lg tracking-tight">
                Islandsfly
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        onMouseEnter={() => setCategoriesDropdownOpen(true)}
                        onMouseLeave={() => setCategoriesDropdownOpen(false)}
                        className="text-sm font-medium text-gray-300 hover:text-white transition cursor-pointer"
                      >
                        {item.name}
                      </button>
                      {/* Dropdown Menu */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={
                          categoriesDropdownOpen
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -10, pointerEvents: "none" }
                        }
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setCategoriesDropdownOpen(true)}
                        onMouseLeave={() => setCategoriesDropdownOpen(false)}
                        className="absolute top-full left-0 mt-2 bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden w-48 z-50"
                      >
                        {categoryDropdown.map((cat) => (
                          <NavLink
                            key={cat.to}
                            to={cat.to}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm font-medium transition ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "text-gray-300 hover:bg-white/10 hover:text-white"
                              }`
                            }
                          >
                            {cat.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition ${
                        isActive
                          ? "text-white underline underline-offset-4"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Right Section: Language Selector + Theme Toggle + Email Link */}
            <div className="hidden sm:flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
              {/* <a
                href="mailto:resacoord@islandsfly.com"
                className="text-sm font-medium text-gray-300 hover:text-white transition whitespace-nowrap"
              >
                {t("nav.contact") || "Contact"}
              </a> */}
            </div>

            {/* Mobile Header Elements */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSelector />
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <i
                  className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-list"} fs-4`}
                ></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu Open Drawer */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2"
            >
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() =>
                          setMobileCategoriesOpen(!mobileCategoriesOpen)
                        }
                        className="w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition flex items-center justify-between"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition ${
                            mobileCategoriesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </button>
                      {mobileCategoriesOpen && (
                        <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-white/10">
                          {categoryDropdown.map((cat) => (
                            <NavLink
                              key={cat.to}
                              to={cat.to}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileCategoriesOpen(false);
                              }}
                              className={({ isActive }) =>
                                `px-3 py-2 text-sm font-medium rounded-lg transition ${
                                  isActive
                                    ? "bg-white/20 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-white/10"
                                }`
                              }
                            >
                              {cat.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium rounded-lg transition ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <a
                href="mailto:resacoord@islandsfly.com"
                className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition"
              >
                {t("nav.contact") || "Contact"}
              </a>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

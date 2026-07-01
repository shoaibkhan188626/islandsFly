import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "../common/ThemeToggle";
import LanguageSelector from "../common/LanguageSelector";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
    setCategoriesDropdownOpen(false);
  }, [location.pathname]);

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
    <header className="sticky top-0 z-50 px-3 py-3 sm:px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="rounded-2xl lg:rounded-full border border-white/10 bg-[#52321f]/70 px-4 py-3 shadow-lg backdrop-blur-md sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white sm:h-10 sm:w-10">
                <svg
                  className="h-5 w-5 text-[#1a1a1a] sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
                </svg>
              </div>

              <span className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
                Islandsfly
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-6">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setCategoriesDropdownOpen(true)}
                      onMouseLeave={() => setCategoriesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 text-sm font-medium text-gray-300 transition hover:text-white"
                        aria-expanded={categoriesDropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            categoriesDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {categoriesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full z-50 mt-3 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]/95 shadow-xl backdrop-blur-md"
                          >
                            {categoryDropdown.map((cat) => (
                              <NavLink
                                key={cat.to}
                                to={cat.to}
                                className={({ isActive }) =>
                                  `block px-4 py-3 text-sm font-medium transition ${
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
                        )}
                      </AnimatePresence>
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

            {/* Right Controls - Desktop */}
            <div className="hidden items-center gap-3 sm:gap-4 lg:flex">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Right Controls - Mobile/Tablet */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
              <LanguageSelector />
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full p-2 text-white transition hover:bg-white/10 hover:text-gray-200 focus:outline-none"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile / Tablet Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="mt-4 flex max-h-[75vh] flex-col gap-2 overflow-y-auto border-t border-white/10 pt-4 lg:hidden"
              >
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.name}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileCategoriesOpen(!mobileCategoriesOpen)
                          }
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                          aria-expanded={mobileCategoriesOpen}
                        >
                          {item.name}
                          <svg
                            className={`h-4 w-4 transition-transform ${
                              mobileCategoriesOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {mobileCategoriesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 ml-2 flex flex-col gap-2 overflow-hidden border-l border-white/10 pl-4"
                            >
                              {categoryDropdown.map((cat) => (
                                <NavLink
                                  key={cat.to}
                                  to={cat.to}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileCategoriesOpen(false);
                                  }}
                                  className={({ isActive }) =>
                                    `rounded-lg px-3 py-2 text-sm font-medium transition ${
                                      isActive
                                        ? "bg-white/20 text-white"
                                        : "text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`
                                  }
                                >
                                  {cat.name}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `rounded-lg px-3 py-2 text-sm font-medium transition ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "text-gray-400 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  );
                })}

                <a
                  href="mailto:resacoord@islandsfly.com"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                  {t("nav.contact") || "Contact"}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;

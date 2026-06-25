import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import LanguageSelector from "../common/LanguageSelector";
import ThemeToggle from "../common/ThemeToggle";
import {
  fetchWeatherData,
  getWeatherDescription,
} from "../../services/realtimeApi";
import { useLanguage } from "../../context/LanguageContext";
import CategoriesDropdown from "../common/CategoriesDropdown";

const navItems = [
  { key: "properties", to: "/#properties" },
  { key: "about", to: "/about" },
];

const Header = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeatherData();
      setWeather(data);
      setLoading(false);
    };

    getWeather();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl shadow-sm transition-colors duration-300">
      <div className="mx-auto max-w-[1600px] px-8 py-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            {/* Weather */}
            {!loading && weather && (
              <motion.div
                className="flex items-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-wider"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="font-semibold text-[var(--text)]">
                  {t("top.maldives")}: {weather.temperature_2m}°C
                </span>

                <span className="text-[var(--border)]">|</span>

                <span className="text-[var(--muted)]">
                  {getWeatherDescription(weather.weather_code)}
                </span>
              </motion.div>
            )}

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/"
                className="font-ballet text-4xl text-[var(--accent)] whitespace-nowrap"
              >
                Islandsfly
              </Link>
            </motion.div>
          </div>

          {/* Center Navigation */}
          <div className="flex justify-center">
            <nav className="hidden lg:flex items-center gap-2 rounded-full bg-[var(--surface-muted)] px-4 py-2 ring-1 ring-[var(--border)] shadow-sm backdrop-blur-md">
              <CategoriesDropdown />

              {navItems.map((item, idx) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0.5, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => {
                      const base =
                        "rounded-full px-5 py-2 text-xs uppercase tracking-[0.18em] transition whitespace-nowrap";

                      return isActive
                        ? `${base} bg-[var(--accent)]/20 text-[var(--accent-dark)] font-semibold`
                        : `${base} text-[var(--muted)] hover:text-[var(--text)]`;
                    }}
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 justify-self-end">
            <ThemeToggle />

            <LanguageSelector />

            <Link
              to="/contact"
              className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-5 py-2 text-xs uppercase tracking-[0.15em] text-[var(--text)] transition hover:bg-[var(--surface)] whitespace-nowrap"
            >
              Contact
            </Link>

            <Link to="/book">
              <Button size="sm">Book</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

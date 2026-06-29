import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-12 bg-[#2f1b12] text-[#d6b895]">
      <Container>
        <div className="py-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#52321f] flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c2996e"
                  strokeWidth="1.5"
                >
                  <path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
                </svg>
              </div>
              <div className="font-hero text-lg text-[#c2996e]">IslandsFly</div>
            </div>

            <p className="mt-6 max-w-sm text-sm text-[#d6b895] leading-relaxed">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com/islandsfly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#52321f] hover:bg-[#c2996e] hover:text-[#2f1b12] transition-colors duration-200 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/islands_fly_maldives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#52321f] hover:bg-[#c2996e] hover:text-[#2f1b12] transition-colors duration-200 flex items-center justify-center"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@islandsfly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#52321f] hover:bg-[#c2996e] hover:text-[#2f1b12] transition-colors duration-200 flex items-center justify-center"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-hero text-sm text-[#f3e6d6] mb-4 uppercase tracking-widest">
              {t("footer.explore")}
            </h5>
            <ul className="space-y-3 text-sm text-[#d6b895]">
              <li>
                <Link to="/" className="hover:underline">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:underline">
                  {t("nav.properties")}
                </Link>
              </li>
              <li>
                <Link to="/resort" className="hover:underline">
                  {t("nav.resort")}
                </Link>
              </li>
              <li>
                <Link to="/city-hotels" className="hover:underline">
                  {t("nav.cityHotels")}
                </Link>
              </li>
              <li>
                <Link to="/guesthouse-hotels" className="hover:underline">
                  {t("nav.guesthouseHotels")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-hero text-sm text-[#f3e6d6] mb-4 uppercase tracking-widest">
              {t("footer.company")}
            </h5>
            <ul className="space-y-3 text-sm text-[#d6b895]">
              <li>
                <Link to="/about" className="hover:underline">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  {t("nav.terms")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  {t("nav.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-hero text-sm text-[#f3e6d6] mb-4 uppercase tracking-widest">
              {t("footer.getInTouch")}
            </h5>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <div>
                  <div>{t("footer.address")}</div>
                  <div className="mt-2 text-xs">
                    {t("footer.hotline")}:{" "}
                    <a
                      href="tel:+9609933319"
                      className="hover:text-white transition-colors duration-200 font-medium"
                    >
                      +960 9933319
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:resacoord@islandsfly.com"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope className="flex-shrink-0" />
                <span>resacoord@islandsfly.com</span>
              </a>

              <a
                href="tel:+9609334441"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <FaPhone className="flex-shrink-0" />
                <span>+960 9334441</span>
              </a>

              <a
                href="https://wa.me/9609334441"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <FaWhatsapp className="flex-shrink-0" />
                <span>+960 9334441</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3f2a20] pt-6 pb-8 text-sm text-[#b08b64] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>{t("footer.rights")}</div>
          <div className="flex flex-wrap gap-6">
            <Link to="/terms" className="hover:underline">
              {t("footer.terms")}
            </Link>
            <Link to="/privacy" className="hover:underline">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

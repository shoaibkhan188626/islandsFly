import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#2f1b12] text-[#d6b895]">
      <Container>
        <div className="py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#52321f] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c2996e" strokeWidth="1.5"><path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z"/></svg>
              </div>
              <div className="font-hero text-lg text-[#c2996e]">IslandsFly</div>
            </div>

            <p className="mt-6 max-w-sm text-sm text-[#d6b895]">Islandsfly is your trusted partner for discovering the beauty of the Maldives. We offer handpicked accommodations and experiences to make your dream vacation a reality.</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#52321f] flex items-center justify-center"><FaFacebookF /></div>
              <div className="w-10 h-10 rounded-full bg-[#52321f] flex items-center justify-center"><FaInstagram /></div>
              <div className="w-10 h-10 rounded-full bg-[#52321f] flex items-center justify-center"><FaYoutube /></div>
            </div>
          </div>

          <div>
            <h5 className="font-hero text-sm text-[#f3e6d6] mb-4">Explore</h5>
            <ul className="space-y-3 text-sm text-[#d6b895]">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/properties" className="hover:underline">Properties</Link></li>
              <li><Link to="/resort" className="hover:underline">Resort</Link></li>
              <li><Link to="/city-hotels" className="hover:underline">City Hotels</Link></li>
              <li><Link to="/guesthouse-hotels" className="hover:underline">Guesthouse/Hotels</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-hero text-sm text-[#f3e6d6] mb-4">Company</h5>
            <ul className="space-y-3 text-sm text-[#d6b895]">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-hero text-sm text-[#f3e6d6] mb-4">Get In Touch</h5>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  <div>H9/15/01</div>
                  <div>K. Hulhumale' Maldives</div>
                  <div className="mt-1">Hotline: +960 9933319</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <div>resacoord@islandsfly.com</div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone />
                <div>+960 9334441</div>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp />
                <div>+960 9334441</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3f2a20] pt-6 pb-8 text-sm text-[#b08b64] flex items-center justify-between">
          <div>© 2026 Islandsfly. All rights reserved.</div>
          <div className="flex gap-6">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}


import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <header className="bg-[#47261a] text-white py-12">
        <Container>
          <h1 className="text-3xl md:text-4xl font-hero text-center">Get in Touch</h1>
          <p className="text-center mt-2 text-sm text-white/80">Have questions? We'd love to hear from you.</p>
        </Container>
      </header>

      <section className="py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 bg-[var(--surface)] text-[var(--text)] rounded-xl p-6 shadow-md border border-[var(--border)]">
              <h3 className="font-hero text-xl">Send us a Message</h3>
              <p className="text-sm text-[var(--muted)] mt-1">Fill out the form below and we'll get back to you shortly</p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] rounded px-3 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="Your Name" />
                  <input className="border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] rounded px-3 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="Email Address" />
                </div>

                <input className="w-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] rounded px-3 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="Subject" />

                <textarea className="w-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] rounded px-3 py-2 h-40 resize-none focus:outline-none focus:border-[var(--accent)]" placeholder="Message" />

                <div className="pt-4">
                  <Button>Send Message</Button>
                </div>
              </form>
            </div>

            <aside className="bg-[#47261a] text-white rounded-xl p-6">
              <h4 className="font-hero text-lg">Contact Information</h4>
              <p className="text-sm text-white/80 mt-2">Reach out to us through any of these channels</p>

              <div className="mt-4 space-y-3">
                <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5 text-white/90" />
                  <div>
                    <div className="text-xs text-white/80">Email</div>
                    <div className="text-sm">resacoord@islandsfly.com</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                  <FaPhone className="w-5 h-5 text-white/90" />
                  <div>
                    <div className="text-xs text-white/80">Phone</div>
                    <div className="text-sm">+960 9334441</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-white/90" />
                  <div>
                    <div className="text-xs text-white/80">WhatsApp</div>
                    <div className="text-sm">+960 9334441</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-white/90" />
                  <div>
                    <div className="text-xs text-white/80">Address</div>
                    <div className="text-sm">H9/15/01, K. Hulhumale', Maldives</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-xs text-white/80">Follow Us</div>
                <div className="flex gap-3 mt-3">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center"><FaFacebookF /></div>
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center"><FaInstagram /></div>
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center"><FaYoutube /></div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

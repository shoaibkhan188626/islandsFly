import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import ResortCard from "../components/resort/ResortCard";
import { featuredResorts } from "../data/resorts";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  // Retrieve translated array arrays with fallbacks
  const travelHighlights = t("home.offer.highlights") || [];
  const reviews = t("home.traveler.reviews") || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="space-y-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="text-sm uppercase track-tight text-[var(--muted)] font-ui"
            >
              {t("nav.properties")}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-hero font-semibold leading-tight"
            >
              {t("home.hero.title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base text-[var(--muted)] max-w-lg"
            >
              {t("home.hero.subtitle")}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                as={Link}
                to="/book"
                size="md"
                className="w-full sm:w-auto"
              >
                {t("home.buttons.plan")}
              </Button>
              <Button
                as="a"
                href="#experience"
                size="md"
                className="w-full sm:w-auto"
              >
                {t("home.buttons.explore")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 relative h-80 md:h-[420px] overflow-hidden rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Maldives"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-mono">
              4.1694° N, 73.5093° E
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="experience" className="bg-[var(--surface-muted)] py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              {t("home.offer.tag")}
            </p>
            <h2 className="text-3xl font-hero text-[var(--text)] font-semibold mb-4">
              {t("home.offer.title")}
            </h2>
            <p className="text-sm text-[var(--muted)]">
              {t("home.offer.subtitle")}
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={containerVariants}
          >
            {travelHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
              >
                <h3 className="text-lg font-hero text-[var(--text)] font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Featured Resorts Section */}
      <Container className="space-y-16">
        <section className="space-y-6">
          <motion.div
            className="flex items-end justify-between"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase tracking-widest text-[var(--muted)] font-ui">
                {t("home.featured.tag")}
              </p>
              <h2 className="mt-2 text-2xl font-hero text-[var(--text)] font-semibold">
                {t("home.featured.title")}
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/book"
                className="text-sm text-[var(--accent)] hover:text-[var(--text)] font-medium transition"
              >
                {t("home.featured.cta")}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredResorts.map((resort) => (
              <motion.div key={resort.id} variants={itemVariants}>
                <ResortCard resort={resort} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Reviews Section */}
        <motion.section
          className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                {t("home.traveler.tag")}
              </p>
              <h2 className="text-2xl font-hero text-[var(--text)] font-semibold leading-snug">
                {t("home.traveler.title")}
              </h2>
            </div>
            <motion.div
              className="space-y-6 border-l-2 border-[var(--border)] pl-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reviews.map((r, idx) => (
                <motion.blockquote
                  key={idx}
                  variants={itemVariants}
                  className="text-sm text-[var(--muted)] leading-relaxed italic"
                >
                  "{r.quote}" —{" "}
                  <span className="font-ui text-xs uppercase tracking-wider not-italic font-semibold text-[var(--text)]">
                    {r.author}
                  </span>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </Container>
    </motion.div>
  );
};

export default Home;

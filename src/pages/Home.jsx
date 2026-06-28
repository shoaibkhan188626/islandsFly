import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import ResortCard from "../components/resort/ResortCard";
import { featuredResorts, travelHighlights, reviews } from "../data/resorts";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
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
    <motion.div className="space-y-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <section className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div className="lg:col-span-5 space-y-6" variants={containerVariants}>
            <motion.span variants={itemVariants} className="text-sm uppercase track-tight text-[var(--muted)] font-ui">{t('nav.properties')}</motion.span>
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-hero font-semibold leading-tight">{t('home.hero.title')}</motion.h1>
            <motion.p variants={itemVariants} className="text-base text-[var(--muted)] max-w-lg">{t('home.hero.subtitle')}</motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button as={Link} to="/book" size="md" className="w-full sm:w-auto">
                {t('home.buttons.plan')}
              </Button>
              <Button as="a" href="#experience" size="md" className="w-full sm:w-auto">
                {t('home.buttons.explore')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 relative h-80 md:h-[420px] overflow-hidden rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1600" alt="Maldives aerial" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 bg-[var(--surface)]/90 border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)] font-ui">01° 50′ N / 73° 30′ E</div>
          </motion.div>
        </div>
      </section>

      <Container>
        <section id="experience" className="space-y-8">
          <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase track-tight text-[var(--muted)] font-ui">What we offer</p>
              <h2 className="mt-3 text-2xl font-hero">A travel experience shaped around you.</h2>
            </motion.div>
            <motion.p variants={itemVariants} className="max-w-xl text-sm text-[var(--muted)]">Every booking includes transfer coordination, resort recommendations, and round-the-clock concierge support.</motion.p>
          </motion.div>

          <motion.div className="grid gap-6 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {travelHighlights.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="text-lg font-hero text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="space-y-6">
          <motion.div className="flex items-end justify-between" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase track-tight text-[var(--muted)] font-ui">Featured stays</p>
              <h2 className="mt-2 text-2xl font-hero">Handpicked escapes</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/book" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">Start booking →</Link>
            </motion.div>
          </motion.div>

          <motion.div className="grid gap-6 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {featuredResorts.map((resort) => (
              <motion.div key={resort.id} variants={itemVariants}>
                <ResortCard resort={resort} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <p className="text-sm uppercase track-tight text-[var(--muted)] font-ui">Traveler stories</p>
              <h2 className="mt-2 text-xl font-hero">Trusted service, memorable journeys.</h2>
            </div>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reviews.map((r) => (
                <motion.blockquote key={r.id} variants={itemVariants} className="text-sm text-[var(--muted)]">"{r.quote}" — <span className="font-ui text-xs uppercase text-[var(--muted)]">{r.author}</span></motion.blockquote>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </Container>
    </motion.div>
  );
};

export default Home;

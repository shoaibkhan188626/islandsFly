import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useLanguage } from "../context/LanguageContext";
import InfoCard from "../components/about/InfoCard";
import TeamMemberCard from "../components/about/TeamMemberCard";

const About = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <div className="prose max-w-none mt-8 text-[var(--text)]">
        <div className="bg-[var(--surface)]/60 rounded-md px-6 py-8 mb-8">
          <h1 className="font-hero text-4xl md:text-5xl text-center text-[var(--text)]">{t('about.title')}</h1>
          <p className="mt-6 text-center text-[var(--muted)] max-w-3xl mx-auto">
            Islands Fly Travel Agency is committed to providing exceptional support to customers seeking vacations, holidays, and leisure travel, ensuring their experiences are seamless and memorable. We are a travel agency registered in the Republic of Maldives under the Registrar of Companies of the Ministry of Economic Development on 31 of December 2024, under the registry no: C27342024
          </p>
        </div>

        <section className="py-12 bg-[var(--surface)]/30">
          <h2 className="text-3xl md:text-4xl font-hero text-[var(--accent-dark)] text-center">{t('about.why') || 'Why Choose Us?'}</h2>
          <p className="mt-4 text-center text-[var(--accent)]">We're committed to making your Maldives dream a reality.</p>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <InfoCard
            title={t('about.mission')}
            text={`At Islands Fly Maldives, our mission is to deliver affordable excellence by providing exceptional travel experiences that ensure value for every traveler. We aim to create memorable journeys through personalized itineraries, offering opportunities to connect with the Maldives vibrant culture and traditions.`}
          />

          <InfoCard
            active
            title={t('about.vision')}
            text={`To be the leading provider of affordable, luxurious, and unforgettable travel experiences, making Islands Fly Maldives the top choice for creating cherished memories in the Maldives.`}
          />

          <InfoCard
            title={t('about.dedication')}
            text={`At Islands Fly Travel Agency Maldives, our dedication goes far beyond simply arranging trips; it is about creating experiences that stay with you for a lifetime.`}
          />
        </div>

        <h3>{t('about.team')}</h3>
        <p>Meet our team of experienced travel experts</p>

        <div className="mt-6 space-y-6">
          <TeamMemberCard
            img="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60"
            role={t('about.ceo.title')}
            name={t('about.ceo.name')}
            title={t('about.ceo.tagline')}
            quote="Turning every journey to the Maldives into a memory worth keeping."
            bio="Mohamed Rifaah is the CEO and Managing Director of Islands Fly Travel Agency Maldives. With many years of experience in hospitality, guest relations, reservations, and tourism operations, he brings a deep understanding of what travelers truly need when planning their Maldives holiday."
            contact="resacoord@islandsfly.com • +960 9334441"
          />

          <TeamMemberCard
            img="https://images.unsplash.com/photo-1545996124-1f17eec1f6b9?auto=format&fit=crop&w=800&q=60"
            role="Marketing Director & Travel Advisor"
            name="Ismail Shifaaz"
            title="Marketing Leader and Travel Advisor Focused on Guest Experience and Destination Growth"
            quote="Connecting travelers with the right Maldives experience through trust, care, and creativity."
            bio="Ismail Shifaaz serves as the Marketing Director and Travel Advisor at Islands Fly Travel Agency Maldives. He helps travelers discover suitable hotels, resorts, guesthouses, liveaboards, and experiences based on their preferences."
            contact="info@islandsfly.com"
          />

          <TeamMemberCard
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60"
            role="Reservation Team"
            name="Reservation Team"
            title="Reservation Team Dedicated to Smooth Bookings and Personalized Travel Support"
            quote="Every perfect holiday begins with careful planning and personal attention."
            bio="The Reservations Team assists clients with travel inquiries, reservations, booking coordination, and guest support, ensuring that every detail is handled with care and accuracy."
            contact="resacoord@islandsfly.com • +960 9334441"
          />

          <TeamMemberCard
            img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60"
            role="Partner - Germany Market"
            name="Saurav Manandhar"
            title="Partner – Germany Market"
            quote="Connecting German travelers with the beauty, culture, and hospitality of the Maldives."
            bio="Mr. Saurav Manandhar represents Islands Fly Travel Agency Maldives as our dedicated partner for the Germany market, connecting travelers, agents and partners in Germany with trusted travel experiences across the Maldives."
            contact="info@islandsflygermany.com • (+49) 1788483293"
          />
        </div>

        <div className="mt-6">
          <LinkButton />
        </div>
      </div>
    </Container>
  );
};

const LinkButton = () => (
  <Button variant="secondary">Contact our team</Button>
);

export default About;

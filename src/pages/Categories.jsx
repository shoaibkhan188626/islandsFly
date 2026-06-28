import { useParams } from 'react-router-dom';
import Container from '../components/common/Container';
import ResortCard from '../components/resort/ResortCard';
import { featuredResorts } from '../data/resorts';
import { useLanguage } from '../context/LanguageContext';

const Categories = () => {
  const { category } = useParams();
  const { t } = useLanguage();

  const pretty = (key) => {
    if (!key) return 'All Categories';
    switch (key) {
      case 'resort':
        return 'Resorts';
      case 'city-hotels':
        return 'City Hotels';
      case 'guesthouse-hotels':
        return 'Guesthouses & Hotels';
      case 'liveaboard-trips':
        return 'Liveaboard Trips';
      default:
        return key;
    }
  };

  // Simple filtering mock: show all resorts for now; in a real app we'd filter by category
  const items = featuredResorts;

  return (
    <Container>
      <div className="mt-8">
        <h1 className="text-2xl font-hero">{category ? pretty(category) : t('categories.title')}</h1>
        <p className="text-sm text-[#6c665b] mt-2">Browse curated stays and experiences in this category.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <ResortCard key={r.id} resort={r} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;

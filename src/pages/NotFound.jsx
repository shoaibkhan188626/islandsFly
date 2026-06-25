import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <div className="grid min-h-[60vh] place-items-center">
        <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#6c665b]">{t('notfound.title')}</p>
          <h1 className="mt-4 text-4xl font-hero text-[var(--text)]">404</h1>
          <p className="mt-3 max-w-md text-sm text-[#6c665b]">{t('notfound.message')}</p>
          <Link to="/">
            <Button className="mt-6">{t('notfound.button')}</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;

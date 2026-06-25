import Container from "../components/common/Container";
import { Link } from "react-router-dom";

export default function Properties() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="font-hero text-3xl">Properties</h1>
        <p className="mt-4 text-[var(--muted)]">Browse our property categories and featured listings.</p>
        <div className="mt-6 space-x-3">
          <Link to="/resort" className="text-[var(--accent)]">Resort</Link>
          <Link to="/city-hotels" className="text-[var(--accent)]">City Hotels</Link>
          <Link to="/guesthouse-hotels" className="text-[var(--accent)]">Guesthouse/Hotels</Link>
        </div>
      </div>
    </Container>
  );
}

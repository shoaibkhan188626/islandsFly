import { Link } from "react-router-dom";
import Button from "../common/Button";

const ResortCard = ({ resort }) => {
  return (
    <article className="group overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-0.5">
      <div className="relative h-56 overflow-hidden">
        <img
          src={resort.image}
          alt={resort.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--text)]/90 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[var(--bg)] font-ui">
          {resort.type}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-lg font-hero text-[var(--text)]">
            {resort.name}
          </h3>
          <p className="mt-1 text-xs text-[var(--muted)]">{resort.location}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              From
            </p>
            <p className="text-lg font-semibold text-[var(--text)]">
              ${resort.price}
            </p>
          </div>
          <Link to="/book" state={{ resortName: resort.name }}>
            <Button size="sm">Book</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ResortCard;

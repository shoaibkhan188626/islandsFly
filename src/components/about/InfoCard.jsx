export default function InfoCard({ title, text, active = false }) {
  return (
    <article
      className={`rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-sm transition duration-300 ${
        active ? 'ring-2 ring-[var(--accent)]/30' : ''
      } hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-md`}
    >
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-[var(--accent)]/15 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            className="w-10 h-10"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      </div>

      <h4 className="mt-6 text-center font-hero text-lg uppercase tracking-wide text-[var(--text)]">
        {title}
      </h4>

      <p className="mt-4 text-sm text-[var(--muted)]">{text}</p>
    </article>
  );
}

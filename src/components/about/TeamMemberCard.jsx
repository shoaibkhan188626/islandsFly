import { motion } from "framer-motion";

export default function TeamMemberCard({
  img = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
  role = "CEO / MANAGING DIRECTOR",
  name = "Name Here",
  title = "",
  quote = "",
  bio = "",
  contact = "",
}) {
  return (
    <article className="grid gap-6 lg:grid-cols-2 items-start rounded-md border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="w-full">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-72 sm:h-80 object-cover rounded-lg shadow-sm"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="space-y-4">
        <div>
          <div className="inline-block rounded-full bg-[var(--accent)]/90 px-3 py-1 text-xs font-ui font-semibold text-[var(--bg)]">
            {role}
          </div>
        </div>

        <h3 className="text-2xl font-hero text-[var(--text)]">{name}</h3>
        {title && <p className="text-sm text-[var(--accent)]">{title}</p>}

        {quote && (
          <blockquote className="mt-2 border-l-2 border-[var(--accent)] pl-4 italic text-[var(--muted)]">
            “{quote}”
          </blockquote>
        )}

        {bio && <p className="text-sm text-[var(--muted)]">{bio}</p>}

        {contact && (
          <div className="mt-4 text-sm text-[var(--muted)]">
            <div>{contact}</div>
          </div>
        )}
      </div>
    </article>
  );
}

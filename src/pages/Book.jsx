import { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import BookingCalendar from "../components/booking/BookingCalendar";
import { featuredResorts } from "../data/resorts";
import { daysBetween, formatDateLabel, formatRangeLabel } from "../utils/dateUtils";
import { useLanguage } from "../context/LanguageContext";

const options = ["Island Resort", "Liveaboard Safari", "Boutique Guesthouse"];

const Book = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const selectedResortName = location.state?.resortName || featuredResorts[0].name;
  const [selectedResort, setSelectedResort] = useState(selectedResortName);
  const [travelType, setTravelType] = useState(options[0]);
  const [guestCount, setGuestCount] = useState(2);
  const [range, setRange] = useState({ start: null, end: null, month: new Date() });
  const [submitted, setSubmitted] = useState(false);

  const nights = daysBetween(range.start, range.end);

  const handleConfirm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
        <section className="space-y-6">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[0_20px_60px_rgba(16,24,40,0.08)]">
            <span className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">{t('booking.details.title')}</span>
            <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">{t('booking.details.title')}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{t('booking.details.subtitle')}</p>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_60px_rgba(16,24,40,0.08)]">
            <form className="space-y-6" onSubmit={handleConfirm}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[var(--muted)]">
                  {t('booking.form.resort_selection')}
                  <select
                    className="w-full rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                    value={selectedResort}
                    onChange={(e) => setSelectedResort(e.target.value)}
                  >
                    {featuredResorts.map((resort) => (
                      <option key={resort.id} value={resort.name} className="bg-[var(--surface)] text-[var(--text)]">
                        {resort.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm text-[var(--muted)]">
                  {t('booking.form.travel_style')}
                  <select
                    className="w-full rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                    value={travelType}
                    onChange={(e) => setTravelType(e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option} value={option} className="bg-[var(--surface)] text-[var(--text)]">
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[var(--muted)]">
                  {t('booking.form.guests')}
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </label>
                <div className="space-y-2 text-sm text-[var(--muted)]">
                  <span>{t('booking.form.selected_window')}</span>
                  <div className="rounded-full bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text)]">
                    {formatRangeLabel(range.start, range.end)}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-[var(--surface-muted)] p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">{t('booking.form.arrival')}</p>
                  <p className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {range.start ? formatDateLabel(range.start) : "—"}
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-[var(--surface-muted)] p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">{t('booking.form.departure')}</p>
                  <p className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {range.end ? formatDateLabel(range.end) : "—"}
                  </p>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                {t('booking.form.confirm_button')}
              </Button>

              {submitted && (
                <div className="rounded-[1.75rem] border border-[#d9e1d4] bg-[#eef7ee] p-5 text-sm text-[#1c4727]">
                  {t('booking.submitted')}
                </div>
              )}
            </form>
          </div>
        </section>

        <aside className="space-y-6">
          <BookingCalendar value={range} onChange={setRange} />

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
            <span className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">Booking summary</span>
            <div className="mt-6 space-y-4 text-[var(--muted)]">
              <div className="rounded-full bg-[var(--surface-muted)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Resort</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{selectedResort}</p>
              </div>
              <div className="rounded-full bg-[var(--surface-muted)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Travel style</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{travelType}</p>
              </div>
              <div className="rounded-full bg-[var(--surface-muted)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Guests</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{guestCount}</p>
              </div>
              <div className="rounded-full bg-[var(--surface-muted)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Nights</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{nights || "Select arrival & departure"}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default Book;

import { useMemo } from "react";
import { sameDay } from "../../utils/dateUtils";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const normalizeDate = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const isBetween = (date, start, end) => {
  if (!start || !end) return false;
  const normalized = normalizeDate(date).getTime();
  const normalizedStart = normalizeDate(start).getTime();
  const normalizedEnd = normalizeDate(end).getTime();
  return normalized > normalizedStart && normalized < normalizedEnd;
};

// Check if a date lies in the past compared to today
const isPast = (date) => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return normalizeDate(date).getTime() < today.getTime();
};

const BookingCalendar = ({ value, onChange }) => {
  const displayMonth = useMemo(() => {
    const source = value?.month || new Date();
    return new Date(source.getFullYear(), source.getMonth(), 1);
  }, [value]);

  const monthDays = useMemo(() => {
    const year = displayMonth.getFullYear();
    const month = displayMonth.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const paddingStart = firstDayOfMonth.getDay();
    const days = [];

    for (let index = 0; index < paddingStart; index += 1) {
      days.push(null);
    }
    for (let day = 1; day <= lastDayOfMonth.getDate(); day += 1) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [displayMonth]);

  const monthLabel = useMemo(() => {
    return displayMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }, [displayMonth]);

  const handleDateClick = (date) => {
    if (!date || isPast(date)) return;
    const { start, end } = value;

    if (!start || (start && end)) {
      onChange({ start: date, end: null, month: date });
      return;
    }

    if (sameDay(start, date)) {
      onChange({ start: date, end: null, month: date });
      return;
    }

    if (date.getTime() < start.getTime()) {
      onChange({ start: date, end: start, month: date });
      return;
    }

    onChange({ start, end: date, month: start });
  };

  const updateMonth = (offset) => {
    const next = new Date(
      displayMonth.getFullYear(),
      displayMonth.getMonth() + offset,
      1,
    );
    onChange({ ...value, month: next });
  };

  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3 mb-3">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] font-ui">
            Travel calendar
          </p>
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Select dates
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => updateMonth(-1)}
            className="rounded border border-[var(--border)] px-2 py-1 text-[var(--text)] cursor-pointer"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => updateMonth(1)}
            className="rounded border border-[var(--border)] px-2 py-1 text-[var(--text)] cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--text)]">
          {monthLabel}
        </span>
        <div className="rounded-full bg-[var(--text)] px-3 py-1 text-xs text-[var(--bg)]">
          {value.start ? `Depart ${value.start.getDate()}` : "Start"}
          {value.end ? ` • Return ${value.end.getDate()}` : ""}
        </div>
      </div>

      <div className="grid grid-cols-7 items-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        {WEEK_DAYS.map((weekday) => (
          <div key={weekday}>{weekday}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {monthDays.map((date, index) => {
          if (!date)
            return (
              <div
                key={`pad-${index}`}
                className="h-9 rounded bg-[var(--bg)]"
              />
            );

          const isPastDate = isPast(date);
          const isSelected =
            sameDay(date, value.start) || sameDay(date, value.end);
          const isRange =
            value.start && value.end && isBetween(date, value.start, value.end);

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isPastDate}
              onClick={() => handleDateClick(date)}
              className={`flex h-9 items-center justify-center rounded text-sm font-medium transition ${
                isPastDate
                  ? "opacity-30 cursor-not-allowed text-[var(--muted)]"
                  : isSelected
                    ? "bg-[var(--text)] text-[var(--bg)] cursor-pointer"
                    : isRange
                      ? "bg-[var(--bg)] text-[var(--text)] cursor-pointer"
                      : "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--bg)] cursor-pointer"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BookingCalendar;

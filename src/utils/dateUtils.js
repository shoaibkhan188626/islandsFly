export const sameDay = (a, b) => {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const formatDateLabel = (date) => {
  if (!date) return "Select date";
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const formatRangeLabel = (start, end) => {
  if (!start && !end) return "Pick travel dates";
  if (start && !end) return `Depart ${formatDateLabel(start)}`;
  if (!start && end) return `Return ${formatDateLabel(end)}`;
  return `${formatDateLabel(start)} — ${formatDateLabel(end)}`;
};

export const daysBetween = (start, end) => {
  if (!start || !end) return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const startCopy = new Date(start.getTime());
  const endCopy = new Date(end.getTime());
  startCopy.setHours(0, 0, 0, 0);
  endCopy.setHours(0, 0, 0, 0);
  const diff = Math.round((endCopy.getTime() - startCopy.getTime()) / msPerDay);
  return diff > 0 ? diff : 0;
};

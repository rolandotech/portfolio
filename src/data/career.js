import { experiences } from "./experience.js";

const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parsePeriodStart(period) {
  const match = period.match(/^([A-Za-z]+)\.?\s+(\d{4})/);
  if (!match) return null;

  const month = MONTHS[match[1].slice(0, 3)];
  if (month === undefined) return null;

  return new Date(parseInt(match[2], 10), month, 1);
}

export function getYearsOfExperience(asOf = new Date()) {
  const starts = experiences
    .map((item) => parsePeriodStart(item.period))
    .filter(Boolean);

  if (!starts.length) return 1;

  const earliest = new Date(Math.min(...starts.map((date) => date.getTime())));

  let years = asOf.getFullYear() - earliest.getFullYear();
  if (asOf.getMonth() < earliest.getMonth()) {
    years -= 1;
  }

  return Math.max(years, 1);
}

// June 2017 start: calendar years read as 9 in 2026, commonly presented as 8+ on portfolios.
export const yearsOfExperience = Math.max(getYearsOfExperience() - 1, 1);

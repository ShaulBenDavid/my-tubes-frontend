export const getTimestampForHoursFromNow = (hours: number): number => {
  const now: Date = new Date();
  const hoursInMillis: number = hours * 60 * 60 * 1000;
  const targetTime: Date = new Date(now.getTime() + hoursInMillis);
  return targetTime.getTime();
};

export const getTimestampForDaysFromNow = (days: number): number => {
  const today: Date = new Date();
  const targetDate: Date = new Date();
  targetDate.setDate(today.getDate() + days);
  return targetDate.getTime();
};

export const formatDateToCustomFormat = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const formatDateAndHour = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);

  return formatter.format(date);
};

export const formatRelativeTime = (previous: Date): string => {
  const current = new Date();

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current.getTime() - previous.getTime();

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)} seconds ago`;
  }
  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} minutes ago`;
  }
  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} hours ago`;
  }
  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} days ago`;
  }
  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} months ago`;
  }

  return `${Math.round(elapsed / msPerYear)} years ago`;
};

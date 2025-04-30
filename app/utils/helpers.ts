import { format, parseISO } from "date-fns";

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), "MMMM d, yyyy");
};

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const isPM = hours ? hours >= 12 : false;
  const hour12 = hours ? hours % 12 || 12 : 12; // Convert to 12-hour format
  return `${hour12}:${minutes?.toString().padStart(2, "0")} ${
    isPM ? "PM" : "AM"
  }`;
};

export const formatDateTime = (date: string, time: string): string => {
  const dateObj = parseISO(date);
  const formattedDate = format(dateObj, "EEE, MMM d");
  return `${formattedDate} at ${formatTime(time)}`;
};

export const getSportIcon = (sportType: string): string => {
  const sportIcons: Record<string, string> = {
    "soccer": "⚽",
    "basketball": "🏀",
    "baseball": "⚾",
    "tennis": "🎾",
    "volleyball": "🏐",
    "football": "🏈",
    "running": "🏃",
    "cycling": "🚴",
    "swimming": "🏊",
    "golf": "⛳",
    "hockey": "🏒",
    "table tennis": "🏓",
    "badminton": "🏸",
    "boxing": "🥊",
    "cricket": "🏏",
    "rugby": "🏉",
    "skiing": "⛷️",
    "martial arts": "🥋",
    "yoga": "🧘",
    "hiking": "🥾",
    "surfing": "🏄",
    "skateboarding": "🛹"
  };

  return sportIcons[sportType.toLowerCase()] || "🎮";
};

export const getSpotText = (max: number, current: number): string => {
  const spotsLeft = max - current;
  if (spotsLeft === 0) return "No spots left";
  if (spotsLeft === 1) return "1 spot left";
  return `${spotsLeft} spots left`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

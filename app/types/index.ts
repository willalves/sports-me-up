export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  favoriteSports?: string[];
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  sportType: string;
  date: string;
  time: string;
  duration: number; // in minutes
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  maxParticipants: number;
  currentParticipants: number;
  participants: string[]; // User IDs
  creator: User;
  createdAt: string;
  updatedAt: string;
  skillLevel: "beginner" | "intermediate" | "advanced" | "all";
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  imageUrl?: string;
}

export interface SportType {
  id: string;
  name: string;
  icon: string;
}

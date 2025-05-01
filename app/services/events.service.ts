import type { Event } from "@/types";
import { delay } from "@/utils/helpers";

// Mock data for events
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Weekend Soccer Match",
    description:
      "Join us for a friendly 5v5 soccer match. All skill levels welcome!",
    sportType: "soccer",
    date: "2025-05-15",
    time: "10:00",
    duration: 90,
    location: "Central Park, New York",
    coordinates: {
      lat: 40.7812,
      lng: -73.9665
    },
    maxParticipants: 10,
    currentParticipants: 7,
    participants: ["1", "2", "3", "4", "5", "6", "7"],
    creator: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    createdAt: "2025-04-01T00:00:00.000Z",
    updatedAt: "2025-04-01T00:00:00.000Z",
    skillLevel: "all",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "2",
    title: "Basketball Pickup Game",
    description:
      "Looking for players for a 3v3 basketball game. Intermediate to advanced players preferred.",
    sportType: "basketball",
    date: "2025-04-16",
    time: "18:00",
    duration: 60,
    location: "Downtown YMCA, Boston",
    coordinates: {
      lat: 42.3541,
      lng: -71.0603
    },
    maxParticipants: 6,
    currentParticipants: 4,
    participants: ["2", "3", "4", "5"],
    creator: {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    createdAt: "2025-04-02T00:00:00.000Z",
    updatedAt: "2025-04-02T00:00:00.000Z",
    skillLevel: "intermediate",
    status: "completed",
    imageUrl:
      "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "3",
    title: "Volleyball at the Beach",
    description:
      "Beach volleyball session for beginners. Come learn and have fun!",
    sportType: "volleyball",
    date: "2025-04-18",
    time: "15:00",
    duration: 120,
    location: "Santa Monica Beach, CA",
    coordinates: {
      lat: 34.0091,
      lng: -118.4945
    },
    maxParticipants: 8,
    currentParticipants: 5,
    participants: ["3", "4", "5", "6", "7"],
    creator: {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    createdAt: "2025-04-03T00:00:00.000Z",
    updatedAt: "2025-04-03T00:00:00.000Z",
    skillLevel: "beginner",
    status: "cancelled",
    imageUrl:
      "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "4",
    title: "Tennis Doubles Match",
    description:
      "Looking for a doubles partner and opposing team for a friendly match.",
    sportType: "tennis",
    date: "2025-04-20",
    time: "09:00",
    duration: 120,
    location: "Central Tennis Club, Seattle",
    coordinates: {
      lat: 47.6015,
      lng: -122.3343
    },
    maxParticipants: 4,
    currentParticipants: 2,
    participants: ["4", "5"],
    creator: {
      id: "4",
      name: "Emma Wilson",
      email: "emma@example.com",
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    createdAt: "2025-04-04T00:00:00.000Z",
    updatedAt: "2025-04-04T00:00:00.000Z",
    skillLevel: "intermediate",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/8224787/pexels-photo-8224787.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "5",
    title: "Morning Run Group",
    description: "Join our casual morning run group. 5k at a moderate pace.",
    sportType: "running",
    date: "2025-05-14",
    time: "07:00",
    duration: 60,
    location: "Golden Gate Park, San Francisco",
    coordinates: {
      lat: 37.7694,
      lng: -122.4862
    },
    maxParticipants: 15,
    currentParticipants: 8,
    participants: ["5", "6", "7", "8", "9", "10", "11", "12"],
    creator: {
      id: "5",
      name: "Alex Chen",
      email: "alex@example.com",
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    createdAt: "2025-04-05T00:00:00.000Z",
    updatedAt: "2025-04-05T00:00:00.000Z",
    skillLevel: "all",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "6",
    title: "Futsal Match",
    description: "Join us for a friendly 5v5 soccer match. All skill levels welcome!",
    sportType: "soccer",
    date: "2025-06-14",
    time: "9:00",
    duration: 60,
    location: "Lille, France",
    coordinates: {
      lat: 37.7694,
      lng: -122.4862
    },
    maxParticipants: 22,
    currentParticipants: 12,
    participants: ["5", "6", "7", "8", "9", "10", "11", "12"],
    creator: {
      id: "5",
      name: "William Smith",
      email: "william@example.com",
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    createdAt: "2025-04-05T00:00:00.000Z",
    updatedAt: "2025-04-05T00:00:00.000Z",
    skillLevel: "all",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

class EventsService {
  private async simulateApiCall<T>(data: T): Promise<T> {
    // Simulate network delay
    await delay(800);

    // Simulate random failure for testing (5% chance)
    if (Math.random() < 0.05) {
      throw new Error("Network error. Please try again.");
    }

    return data;
  }

  async getEvents(): Promise<Event[]> {
    return this.simulateApiCall([...mockEvents]);
  }

  async getEventById(id: string): Promise<Event> {
    const event = mockEvents.find(e => e.id === id);

    if (!event) {
      throw new Error("Event not found");
    }

    return this.simulateApiCall({ ...event });
  }
}

export const eventsService = new EventsService();

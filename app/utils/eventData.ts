import type { Event } from "@/types";

// Mock data for events
export const mockEvents: Event[] = [
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
    description:
      "Join us for a friendly 5v5 soccer match. All skill levels welcome!",
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
  },
  {
    id: "7",
    title: "Evening Football Match",
    description: "Join a casual 7-a-side football match. Bring your friends!",
    sportType: "soccer",
    date: "2025-05-22",
    time: "19:00",
    duration: 90,
    location: "Madrid, Spain",
    coordinates: { lat: 40.4168, lng: -3.7038 },
    maxParticipants: 14,
    currentParticipants: 9,
    participants: ["13", "14", "15", "16", "17", "18", "19", "20", "21"],
    creator: {
      id: "6",
      name: "Carlos Gomez",
      email: "carlos@example.com",
      createdAt: "2025-01-02T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z"
    },
    createdAt: "2025-04-06T00:00:00.000Z",
    updatedAt: "2025-04-06T00:00:00.000Z",
    skillLevel: "intermediate",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "8",
    title: "Early Morning Yoga Session",
    description:
      "Stretch, breathe, and reset your day with our sunrise yoga class.",
    sportType: "yoga",
    date: "2025-05-10",
    time: "06:30",
    duration: 60,
    location: "Berlin, Germany",
    coordinates: { lat: 52.52, lng: 13.405 },
    maxParticipants: 20,
    currentParticipants: 12,
    participants: [
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    creator: {
      id: "7",
      name: "Lena Müller",
      email: "lena@example.com",
      createdAt: "2025-01-02T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z"
    },
    createdAt: "2025-04-06T00:00:00.000Z",
    updatedAt: "2025-04-06T00:00:00.000Z",
    skillLevel: "all",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "9",
    title: "Sunday Hike in the Alps",
    description:
      "A scenic hike through alpine trails. Intermediate fitness level required.",
    sportType: "hiking",
    date: "2025-06-01",
    time: "08:00",
    duration: 240,
    location: "Innsbruck, Austria",
    coordinates: { lat: 47.2692, lng: 11.4041 },
    maxParticipants: 10,
    currentParticipants: 6,
    participants: ["34", "35", "36", "37", "38", "39"],
    creator: {
      id: "8",
      name: "Anna Gruber",
      email: "anna@example.com",
      createdAt: "2025-01-02T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z"
    },
    createdAt: "2025-04-07T00:00:00.000Z",
    updatedAt: "2025-04-07T00:00:00.000Z",
    skillLevel: "intermediate",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/614311/pexels-photo-614311.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "10",
    title: "Friendly Basketball Game",
    description: "Come shoot some hoops in this relaxed, friendly match.",
    sportType: "basketball",
    date: "2025-04-28",
    time: "17:30",
    duration: 75,
    location: "Amsterdam, Netherlands",
    coordinates: { lat: 52.3676, lng: 4.9041 },
    maxParticipants: 10,
    currentParticipants: 5,
    participants: ["40", "41", "42", "43", "44"],
    creator: {
      id: "9",
      name: "Tom Janssen",
      email: "tom@example.com",
      createdAt: "2025-01-02T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z"
    },
    createdAt: "2025-04-07T00:00:00.000Z",
    updatedAt: "2025-04-07T00:00:00.000Z",
    skillLevel: "beginner",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "11",
    title: "Futsal Tournament Qualifier",
    description:
      "Competitive 5v5 futsal match. Sign up if you're ready to compete!",
    sportType: "futsal",
    date: "2025-05-30",
    time: "14:00",
    duration: 90,
    location: "Turin, Italy",
    coordinates: { lat: 45.0703, lng: 7.6869 },
    maxParticipants: 10,
    currentParticipants: 8,
    participants: ["45", "46", "47", "48", "49", "50", "51", "52"],
    creator: {
      id: "10",
      name: "Marco Rossi",
      email: "marco@example.com",
      createdAt: "2025-01-02T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z"
    },
    createdAt: "2025-04-07T00:00:00.000Z",
    updatedAt: "2025-04-07T00:00:00.000Z",
    skillLevel: "advanced",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "12",
    title: "Park Fitness Bootcamp",
    description:
      "Outdoor fitness session with circuits, cardio, and core training.",
    sportType: "fitness",
    date: "2025-05-18",
    time: "10:00",
    duration: 60,
    location: "Copenhagen, Denmark",
    coordinates: { lat: 55.6761, lng: 12.5683 },
    maxParticipants: 15,
    currentParticipants: 10,
    participants: ["53", "54", "55", "56", "57", "58", "59", "60", "61", "62"],
    creator: {
      id: "11",
      name: "Sara Hansen",
      email: "sara@example.com",
      createdAt: "2025-01-02T00:00:00.000Z",
      updatedAt: "2025-01-02T00:00:00.000Z"
    },
    createdAt: "2025-04-07T00:00:00.000Z",
    updatedAt: "2025-04-07T00:00:00.000Z",
    skillLevel: "all",
    status: "upcoming",
    imageUrl:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

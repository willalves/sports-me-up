import type { Event } from "@/types";
import { delay } from "@/utils/helpers";
import { mockEvents } from "@/utils/eventData";

const SIMULATE_DELAY = true;
const FAILURE_RATE = 0.05;

async function simulateApiCall<T>(data: T): Promise<T> {
  if (SIMULATE_DELAY) await delay(800);
  if (Math.random() < FAILURE_RATE) {
    throw new Error("Network error. Please try again.");
  }
  return data;
}

export async function getEvents(): Promise<Event[]> {
  return simulateApiCall([...mockEvents]);
}

export async function getEventById(id: string): Promise<Event> {
  const event = mockEvents.find(e => e.id === id);
  if (!event) {
    throw new Error("Event not found");
  }
  return simulateApiCall({ ...event });
}

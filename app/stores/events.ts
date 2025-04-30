import type { Event } from "@/types";
import { eventsService } from "@/services/events.service";

export const useEventsStore = defineStore("events", () => {
  const events = ref<Event[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const upcomingEvents = computed(() => {
    const now = new Date();
    return events.value
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  });

  const fetchEvents = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const data = await eventsService.getEvents();
      events.value = data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "Failed to fetch events";
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    events,
    isLoading,
    error,
    upcomingEvents,
    fetchEvents
  };
});

import type { Event, EventFilters } from "@/types";
import { eventsService } from "@/services/events.service";

export const useEventsStore = defineStore("events", () => {
  const events = ref<Event[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const currentFilters = ref<EventFilters>({
    sportType: "",
    location: "",
    date: null
  });

  const filteredEvents = computed(() => {
    let result = [...events.value];

    if (currentFilters.value.sportType) {
      result = result.filter(
        event =>
          event.sportType.toLowerCase() === currentFilters.value.sportType?.toLowerCase()
      );
    }

    if (currentFilters.value.location) {
      result = result.filter(event =>
        event.location
          .toLowerCase()
          .includes(currentFilters.value.location?.toLowerCase() || "")
      );
    }

    if (currentFilters.value.date) {
      const filterDate = new Date(currentFilters.value.date);
      result = result.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === filterDate.toDateString();
      });
    }

    return result;
  });

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

  const setFilters = (filters: EventFilters) => {
    currentFilters.value = filters;
  };

  const resetFilters = () => {
    currentFilters.value = {
      sportType: "",
      location: "",
      date: null
    };
  };

  return {
    events,
    isLoading,
    error,
    upcomingEvents,
    fetchEvents,
    filteredEvents,
    setFilters,
    resetFilters
  };
});

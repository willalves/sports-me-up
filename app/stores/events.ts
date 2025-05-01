import { defineStore } from "pinia";
import type { Event, EventFilters } from "@/types";
import { getEvents } from "@/services/events.service";

function normalizeString(str: string = ""): string {
  return str.trim().toLowerCase();
}

export const useEventsStore = defineStore("events", () => {
  const events = ref<Event[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const filters = ref<EventFilters>({
    sportType: "",
    location: "",
    date: null
  });

  const filteredEvents = computed(() => {
    return events.value.filter((event) => {
      const matchesSport = !filters.value.sportType || normalizeString(event.sportType) === normalizeString(filters.value.sportType);

      const matchesLocation = !filters.value.location || normalizeString(event.location).includes(normalizeString(filters.value.location));

      const matchesDate = !filters.value.date || new Date(event.date).toDateString() === new Date(filters.value.date).toDateString();

      return matchesSport && matchesLocation && matchesDate;
    });
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
      const data = await getEvents();
      events.value = data;
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : "Failed to fetch events";
    } finally {
      isLoading.value = false;
    }
  };

  const setFilters = (newFilters: Partial<EventFilters>) => {
    filters.value = { ...filters.value, ...newFilters };
  };

  const resetFilters = () => {
    filters.value = {
      sportType: "",
      location: "",
      date: null
    };
  };

  return {
    events,
    isLoading,
    error,
    filters,
    fetchEvents,
    filteredEvents,
    upcomingEvents,
    setFilters,
    resetFilters
  };
});

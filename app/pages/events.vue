<script setup lang="ts">
import { format } from "date-fns";
import type { SelectItem } from "@nuxt/ui";
import { useEventsStore } from "@/stores/events";
import { getSportIcon } from "@/utils/helpers";
import EventCard from "@/components/events/EventCard.vue";

const route = useRoute();
const eventsStore = useEventsStore();
const { filteredEvents, isLoading } = storeToRefs(eventsStore);
const { fetchEvents, setFilters, resetFilters } = eventsStore;

const sportTypes = ref([
  {
    label: "All Sports",
    value: "all"
  },
  {
    label: `${getSportIcon("soccer")} Soccer`,
    value: "soccer"
  },
  {
    label: `${getSportIcon("basketball")} Basketball`,
    value: "basketball"
  },
  {
    label: `${getSportIcon("tennis")} Tennis`,
    value: "tennis"
  },
  {
    label: `${getSportIcon("baseball")} Baseball`,
    value: "baseball"
  },
  {
    label: `${getSportIcon("hockey")} Hockey`,
    value: "hockey"
  },
  {
    label: `${getSportIcon("golf")} Golf`,
    value: "golf"
  }
] satisfies SelectItem []);

const selectedSport = ref("all");
const searchLocation = ref("");
const selectedDate = ref("");

// Initialize filters from query params
onMounted(async () => {
  if (route.query.sport) {
    selectedSport.value = route.query.sport as string;
  }

  await fetchEvents();

  // Apply filters
  applyFilters();
});

watch(() => route.query, (newQuery) => {
  if (newQuery.sport) {
    selectedSport.value = newQuery.sport as string;
    applyFilters();
  }
});

const applyFilters = () => {
  setFilters({
    sportType: selectedSport.value === "all" ? "" : selectedSport.value,
    location: searchLocation.value,
    date: selectedDate.value
  });
};

const resetCurrentFilters = () => {
  selectedSport.value = "all";
  searchLocation.value = "";
  selectedDate.value = "";
  resetFilters();
};

const hasFilters = computed(() => selectedSport.value || searchLocation.value || selectedDate.value);

// Format date for display
const formatDateForDisplay = (dateString: string): string => {
  if (!dateString) return "";
  return format(new Date(dateString), "MMMM d, yyyy");
};
</script>

<template>
  <div class="py-12">
    <UContainer class="mx-auto px-4 md:px-6">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">
          Find Events
        </h1>
        <p class="text-neutral-600 dark:text-neutral-400">
          Discover sports events happening near you.
        </p>
      </div>

      <!-- Filters -->
      <UCard
        variant="subtle"
        class="card mb-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              for="sportType"
              class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Sport Type
            </label>
            <USelect
              id="sportType"
              v-model="selectedSport"
              :items="sportTypes"
              size="xl"
              class="min-w-48 mt-2 px-4 cursor-pointer"
              @change="applyFilters"
            />
          </div>

          <div>
            <label
              for="location"
              class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Location
            </label>
            <UInput
              id="location"
              v-model="searchLocation"
              icon="i-lucide-map-pin"
              size="xl"
              type="text"
              placeholder="Enter city or area"
              class="mt-2"
              @input="applyFilters"
            />
          </div>

          <div>
            <label
              for="date"
              class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Date
            </label>
            <UInput
              id="date"
              v-model="selectedDate"
              type="date"
              size="xl"
              @input="applyFilters"
            />
          </div>
        </div>

        <div
          v-if="hasFilters"
          class="flex justify-end mt-4"
        >
          <UButton
            variant="outline"
            size="xs"
            color="neutral"
            @click="resetCurrentFilters"
          >
            Clear Filters
          </UButton>
        </div>
      </UCard>

      <!-- Results -->
      <div
        v-if="isLoading"
        class="flex justify-center py-12"
      >
        <div class="text-center">
          <Icon
            name="i-lucide-loader-2"
            class="text-4xl text-primary-500 mb-4 animate-spin"
          />
        </div>
      </div>
      <div v-else>
        <!-- Applied Filters Summary -->
        <div
          v-if="hasFilters"
          class="mb-6 flex flex-wrap gap-2 capitalize"
        >
          <UBadge
            v-if="selectedSport && selectedSport !== 'all'"
            trailing-icon="i-lucide-x"
            size="lg"
            variant="soft"
            color="primary"
            class="cursor-pointer"
            @click="selectedSport = 'all'; applyFilters()"
          >
            {{ selectedSport }}
          </UBadge>

          <UBadge
            v-if="searchLocation"
            trailing-icon="i-lucide-x"
            size="lg"
            variant="soft"
            color="primary"
            class="cursor-pointer"
            @click="searchLocation = ''; applyFilters()"
          >
            {{ searchLocation }}
          </UBadge>

          <UBadge
            v-if="selectedDate"
            trailing-icon="i-lucide-x"
            size="lg"
            variant="soft"
            color="primary"
            class="cursor-pointer"
            @click="selectedDate = ''; applyFilters()"
          >
            {{ formatDateForDisplay(selectedDate) }}
          </UBadge>
        </div>

        <div
          v-if="filteredEvents && filteredEvents.length === 0"
          class="text-center py-12"
        >
          <p class="text-xl text-neutral-600 dark:text-neutral-400 mb-4">
            No events found
          </p>
          <p class="text-neutral-500 dark:text-neutral-500 mb-6">
            Try adjusting your filters or create your own event.
          </p>
          <UButton
            to="/create-event"
          >
            Create Event
          </UButton>
        </div>

        <div v-else>
          <p class="mb-6 text-neutral-600 dark:text-neutral-400">
            Showing {{ filteredEvents?.length }} events
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <EventCard
              v-for="event in filteredEvents"
              :key="event.id"
              :event="event"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

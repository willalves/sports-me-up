<script setup lang="ts">
import { useEventsStore } from "@/stores/events";

const eventsStore = useEventsStore();
const { upcomingEvents, isLoading } = storeToRefs(eventsStore);
const { fetchEvents } = eventsStore;

onMounted(async () => {
  await fetchEvents();
});
</script>

<template>
  <div class="page-wrapper">
    <HeroSection class="mb-8" />
    <BrowseSportSection class="mb-8" />
    <UpcomingEventsSection
      :upcoming-events
      :is-loading
      class="mb-8"
    />
    <HowItWorksSection class="mb-8" />
  </div>
</template>

<style scoped></style>

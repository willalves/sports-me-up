<script setup lang="ts">
import EventCard from "@/components/events/EventCard.vue";
import type { Event } from "@/types";

const props = defineProps({
  upcomingEvents: {
    type: Array as () => Event[],
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

console.log("UpcomingEvents props:", props.upcomingEvents);
</script>

<template>
  <section class="py-16 bg-neutral-50 dark:bg-neutral-950">
    <UContainer class="mx-auto px-4 md:px-6">
      <div class="flex flex-wrap items-center justify-between mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400">
            Join one of these upcoming events in your area
          </p>
        </div>
        <NuxtLink
          to="/events"
          class="mt-4 md:mt-0 bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition duration-200 font-semibold"
        >
          View All Events
        </NuxtLink>
      </div>

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

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <EventCard
          v-for="event in upcomingEvents"
          :key="event.id"
          :event="event"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Event } from "@/types";
import { formatDateTime, getSportIcon, getSpotText, truncateText } from "@/utils/helpers";

const props = defineProps<{
  event: Event;
}>();

const eventDate = computed(() => formatDateTime(props.event.date, props.event.time));
const sportIcon = computed(() => getSportIcon(props.event.sportType));
const spotsText = computed(() => getSpotText(props.event.maxParticipants, props.event.currentParticipants));
const shortDescription = computed(() => truncateText(props.event.description, 120));

const spotsBadgeClass = computed(() => {
  const spotsLeft = props.event.maxParticipants - props.event.currentParticipants;
  if (spotsLeft === 0) {
    return "bg-error-50 text-error-700 dark:bg-error-700/20 dark:text-error-400";
  } else if (spotsLeft <= 2) {
    return "bg-warning-50 text-warning-700 dark:bg-warning-700/20 dark:text-warning-400";
  } else {
    return "bg-success-50 text-success-700 dark:bg-success-700/20 dark:text-success-400";
  }
});
</script>

<template>
  <NuxtLink
    :to="`/events/${event.id}`"
    class="block group"
  >
    <div class="card h-full flex flex-col transition-all duration-300">
      <!-- Event Image -->
      <div class="relative rounded-xl overflow-hidden mb-4 aspect-video bg-neutral-200 dark:bg-neutral-700">
        <img
          v-if="event.imageUrl"
          :src="event.imageUrl"
          :alt="event.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-25 hover:grayscale-0"
        >
        <div
          v-else
          class="w-full h-full flex items-center justify-center"
        >
          <span class="text-4xl">{{ sportIcon }}</span>
        </div>

        <!-- Status Badge -->
        <div class="absolute top-3 right-3">
          <span class="inline-block px-3 py-2 text-neutral-50 text-xs font-medium rounded-full bg-primary-700">
            {{ event.status.charAt(0).toUpperCase() + event.status.slice(1) }}
          </span>
        </div>
      </div>

      <div class="flex-grow flex flex-col">
        <!-- Sport Type & Date -->
        <div class="flex justify-between items-center mb-2 text-sm">
          <div class="flex items-center">
            <span class="mr-1">{{ sportIcon }}</span>
            <span class="font-medium capitalize">{{ event.sportType }}</span>
          </div>
          <span class="text-neutral-600 dark:text-neutral-400">{{ eventDate }}</span>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {{ event.title }}
        </h3>

        <!-- Description -->
        <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
          {{ shortDescription }}
        </p>

        <!-- Location -->
        <div class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
          <span class="inline-flex items-center gap-1">
            <Icon
              name="i-lucide-map-pin"
              class="size-5"
            />
            {{ event.location }}
          </span>
        </div>

        <!-- Spots Badge -->
        <div class="mt-auto">
          <span :class="[spotsBadgeClass, 'inline-block px-3 py-1 text-xs font-medium rounded-full']">
            {{ spotsText }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

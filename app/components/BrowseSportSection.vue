<script setup lang="ts">
import type { SportType } from "~/types";

const popularSports: SportType[] = [
  { id: "1", name: "Soccer", icon: "⚽" },
  { id: "2", name: "Basketball", icon: "🏀" },
  { id: "3", name: "Tennis", icon: "🎾" },
  { id: "4", name: "Volleyball", icon: "🏐" },
  { id: "5", name: "Running", icon: "🏃" },
  { id: "6", name: "Cycling", icon: "🚴" }
];
</script>

<template>
  <section class="py-16 bg-white dark:bg-neutral-900">
    <UContainer class="mx-auto px-4 md:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">
          Browse by Sport
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Find and join events for your favorite sports in your area.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        <NuxtLink
          v-for="sport in popularSports"
          :key="sport.id"
          :to="{ path: '/events', query: { sport: sport.name } }"
          class="flex flex-col items-center py-8 bg-muted hover:bg-neutral-50 dark:hover:bg-neutral-900 border border-transparent hover:border-muted shadow-md hover:shadow-xl rounded-lg transition duration-150 ease-in-out transform hover:scale-103"
        >
          <span class="text-4xl mb-4">{{ sport.icon }}</span>
          <span class="font-medium">{{ sport.name }}</span>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

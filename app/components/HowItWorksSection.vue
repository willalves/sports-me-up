<script setup lang="ts">
const cardContent = [
  {
    step: 1,
    title: "Find Events",
    description: "Browse upcoming games and events in your area that match your interests."
  },
  {
    step: 2,
    title: "Join Or Create",
    description: "Join existing events or create your own game if you don't find what you're looking for."
  },
  {
    step: 3,
    title: "Play & Connect",
    description: "Show up, play, and make connections with other sports enthusiasts."
  }
];
</script>

<template>
  <section class="py-16 bg-white dark:bg-neutral-900">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">
          How It Works
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          SportsMeUp makes it easy to find and join local sports activities
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard
          v-for="content in cardContent"
          :key="content.step"
          variant="subtle"
          class="shadow-lg hover:shadow-2xl hover:scale-101 transition text-center"
        >
          <div class="mx-auto bg-primary-600 w-16 h-16 flex items-center justify-center rounded-full mb-6">
            <span class="text-neutral-50 text-2xl font-bold">{{ content.step }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">
            {{ content.title }}
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400">
            {{ content.description }}
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>

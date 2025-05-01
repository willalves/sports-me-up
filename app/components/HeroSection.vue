<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-primary-200 via-white to-neutral-50 dark:from-primary-900/30 dark:via-neutral-900 dark:to-neutral-950">
    <UContainer class="mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 animate-fade-in">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Find Your <span class="text-primary-600 dark:text-primary-500">Game</span>, <br>
            Join the <span class="text-primary-600 dark:text-primary-500">Fun</span>
          </h1>
          <p class="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Connect with local sports enthusiasts and never miss a game again.
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <UButton
              to="/events"
              size="xl"
              class="rounded-full font-semibold"
            >
              Find Events
            </UButton>
            <UButton
              to="/register"
              size="xl"
              color="neutral"
              class="bg-neutral-700 hover:bg-neutral-600 rounded-full text-white px-4 py-2 font-semibold transition"
            >
              Sign Up
            </UButton>
          </div>
        </div>
        <div class="hidden md:block relative h-auto">
          <div class="absolute -top-16 -right-8 w-64 h-64 bg-primary-400/10 dark:bg-primary-400/5 rounded-full blur-3xl" />
          <div class="absolute bottom-8 left-8 w-40 h-40 bg-accent-400/10 dark:bg-accent-400/5 rounded-full blur-2xl" />
          <img
            src="~/assets/images/hero-image.png"
            alt="Hero Image"
            class="w-full h-full object-fill rounded-2xl shadow-xl relative z-10 grayscale-50"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>

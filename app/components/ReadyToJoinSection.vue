<template>
  <section class="py-16 bg-gradient-to-r from-primary-500 to-primary-700 dark:to-primary-900">
    <UContainer class="mx-auto px-4 md:px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Join the Community?
      </h2>
      <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
        Sign up today and start finding pickup games in your area.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <UButton
          to="/register"
          size="lg"
          class="rounded-full !text-primary-600 !bg-white hover:!bg-accented transition"
        >
          Sign Up Now
        </UButton>
        <UButton
          to="/events"
          size="lg"
          class="rounded-full border-1 !border-white !bg-transparent hover:!bg-primary-700"
        >
          Browse Events
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

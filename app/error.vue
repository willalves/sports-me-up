<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({ statusCode: 500, message: "An unexpected error occurred" })
  }
})

const router = useRouter();

const goBack = () => {
  router.back();
};

const goHome = () => {
  router.push("/");
};
</script>

<template>
  <NuxtLayout>
    <div class="prose">
      <template v-if="error.statusCode === 404">
        <div class="py-16 md:py-24">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <div class="mb-8">
              <h1 class="text-6xl md:text-8xl font-bold text-primary-600 dark:text-primary-500 mb-4">404</h1>
              <h2 class="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
              <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div class="flex flex-wrap justify-center gap-4">
              <UButton
                class="bg-primary-500 text-white hover:bg-primary-600 cursor-pointer"
                @click="goBack"
              >
                Go Back
              </UButton>
              <UButton
                class="bg-primary-500 text-white hover:bg-primary-600 cursor-pointer"
                @click="goHome"
              >
                Go Home
              </UButton>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="py-16 md:py-24">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <div class="mb-8">
              <UIcon
                name="i-lucide-circle-x"
                class="text-6xl md:text-8xl text-primary-600 dark:text-primary-500 mb-4"
              />
              <h2 class="text-2xl md:text-3xl font-semibold mb-4">Something broke. Sorry!</h2>
            </div>
            <UButton
              class="bg-primary-500 text-white hover:bg-primary-600 cursor-pointer"
              @click="goHome"
            >
              Go Home
            </UButton>
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

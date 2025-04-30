<script setup lang="ts">
import ColorModeButton from "./ColorModeButton.vue";
import AppLogo from "./ui/AppLogo.vue";
import { navigation } from "@/config/navigation";

const isMenuOpen = ref(false);
const isLoggedIn = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
};

const closeMenu = () => {
  isMenuOpen.value = false
};
</script>

<template>
  <header
    class="sticky top-0 z-50 glass-effect border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 shadow-sm backdrop-blur-md"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="flex items-center space-x-2"
            @click="closeMenu"
          >
            <AppLogo />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <ColorModeButton />
          <NuxtLink
            v-for="item in navigation.unauthenticated"
            :key="item.name"
            :to="item.route"
            class="hover:text-primary-500 font-medium"
            :class="{ 'bg-primary-500 px-4 py-1 rounded-full text-white hover:text-white hover:bg-primary-600 transition': item.name === 'Register' }"
            active-class="text-primary-500"
          >
            {{ item.name }}
          </NuxtLink>

          <template v-if="isLoggedIn">
            <template
              v-for="item in navigation.authenticated"
              :key="item.name"
            >
              <NuxtLink
                :to="item.route"
                class="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
              >
                <span>{{ item.name }}</span>
              </NuxtLink>

              <UButton
                v-if="item.name === 'Logout'"
                class="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
              >
                {{ item.name }}
              </UButton>
            </template>
          </template>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="flex items-center space-x-4 md:hidden">
          <ColorModeButton />

          <UButton
            :icon="'i-lucide-menu'"
            class="bg-primary-500 active:bg-primary-600 dark:text-neutral-300 focus:outline-none"
            @click="toggleMenu"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white dark:bg-neutral-900 shadow-lg animate-fade-in"
    >
      <nav class="container mx-auto px-4 py-4 space-y-6">
        <div class="space-y-2">
          <NuxtLink
            v-for="item in navigation.unauthenticated"
            :key="item.name"
            :to="item.route"
            class="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            active-class="text-primary-600 dark:text-primary-400"
            @click="closeMenu"
          >
            {{ item.name }}
          </NuxtLink>
          <template v-if="isLoggedIn">
            <template
              v-for="item in navigation.authenticated"
              :key="item.name"
            >
              <NuxtLink
                :to="item.route"
                class="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                @click="closeMenu"
              >
                {{ item.name }}
              </NuxtLink>
              <UButton
                v-if="item.name === 'Logout'"
                class="block w-full text-left py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                {{ item.name }}
              </UButton>
            </template>
          </template>
        </div>
      </nav>
    </div>
  </header>
</template>

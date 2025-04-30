<script setup lang="ts">
import AppLogo from "~/components/ui/AppLogo.vue";
import { navigation } from "~/config/navigation";
</script>

<template>
  <footer class="border-t border-neutral-200 dark:border-neutral-800">
    <UContainer class="mx-auto px-4 pt-10 pb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-2">
          <AppLogo />
          <p class="text-neutral-600 dark:text-neutral-400 text-sm">
            Connect with local sports enthusiasts and never miss a game again.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in navigation.unauthenticated" :key="item.name">
              <NuxtLink
                :to="item.route"
                class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
              >
                {{  item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Sports</h4>
          <ul class="space-y-2">
            <li v-for="item in navigation.footerNavigation.sports" :key="item.name">
              <NuxtLink 
                :to="{ path: item.route, query: { sport: item.query } }" 
                class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Contact</h4>
          <ul class="space-y-2">
            <li
              v-for="item in navigation.footerNavigation.contact"
              :key="item.name"
              class="text-neutral-600 dark:text-neutral-400 text-sm"
            >
              <NuxtLink :to="item.route" external class="hover:text-primary-600 dark:hover:text-primary-400">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-600 dark:text-neutral-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} <span class="text-primary-500">SportsMeUp</span>. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>
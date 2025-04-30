<script setup lang="ts">
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>

<template>
  <div class="app-wrapper min-h-screen flex flex-col">
    <AppHeader />
    <div class="app-content flex-1">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

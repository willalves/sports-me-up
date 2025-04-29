<script setup lang="ts">
import ColorModeButton from '~/components/ColorModeButton.vue';
const text = ref('Init Project');
</script>

<template>
  <UContainer as="main">
    <p>{{ text }}</p>
    <ColorModeButton />
  </UContainer>
</template>

<style scoped></style>

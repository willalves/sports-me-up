<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "default"
  }
});

const logoClasses = {
  small: "text-xl",
  default: "text-2xl",
  large: "text-4xl"
};

const selectedSize = logoClasses[props.size as keyof typeof logoClasses] || logoClasses.default;
</script>

<template>
  <div :class="['font-bold', selectedSize, 'flex items-center']">
    <UIcon
      name="i-lucide-volleyball"
      class="mr-1 animate-spin"
    />
    <span class="text-primary-600 dark:text-primary-500">Sports</span>
    <span class="text-neutral-900 dark:text-white">Me</span>
    <span class="text-primary-600 dark:text-primary-500">Up</span>
  </div>
</template>

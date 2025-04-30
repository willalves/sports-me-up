<template>
  <div class="app-wrapper min-h-screen flex flex-col">
    <AppHeader />
    <div class="app-content flex-1">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

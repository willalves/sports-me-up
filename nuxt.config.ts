// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthub/core", "@nuxt/eslint", "@nuxt/ui"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-03-01",
  hub: {},
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        commaDangle: "never",
      },
    },
  },
});

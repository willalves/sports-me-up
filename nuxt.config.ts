// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthub/core", "@nuxt/eslint", "@nuxt/ui", "@pinia/nuxt"],
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-03-01",
  hub: {},
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        commaDangle: "never",
        braceStyle: "1tbs"
      }
    }
  }
});

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/css/main.css"],
  fonts: {
    //https://fonts.nuxt.com/get-started/configuration
    families: [
      { name: "Dm Sans", provider: "google" },
    ],
  },
  tailwindcss: {
    //https://tailwindcss.nuxtjs.org/getting-started/configuration
    cssPath: "~/assets/css/main.css",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});

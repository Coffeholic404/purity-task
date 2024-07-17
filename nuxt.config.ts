// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [

  ],

  modules: 
  [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  ssr: false,
})
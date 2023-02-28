// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts

export default defineNuxtConfig({
  app: {
    head: {
      title: 'PomoPomo ',
      meta: [
        { name: 'description', content: 'PomoPomo is a simple pomodoro timer to help you focus.' }
      ]
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@pinia/nuxt'],
})

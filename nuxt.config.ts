import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-icon-tw',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],

  build: {
    transpile: ['socket.io-client'],
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: 'Hilex',
      siteDescription: 'Your trusted source for quality products',
      language: 'en',
    },
  },

  app: {
    head: {
      title: 'Hilex - Your Trusted Source for Quality Products',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover a wide range of quality products at Hilex. Shop with confidence and enjoy great deals.' },
        { name: 'keywords', content: 'products, shopping, online store, quality products' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Hilex' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@hilex' },
        { name: 'twitter:creator', content: '@hilex' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
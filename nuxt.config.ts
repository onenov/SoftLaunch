// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  experimental: {
    appManifest: false,
  },
  app: {
    head: {
      title: "Home",
      titleTemplate: "%s | 客户端",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
        },
        {
          name: "description",
          content: "客户端下载",
        },
        {
          name: "keywords",
          content:
            "app, appstore, app store, ios, iphone, ipad, android, macos, windows",
        },
        { name: "language", content: "zh-CN" },
        { name: "author", content: "Application" },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
    },
  },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/style.min.css",
    "@/assets/css/dark.css",
  ],

  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/device"],

  ui: {
    icons: ["heroicons", "simple-icons"],
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    "/": { prerender: true },
  },

  devtools: {
    enabled: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  compatibilityDate: "2024-07-11",
});

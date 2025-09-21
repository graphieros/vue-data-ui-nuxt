// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => tag.startsWith("VueUi")
  //   }
  // }
  devtools: { enabled: true },
  plugins: ["./plugins/vue-data-ui.client.ts"],
  compatibilityDate: "2024-09-29",
  css: ['vue-data-ui/style.css']
});

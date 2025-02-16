import { VueUiXy, VueDataUi } from "vue-data-ui";
import 'vue-data-ui/style.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VueUiXy", VueUiXy);


  // OR register the universal component if you plan to use it
  nuxtApp.vueApp.component("VueDataUi", VueDataUi);
})

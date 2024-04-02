import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);
app.use(VueQueryPlugin).use(router).mount("#app");

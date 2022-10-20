import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";
import "./styles/font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

let app;

if (!app) {
  app = createApp(App);

  app.use(store);
  app.use(router);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount("#app");
}

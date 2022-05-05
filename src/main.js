import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import "./assets/tailwind.css";

let app;

if (!app) {
  app = createApp(App);
  app.use(store);
  app.use(router);
  new WaveUI(app, {
    // Some Wave UI options.
  });
  app.mount("#app");
}

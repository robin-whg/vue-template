import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";

import { createRouter } from "./modules";

createApp(App).use(createRouter()).mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./i18n";
// axios
import Axios from "axios";

const app = createApp(App);
// to use globally
app.config.globalProperties.$http = Axios;
app.use(i18n);
app.mount("#app");

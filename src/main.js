import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./i18n";
// axios
import Axios from "axios";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
// to use globally
app.config.globalProperties.$http = Axios;
app.use(i18n);
app.mount("#app");

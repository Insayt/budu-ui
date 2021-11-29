import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Quasar from "quasar";
import VCalendar from "v-calendar";
import "quasar/src/css/index.sass";
import "./base.scss";

Vue.use(Quasar);
Vue.use(VCalendar, {
  componentPrefix: "b",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

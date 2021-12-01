import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Quasar from "quasar";
import VCalendar from "v-calendar";
import "quasar/src/css/index.sass";
import ru from "quasar/lang/ru";
import "./base.scss";

Vue.use(Quasar, {
  lang: ru,
});
Vue.use(VCalendar, {
  componentPrefix: "v",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

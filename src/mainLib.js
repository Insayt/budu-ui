import BIcon from "./components/b-icon";
import BBtn from "./components/b-btn";

export default {
  install(Vue) {
    Vue.component("b-icon", BIcon);
    Vue.component("b-btn", BBtn);
  },
};

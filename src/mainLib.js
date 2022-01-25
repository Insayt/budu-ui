import BIcon from "./components/b-icon";
import BBtn from "./components/b-btn";
import BCheckbox from "./components/b-checkbox";
import BDropdown from "./components/b-dropdown";
import BDropdownItem from "./components/b-dropdown-item";
import BBadge from "./components/b-badge";
import BInput from "./components/b-input";
import BSelect from "./components/b-select";
import BDatepicker from "./components/b-datepicker";
import BModal from "./components/b-modal";
import BAccordion from "./components/b-accordion";
import BTabs from "./components/b-tabs";
import BTab from "./components/b-tab";
import BPagination from "./components/b-pagination";
import "./assets/styles/base.scss";

export default {
  install(Vue) {
    Vue.component("b-icon", BIcon);
    Vue.component("b-btn", BBtn);
    Vue.component("b-checkbox", BCheckbox);
    Vue.component("b-dropdown", BDropdown);
    Vue.component("b-dropdown-item", BDropdownItem);
    Vue.component("b-badge", BBadge);
    Vue.component("b-input", BInput);
    Vue.component("b-select", BSelect);
    Vue.component("b-datepicker", BDatepicker);
    Vue.component("b-modal", BModal);
    Vue.component("b-accordion", BAccordion);
    Vue.component("b-tabs", BTabs);
    Vue.component("b-tab", BTab);
    Vue.component("b-pagination", BPagination);
  },
};

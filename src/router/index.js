import Vue from "vue";
import VueRouter from "vue-router";
import Typography from "../views/Typography";
import Colors from "../views/Colors";
import Icons from "../views/Icons";
import Buttons from "../views/Buttons";
import Badges from "../views/Badges";
import Checkboxes from "../views/Checkboxes";
import Inputs from "../views/Inputs";
import Dropdowns from "../views/Dropdowns";
import Selects from "../views/Selects";
import Datepickers from "../views/Datepickers";
import Modals from "../views/Modals";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/typography",
    name: "typography",
    component: Typography,
  },
  {
    path: "/colors",
    name: "colors",
    component: Colors,
  },
  {
    path: "/icons",
    name: "icons",
    component: Icons,
  },
  {
    path: "/buttons",
    name: "buttons",
    component: Buttons,
  },
  {
    path: "/badges",
    name: "badges",
    component: Badges,
  },
  {
    path: "/checkboxes",
    name: "checkboxes",
    component: Checkboxes,
  },
  {
    path: "/inputs",
    name: "inputs",
    component: Inputs,
  },
  {
    path: "/dropdowns",
    name: "dropdowns",
    component: Dropdowns,
  },
  {
    path: "/selects",
    name: "selects",
    component: Selects,
  },
  {
    path: "/datepickers",
    name: "datepickers",
    component: Datepickers,
  },
  {
    path: "/modals",
    name: "modals",
    component: Modals,
  },
  { path: "*", redirect: "/typography" },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

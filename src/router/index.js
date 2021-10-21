import Vue from "vue";
import VueRouter from "vue-router";
import Typography from "../views/Typography";
import Colors from "../views/Colors";
import Icons from "../views/Icons";
import Buttons from "../views/Buttons";
import Badges from "../views/Badges";
import Checkboxes from "../views/Checkboxes";
import Dropdowns from "../views/Dropdowns";

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
    path: "/dropdowns",
    name: "dropdowns",
    component: Dropdowns,
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

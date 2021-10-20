import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Typography from "../views/Typography";
import Colors from "../views/Colors";
import Icons from "../views/Icons";
import Buttons from "../views/Buttons";
import Badges from "../views/Badges";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

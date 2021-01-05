import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Rooms from "@/views/Rooms";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/rooms", component: Rooms },

  { path: "*", redirect: "/" },
];

export const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

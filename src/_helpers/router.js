import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Rooms from "@/views/Rooms";
import Room from "@/views/Room";
import CreateRoom from "@/views/CreateRoom";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/rooms", component: Rooms },
  { path: "/rooms/:id", name: "Room", component: Room },
  {
    path: "/createRoom",
    component: CreateRoom,
  },
  { path: "*", redirect: "/" },
];

export const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

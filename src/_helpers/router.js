import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Rooms from "@/views/Rooms";
import Room from "@/views/Room";
import CreateRoom from "@/views/CreateRoom";
import AddCategories from "@/views/AddCategories";
import AddBeers from "@/views/AddBeers";

Vue.use(Router);

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/rooms", component: Rooms, name: "Rooms" },
  { path: "/rooms/:id", name: "Room", component: Room },
  {
    path: "/createRoom",
    component: CreateRoom,
  },
  {
    path: "/addCategories",
    name: "AddCategories",
    component: AddCategories,
  },
  {
    path: "/addBeers",
    name: "AddBeers",
    component: AddBeers,
  },

  { path: "*", redirect: "/" },
];

export const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

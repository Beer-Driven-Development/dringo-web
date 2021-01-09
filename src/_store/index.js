import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { room } from "./room.module";
import { category } from "./category.module";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    room,
    category,
  },
  plugins: [createPersistedState()],
});

import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { room } from "./room.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    room,
  },
});

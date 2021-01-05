import axios from "axios";
import { authHeader } from "@/_helpers";

const state = {
  rooms: [],
};
const actions = {
  fetchRooms({ commit }) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/rooms`, { headers: authHeader() })
      .then((response) => commit("FETCH_ROOMS", response.data));
  },
};

const mutations = {
  FETCH_ROOMS(state, rooms) {
    state.rooms = rooms;
  },
};

export const room = {
  namespaced: true,
  state,
  actions,
  mutations,
};

import axios from "axios";
import { authHeader } from "@/_helpers";

const state = {
  rooms: [],
  currentRoom: null,
};
const actions = {
  fetchRooms({ commit }) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/rooms`, { headers: authHeader() })
      .then((response) => commit("FETCH_ROOMS", response.data));
  },

  setRoom({ commit }, room) {
    commit("SET_ROOM", room);
  },
};

const mutations = {
  FETCH_ROOMS(state, rooms) {
    state.rooms = rooms;
  },
  SET_ROOM(state, id) {
    let currentRoom = state.rooms.find((xd) => xd.id == id);
    console.log(currentRoom);
    state.currentRoom = currentRoom;
  },
};

export const room = {
  namespaced: true,
  state,
  actions,
  mutations,
};

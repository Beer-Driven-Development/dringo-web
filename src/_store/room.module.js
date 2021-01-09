import axios from "axios";
import { authHeader } from "@/_helpers";

const state = {
  rooms: [],
  currentRoom: null,
  participants: [],
  roomId: null,
  createdRoomId: null,
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

  setUsersList({ commit }, message) {
    commit("SET_USERSLIST", message);
  },

  joinedRoom({ commit }, message) {
    commit("JOINED_ROOM", message);
  },

  createRoom({ commit }, data) {
    axios
      .post(
        `${process.env.VUE_APP_API_URL}/rooms`,
        { name: data.name, passcode: data.passcode },
        {
          headers: authHeader(),
        }
      )
      .then((response) => commit("ADD_ROOM", response.data));
  },
};

const mutations = {
  FETCH_ROOMS(state, rooms) {
    state.rooms = rooms;
  },
  ADD_ROOM(state, room) {
    state.rooms.push(room);
    state.createdRoomId = room.id;
  },
  SET_ROOM(state, id) {
    let currentRoom = state.rooms.find((element) => element.id == id);
    state.currentRoom = currentRoom;
  },

  SET_USERSLIST(state, message) {
    state.participants = message.users;
  },

  JOINED_ROOM(state, message) {
    state.roomId = message;
  },
};

export const room = {
  namespaced: true,
  state,
  actions,
  mutations,
};

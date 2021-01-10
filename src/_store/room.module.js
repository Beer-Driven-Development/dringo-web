import axios from "axios";
import { authHeader } from "@/_helpers";
import { router } from "@/_helpers/router";

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

  changeStatus({ commit }, payload) {
    axios
      .post(`${process.env.VUE_APP_API_URL}/rooms/${payload.roomId}`, payload, {
        headers: authHeader(),
      })
      .then((response) => commit("CHANGE_STATUS", response.data));
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
      .then(function(response) {
        console.log(response.data.id);
        commit("ADD_ROOM", response.data);
        router.push({
          name: "AddCategories",
          params: { id: response.data.id },
        });
      });
  },
};

const mutations = {
  FETCH_ROOMS(state, rooms) {
    state.rooms = rooms;
  },
  ADD_ROOM(state, room) {
    console.log("ROOM");
    console.log(room);
    state.rooms.push(room);
    console.log("createdRoomId");
    console.log(state.createdRoomId);
    state.createdRoomId = room.id;
    console.log("RoomID");
    console.log(room.id);

    console.log("createdRoomId AFTER UPDATE");
    console.log(state.createdRoomId);
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

  CHANGE_STATUS(state, data) {
    console.log(state);
    console.log(data);
  },
};

export const room = {
  namespaced: true,
  state,
  actions,
  mutations,
};

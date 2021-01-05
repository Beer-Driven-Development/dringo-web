<template>
  <div class="container mx-auto m-64">
    <h2 class="text-indigo-500 font-black text-5xl">
      Rooms
    </h2>
    <div v-for="room in rooms" v-bind:key="room.id" class="m-2">
      <h3 class="text-indigo-500 font-bold text-xl font-sans">
        {{ room.name }}
      </h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { authHeader } from "@/_helpers";
export default {
  name: "RoomList",
  data() {
    return {
      rooms: [],
    };
  },
  methods: {
    goToRoom(id) {
      axios.get(`${process.env.VUE_APP_API_URL}/rooms/ + ${id}`);
    },
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/rooms`, { headers: authHeader() })
      .then((rooms) => (this.rooms = rooms.data));
  },
};
</script>

<style></style>

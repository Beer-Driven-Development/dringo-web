<template>
  <div>
    <a
      class="hover:text-indigo-800 transition duration-300 ease-in-out hover:no-underline"
    >
      {{ room.name }}</a
    >
    <input
      type="password"
      class="input"
      placeholder="Password"
      v-model="passcode"
    />
    <div class="flex-row flex justify-center space-x-8">
      <div class="text-center mt-6">
        <button class="dringo-btn" @click="sendMessage">
          Confirm
        </button>
      </div>
      <div class="text-center mt-6" v-if="roomId == room.id">
        <button class="dringo-btn" @click="join">
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    room: null,
    passcode: null,
  },

  computed: {
    ...mapState("auth", ["token"]),
    ...mapState("room", ["roomId"]),
  },

  methods: {
    join() {
      this.$router.push({
        name: "Room",
        params: { id: this.roomId, room: this.room },
      });
    },
    sendMessage() {
      this.$socket.client.emit("joinRoom", {
        id: this.room.id,
        passcode: this.passcode,
        token: this.token,
      });
    },
  },
};
</script>

<style></style>

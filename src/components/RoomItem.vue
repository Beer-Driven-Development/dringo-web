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

    <div class="text-center mt-6">
      <button class="dringo-btn" @click="sendMessage">
        Enter
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as socketio from "../_helpers/socket-instance";
export default {
  props: {
    room: null,
    passcode: null,
  },
  computed: {
    ...mapState("auth", ["token"]),
  },
  methods: {
    sendMessage() {
      console.log(this.room);
      console.log(this.passcode);
      socketio.sendEvent({
        type: "joinRoom",
        data: {
          id: this.room.id,
          passcode: this.passcode,
          token: this.token,
        },
      });
    },
  },
};
</script>

<style></style>

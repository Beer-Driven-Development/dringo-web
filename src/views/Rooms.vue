<template>
  <div class="container mx-auto m-64">
    <h2 class="text-indigo-500 font-black text-5xl">
      Rooms
    </h2>
    <ul class="m-2">
      <li
        v-for="room in rooms"
        v-bind:key="room.id"
        class="text-indigo-500 font-bold text-xl font-sans"
      >
        <a
          class="hover:text-indigo-800 transition duration-300 ease-in-out hover:no-underline"
          @click="showModal()"
        >
          {{ room.name }}</a
        >
        <modal name="passcodeModal">
          <div class="p-16">
            <h4 class="text-indigo-500 font-bold text-xl font-sans pb-4">
              Enter passcode
            </h4>
            <div class="pr-32">
              <input
                type="password"
                class="input"
                placeholder="Password"
                v-model="passcode"
              />
            </div>
            <div class="text-center mt-6">
              <button class="dringo-btn" @click="sendMessage(room.id)">
                Enter
              </button>
            </div>
          </div>
        </modal>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as socketio from "../_helpers/socket-instance";
export default {
  name: "RoomList",
  data() {
    return {
      passcode: "",
      textInput: "",
      serverOutput: [],
    };
  },

  methods: {
    ...mapActions("room", ["fetchRooms"]),

    showModal() {
      this.$modal.show("passcodeModal");
    },

    sendMessage(roomId) {
      socketio.sendEvent({
        type: "joinRoom",
        data: {
          id: roomId,
          passcode: this.passcode,
          token: this.token,
        },
      });
    },
  },

  computed: {
    ...mapState("room", ["rooms"]),
    ...mapState("auth", ["token"]),
  },

  created() {
    // reset login status
    this.fetchRooms();
  },

  mounted() {
    socketio.addEventListener({
      type: "joinedRoom",
      callback: (message) => {
        this.serverOutput.push(message);
        console.log(this.serverOutput);
      },
    });
  },
};
</script>

<style></style>

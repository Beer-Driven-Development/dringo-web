<template>
  <div class="container mx-auto m-64">
    <h2 class="text-indigo-500 font-black text-5xl">
      Rooms
    </h2>
    <ul v-for="room in rooms" v-bind:key="room.id" class="m-2">
      <li class="text-indigo-500 font-bold text-xl font-sans">
        <a
          class="hover:text-indigo-800 transition duration-300 ease-in-out hover:no-underline"
          @click="showModal"
        >
          {{ room.name }}</a
        >
      </li>
    </ul>
    <modal name="passcodeModal">
      <div class="p-16">
        <h4 class="text-indigo-500 font-bold text-xl font-sans pb-4">
          Enter passcode
        </h4>
        <div class="pr-32">
          <input
            type="password"
            class="input "
            placeholder="Password"
            v-model="passcode"
          />
        </div>
        <div class="text-center mt-6">
          <button
            class="dringo-btn"
            :disabled="passcode"
            @click.prevent="handleJoinRoom(room.id)"
          >
            Enter
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "RoomList",
  data() {
    return {
      passcode: "",
    };
  },

  methods: {
    ...mapActions("room", ["fetchRooms", "emitSocketEvent"]),

    showModal() {
      this.$modal.show("passcodeModal");
    },

    handleJoinRoom(roomId) {
      this.emitSocketEvent({
        id: roomId,
        passcode: this.passcode,
        token: this.token,
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
};
</script>

<style></style>

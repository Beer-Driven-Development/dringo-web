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
        <RoomItem v-bind="{ room: room, passcode: passcode }" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RoomItem from "../components/RoomItem";
export default {
  name: "RoomList",
  components: {
    RoomItem,
  },
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
  },

  computed: {
    ...mapState("room", ["rooms"]),
    ...mapState("auth", ["token"]),
  },

  created() {
    this.fetchRooms();
  },
};
</script>

<style></style>

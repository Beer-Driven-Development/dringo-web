<template>
  <div class="container mx-auto m-64">
    <h2 class="text-indigo-500 font-black text-5xl pb-4">
      {{ currentRoom.name }}
    </h2>

    <h4
      v-for="participant in participants"
      v-bind:key="participant.id"
      class="text-center text-xl"
    >
      <div v-if="participant.id == currentRoom.creator.id">
        <p>
          <i class="fas fa-crown text-indigo-800"></i>
          {{ participant.username }}
        </p>
      </div>
      <div v-else>
        <p>
          {{ participant.username }}
        </p>
      </div>
    </h4>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Room",

  methods: {
    ...mapActions("room", ["setRoom"]),
  },

  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token"]),
  },

  created() {
    this.setRoom(`${this.$route.params.id}`);
  },
};
</script>

<style></style>

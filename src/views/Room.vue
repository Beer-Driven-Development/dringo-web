<template>
  <div class="container mx-auto m-64">
    <h2 class="text-indigo-500 font-black text-5xl">
      {{ this.participants }}
    </h2>
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

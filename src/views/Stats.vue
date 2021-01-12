<template>
  <div class="container mx-auto m-64">
    {{ stats }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Stats",

  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token", "user"]),
    ...mapState("degustation", ["beer", "pivots", "stats"]),
  },
};
</script>

<style></style>

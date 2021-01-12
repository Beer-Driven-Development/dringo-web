<template>
  <div class="container mx-auto m-64">
    <div v-for="stat in stats" :key="stat.beer.id">
      <h3>
        {{ stat.beer.name }}
      </h3>
      <h3>
        {{ stat.avg }}
      </h3>
    </div>
    <div class="text-center mt-6">
      <button class="dringo-btn" @click.prevent="handleHome">
        Home
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Stats",
  methods: {
    handleHome() {
      this.$router.push({
        name: "Rooms",
      });
    },
  },
  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token", "user"]),
    ...mapState("degustation", ["beer", "pivots", "stats"]),
  },
};
</script>

<style></style>

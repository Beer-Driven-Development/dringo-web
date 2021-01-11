<template>
  <div class="container mx-auto m-64">
    <div class="flex flex-row space-x-4">
      <h3 class="text-4xl text-indigo-500">{{ beer.name }}</h3>
      <h3 class="text-4xl">{{ `${beer.abv}%` }}</h3>
      <h3 v-for="pivot in pivots" :key="pivot.id">{{ pivot.category.name }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Degustation",

  methods: {
    ...mapActions("room", ["setRoom", "start"]),
  },

  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token", "user"]),
    ...mapState("degustation", ["beer", "pivots"]),
  },

  created() {
    this.setRoom(`${this.$route.params.id}`);
  },
};
</script>

<style></style>

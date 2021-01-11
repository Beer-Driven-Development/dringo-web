<template>
  <div class="container mx-auto m-64">
    <div class="flex flex-row space-x-4">
      <h3 class="text-4xl text-indigo-500">{{ beer.name }}</h3>
      <h3 class="text-4xl">{{ `${beer.abv}%` }}</h3>
    </div>
    <div>
      <h3 v-for="pivot in pivots" :key="pivot.id">
        <RatingItem v-bind="{ pivot: pivot, beer: beer }" />
      </h3>
    </div>
    <div class="text-center mt-6" v-if="user.id == currentRoom.creator.id">
      <button class="dringo-btn" @click.prevent="handleNext">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RatingItem from "../components/RatingItem";

export default {
  name: "Degustation",

  components: {
    RatingItem,
  },

  methods: {
    ...mapActions("room", ["setRoom", "start"]),
    handleNext() {},
  },

  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token", "user"]),
    ...mapState("degustation", ["beer", "pivots"]),
  },
};
</script>

<style></style>

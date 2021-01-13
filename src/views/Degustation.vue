<template>
  <div class="container mx-auto m-64">
    <div v-if="beer != null">
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
    <div v-else>
      <div class="flex flex-row space-x-4">
        <h3 class="text-4xl text-indigo-500">Degustation has ended.</h3>
        <div class="text-center mt-6">
          <button class="dringo-btn" @click.prevent="handleStats">
            Stats
          </button>
        </div>
      </div>
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

  created() {
    this.$socket.client.on("next", (data) => {
      console.log(data);
      if (data.beer) {
        this.setBeer(data.beer);
        this.setPivots(data.pivots);
      } else {
        this.setBeer(null);
        this.setPivots([]);
      }
    });
  },
  methods: {
    ...mapActions("room", ["setRoom", "start"]),
    ...mapActions("degustation", ["setBeer", "setPivots", "getStats"]),

    handleStats() {
      this.getStats(this.currentRoom.id);
      this.$router.push({ name: "Stats" });
    },

    handleNext() {
      this.$socket.client.emit("next", {
        roomId: this.currentRoom.id,
        beerId: this.beer.id,
        token: this.token,
      });
    },
  },

  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token", "user"]),
    ...mapState("degustation", ["beer", "pivots"]),
  },
};
</script>

<style></style>

<template>
  <div class="container">
    <div class="row">
      <span class=" block truncate col font-bold px-4">
        Voting on {{ pivot.category.name }} with weight {{ pivot.weight }}
      </span>

      <star-rating
        v-bind:increment="0.5"
        v-bind:max-rating="5"
        inactive-color="#ccc"
        active-color="#6708FF"
        v-model="score"
      >
      </star-rating>

      <div class="text-center mt-6">
        <button class="dringo-btn" @click.prevent="rate">
          Vote
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    pivot: null,
    beer: null,
  },
  data() {
    return {
      score: 0,
    };
  },

  computed: {
    ...mapState("auth", ["token"]),
    ...mapState("category", ["categories"]),
  },

  methods: {
    ...mapActions("degustation", ["rateBeer"]),
    rate() {
      this.rateBeer({
        roomId: this.roomId,
        pivotId: this.pivot.id,
        score: this.score,
        beerId: this.beer.id,
      });
    },
  },
};
</script>

<style></style>

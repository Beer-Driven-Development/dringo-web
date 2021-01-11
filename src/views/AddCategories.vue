<template>
  <div class="container m-32">
    <h2 class="font-extrabold text-2xl">
      Choose category and weight
    </h2>
    <ul class="m-2">
      <li
        v-for="category in categories"
        v-bind:key="category.id"
        class="text-indigo-500 font-bold text-xl font-sans"
      >
        <CategoryItem v-bind="{ category: category, roomId: roomId }" />
      </li>
    </ul>
    <div class="my-16">
      <h2 class="font-extrabold text-2xl">
        Chosen categories
      </h2>
      <ul class="m-2">
        <li
          v-for="pivot in superPivots"
          v-bind:key="pivot.id"
          class="text-indigo-500 font-bold text-xl font-sans"
        >
          <div class="flex flex-row space-x-4">
            <h3 class="font-sans text-indigo-500">
              {{ pivot.category.name }}
            </h3>
            <p>{{ pivot.weight }}</p>
            <button @click.prevent="deletePivot(pivot.id)">
              <i class="fas fa-trash-alt text-red-600"> </i>
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="text-center mt-6">
      <button
        class="dringo-btn"
        :disabled="isDisabled"
        @click.prevent="handleNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CategoryItem from "../components/CategoryItem";
export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      pivot: {
        weight: 1,
      },
      weights: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    ...mapActions("category", ["fetchCategories", "deletePivot"]),
    deletePivot(pivotId) {
      this.$store.dispatch("category/deletePivot", {
        roomId: this.$route.params.id,
        pivotId: pivotId,
      });
    },

    handleNext() {
      this.$router.push({
        name: "AddBeers",
        params: { id: this.roomId },
      });
    },
  },

  computed: {
    ...mapState("category", ["categories", "pivots"]),
    roomId: function() {
      return this.$route.params.id;
    },
    superPivots: function() {
      return this.pivots.filter((pivot) => pivot.room.id == this.roomId);
    },

    isDisabled() {
      return this.superPivots == 0;
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style></style>

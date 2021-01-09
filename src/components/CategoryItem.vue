<template>
  <div>
    <div class="flex justify-between">
      <span class=" block truncate font-bold px-4">
        {{ category.name }}
      </span>

      <select class="flex justify-start" v-model="chosenWeight">
        <option v-for="weight in weights" :key="weight">{{ weight }}</option>
      </select>

      <span class="flex items-center px-4">
        <button @click.prevent="addCategory">
          <i class="fas fa-plus text-green-600"> </i>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    category: null,
    roomId: null,
  },
  data() {
    return {
      categoryId: this.category.id,
      chosenWeight: 1,
      weights: [1, 2, 3, 4, 5],
    };
  },

  computed: {
    ...mapState("auth", ["token"]),
    ...mapState("category", ["categories"]),
  },

  methods: {
    ...mapActions("category", ["add"]),
    addCategory() {
      this.add({
        roomId: this.roomId,
        id: this.categoryId,
        weight: this.chosenWeight,
      });
    },
  },
};
</script>

<style></style>

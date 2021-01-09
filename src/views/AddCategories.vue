<template>
  <div class="m-32">
    <label id="listbox-label" class="block text-sm font-medium text-gray-700">
      Choose category
    </label>
    <ul class="m-2">
      <li
        v-for="category in categories"
        v-bind:key="category.id"
        class="text-indigo-500 font-bold text-xl font-sans"
      >
        <CategoryItem v-bind="{ category: category, roomId: roomId }" />
      </li>
    </ul>
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
    ...mapActions("category", ["fetchCategories"]),
  },

  computed: {
    ...mapState("category", ["categories"]),
    roomId: function() {
      return this.$route.params.id;
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style></style>

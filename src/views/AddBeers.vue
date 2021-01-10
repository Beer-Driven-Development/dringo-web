<template>
  <div class="m-32">
    <h2 class="font-extrabold text-2xl">
      Add beers
    </h2>
    <form class="container mx-auto px-4" name="contact" method="POST">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-blue-2xl rounded-2xl"
          >
            <div class="flex-auto p-5 lg:p-10">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  v-model="name"
                  name="name"
                  type="text"
                  class="input"
                  placeholder="Name"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="abv"
                >
                  ABV
                </label>
                <input
                  v-model="password"
                  name="abv"
                  type="password"
                  class="input"
                  placeholder="ABV"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="my-16">
      <h2 class="font-extrabold text-2xl">
        Added beers
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
      <button class="dringo-btn" @click.prevent="handlePublish">
        Publish
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
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
  },

  computed: {
    ...mapState("category", ["categories", "pivots"]),
    roomId: function() {
      return this.$route.params.id;
    },
    superPivots: function() {
      return this.pivots.filter((pivot) => pivot.room.id == this.roomId);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style></style>

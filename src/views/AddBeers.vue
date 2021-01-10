<template>
  <div class="m-32">
    <h2 class="font-extrabold text-2xl">
      Add beer
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
                  v-model="abv"
                  name="abv"
                  type="number"
                  class="input"
                  placeholder="ABV"
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <div class="text-center mb-4">
              <button class="dringo-btn" @click.prevent="addBeer">
                Add
              </button>
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
          v-for="beer in superBeers"
          v-bind:key="beer.id"
          class="text-indigo-500 font-bold text-xl font-sans"
        >
          <div class="flex flex-row space-x-4">
            <h3 class="font-sans text-indigo-500">
              {{ beer.name }}
            </h3>
            <p>{{ beer.abv }}</p>
            <button @click.prevent="deleteBeer(beer.id)">
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
        @click.prevent="handlePublish"
      >
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
      name: "",
      abv: null,
    };
  },
  methods: {
    ...mapActions("beer", ["add"]),
    ...mapActions("room", ["changeStatus"]),
    deleteBeer(beerId) {
      this.$store.dispatch("beer/delete", {
        roomId: this.$route.params.id,
        beerId: beerId,
      });
    },

    addBeer() {
      this.add({
        roomId: this.$route.params.id,
        name: this.name,
        abv: parseFloat(this.abv),
      });
    },

    handlePublish() {
      this.changeStatus({
        roomId: this.$route.params.id,
      });
      this.$router.push({
        name: "Rooms",
      });
    },
  },

  computed: {
    ...mapState("beer", ["beers"]),
    roomId: function() {
      return this.$route.params.id;
    },
    isDisabled() {
      return this.beers.length == 0;
    },

    superBeers: function() {
      return this.beers.filter((beer) => beer.room.id == this.roomId);
    },
  },
};
</script>

<style></style>

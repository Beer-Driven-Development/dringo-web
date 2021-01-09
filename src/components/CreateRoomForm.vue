<template>
  <section id="contact" className="py-8 lg:py-16 xl:py-32 lg:pt-0">
    <form class="container mx-auto px-4" name="contact" method="POST">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-blue-2xl rounded-2xl"
          >
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold text-gray-700">
                Create room.
              </h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600"></p>

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
                  htmlFor="passcode"
                >
                  Passcode
                </label>
                <input
                  v-model="passcode"
                  name="passcode"
                  type="password"
                  class="input"
                  placeholder="Passcode"
                />
              </div>

              <div class="text-center mt-6">
                <button class="dringo-btn" @click.prevent="handleCreateRoom">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      passcode: "",
    };
  },
  computed: {
    ...mapState("auth", ["status"]),
  },
  created() {},
  methods: {
    ...mapActions("auth", ["login", "logout"]),

    handleCreateRoom() {
      console.log({
        name: this.name,
        passcode: this.passcode,
      });
      this.$store.dispatch("room/createRoom", {
        name: this.name,
        passcode: this.passcode,
      });
    },
  },
};
</script>

<style></style>

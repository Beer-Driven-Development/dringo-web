<template>
  <section id="contact" className="py-8 lg:py-16 xl:py-32 lg:pt-0">
    <form
      class="container mx-auto px-4"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-blue-2xl rounded-2xl"
          >
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold text-gray-700">
                Register.
              </h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600"></p>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  v-model="username"
                  name="username"
                  type="text"
                  class="input"
                  placeholder="Username"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  name="email"
                  type="email"
                  class="input"
                  placeholder="Email"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  name="location"
                  type="password"
                  class="input"
                  placeholder="Password"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  class="dringo-btn"
                  :disabled="status.loggingIn"
                  @click.prevent="handleRegister"
                >
                  Register
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
      username: "",
      email: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    ...mapState("auth", ["status"]),
  },
  created() {
    this.logout();
  },
  methods: {
    ...mapActions("auth", ["register", "logout"]),

    handleRegister() {
      this.submitted = true;
      const { username, email, password } = this;
      if (username && email && password) {
        this.register({ username, email, password });
      }
    },
  },
};
</script>

<style></style>

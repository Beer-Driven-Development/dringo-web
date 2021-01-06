<template>
  <div>
    <!-- nav -->
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark" v-if="account">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <a class="nav-item nav-link">Logout</a>
      </div>
    </nav> -->

    <!-- main app container -->
    <div class="">
      <p v-if="isConnected">We're connected to the server!</p>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { userService } from "./_services";

export default {
  data() {
    return {
      account: null,
      isConnected: false,
    };
  },

  methods: {
    logout: userService.logout,
  },
};
</script>

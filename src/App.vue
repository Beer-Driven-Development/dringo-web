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
      <p>Message from server: "{{ socketMessage }}"</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { userService } from "./_services";
import io from "socket.io-client";

const socket = io("https://dringo.herokuapp.com");

export default {
  data() {
    return {
      account: null,
      isConnected: false,
      socketMessage: "",
    };
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
  },
  created() {
    socket.on("joinedRoom", (data) => {
      this.socketMessage = data;
    });
    socket.emit("joinRoom", {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyOSwiZW1haWwiOiJtYXRldXN6bWlqZXdza2lAZ21haWwuY29tIiwidXNlcm5hbWUiOiJSaWNreSJ9LCJpYXQiOjE2MDk5NDM4OTcsImV4cCI6MTYwOTk1Mzk3N30.lcT7aJgnnzkTqsR4kb_uweAxj8r_7Uf1832ii_pNv2I",
      id: 52,
      passcode: "1234",
    });
  },
  methods: {
    logout: userService.logout,
  },
};
</script>

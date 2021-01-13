<template>
  <div class="container mx-auto m-64">
    <h2 class="text-indigo-500 font-black text-5xl pb-4">
      {{ currentRoom.name }}
    </h2>

    <h4
      v-for="participant in participants"
      v-bind:key="participant.id"
      class="text-center text-xl"
    >
      <div v-if="participant.id == currentRoom.creator.id">
        <p>
          <i class="fas fa-crown text-indigo-800"></i>
          {{ participant.username }}
        </p>
      </div>
      <div v-else>
        <p>
          {{ participant.username }}
        </p>
      </div>
    </h4>
    <div class="text-center mt-6" v-if="user.id == currentRoom.creator.id">
      <button class="dringo-btn" @click.prevent="handleStart">
        Start
      </button>
    </div>

    <div class="text-center mt-6">
      <button class="dringo-btn" @click.prevent="handleLeave">
        Leave
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Room",

  methods: {
    ...mapActions("room", ["setRoom", "start"]),
    ...mapActions("degustation", ["setPivots", "setBeer"]),

    handleStart() {
      this.start({
        roomId: this.currentRoom.id,
        participants: this.participants,
      });

      this.$socket.client.emit("getDegustation", {
        id: this.currentRoom.id,
        token: this.token,
      });
    },

    handleLeave() {
      this.$socket.client.emit("leaveRoom", {
        id: this.currentRoom.id,
        email: this.user.email,
        token: this.token,
      });

      this.$router.push({ name: "Rooms" });
    },
  },

  computed: {
    ...mapState("room", ["rooms", "currentRoom", "participants"]),
    ...mapState("auth", ["token", "user"]),
  },

  created() {
    this.$socket.client.on("first", (data) => {
      console.log("JUTRZENKA");
      console.log(data);
      this.setBeer(data.beer);
      this.setPivots(data.pivots);
      console.log("SŁOŃCE GÓRUJE W ZENICIE");
      this.$router.push({ name: "Degustation" });
    });

    this.setRoom(`${this.$route.params.id}`);
  },
};
</script>

<style></style>

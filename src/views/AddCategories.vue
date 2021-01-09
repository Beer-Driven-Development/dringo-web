<template>
  <div class="m-24">{{ roomId }}</div>
</template>

<script>
export default {
  computed: {
    roomId: function() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>

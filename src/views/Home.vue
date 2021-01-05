<template>
  <div class="container mx-auto m-64">
    <h1 class="text-indigo-500 font-black text-6xl text-center">
      Dringo
    </h1>

    <div class="container mx-auto m-64 flex justify-around">
      <router-link
        :to="`/login`"
        tag="button"
        class="bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-bold text-2xl text-center py-4 px-16"
      >
        Login
      </router-link>
      <router-link
        :to="`/register`"
        tag="button"
        class="bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-bold text-2xl text-center py-4 px-16"
      >
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

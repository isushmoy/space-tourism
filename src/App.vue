<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header class="absolute">
    <NavBar />
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped></style>

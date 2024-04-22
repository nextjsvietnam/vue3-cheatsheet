<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import environment from "./configs/environment";
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">{{ environment.APP_NAME }}</h1>
    <a href="/" target="_blank">
      <img src="./assets/s-logo.png" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <footer>
    <p>
      Copyright @ {{ environment.APP_NAME }} - version:
      {{ environment.APP_VERSION }} ({{ environment.MODE }})
    </p>
  </footer>
</template>

<style scoped></style>

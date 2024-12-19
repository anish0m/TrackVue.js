<script setup lang="ts">
import { ref } from 'vue'

const imageURL = ref('https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Bat-signal_1989_film.jpg/220px-Bat-signal_1989_film.jpg')
</script>

<template>
  <div id="app">
    <img :src="imageURL" alt="Dynamic Image">
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

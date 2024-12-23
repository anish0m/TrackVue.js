<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Password?')

const changeMessage = () => {
  message.value = 'Caput Draconis'
}
</script>

<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="changeMessage">Fat Lady</button>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

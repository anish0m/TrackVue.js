<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <div id="app">
    <input v-model="message" type="text" placeholder="Your Text Here.">

    <h3>{{ message }}</h3>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

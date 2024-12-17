<script setup lang="ts">
import { ref } from 'vue'
const numberInput = ref(0)
</script>

<template>
  <div id="app">
    <input v-model.number="numberInput" type="number" placeholder="Enter a number">

    <p v-if="numberInput > 0">The number is positive</p>
    <p v-else-if="numberInput < 0">The number is negative</p>
    <p v-else>The number is zero</p>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

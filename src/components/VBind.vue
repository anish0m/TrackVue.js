<script setup lang="ts">
import { ref } from 'vue'

const imageURL = ref('https://i.pinimg.com/736x/82/18/e6/8218e646c894230908b799bd04470083.jpg')
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

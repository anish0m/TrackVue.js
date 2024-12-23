<script setup lang="ts">
import { ref } from 'vue'

import pitchImage from '@/assets/info-views/quidditch.jpg';

const imageURL = ref(pitchImage);
</script>

<template>
  <div id="app">

    <img :src="imageURL" alt="Quidditch">
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

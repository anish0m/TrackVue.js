<script setup lang="ts">
import { ref } from 'vue'

import teachersImage from '@/assets/info-views/teachers.jpg';

const imageURL = ref(teachersImage);
</script>

<template>
  <div id="app">

    <img :src="imageURL" alt="Professors">
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

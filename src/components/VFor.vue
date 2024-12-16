<script setup lang="ts">
import { ref } from 'vue'

const dorm = ref([
  { id: 208, name: 'Orpa' },
  { id: 209, name: 'Rifa' },
  { id: 217, name: 'Roza' },
  { id: 227, name: 'Sabah' },
  { id: 228, name: 'Ryaan' }
])
</script>

<template>
  <div id="app">
    <ul>
      <li v-for="person in dorm" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'

const user = reactive({
  name: 'Anishom Frost',
  age: 25
})
</script>

<template>
  <div>
    <h2>About me:</h2>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <button @click="user.age++">Click on Birthday!</button>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

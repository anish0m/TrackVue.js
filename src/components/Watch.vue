<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

// Watch the count variable
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})
</script>

<template>
  <div>
    <p>Current count: {{ count }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

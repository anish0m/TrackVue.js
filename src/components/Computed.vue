<script setup lang="ts">
import { ref, computed } from 'vue'

const price = ref(452)
const discount = ref(9)

const finalPrice = computed(() => price.value - (price.value * discount.value / 100))
</script>

<template>
  <div>
    <p>Price: ${{ price }}</p>
    <p>Discount: {{ discount }}%</p>
    <p>Final Price: ${{ finalPrice }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

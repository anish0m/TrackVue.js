<template>
    <div>
      <select v-model="selectedHouse">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
  
      <div v-if="$slots['house-message']">
        <slot name="house-message">
          <p>{{ selectedHouse }} - Welcome to your House!</p>
        </slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, watch, ref } from 'vue';
  
  const props = defineProps({
    house: String
  });
  
  const emit = defineEmits(['update:house']);
  
  const selectedHouse = ref(props.house);
  
  watch(selectedHouse, (newHouse) => {
    emit('update:house', newHouse);
  });
  
  watch(
    () => props.house,
    (newHouse) => {
      selectedHouse.value = newHouse;
    }
  );
  </script>
  
<template>
    <select v-model="selectedHouse">
      <option value="Gryffindor">Gryffindor</option>
      <option value="Slytherin">Slytherin</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Hufflepuff">Hufflepuff</option>
    </select>
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
  
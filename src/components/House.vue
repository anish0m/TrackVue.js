<template>
    <div>
      <h1>Sorting Ceremony</h1>
      <ChildComponent v-model:house="studentHouse" />
      <p>Current House: {{ studentHouse }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from './CommonRoom.vue';
  
  const studentHouse = ref("None");
  </script>
  
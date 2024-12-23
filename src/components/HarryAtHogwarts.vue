<template>
    <div>
      <ul>
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, watch } from 'vue';
  
  const props = defineProps<{ messages: string[] }>();
  const emit = defineEmits();
  
  // Emit the finished event when all messages have been shown (based on the messages length)
  watch(() => props.messages.length, (newLength) => {
    if (newLength === props.messages.length) {
      // Delay to give time for the last message to show
      setTimeout(() => {
        emit('finished');
      }, 300);
    }
  });
  </script>
  
<template>
    <div>
      <button 
        class="my-button" 
        @click="handleClick">
        Dumbledore
      </button>
  
      <ChildComponent
        v-if="messageIndex > 0"
        :messages="messages.slice(0, messageIndex)"
        @finished="handleFinished" 
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ChildComponent from './HarryAtHogwarts.vue';
  
  const messages = [
    'Here we treat everyone equally.',
    'Oh, hello there, Harry!',
    'Ten points to Gryffindors for Harry being with us.'
  ];
  
  let messageIndex = ref(0);
  
  const handleClick = () => {
    if (messageIndex.value === 0) {
      console.log('Welcome to Hogwarts!');
    } else if (messageIndex.value <= messages.length) {
      console.log(messages[messageIndex.value - 1]);
    }
  
    messageIndex.value++;
  
    if (messageIndex.value > messages.length) {
      console.log('Now, Prefects will lead you to your common rooms. Good night!');
    }
  };
  
  const handleFinished = () => {
  };
  </script>
  
  <style scoped>
  .my-button {
    background-color: #112438;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .my-button:hover {
    background-color: #1c4a6b;
  }
  </style>
  
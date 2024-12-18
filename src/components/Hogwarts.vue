<template>
    <div>
      <button 
        class="my-button" 
        @click="handleClick">
        Dumbledore
      </button>

      <ChildComponent v-if="messageIndex > 0" :messages="messages.slice(0, messageIndex)" />
    </div>
  </template>
  
  <script setup lang="ts">
  import ChildComponent from './HarryAtHogwarts.vue'
  
  const messages = [
    'Here we treat everyone equally.',
    'Oh, hello there, Harry!',
    'Ten points to Gryffindor for Harry being with us.'
  ];
  
  let messageIndex = 0;
  
  const handleClick = () => {
    if (messageIndex === 0) {
      console.log('Welcome to Hogwarts!');
    } else if (messageIndex <= messages.length) {
      console.log(messages[messageIndex - 1]);
    }
    
    messageIndex++;
  }
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
  
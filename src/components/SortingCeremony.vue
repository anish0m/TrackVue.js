<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import hogwartsImage from '@/assets/dashboard-views/hogwarts_dashboard.jpg';

const imageURL = ref(hogwartsImage)
</script>

<template>
  <div id="app">
    <nav>
      <ul>
        
        <li><RouterLink to="/hogwartspage">Hogwarts</RouterLink></li>
        <li><RouterLink to="/hogwartspage/teachers">Teachers</RouterLink></li>
        <li><RouterLink to="/hogwartspage/quidditch">Quidditch</RouterLink></li>
        <li><RouterLink to="/gryffindor">Gryffindor</RouterLink></li>
        <li><RouterLink to="/hufflepuff">Hufflepuff</RouterLink></li>
        <li><RouterLink to="/ravenclaw">Ravenclaw</RouterLink></li>
        <li><RouterLink to="/slytherin">Slytherin</RouterLink></li>
      </ul>
    </nav>

    <router-view />

    <img :src="imageURL" alt="Hogwarts Dashboard Image" />

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

nav {
  margin-top: 20px;
}

nav ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}

nav li {
  margin: 0 10px;
}

a.router-link-active {
  font-weight: bold;
  color: #42b883;
}
</style>

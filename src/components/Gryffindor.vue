<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import gryffindorImage from '@/assets/dashboard-views/gryffindor_dashboard.jpg';

const imageURL = ref(gryffindorImage);
</script>

<template>
  <div id="app">
    <nav>
      <ul>
        <li><RouterLink to="/hogwartspage">Hogwarts</RouterLink></li>
        <li><RouterLink to="/gryffindor">Gryffindor</RouterLink></li>
        <li><RouterLink to="/hufflepuff">Hufflepuff</RouterLink></li>
        <li><RouterLink to="/ravenclaw">Ravenclaw</RouterLink></li>
        <li><RouterLink to="/slytherin">Slytherin</RouterLink></li>
      </ul>
    </nav>

    <img :src="imageURL" alt="Gryffindor Dashboard Image">
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

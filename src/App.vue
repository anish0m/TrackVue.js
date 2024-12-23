<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <nav>
      <ul>
        <li><RouterLink to="/home">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/practice">Practice</RouterLink></li>
        <li><RouterLink to="/hogwartspage">Hogwarts</RouterLink></li>
      </ul>
    </nav>

    <RouterView />

    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
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

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import directiveUsage from './components/DirectiveUsage.vue'
import vBind from './components/VBind.vue'
import vModel from './components/VModel.vue'
import vCondition from './components/VConditions.vue'
import vFor from './components/VFor.vue'
import vOn from './components/VOn.vue'
import cref from './components/Ref.vue'
import creactive from './components/Reactive.vue'
import ccomputed from './components/Computed.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <directiveUsage message />
  <vBind />
  <vModel message />
  <vCondition />
  <vFor />
  <vOn />
  <cref />
  <creactive />
  <ccomputed />

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
</style>

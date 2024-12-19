<script setup lang="ts">
import directiveUsage from './DirectiveUsage.vue'
import vBind from './VBind.vue'
import vModel from './VModel.vue'
import vCondition from './VConditions.vue'
import vFor from './VFor.vue'
import vOn from './VOn.vue'
import cref from './Ref.vue'
import creactive from './Reactive.vue'
import ccomputed from './Computed.vue'
import cwatch from './Watch.vue'
import myButton from './MyButton.vue'
import dumbledore from './Hogwarts.vue'
import sortToHouse from './SortIntoHouse.vue'

</script>

<template>
  <div>
    <directiveUsage message />
    <vBind />
    <vModel message />
    <vCondition />
    <vFor />
    <vOn />
    <cref />
    <creactive />
    <ccomputed />
    <cwatch />
    <myButton label="Platform 9 3/4" />
    <dumbledore />
    <sortToHouse />
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
</style>

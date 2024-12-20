import { useMainStore } from '../stores/mainStore'



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
import { useMainStore } from '../stores/mainStore'

const mainStore = useMainStore();

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
    <button @click="mainStore.count++">Counter</button>
    <p>Current Count: {{ mainStore.count }}</p>
  </div>
</template>

<style scoped>
</style>

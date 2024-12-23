<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Vue.js Directive Usage')
</script>

<template>
    <h3>{{ message }}</h3>

    <div class="card">
        <p>
            Trying to use Vue.js Directives with dynamic message.
        </p>
    </div>

</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

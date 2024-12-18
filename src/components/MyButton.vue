<template>
    <button class="my-button" @click="handleClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
    defineProps<{ label: string }>()

    const handleClick = () => {
        console.log('Welcome to Hogwarts!')
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
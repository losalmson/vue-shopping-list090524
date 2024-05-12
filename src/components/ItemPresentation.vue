<script setup lang="ts">
</script>

<template>
    <li :class="item.done ? 'done' : ''">
        <span>{{ item.text }}</span>
        <button @click="() => toggleItem(i)">
            {{ !item.done ? "Cross off wishlist" : "Hey, I still want this!"}}
        </button>
        <button @click="() => removeItem(i)">
            Remove
        </button>
        </li>
</template>

<style scoped>
</style>
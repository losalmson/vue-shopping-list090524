<script setup lang="ts">

interface ItemPresentationProps {
    item: Item;
    i: number;
}
    defineProps<ItemPresentationProps>();

   const handleToggle = (i: number) => {};
   
   const handleRemove = (i: number) => {};
</script>

<template>
    <li :class="item.done ? 'done' : ''">
        <span>{{ item.text }}</span>
        <button @click="() => handleToggle(i)">
            {{ !item.done ? "Cross off wishlist" : "Hey, I still want this!"}}
        </button>
        <button @click="() => handleRemove(i)">
            Remove
        </button>
        </li>
</template>

<style scoped>
</style>
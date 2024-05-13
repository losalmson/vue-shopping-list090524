
<script setup lang="ts">
import { Item } from '../models/Item';

interface ItemPresentationProps {
    item: Item;
    i: number;
}
    defineProps<ItemPresentationProps>();
    
    const emit = defineEmits<{
        (e: "toggle", i:number):void;
        (e: "remove", i:number):void
    }>();

   const handleToggle = (i: number) => {
    emit("toggle", i);
   };
   
   const handleRemove = (i: number) => {
    emit("remove", i);
   };
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
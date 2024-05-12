<script setup lang="ts">
import { ref } from 'vue';
import { Item } from '../models/Item';

const items = ref<Item[]>([new Item("Test")]);
const newItem = ref("");

const handleSubmit = () => {
    items.value.push(new Item(newItem.value));

    newItem.value="";
};

const toggleItem = (i: number) => {
    items.value[i].done = !items.value[i].done;
};

const removeItem = (i: number) => {
    items.value.splice(i, 1);
};

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="newItem" placeholder="add grail 2 list"/>
        <button>Add Item</button>
    </form>

    <ul>
        <ItemPresentation v-for="item in items" :key="item.id" />
    </ul>
    <p v-if="!items.length">Nothing to see here boo ...</p>
</template>

<style scope>
</style>
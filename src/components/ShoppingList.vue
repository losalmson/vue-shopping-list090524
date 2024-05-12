<script setup lang="ts">
import { ref } from 'vue';
import { Item } from '../models/Item';

const items = ref<Item[]>([]);
const newItem = ref("");

const handleSubmit = () => {
    items.value.push(new Item(newItem.value));

    newItem.value="";
};

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="newItem" placeholder="add grail 2 list"/>
        <button>Add Item</button>
    </form>

    <ul>
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>
    <p v-if="!items.length">Nothing to see here boo ...</p>
</template>

<style scope>
</style>
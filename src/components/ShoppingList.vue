<script setup lang="ts">
import { ref } from 'vue';
import ItemPresentation from './ItemPresentation.vue';
import { Item } from '../models/Item';


const items = ref<Item[]>([]);
const newItem = ref("");

const handleSubmit = () => {
    items.value.push(new Item(newItem.value));

    newItem.value="";
};

const handleToggle = (i: number) => {
    items.value[i].done = !items.value[i].done;
};

const handleRemove = (i: number) => {
    items.value.splice(i, 1);
};

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="newItem" placeholder="add grail 2 list"/>
        <button>Add Item</button>
    </form>

    <ul>
        <!-- item i (item,i) rep. en film  -->
        <ItemPresentation 
        v-for="(item, i) in items"  
        :key="item.id" 
        :item="item" 
        :i="i" @toggle="handleToggle"/>
    </ul>
    <p v-if="!items.length">Nothing to see here boo ...</p>
</template>

<style scope>
</style>
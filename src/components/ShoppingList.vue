<script setup lang="ts">
import { ref } from 'vue';
import { Item } from '../models/Item';
import ItemPresentation from './ItemPresentation.vue';
import AddItem from './AddItem.vue';

const items = ref<Item[]>([]);

const addItem = (text: string) => {
    items.value.push(new Item(text));
}
const handleToggle = (i: number) => {
    items.value[i].done = !items.value[i].done;
};

const handleRemove = (i: number) => {
    items.value.splice(i, 1);
};

</script>

<template>
    <!-- <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="newItem" placeholder="add grail 2 list"/>
        <button>Add Item</button>
    </form> -->
    <AddItem @add="addItem"/>
    <ul>
        <!-- item i (item,i) rep. en film  -->
        <ItemPresentation 
        v-for="(item, i) in items"  
        :key="item.id" 
        :item="item" 
        :i="i" 
        @toggle="handleToggle" 
        @remove="handleRemove"/>
    </ul>
    <p v-if="!items.length">Nothing to see here ...</p>
</template>
<style scope>
</style>
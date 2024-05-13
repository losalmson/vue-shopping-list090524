<script setup lang="ts">
import { Item } from
import {ref} from 'vue';

const newItem = ref("");

const emit = defineEmits<{
    (e: "add", text: string): void;
}>();

const handleSubmit = () => {
    emit("add", newItem.value);
    newItem.value = "";
};

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="newItem" placeholder="add grail 2 list"/>
        <button>Add Item</button>
    </form>
</template>

<style scoped>
</style>
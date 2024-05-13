<script setup lang="ts">

import {ref} from 'vue';

const newItem = ref("");
const error = ref("");

const emit = defineEmits<{
    (e: "add", text: string): void;
}>();

const handleSubmit = () => {
   if (newItem.value !== "") {
   emit("add", newItem.value);
    newItem.value = "";
    error.value = ""; 
    } else 
    {
     error.value="This field can't be empty";
    }
};

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="newItem" placeholder="add grail 2 list"/>
        <button>Cancel</button>
        <button class="btn-add">Add Item</button>
    </form>
    <p v-if="error !== ''">{{ error }}</p>
</template>

<style scoped>

.btn-add {
    background-color: rgb(124, 169, 236);
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import { Item } from '../models/Item';

const items = ref<Item[]>([new Item("Test")]);

</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>
</template>

<style scope>
</style>
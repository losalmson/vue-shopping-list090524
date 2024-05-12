<script setup lang="ts">
import { ref } from 'vue'

const newItem = ref("Hej");

const handleSubmit = () => {}; 

const handleInput = (e) => {
  newItem.value = e.target.value;
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="add grail 2 list" :value="newItem" @input="handleInput" />
      <button>Add Item</button>
    </form>
    <p>{{ newItem }}</p>
</template>

<style scoped>
 .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} 
</style>

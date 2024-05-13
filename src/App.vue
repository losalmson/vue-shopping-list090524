<script setup lang="ts">
// import { ref } from 'vue';
import ShoppingList from './components/ShoppingList.vue';


// const newItem = ref("");

// const handleSubmit = () => {
//   console.log("Submitting:", newItem.value);
// }; 

// const handleInput = (e) => {
//   newItem.value = e.target.value;
// };
</script>

<template>
    <!-- <form @submit.prevent="handleSubmit">
      <input type="text" v-model.trim="newItem" placeholder="add grail 2 list" />
      <button>Add Item</button>
    </form>
    <p>{{ newItem }}</p> -->

    <ShoppingList />
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

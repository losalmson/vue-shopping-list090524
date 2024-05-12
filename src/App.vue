<script setup lang="ts">
import { ref } from 'vue'

const header = ref('My Wishlist')
const newItem = ref("");

const handleSubmit = () => {}; 
// const editing = ref(false);
// const items = ref([
//   // {id: 1, label: "A cute Hello Kitty top"},
//   // {id: 2, label: "Prada Loafers size 36"},
//   // {id: 3, label: "Fenty lipgloss"}
// ])

// const newItem = ref("")
// const newItemHighPriority = ref(false)
// const saveItem = () => {
//   items.value.push({id: items.value.length + 1, label: newItem.value})
//   newItem.value = ""
// }
// const doEdit = (e) => {
//   editing.value= e
//   newItem.value = ""
// }
</script>

<template>
    <h1>{{ header }}</h1>

    <form @submit.prevent="handleSubmit">
      <input type="text" value="Gucci FlipFlops" />
      <button>Add Item</button>
    </form>
    <!-- <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add Item
    </button>
      <form
        class="add-item-form"
        v-if="editing"
        @submit.prevent="saveItem"
      >
        <input
        v-model.trim="newItem"
        type="text"
        placeholder="Add to wishlist babe"
        >
        <label>
          <input type="checkbox" v-model="newItemHighPriority">
          Prio
        </label>
        <button
          class="btn btn-primary"
        >
        Save Item
        </button>
      </form>
      <ul>
        <li v-for="({id, label}, i) in items" :key="id">
        {{ label }}
        </li>
      </ul>
      <p v-if="!items.length">
      Nothing here yet boo ... 
      </p> -->
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

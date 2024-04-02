<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="header">
    <RouterLink :to="{ name: 'AllTodos' }"
      ><h1 :style="{ top: '-200px' }">Fetching</h1></RouterLink
    >
    <input
      type="text"
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      :style="{ width: '600px' }"
      @keyup.enter="
        // @ts-ignore
        $emit('add-todo', $event.target.value);
        // @ts-ignore
        $event.target.value = '';
      "
    />
  </header>
</template>

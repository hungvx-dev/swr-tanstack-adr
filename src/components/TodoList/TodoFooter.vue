<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { type Todo } from "../../apis/todo-list";

const props = defineProps<{ todos: Todo[] }>();
const route = useRoute();

const isActive = computed(() => !!route.name?.toString().includes("Active"));
const isCompleted = computed(
  () => !!route.name?.toString().includes("Completed"),
);

const isDeletedCompleted = computed(() =>
  props.todos.some((todo) => todo.isCompleted),
);

const remaining = computed(
  () => props.todos.filter((todo) => !todo.isCompleted).length,
);
</script>

<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      {{ remaining === 1 ? "item" : "items" }} left
    </span>
    <ul class="filters">
      <li>
        <RouterLink
          :to="{ name: 'AllTodos' }"
          :class="{ selected: !(isActive || isCompleted) }"
          >All</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'ActiveTodos' }"
          :class="{ selected: isActive }"
          >Active</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'CompletedTodos' }"
          :class="{ selected: isCompleted }"
          >Completed</RouterLink
        >
      </li>
    </ul>
    <!-- <button -->
    <!--   class="clear-completed" -->
    <!--   v-show="isDeletedCompleted" -->
    <!--   @click="$emit('delete-completed')" -->
    <!-- > -->
    <!--   Clear Completed -->
    <!-- </button> -->
  </footer>
</template>

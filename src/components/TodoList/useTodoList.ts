import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed, reactive, watch } from "vue";

import * as API from "../../apis/todo-list";
import type { Pagination, Queries, Todo } from "../../apis/todo-list";
import { useRoute } from "vue-router";

export default function useTodoList() {
  const route = useRoute();
  const pagination = reactive<Pagination>({ page: 1, limit: 10 });
  const queries = reactive<Queries>({});
  const queryClient = useQueryClient();

  const isActive = computed(() => !!route.name?.toString().includes("Active"));
  const isCompleted = computed(
    () => !!route.name?.toString().includes("Completed"),
  );

  const {
    isLoading,
    isFetching,
    data: todos,
  } = useQuery({
    initialData: [],
    queryKey: ["todos", { pagination, queries }],
    queryFn: async () => {
      let todos = await API.getTodos(pagination, queries);
      if (typeof todos !== "object") {
        todos = [];
      }
      return todos;
    },
    retry: false,
  });

  const { mutate: createTodo } = useMutation({
    mutationFn: API.createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", { pagination, queries }],
      });
    },
  });

  const { mutate: updateTodo } = useMutation({
    mutationFn: (todo: Todo) => API.updateTodo(todo.id, todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", { pagination, queries }],
      });
    },
  });

  const { mutate: deleteTodo } = useMutation({
    mutationFn: API.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", { pagination, queries }],
      });
    },
  });

  watch(
    [isActive, isCompleted],
    ([isActive, isCompleted]) => {
      queries.isCompleted = isCompleted ? true : isActive ? false : undefined;
    },
    { immediate: true },
  );

  const handleCreateTodo = (content: string) => {
    createTodo({
      content,
      isCompleted: false,
    });
  };

  const handleToggleTodo = (todo: Todo, value: boolean) => {
    updateTodo({ ...todo, isCompleted: value });
  };

  const handleEditContent = (todo: Todo, content: string) => {
    updateTodo({ ...todo, content });
  };

  return {
    todos,
    isLoading,
    isFetching,
    handleCreateTodo,
    handleToggleTodo,
    handleEditContent,
    updateTodo,
    deleteTodo,
  };
}

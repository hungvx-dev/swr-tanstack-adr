export type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export type Pagination = {
  page: number;
  limit: number;
};

export type Queries = {
  isCompleted?: boolean;
};

export const getTodos = async (
  _pagination: Pagination,
  queries: Queries,
): Promise<Todo[]> => {
  const url = new URL(
    "https://65e82b144bb72f0a9c4e704d.mockapi.io/api/v1/todos?sortBy=id&order=desc",
  );
  if (typeof queries.isCompleted !== "undefined") {
    url.searchParams.append("isCompleted", queries.isCompleted!);
  }
  const res = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  return await res.json();
};
export const createTodo = async (todo: Omit<Todo, "id">) => {
  const res = await fetch(
    `https://65e82b144bb72f0a9c4e704d.mockapi.io/api/v1/todos`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    },
  );
  return await res.json();
};

export const updateTodo = async (id: number, todo: Omit<Todo, "id">) => {
  const res = await fetch(
    `https://65e82b144bb72f0a9c4e704d.mockapi.io/api/v1/todos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    },
  );

  return await res.json();
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(
    `https://65e82b144bb72f0a9c4e704d.mockapi.io/api/v1/todos/${id}`,
    { method: "DELETE" },
  );

  return await res.json();
};

export const deleteTodos = async (id: string) => {
  const res = await fetch(
    `https://65e82b144bb72f0a9c4e704d.mockapi.io/api/v1/todos?`,
    { method: "DELETE" },
  );

  return await res.json();
};

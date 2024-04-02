<script setup lang="ts">
import useSWRV from "swrv";
import { ref } from "vue";

let id = ref("");
const { data } = useSWRV(
  () =>
    id.value
      ? `https://65cd8fadc715428e8b3e93f4.mockapi.io/api/v1/users/${id.value}`
      : null,
  undefined,
  {
    revalidateOnFocus: false,
  }
);
const {
  data: users,
  isValidating,
  mutate,
} = useSWRV(
  () => `https://65cd8fadc715428e8b3e93f4.mockapi.io/api/v1/users`,
  undefined,
  {
    revalidateOnFocus: false,
  }
);

const onSelectUser = (value: string) => {
  id.value = value;
};
</script>
<template>
  <router-link :to="{ name: 'fetcher' }">
    <h1 class="text-animation-title">Examples</h1></router-link
  >
  <div v-if="isValidating">Fetching data</div>
  <div class="user" v-else>
    <table>
      <tr>
        <th>Name</th>
        <th>Avatar</th>
        <th>Id</th>
      </tr>
      <tr v-for="user in users" @click="onSelectUser(user.id)">
        <td>{{ user.name }}</td>
        <td><img :src="user.avatar" alt="Avatar" class="avatar" /></td>
        <td>{{ user.id }}</td>
      </tr>
    </table>
    <h3>{{ data?.name }}</h3>
  </div>
  <button @click="() => mutate()">Refresh Data</button>
</template>
<style scoped>
.btn-example {
  margin-right: 10px;
}
.user {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
}
.avatar {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<template>
  <router-link :to="{ name: 'tanstack-cons-and-pros' }">
    <h1>
      <mark>Why Tankstack Query?</mark>
    </h1>
    <h2>
      <mark> Challenges in Data Management:</mark>
      <ul>
        <li>
          Traditional approaches to data fetching in React often involve writing
          boilerplate code, managing complex caching logic, and handling various
          edge cases.
        </li>
        <li>
          These challenges can lead to increased development time, code
          complexity, and maintenance overhead.
        </li>
      </ul>
      <mark> Tankstack Query Solution: </mark>
      <ul>
        <li>
          Tankstack Query addresses these challenges by offering a powerful yet
          simple solution for data management.
        </li>
        <li>
          Its features include a robust caching mechanism, support for
          server-side rendering, and built-in optimistic updates, among others.
        </li>
        <li>
          By leveraging Tankstack Query, developers can focus more on building
          features and less on managing data fetching and state.
        </li>
      </ul>
    </h2>
  </router-link>
</template>

<style scoped>
h2 {
  text-align: left;
}
</style>

<template>
  <router-link :to="{ name: 'advantages' }">
    <h1 class="text-animation-title">Why SWRV?</h1></router-link
  >
  <ul>
    <li>
      <mark>Caching</mark>: The library automatically caches the fetched data,
      helping to quickly serve the data without making redundant network
      requests.
    </li>
    <li>
      <mark>Auto Revalidation</mark>: If the data is stale, SWRV revalidates it
      (re-fetches from the server) to keep it fresh.
    </li>
    <li>
      <mark> Data Mutation</mark>: Trigger data refreshing manually via
      <mark>mutate</mark> function
    </li>
    <li>
      <mark>Real time experience</mark>: The first data came from cache, the api
      is auto refresh when the dependency is updated
    </li>
    <li>
      <mark>Request deduplication</mark>: If there are many same requests are
      sent at the same time -> Just only one request will be sent -> better UX
    </li>
    <li>Reusable code</li>
    <li>Typescript ready</li>
    <li>Stale-if-error</li>
    <li>Error Retry</li>
  </ul>
</template>
<style scoped>
h1 {
  text-align: left !important;
}
li {
  list-style: decimal;
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 20px;
}
</style>

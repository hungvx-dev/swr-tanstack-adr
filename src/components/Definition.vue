<template>
  <router-link :to="{ name: 'selection' }">
    <h2>
      <mark>SWRV</mark> is a library using the
      <mark>Vue Composition API</mark> for remote data fetching. It is largely a
      port of <mark>SWR</mark>.
    </h2>
    <h2>
      <mark>SWR</mark> is a library built upon the stale-while-revalidate
      strategy. It is a strategy to first return the data from cache (stale),
      then send the fetch request (revalidate), and finally come with the
      up-to-date data.
    </h2>
    <h2>
      With swrv, components will get a stream of data updates constantly and
      automatically. Thus, the UI will be always fast and reactive.
    </h2>
  </router-link>
</template>

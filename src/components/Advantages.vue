<template>
  <router-link :to="{ name: 'examples' }">
    <h1 class="text-animation-title">Advantages of SWRV</h1></router-link
  >
  <ul>
    <li>
      Focus Revalidation: When you re-focus a page or switch between tabs in the
      browser, SWR automatically revalidates data.
    </li>
    <li>
      Fast Navigation: SWR automatically revalidates the data from the origin as
      soon as data is rendered from the cache.
    </li>
    <li>
      Refetch on Interval: SWR will give you the option to automatically fetch
      data, where prefetching will only take place of the component associated
      with the hook is on the screen.
    </li>
    <li>
      Local Mutation: Applying changes to data locally, i.e. always updated to
      the most recent data.
    </li>
    <li>
      Dependent Fetching: SWRV allows you to fetch data that depends on other
      data. It ensures the maximum possible parallelism (avoiding waterfalls),
      as well as serial fetching when a piece of dynamic data is required for
      the next data, fetch to happen.
    </li>
    <li>
      Scalable: SWRV scales extremely well because it requires very little
      effort to write applications that automatically and eventually converge to
      the most recent remote data.
    </li>
    <li>
      Performance: the library is built-in caching and deduplication skips
      unnecessary network requests
    </li>
    <li>Tree Shaking</li>
  </ul>
  <h1 class="text-animation-title">Disadvantages of SWRV</h1>
  <p>
    A major disadvantage of using SWRV is that it might lead the user looking at
    stale data, which can happen because of a lack of proper implementation of
    the API, error in updating the displayed information, and possibly many
    others.
  </p>
</template>
<style scoped>
h1 {
  text-align: left;
}
li {
  list-style: decimal;
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 20px;
}
p {
  text-align: left;
  font-size: 1.5rem;
}
</style>

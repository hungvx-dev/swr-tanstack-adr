<template>
  <router-link :to="{ name: 'AllTodos' }">
    <section class="comparison">
      <div class="pros">
        <h2><mark>Pros</mark></h2>
        <ul>
          <li>
            <strong>Simplified Data Fetching:</strong> TanStack Query abstracts
            away the complexities of managing asynchronous data fetching,
            retries, caching, and state updates. You can define data fetching
            logic and handle different states (loading, success, error) with
            concise hooks.
          </li>

          <li>
            <strong>Powerful Caching Mechanism:</strong>
            TankStack Query provides a robust caching mechanism out of the box.
            It handles cache invalidation, background updates, and pagination
            seamlessly, reducing the need for manual cache management.
          </li>
          <li>
            <strong>Server-side Rendering (SSR) Support:</strong> It offers
            built-in support for server-side rendering, ensuring consistent data
            loading between the client and server. This is particularly
            beneficial for improving initial load times and SEO performance.
          </li>

          <li>
            <strong>Improved Performance:</strong> By intelligently caching data
            and leveraging techniques like background refetching, TanStack Query
            ensures your application displays up-to-date information while
            minimizing unnecessary API calls.
          </li>
          <li>
            <strong>Automatic State Management:</strong> TanStack Query
            automatically manages the loading, success, and error states
            associated with data fetching. This eliminates the need for manual
            state management logic in your components.
          </li>
          <li>
            <strong>Enhanced Developer Experience:</strong> TanStack Query
            provides a developer-friendly API with hooks that integrate
            seamlessly with React. It also offers debugging tools to help you
            identify and troubleshoot issues with your data fetching logic.
          </li>
          <li>
            <strong>Code Reusability:</strong> TanStack Query promotes code
            reusability by allowing you to define and share queries across
            different components in your application. This reduces redundancy
            and improves code maintainability.
          </li>
          <li>
            <strong>Offline Support:</strong> TanStack Query can handle
            mutations (data updates) even when the user is offline. It allows
            you to queue mutations and automatically retry them when the
            connection is restored.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> TanStack Query has a large and
            active community, with extensive documentation, tutorials, and
            third-party libraries that extend its functionality.
          </li>
        </ul>
      </div>

      <div class="cons">
        <h2><mark>Cons</mark></h2>
        <ul>
          <li>
            <strong>Increased Complexity:</strong> For simple data fetching
            scenarios, TanStack Query might add a layer of complexity compared
            to a basic fetch implementation. Evaluate if the trade-off in
            maintainability and performance outweighs the initial setup.
          </li>
          <li>
            <strong>Potential for Overfetching:</strong> TanStack Query's
            aggressive caching can lead to overfetching data if not configured
            correctly. You'll need to define appropriate cache invalidation
            strategies to ensure data freshness.
          </li>
          <li>
            <strong>Debugging Challenges:</strong> Debugging complex data
            fetching logic involving multiple queries and mutations can become
            intricate. Utilizing TanStack Query's developer tools and
            understanding its caching mechanisms are crucial for effective
            troubleshooting.
          </li>
        </ul>
      </div>
    </section>
  </router-link>
</template>

<style scoped>
body {
  max-width: 100% !important;
}
section.comparison {
  margin: 50px;
  text-align: left;
}

.comparison strong {
  color: yellow;
}

.comparison h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 56px;
}

.pros,
.cons {
  margin-bottom: 2rem;
}

.cons {
  margin-top: 4rem;
}

.comparison h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 40px;
}

.comparison ul {
  list-style: none;
  padding: 0;
}

.comparison li {
  margin-bottom: 1rem;
  font-size: 24px;
  line-height: 1.3;
}
</style>

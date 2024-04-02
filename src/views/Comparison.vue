<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>TanStack Query</th>
        <th>
          SWR
          <a href="https://github.com/vercel/swr" node="[object Object]"
            ><em>(Website)</em></a
          >
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Github Repo / Stars</td>
        <td>
          <a
            href="https://github.com/tannerlinsley/react-query"
            node="[object Object]"
            ><img
              src="https://img.shields.io/github/stars/tannerlinsley/react-query?label=%F0%9F%8C%9F"
              alt=""
          /></a>
        </td>
        <td>
          <a href="https://github.com/vercel/swr" node="[object Object]"
            ><img
              src="https://img.shields.io/github/stars/vercel/swr?label=%F0%9F%8C%9F"
              alt=""
          /></a>
        </td>
      </tr>
      <tr>
        <td>Supported Query Syntax</td>
        <td>Promise, REST, GraphQL</td>
        <td>Promise, REST, GraphQL</td>
      </tr>
      <tr>
        <td>Caching Strategy</td>
        <td>Hierarchical Key -&gt; Value</td>
        <td>Unique Key -&gt; Value</td>
      </tr>
      <tr>
        <td>Cache Key Strategy</td>
        <td>JSON</td>
        <td>JSON</td>
      </tr>
      <tr>
        <td>Cache Change Detection</td>
        <td>Deep Compare Keys (Stable Serialization)</td>
        <td>Deep Compare Keys (Stable Serialization)</td>
      </tr>
      <tr>
        <td>Data Change Detection</td>
        <td>Deep Comparison + Structural Sharing</td>
        <td>
          Deep Compare (via
          <code
            node="[object Object]"
            class="border border-gray-500 border-opacity-20 bg-gray-500 bg-opacity-10 rounded p-1"
            >stable-hash</code
          >)
        </td>
      </tr>
      <tr>
        <td>Data Memoization</td>
        <td>Full Structural Sharing</td>
        <td>Identity (===)</td>
      </tr>
      <tr>
        <td>Bundle Size</td>
        <td>
          <a
            href="https://bundlephobia.com/result?p=react-query"
            node="[object Object]"
            ><img
              src="https://badgen.net/bundlephobia/minzip/react-query?label=%F0%9F%92%BE"
              alt=""
          /></a>
        </td>
        <td>
          <a href="https://bundlephobia.com/result?p=swr" node="[object Object]"
            ><img
              src="https://badgen.net/bundlephobia/minzip/swr?label=%F0%9F%92%BE"
              alt=""
          /></a>
        </td>
      </tr>
      <tr>
        <td>API Definition Location</td>
        <td>Component, External Config</td>
        <td>Component</td>
      </tr>
      <tr>
        <td>Queries</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Cache Persistence</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Devtools</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Parallel Queries</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Dependent Queries</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Paginated Queries</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Infinite Queries</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Bi-directional Infinite Queries</td>
        <td>✅</td>
        <td>🔶</td>
      </tr>
      <tr>
        <td>Infinite Query Refetching</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Selectors</td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Initial Data</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Auto Garbage Collection</td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Mutation Hooks</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Offline Mutation Support</td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Query Cancellation</td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Partial Query Matching<sup>3</sup></td>
        <td>✅</td>
        <td>🔶</td>
      </tr>
      <tr>
        <td>Stale Time Configuration</td>
        <td>✅</td>
        <td>🛑<sup>7</sup></td>
      </tr>
      <tr>
        <td>Pre-usage Query/Mutation Configuration<sup>4</sup></td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>General Cache Dehydration/Rehydration</td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Offline Caching</td>
        <td>✅ (Experimental)</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Abstracted/Agnostic Core</td>
        <td>✅</td>
        <td>🛑</td>
      </tr>
      <tr>
        <td>Automatic Refetch after Mutation<sup>5</sup></td>
        <td>🔶</td>
        <td>🔶</td>
      </tr>
      <tr>
        <td>Normalized Caching<sup>6</sup></td>
        <td>🛑</td>
        <td>🛑</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup></script>
<style scoped>
table {
  width: 100%;
  table-layout: auto;
  text-align: left;
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 0.875em;
  line-height: 1.7142857;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
thead {
  border-bottom: 1px solid black;
}
tr {
  border-bottom: 1px solid black;
}
td, th {
  padding: 8px;
  font-size: 20px;
}
</style>

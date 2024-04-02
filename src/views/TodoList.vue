<template>
  <router-view />
</template>

<script lang="ts" setup>
import "../../node_modules/todomvc-common/base.css";
</script>

<style>
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

.toggle-all {
  width: 40px !important;
  height: 60px !important;
  right: auto !important;
}

.toggle-all-label {
  pointer-events: none;
}

.todo-list li {
  text-align: left;
}

.todo-list .edit {
  background: #fff;
}

.loading {
  position: relative;
}

.loading::before {
  content: "";
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  border: 5px solid rgb(166 158 158 / 26%);
  border-bottom-color: transparent;
  border-radius: 50%;
  /* display: inline-block; */
  /* box-sizing: border-box; */
  animation: rotation 1s linear infinite;
  z-index: 1;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

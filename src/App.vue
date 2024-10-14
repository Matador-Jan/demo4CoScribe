<script setup lang="ts">
import Toolbar from './components/Toolbar.vue'
import { RouterLink, RouterView } from 'vue-router'
import Toast from 'primevue/toast'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav class="border-b-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/loading">Loading</RouterLink>
      </nav>
    </div>
  </header> -->

  <Toast />
  <Toolbar />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
header .wrapper {
  /* border: 1px solid red; */
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 0.1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

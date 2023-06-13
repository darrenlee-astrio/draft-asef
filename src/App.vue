<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppNavigation from './components/AppNavigation.vue';

</script>

<template>
  <div style="overflow-y: scroll;">
    <AppNavigation />

    <body>
      <div class="app-container">
        <AppHeader>
          <img src="@/assets/images/title.png" alt="A*STAR Scientific Equipment Finder">
        </AppHeader>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <RouterView />
        <AppFooter />
      </div>
    </body>
  </div>
</template>

<style scoped>
.app-container {
  padding: 0 2rem;
  margin: 0 auto;
}
</style>

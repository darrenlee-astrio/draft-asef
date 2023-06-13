<script setup>
import { usePpmsApi } from '../composables/apis/usePpmsApi.js';
let { getSummary } = usePpmsApi();

async function test() {
  const response = await getSummary();
  console.log(response);
}
</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="test">Send Api</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <p>{{ counter }}</p>
  <button @click="increment">increment counter</button>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(7);

function increment() {
  counter.value++;
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

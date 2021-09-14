<template>
  <p>{{ counter }}</p>
  <button @click="increment">increment counter</button>
  <br />
  <br />
  <component :is="condition ? Button : Input" />
</template>

<script setup>
import { computed, ref } from 'vue';

import Button from './components/Base/Button.vue'
import Input from './components/Base/Input.vue'

const condition = computed(() => {
  return false;
})

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

<template>
  <br />
  <br />
  <Base.Form>
    <Base.Input />
    <Base.Button :counter="counter" @inc="increment" />
  </Base.Form>
</template>

<script setup>
import { computed, ref } from 'vue';

import Base from './components/Base'

const condition = computed(() => {
  return true;
})

const counter = ref(7);

function increment(number, string) {
  console.log({ number, string });
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

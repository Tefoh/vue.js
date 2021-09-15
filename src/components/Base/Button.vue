<template>
  <div>
    <p>{{ counter }}</p>
    <button v-bind="$attrs" @click="increment">increment counter</button>
  </div>
</template>

<script>
export const name = 'mmad'

export default {
  // third party plugins
  // title

  inheritAttrs: false,
  // data: () => ({
  //   colors: {
  //     bg: 'green',
  //     color: 'white'
  //   }
  // })
}
</script>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  counter: Number
})

const emits = defineEmits(['inc'])

const colors = reactive({
  bg: 'blue',
  color: 'white'
})

const increment = () => {
  console.log(props.counter);

  emits('inc', props.counter, 'salam')
}
</script>

<style>
button {
  /* when using usual script

   background-color: v-bind('colors.bg');
  color: v-bind('colors.color'); */

  /* when using <script setup> */
  background-color: v-bind('colors.bg');
  color: v-bind('colors.color');
}
</style>

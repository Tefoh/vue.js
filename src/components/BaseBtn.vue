<!--
<template>
  <button>
    <slot :counter="counter">simple btn</slot>
  </button>
</template>
-->

<script>
import { h } from 'vue'
export default {
  name: "BaseBtn",

  data: () => ({
    counter: 6
  }),

  methods: {
    increment() {
      this.counter++
    }
  },

  render() {
    return this.$slots.default({
      counter: this.counter,
      handleIncrement: this.increment
    })
  }
}
</script>

<template>
  <button @click="inc">counter: {{ number }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    number: 7
  }),
  methods: {
    inc() {
      this.number++
    }
  }
})
</script>

<style>

</style>
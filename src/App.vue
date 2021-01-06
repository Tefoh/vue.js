<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="showComponent = false">destroy heloo world component</button>
  <HelloWorld message="hello from parent component" v-if="showComponent" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: () => ({
    showComponent: true
  }),
  components: {
    HelloWorld
  }
}
</script>

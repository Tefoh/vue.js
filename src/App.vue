<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld message="hello from parent component" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

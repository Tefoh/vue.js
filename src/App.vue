<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="showComponent = false" ref="btn">destroy heloo world component</button>
  <HelloWorld message="hello from parent component" v-if="showComponent" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'App',

  setup() {
    const showComponent = ref(true);

    const btn = ref(null);

    return {
      showComponent,
      btn
    }
  },

  // mounted() {
  //   console.log(this.$refs.btn)
  // },

  // data: () => ({
  //   showComponent: true
  // }),
  components: {
    HelloWorld
  }
}
</script>

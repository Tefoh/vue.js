<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="showComponent = false" ref="btn">destroy heloo world component</button>
  <HelloWorld message="hello from parent component" v-if="showComponent" />
  <br />
  <WorldHello message="hello from parent component" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WorldHello from './components/WorldHello.vue'
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
    HelloWorld,
    WorldHello
  }
}
</script>

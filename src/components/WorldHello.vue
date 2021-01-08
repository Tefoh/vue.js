<template>
  <h1>{{ message }}</h1>
  <button @click="handleClick">count is: {{ count }}</button>
  <h1>{{ fullName }}</h1>
  <h1 v-for="framework in upperFrameworks" :key="framework">{{ framework }}</h1>
</template>

<script>
import { ref,
        reactive,
        computed,
        watchEffect,
        watch,
        onMounted,
        onBeforeUnmount,
        onBeforeMount,
        toRef,
        toRefs,
} from 'vue';

import userComposable from '../composable/user.composable';

export default {
  name: 'WorldHello',

  props: ['message'],

  // created() {
  //   // fetch
  // },
  // mounted() {},
  // beforeUnmount() {},

  setup(props, { emit, attrs }) {

    const count = ref(7);

    const msg = 'Hello Vue 3.0 + Vite';
    



    const frameworks = reactive(['vue.js', 'angular']);

    const upperFrameworks = computed(() => frameworks.map(framework => framework.toUpperCase()));

    watch(
      count, 
      (newCount, oldCount) => {
        // console.log('new value: ', newCount);
        // console.log('old value: ', oldCount);
        

        emit('count', { newCount, oldCount })
      }
    )




    return {
      msg,
      count,
      upperFrameworks,
      ...userComposable(count)
    }
  },

  // beforeCreate()
  // created

  // data() {
  //   return {
  //     count: 0,
  //     msg: 'Hello Vue 3.0 + Vite'
  //   }
  // }
  
  /* 
  watch: {
    fullName(newFullName, oldFullName) {
      console.log('old value: ', newFullName);
      console.log('new value: ', oldFullName);
    }
  }, */
}
</script>

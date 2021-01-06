<template>
  <h1>{{ message }}</h1>
  <button @click="handleClick">count is: {{ count }}</button>
  <h1>{{ fullName }}</h1>
  <h1 v-for="framework in upperFrameworks" :key="framework">{{ framework }}</h1>
</template>

<script>
import { ref, reactive, computed, watchEffect, watch } from 'vue';

export default {
  name: 'HelloWorld',

  props: ['message'],

  setup(props, { emit, attrs }) {

    // console.log(context)

    const msg = 'Hello Vue 3.0 + Vite';
    const count = ref(5);

    const user = reactive({ name: 'tofiq', last: 'hamzai' });
    const frameworks = reactive(['vue.js', 'angular']);

    const upperFrameworks = computed(() => frameworks.map(framework => framework.toUpperCase()));

    const fullName = computed({
      get: () => user.name + ' ' + user.last,
      set: (value) => {
        // const userFullName = value.split(' ');
        // user.name = userFullName[0];
        // user.last = userFullName[1];
        const [name, last] = value.split(' ');
        user.name = name;
        user.last = last;
      }
    })



    /* watchEffect((onInvalidate) => {
      console.log('count', count.value);

      // const fetching = 

      // DOM and template refs

      onInvalidate(() => {
        // side effect
        // fetching.cancel()
      })
    }); */

    watch(
      count, 
      (newCount, oldCount) => {
        // console.log('new value: ', newCount);
        // console.log('old value: ', oldCount);
        

        emit('count', { newCount, oldCount })
      }
    )

    watch(
      () => user.last, 
      (newUserLast, oldUserLast) => {
        // console.log('new value: ', newUserLast);
        // console.log('old value: ', oldUserLast);
      }
    )
    fullName.value = 'ali mohammadi';



    // const stopWatchEffect = watchEffect(() => {
    //   console.log('count', count.value)
    // });

    // stopWatchEffect()


    // function handleClick() {
    //   count.value++;
    //   this
    // }
    const handleClick = () => {
      count.value++;
    }


    return {
      msg,
      count,
      user,
      upperFrameworks,
      fullName,
      handleClick
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

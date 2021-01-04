<template>
  <h1>{{ msg }}</h1>
  <button @click="handleClick">count is: {{ count }}</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HelloWorld',

  setup() {

    const msg = 'Hello Vue 3.0 + Vite';
    const count = ref(5);

    console.log(count)

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
      handleClick
    }
  }

  // beforeCreate()
  // created

  // data() {
  //   return {
  //     count: 0,
  //     msg: 'Hello Vue 3.0 + Vite'
  //   }
  // }
}
</script>

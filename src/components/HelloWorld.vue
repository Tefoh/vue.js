<template>
  <h1>{{ msg }}</h1>
  <button @click="handleClick">count is: {{ count }}</button>
  <h1>{{ user.name }}</h1>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'HelloWorld',

  setup() {

    const msg = 'Hello Vue 3.0 + Vite';
    const count = ref(5);

    const user = reactive({ name: 'tofiq' });

    console.log(user.name);

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

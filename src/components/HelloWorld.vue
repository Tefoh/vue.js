<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
  name: 'HelloWorld',

  setup() {

    const msg = 'Hello Vue 3.0 + Vite';
    const count = 0;

    console.log(msg)


    return {
      msg,
      count
    }
  }

  // data() {
  //   return {
  //     count: 0,
  //     msg: 'Hello Vue 3.0 + Vite'
  //   }
  // }
}
</script>

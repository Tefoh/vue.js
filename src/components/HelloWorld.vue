<template>
  <h1>{{ msg }}</h1>

  <button @click="handleClick">get text from file</button>
  <p>
    {{ text }}
  </p>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: ['msg'],

  setup() {
    const text = ref('خالی');

    const handleClick = () => {

      fetch('/text.txt')
        .then(response => response.text())
        .then(message => text.value = message);
    };

    return {
      text,
      handleClick
    };
  }

  // data: () => ({
  //   text: 'empty'
  // }),
  // methods: {
  //   handleClick() {
  //     fetch('/text.txt')
  //       .then(response => {
  //         return response.text();
  //       })
  //       .then(message => {
  //         this.text = message
  //       })
  //   }
  // }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
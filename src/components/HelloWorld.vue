<template>
  <h1>{{ msg }}</h1>

  <button @click="handleClick">get text from file</button>
  <p>
    {{ text }}
  </p>
  <button @click="getUserData">get user info from file</button>
  <p>اسم کاربر: {{ user.name }}</p>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HelloWorld",
  props: ["msg"],
/* 
  setup() {
    const text = ref("خالی");
    const user = reactive({ legs: 2 });

    const handleClick = () => {
      fetch("/text.txt")
        .then((response) => response.text())
        .then((message) => (text.value = message));
    };

    const getUserData = () => {
      fetch('/user.json')
        .then(res => res.json())
        .then(data => Object.assign(user, data))
      
      // console.log('user fetching...')
    }

    return {
      text,
      user,
      handleClick,
      getUserData
    };
  }, */

  data: () => ({
    text: 'empty',
    user: {}
  }),
  methods: {
    handleClick() {
      fetch('/text.txt')
        .then(response => {
          return response.text();
        })
        .then(message => {
          this.text = message
        })
    },
    getUserData() {
      fetch('/user.json')
        .then(res => res.json())
        .then(data => this.user = data)
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
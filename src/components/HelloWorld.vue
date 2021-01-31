<template>
  <h1>{{ msg }}</h1>

  <button @click="getPosts">get posts from jsonplaceholder</button>
  <p v-for="post in posts" :key="post.id">
    {{ post.id }} post : {{ post.title }}
  </p>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HelloWorld",
  props: ["msg"],

  setup() {
    const posts = reactive([]);

    const getPosts = () => {
      
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => posts.push(...data))
    }

    return {
      posts,
      getPosts
    };
  },

  /* data: () => ({
    posts: []
  }),
  methods: {
    getPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.posts = data)
    }
  } */
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
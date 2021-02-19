<template>
  <div class="container">
    <div class="row">
      <div class="card" style="width: 18rem;" v-for="post in state.posts" :key="post.id">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../plugins/axios.js'
import { reactive } from 'vue'

export default {
  name: "Posts",

  setup() {
    const state = reactive({
      posts: []
    })

    axios.get('/posts')
      .then(({ data }) => {
        state.posts = data
      })

    return {
      state
    }
  }
}
</script>

<style>

</style>
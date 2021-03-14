<template>
  <router-link :to="{ name: 'Login' }" v-if="! user">صفحه لاگین</router-link>
  <router-link :to="{ name: 'Create-post' }" v-if="user">صفحه ساخت پست</router-link>
  <Posts :posts="state.posts" @delete-post="postDeleted" />
</template>

<script>
import { reactive, ref } from 'vue'
import Posts from '../components/Posts.vue'
import axios from '../plugins/axios.js'

export default {
  components: {
    Posts
  },

  setup() {
    const user = ref(JSON.parse(localStorage.getItem('user')))
    const errors = ref(null)
    const state = reactive({
      posts: []
    })

    const postDeleted = index => {
      state.posts.splice(index, 1)
    }

      
    axios.get('/posts')
      .then(({ data }) => {
        state.posts = data
      })

    return {
      user,
      state,
      errors,
      postDeleted
    }
  }
}
</script>

<style>

</style>
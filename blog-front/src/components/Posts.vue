<template>
  <div class="container">
    <div class="row">
      <div class="card" style="width: 18rem;" v-for="(post, index) in posts" :key="post.id">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.body }}</p>
          <button @click="deletePost(post.id, index)" v-if="user" class="btn btn-danger">حذف</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from '../plugins/axios.js'

export default {
  name: "Posts",

  props: {
    posts: {
      type: Object,
      required: true
    }
  },

  setup(props, { emit }) {
    const user = ref(JSON.parse(localStorage.getItem('user')))

    const deletePost = (id, index) => {
      axios.delete(`/posts/${id}`)
        .then(() => {
          emit('delete-post', index)
        })
    }

    return {
      deletePost,
      user
    }
  }
}
</script>

<style>

</style>
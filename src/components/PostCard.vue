<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">پست شماره {{ post.id }}</h5>
      <p class="card-text">{{ post.title }}</p>
      <p class="card-text">{{ post.body }}</p>
      <button class="me-2 btn btn-primary" @click="showModal(post.id)">بیشتر</button>
      <button class="me-2 btn btn-primary" @click="UpdatePost(post.id)">ویرایش</button>
      <button class="btn btn-danger" @click="deletePost(post.id, index)">X</button>
    </div>
  </div>
</template>

<script>
import { handleError } from '../utils/helpers.js'

export default {
  name: "PostCard",

  props: {
    post: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  },

  setup(props, { emit }) {
    
    const showModal = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => {
          const postData = data
          fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then(handleError)
            .then(res => res.json())
            .then(data => {
              const userData = data

              emit('show-modal', { postData, userData })
            })
            .catch(error => context.emit('error', error.message))
        })
        .catch(error => context.emit('error', error.message))
    }
    
    const UpdatePost = id => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => {
          emit('show-update', data)
        })
        .catch(error => context.emit('error', error.message))
    }

    const deletePost = (id, index) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'delete'
      })
      .then(handleError)
      .then(res => res.json())
      .then(() => emit('post-deleted', index))
      .catch(error => context.emit('error', error.message))
    }

    return {
      showModal,
      UpdatePost,
      deletePost,
    }
  }
}
</script>

<style>

</style>
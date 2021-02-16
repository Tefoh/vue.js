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
import axios from '../plugins/axios.js'

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
    
    const showModal = async(id) => {
      // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      //   .then(({ data }) => {
      //     const postData = data

      //     axios.get(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
      //       .then(({ data }) => {
      //         const userData = data

      //         emit('show-modal', { postData, userData })
      //       })
      //       .catch(() => emit('error', 'اررور داشتیم'))
      //   })
      //   .catch(() => emit('error', 'اررور داشتیم'))

      // try {
      //   const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      //   handleError(postRes)
      //   const postData = await postRes.json()
      //   const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
      //   handleError(userRes)
      //   const userData = await userRes.json()
      //   emit('show-modal', { postData, userData })
      // } catch(error) {
      //   emit('error', error.message)
      // }

      try {
        const { data } = await axios.get(`/posts/${id}`)
        const postData = data;
        const response = await axios.get(`/users/${postData.userId}`)
        emit('show-modal', { postData, userData: response.data })
      } catch (error) {
        emit('error', 'اررور داشتیم')
      }


    }
    
    const UpdatePost = id => {
      axios.get(`/posts/${id}`)
        .then(({ data }) => {
          emit('show-update', data)
        })
        .catch(() => emit('error', 'اررور داشتیم'))
    }

    const deletePost = (id, index) => {
      axios.delete(`/posts/${id}`)
        .then(() => emit('post-deleted', index))
        .catch(() => emit('error', 'اررور داشتیم'))
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
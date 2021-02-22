<template>
  <div class="container my-5" v-if="user">
    <h3>نام کاربر: {{ user.username }}</h3>
    <form @submit.prevent="savePost">
      <div class="mb-3">
        <label for="title" class="form-label">عنوان پست</label>
        <input type="text" class="form-control" v-model="postForm.title" id="title" aria-describedby="titleHelp">
        <div id="titleHelp" class="form-text">عنوان پست خود را وارد کنید</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">متن پست</label>
        <textarea class="form-control" v-model="postForm.body" id="password"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">ارسال</button>
      <template  v-if="errors">
        <p class="alert alert-danger" v-for="error in errors" :key="error">
          {{ error[0] }}
        </p>
      </template>
    </form>
  </div>
  <Login @user-logged-in="userLoggedIn" v-else />
  <Posts :posts="state.posts" @delete-post="postDeleted" />
</template>

<script>
import { reactive, ref } from 'vue'
import Login from './components/Login.vue'
import Posts from './components/Posts.vue'
import axios from './plugins/axios.js'

export default {
  name: "App",

  components: {
    Login,
    Posts
  },

  setup() {
    const user = ref(JSON.parse(localStorage.getItem('user')))
    const postForm = reactive({ title: null, body: null })
    const errors = ref(null)
    const state = reactive({
      posts: []
    })


    const userLoggedIn = (userInfo) => {
      user.value = userInfo
    }

    const savePost = () => {
      axios.post('/posts', postForm)
        .then(({ data }) => {
          state.posts.push(data)
          postForm.title = ''
          postForm.body = ''
        })
        .catch(({ response }) => {
          if (response.data) {
            errors.value = response.data.data.errors
          }
        })
    }

    const postDeleted = index => {
      state.posts.splice(index, 1)
    }

    axios.get('/users/me')
      .catch(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        delete axios.defaults.headers['Authorization']

        user.value = null
      })
      
    axios.get('/posts')
      .then(({ data }) => {
        state.posts = data
      })

    return {
      user,
      userLoggedIn,
      postForm,
      savePost,
      state,
      errors,
      postDeleted
    }
  }
}
</script>

<style>
</style>
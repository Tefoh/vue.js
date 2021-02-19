<template>
  <div class="container my-5" v-if="user">
    <h3>نام کاربر: {{ user.username }}</h3>
  </div>
  <Login @user-logged-in="userLoggedIn" v-else />
  <Posts />
</template>

<script>
import { ref } from 'vue'
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


    const userLoggedIn = (userInfo) => {
      user.value = userInfo
    }

    axios.get('/users/me')
      .catch(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        delete axios.defaults.headers['Authorization']

        user.value = null
      })

    return {
      user,
      userLoggedIn
    }
  }
}
</script>

<style>
</style>
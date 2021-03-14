<template>
  <div class="container my-5">
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
</template>

<script>
import { reactive, ref } from 'vue'
import axios from '../plugins/axios.js'
import { useRouter } from 'vue-router'

export default {
  name: "CreatePost",

  setup() {
    const router = useRouter()
    const user = ref(JSON.parse(localStorage.getItem('user')))
    const postForm = reactive({ title: null, body: null })
    const errors = ref(null)

    const savePost = () => {
      axios.post('/posts', postForm)
        .then(() => {
          router.push({ name: "Home" })
        })
        .catch((error) => {
          if (error?.response?.data) {
            errors.value = response.data.data.errors
          }
        })
    }

    return {
      errors,
      user,
      postForm,
      savePost,
    }
  }
}
</script>

<style>

</style>
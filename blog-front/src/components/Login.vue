<template>
  <div class="container my-5">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="identifier" class="form-label">نام کاربری</label>
        <input type="text" class="form-control" v-model="userForm.identifier" id="identifier" aria-describedby="identifierHelp">
        <div id="identifierHelp" class="form-text">نام کاربری خود را وارد کنید</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">رمز عبور</label>
        <input type="password" class="form-control" v-model="userForm.password" id="password">
      </div>
      <button type="submit" class="btn btn-primary">ارسال</button>
      <p class="alert alert-danger" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import axios from '../plugins/axios.js'

export default {
  name: "Login",

  setup(props, { emit }) {
    const userForm = reactive({
      identifier: '',
      password: ''
    })
    const error = ref('')

    const login = () => {
      axios.post('/auth/local', userForm)
        .then(({ data }) => {
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('user', JSON.stringify(data.user))

          emit('user-logged-in', data.user)
        })
        .catch(({ response }) => {
          if (response.data.message) {
            error.value = response.data.message[0].messages[0].message
          }
        })
    }

    return {
      userForm,
      login,
      error
    }
  }
}
</script>

<style>

</style>
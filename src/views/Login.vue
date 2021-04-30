<template>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-card-title>فرم ورود</v-card-title>

    <v-form v-model="validForm" ref="loginForm">
      <v-text-field
        class="mx-3"
        outlined
        label="ایمیل"
        prepend-icon="mdi-email"
        v-model="form.email"

        :rules="[
          (value) => required(value, 'ایمیل'),
          checkEmail
        ]"
      ></v-text-field>

      <v-text-field
        :type="showPassword ? 'text' : 'password'"
        class="mx-3"
        outlined
        label="رمز عبور"
        v-model="form.password"
        :rules="[
          (value) => required(value, 'رمز عبور'),
          value => value.length > 8 || 'طول رمز عبور نباید کمتر از 8 کاراکتر باشد '
        ]"
        :prepend-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:prepend="showingPassword"
      ></v-text-field>

      <v-card-actions>
        <v-btn
          depressed
          color="primary"
          :loading="loading"
          :disabled="disabledBtn"
          @click="submitFrom"
        >
          ارسال فرم
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
const required = (value, field) => !! value || 'فیلد ' + field + ' الزامیست'
const checkEmail = value => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) || 'یک ایمیل درست را وارد کنید'

export default {
  data: () => ({
    showPassword: false,
    form: {
      email: '',
      password: ''
    },
    loading: false,
    validForm: true,
    required,
    checkEmail
  }),
  computed: {
    disabledBtn() {
      return this.loading || ! this.validForm
    }
  },
  methods: {
    showingPassword() {
      this.showPassword = !this.showPassword
    },
    submitFrom() {
      if (this.$refs.loginForm.validate()) {
        
        this.loading = true

        localStorage.setItem('user', JSON.stringify(this.form))

        setTimeout(() => {
          this.loading = false
          this.$router.push({ name: "Dashboard" })
        }, 2000)
      }
    }
  }
}
</script>

<style>

</style>
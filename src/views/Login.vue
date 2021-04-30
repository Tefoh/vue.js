<template>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-card-title>فرم ورود</v-card-title>

    
    <v-text-field
      class="mx-3"
      outlined
      label="ایمیل"
      prepend-icon="mdi-email"
    ></v-text-field>

    <v-text-field
      :type="showPassword ? 'text' : 'password'"
      class="mx-3"
      outlined
      label="رمز عبور"
      :prepend-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:prepend="showingPassword"
    ></v-text-field>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
      >
        ارسال فرم
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showPassword: false
  }),
  methods: {
    showingPassword() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style>

</style>
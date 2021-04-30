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
      type="password"
      class="mx-3"
      outlined
      label="رمز عبور"
      prepend-icon="mdi-eye-off"
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

}
</script>

<style>

</style>
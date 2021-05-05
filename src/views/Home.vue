<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card color="primary">
          <v-card-text class="d-flex white--text">
            <v-icon class="blue--text text--lighten-5" :x-large="$vuetify.breakpoint.mdAndUp">mdi-account-group</v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h4">کاربران</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="warning">
          <v-card-text class="d-flex white--text">
            <v-icon class="orange--text text--lighten-5" :class="{ 'slghl': $vuetify.breakpoint.mdAndUp }" :x-large="$vuetify.breakpoint.mdAndUp">mdi-post</v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h4">پست ها</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="success">
          <v-card-text class="d-flex white--text">
            <span class="text-h6 text-md-h4">سفارشات</span>
            <v-spacer></v-spacer>
            <v-icon class="green--text text--lighten-5" :x-large="$vuetify.breakpoint.mdAndUp">mdi-cart</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="info">
          <v-card-text class="d-flex white--text">
            <span class="text-h6 text-md-h4">محصولات</span>
            <v-spacer></v-spacer>
            <v-icon class="indigo--text text--lighten-5" :x-large="$vuetify.breakpoint.mdAndUp">mdi-cart-plus</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mt-4"></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  created() {
    // this.$vuetify.theme.dark = true;
    console.log(
      { ...this.$vuetify.theme }
    )
  }
}
</script>

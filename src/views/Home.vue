<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card color="blue">
          <v-card-text class="d-flex white--text">
            <v-icon class="blue--text text--lighten-5">mdi-account-group</v-icon>
            <v-spacer></v-spacer>
            <span>کاربران</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="orange">
          <v-card-text class="d-flex white--text">
            <v-icon class="orange--text text--lighten-5">mdi-post</v-icon>
            <v-spacer></v-spacer>
            <span>پست ها</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="green">
          <v-card-text class="d-flex white--text">
            <span>سفارشات</span>
            <v-spacer></v-spacer>
            <v-icon class="green--text text--lighten-5">mdi-cart</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="indigo">
          <v-card-text class="d-flex white--text">
            <span>محصولات</span>
            <v-spacer></v-spacer>
            <v-icon class="indigo--text text--lighten-5">mdi-cart-plus</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
  }
</script>

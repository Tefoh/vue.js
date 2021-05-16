<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex justify-space-around mt-16">
            <v-btn outlined :to="{ name: 'Login' }">صفحه ورود</v-btn>
            <v-btn color="primary" :to="{ name: 'Dashboard' }">پنل ادمین</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

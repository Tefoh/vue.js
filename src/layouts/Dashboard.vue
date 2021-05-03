<template>
  <v-app>
    <v-app-bar color="deep-purple" app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>پنل ادمین وب آموز</v-toolbar-title>

      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
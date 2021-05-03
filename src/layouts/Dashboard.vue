<template>
  <v-app>
    <v-app-bar color="deep-purple" app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>پنل ادمین وب آموز</v-toolbar-title>

      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app right v-model="drawer">
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://avatars.githubusercontent.com/u/26341440?v=4" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>توفیق حمزه ئی</v-list-item-title>
            <v-list-item-subtitle>مدیر سایت</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>داشبورد</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="mx-3">
          <v-btn class="mb-5" color="grey darken-4" dark block>خروج</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer color="deep-purple" padless class="py-7">
      <v-row justify="center" align="center">
        <span class="white--text">تمامی حقوق این سایت محفوظ میباشد.</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true
  })
}
</script>

<style>

</style>
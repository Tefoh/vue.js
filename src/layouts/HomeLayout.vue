<template>
  <header>
    <button @click="$router.go(-1)">برگشت</button>
    <router-link style="margin: 3rem;" :to="{ name: 'home' }">صفحه اصلی</router-link>
    <router-link style="margin: 3rem;" :to="{ name: 'about' }">صفحه درباره ما</router-link>
    <router-link style="margin: 3rem;" :to="{ name: 'posts-show', params: { postId: 3 } }">صفحه پست</router-link>
    <router-link style="margin: 3rem;" :to="{ name: 'products-show', params: { productId: 5 } }">صفحه محصول</router-link>
    <button @click="next">جلو</button>
  </header>
  <router-view />
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.go(1)
    }
  }
}
</script>
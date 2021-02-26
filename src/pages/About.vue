<template>
  <router-link :to="{ name: 'home' }">صفحه اصلی</router-link>
  <br>
  <!-- <router-link :to="{ name: 'posts-show', params: { postId: 2 }, query: { page: 2 } }">پست</router-link> -->
  <p>
    درباره ما
  </p>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push({ name: 'posts-show', params: { postId: 3 }, query: { page: 24 } })
    }, 2000)
  }
}
</script>
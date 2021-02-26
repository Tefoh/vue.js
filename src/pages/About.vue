<template>
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
      this.$router.replace({ path: '/'})
    }, 1500)
  }
}
</script>
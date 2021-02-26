<template>
  <p>{{ $route.params.postId }}</p>
</template>

<script>
export default {
  name: "Post",

  created() {
    // e.x. fetching post data
    fetch(`/sdjkfljks/posts/${this.$route.params.postId}`)
  }
}
</script>

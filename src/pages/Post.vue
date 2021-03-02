<template>
  <p>ایدی پست - {{ postId }}</p>
</template>

<script>
export default {
  name: "Post",
  props: {
    postId: {
      type: [String, Number],
      required: true
    }
  },

  created() {
    // e.x. fetching post data
    console.log(this.postId)
    fetch(`/sdjkfljks/posts/${this.postId}`)
  }
}
</script>

<template>
  <div>
    <NuxtLink to="/posts">لیست مقالات</NuxtLink>
    <p>لیست کاربران</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'لیست کاربران'
    }
  },

  // option 1:
  // layout: 'user'

  // option 2:
  layout(ctx) {
    return 'user'
  }
}
</script>

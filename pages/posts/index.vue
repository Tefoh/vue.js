<template>
  <div>

    <!-- <NuxtLink :to="`/posts/${2}`">پست شماره 2</NuxtLink> -->
    <NuxtLink :to="{ name: 'posts-id', params: { id: 4 } }">پست شماره 4</NuxtLink>
    <NuxtLink to="/users">لیست کاربران</NuxtLink>
    <p>اینجا صفحه مقالات است</p>
    <!-- <img :src="require('~/assets/logo.png')" alt=""> -->
    <Logo />
    <BaseInput />
    <LazyBaseButton />
    <!-- <button class="button is-info"
      @click="$toast('شما یک پیغام دریافت کردید')"
    >الرت</button> -->
    <p v-for="(post, index) in posts" :key="post.id">{{ `${index + 1}: ${post.title}` }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'صفحه مقالات'
    }
  },
  data: () => ({
    posts: [
      { title: 'post man' }
    ]
  }),
  async asyncData(context) {
    try {
      const posts = await context.$axios.$get('/posts')

      return {
        posts
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
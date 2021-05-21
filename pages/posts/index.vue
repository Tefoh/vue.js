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
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'صفحه مقالات'
    }
  }
}
</script>
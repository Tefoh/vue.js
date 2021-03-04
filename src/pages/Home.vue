<template>
  <h1>
    اینجا صفحه اصلیست
    {{ $route.query.search }}
  </h1>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "Home",

  setup() {
    const router = useRouter()
    const route = useRoute()

    setTimeout(() => {
      router.push({ name: 'about' })
      console.log(route.query)
    }, 2000)
  }
}
</script>
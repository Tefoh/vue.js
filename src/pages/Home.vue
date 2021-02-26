<template>
  <h1>
    اینجا صفحه اصلیست
  </h1>
</template>

<script>
export default {
  name: "Home",

  created() {
    setTimeout(() => {
      this.$router.push({ name: 'about' })
      console.log(this.$route.query)
    }, 2000)
  }
}
</script>
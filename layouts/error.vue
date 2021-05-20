<template>
  <p v-if="error.statusCode === 404">صفحه مد نظر پیدا نشد</p>
  <p v-else>به مشکل خوردیم</p>
</template>

<script>
export default {
  layout: 'errorLayout',

  props: ['error']
}
</script>

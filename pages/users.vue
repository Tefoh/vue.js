<template>
  <div>
    <NuxtLink to="/posts">لیست مقالات</NuxtLink>
    <p>لیست کاربران</p>
  </div>
</template>

<script>
export default {

  // head: {
  //   title: 'لیست کاربران',
  //   meta: [
  //     {
  //       name: 'description',
  //       content: 'لیست کامل کابران سایت',
  //       hid: 'description'
  //     }
  //   ]
  // },


  asyncData(context) {
    context.$message('salam jadid')
  },

  head() {
    return {
      title: 'لیست کاربران',
      meta: [
        {
          name: 'description',
          content: 'لیست کامل کابران سایت',
          hid: 'description'
        }
      ]
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

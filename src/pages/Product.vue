<template>
  <p>product page</p>
  <button @click="counter++">add {{ counter }}</button>
  <router-link :to="{ name: 'products-show', params: { productId: 5 }, query: { search: 'test' } }">search query</router-link>
</template>

<script>
export default {
  name: "Product",

  data: () => ({
    title: "test product",
    product: {},
    counter: 0
  }),

  beforeRouteEnter(to, from, next) {
    // console.log({to, from})

    // await fetch('../')
    const str = 'route has been entered'

    console.log(str)

    next(vm => {
      vm.title = str
    })
  },
  beforeRouteUpdate(to, from) {
    console.log('route has been updated')
  },
  beforeRouteLeave(to, from) {
    console.log('user left route')
  }
}
</script>

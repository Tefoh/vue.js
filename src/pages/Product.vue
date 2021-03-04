<template>
  <p>product page</p>
  <button @click="state.counter++">add {{ state.counter }}</button>
  <router-link :to="{ name: 'products-show', params: { productId: 5 }, query: { search: 'test' } }">search query</router-link>
</template>

<script>
import { reactive } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

export default {
  name: "Product",

  setup() {
    const state = reactive({
      title: "test product",
      product: {},
      counter: 0
    })

    onBeforeRouteUpdate((to, from) => {
      console.log('user updated route')
      console.log({ to, from })
    })

    onBeforeRouteLeave((to, from) => {
      console.log('user left route')
      console.log({ to, from })
    })

    return {
      state
    }
  }







  // data: () => ({
  //   title: "test product",
  //   product: {},
  //   counter: 0
  // }),

  // beforeRouteEnter(to, from, next) {
  //   // console.log({to, from})

  //   // await fetch('../')
  //   const str = 'route has been entered'

  //   console.log(str)

  //   next(vm => {
  //     vm.title = str
  //   })
  // },
  // beforeRouteUpdate(to, from) {
  //   console.log('route has been updated')
  // },
  // beforeRouteLeave(to, from) {
  //   console.log('user left route')
  // }
}
</script>

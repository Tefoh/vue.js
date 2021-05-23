export const state = () => ({
  message: 'salam'
})

export const actions = {
  nuxtServerInit(contextVuex, contextNuxt) {
    // console.log({
    //   contextVuex,
    //   contextNuxt
    // })
    // this.$axios.$get('/api/me')
  }
}
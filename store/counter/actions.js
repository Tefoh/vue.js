export default {
  increment(context, payload = 1) {
    context.commit('INCREMENT_COUNTER', payload)
  },
  decrement(context, payload = 1) {
    context.commit('DECREMENT_COUNTER', payload)
  },
}

export default {
  INCREMENT_COUNTER(state, payload) {
    state.counter += payload;
  },
  DECREMENT_COUNTER(state, payload) {
    state.counter -= payload;
  },
}
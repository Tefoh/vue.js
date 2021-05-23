<template>
  <div class="container">
    <div>
      <h2 class="is-size-1">counter: {{ $store.state.counter.counter }}</h2>
      <button
        class="button is-primary"
        @click="$store.dispatch('counter/increment')"
      >
        افزایش
      </button>
      <button
        class="button is-danger"
        @click="$store.dispatch('counter/decrement')"
      >
        کاهش
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

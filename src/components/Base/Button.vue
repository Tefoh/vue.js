<template>
  <div>
    <p>{{ counter }}</p>
    <button v-bind="$attrs" @click="increment">increment counter</button>
  </div>
</template>

<script>
export const name = 'mmad'

export default {
  // third party plugins
  // title

  inheritAttrs: false
}
</script>

<script setup>
const props = defineProps({
  counter: Number
})

const emits = defineEmits(['inc'])

const increment = () => {
  console.log(props.counter);

  emits('inc', props.counter, 'salam')
}
</script>

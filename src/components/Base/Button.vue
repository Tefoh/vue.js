<template>
  <p>{{ counter }}</p>
  <button @click="increment">increment counter</button>
</template>

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

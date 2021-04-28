<template>
  <input type="text" :value="modelValue" @input="handleChange" />
</template>

<script>
export default {
  props: {
    modelValue: String
  },

  methods: {
    handleChange({ target }) {
      this.$emit('update:modelValue', target.value)
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    
    <BaseButton class="is-info">custom text</BaseButton>
    <BaseButton color="primary" size="medium" :rounded="false" loading />
    <BaseButton color="info" is-light size="small"  />
    <BaseButton color="success" outlined @click="handleClick" :loading="isLoading" />
    <BaseButton color="info" size="small" is-full />
    <BaseButton color="danger" is-light />
  </div>
</template>

<script>
import BaseButton from './components/BaseButton.vue'

export default {
  name: 'App',
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    BaseButton
  },
  methods: {
    handleClick() {
      this.isLoading = true;
    }
  }
}
</script>

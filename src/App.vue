<template>
  <div>
    
    <!-- <BaseButton class="is-info">custom text</BaseButton>
    <BaseButton color="primary" size="medium" :rounded="false" loading />
    <BaseButton color="info" is-light size="small"  />
    <BaseButton color="success" outlined @click="handleClick" :loading="isLoading" />
    <BaseButton color="info" size="small" is-full />
    <BaseButton color="danger" is-light /> -->

    <!-- <BaseInput color="danger" size="large" />
    <BaseInput color="primary" size="small"  />
    <BaseInput rounded loading size="large" />
    <BaseInput disabled />
    <BaseInput icon="eye" type="email" @click="handleClick" /> -->

    <BaseInput v-model="name" />
    <BaseInput type="email" v-model="email" />
    <BaseInput type="password" v-model="password" />
  </div>
</template>

<script>
import BaseButton from './components/BaseButton.vue';
import BaseInput from './components/BaseInput.vue';

export default {
  name: 'App',
  data() {
    return {
      isLoading: false,
      name: 'tofiq',
      email: 'tefo@gmail.com',
      password: ''
    }
  },
  components: {
    BaseButton,
    BaseInput
  },
  methods: {
    handleClick() {
      // this.isLoading = true;
      console.log('input has been clicked')
    }
  }
}
</script>

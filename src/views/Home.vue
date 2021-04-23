<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BaseBtn type="submit">
     ذخیره
    </BaseBtn>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn.vue'

export default {
  name: 'Home',
  components: {
    BaseBtn
  }
}
</script>

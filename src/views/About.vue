<template>
  <div class="about">
    <p>{{ counter }}</p>
    <BaseBtn @click="counter++"></BaseBtn>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'
export default {
  components: {
    BaseBtn
  },

  data: () => ({
    counter: 0
  })
}
</script>

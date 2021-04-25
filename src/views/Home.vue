<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BaseBtn type="submit">
     ذخیره
    </BaseBtn>
    <BaseCard>
      <template #title>
        <h1>my card title</h1>
      </template>
      
      <p>test body</p>


    </BaseCard>
  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn.vue'
import BaseCard from '@/components/BaseCard.vue'

export default {
  name: 'Home',
  components: {
    BaseBtn,
    BaseCard
  }
}
</script>

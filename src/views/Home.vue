<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BaseBtn type="submit">
     ذخیره
    </BaseBtn>



    <BaseCard>

      <template v-slot:title="slotProps">
        <h1>title slot: {{ slotProps.message }}</h1>
      </template>
      
      <template v-slot="{ message, num = 10 }">

        <p>default slot: {{ message }}</p>
        <p>num: {{ num }}</p>
      </template>

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
  },
  
  data: () => ({
    msg: 'content from parent component',
  })
}
</script>

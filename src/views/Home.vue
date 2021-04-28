<template>
  <div class="home">

    <!-- <BaseText type="p" :options="['ali', 'mohammad', 'ahmad']" /> -->

    <!-- <Counter /> -->
    
    <BaseBtn>
      <template v-slot="{ counter, handleIncrement }">
        <button @click="handleIncrement">my counter {{ counter }}</button>
      </template>
    </BaseBtn>
    
    
    
    <!-- <BaseBtn type="submit">
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

    </BaseCard> -->


  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseText from '@/components/BaseText.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'Home',
  components: {
    BaseBtn,
    BaseCard,
    BaseText,
    Counter
  },
  
  data: () => ({
    msg: 'content from parent component',
  })
}
</script>

<template>
  <div class="about">
    <p>{{ counter }}</p>
    <BaseBtn v-on="{
      click: () => counter++
    }"></BaseBtn>
    <br>
    <br>


    <input v-bind="attrs" v-on="on" />

    <!-- <input type="text" placeholder="second input" @click="handleClick" @input="handleInput" /> -->

  </div>
</template>

<script>
import BaseBtn from '@/components/BaseBtn'
export default {
  components: {
    BaseBtn
  },

  data() {
    return {
      str: 'test input',
      counter: 0,
      on: {
        click: this.handleClick,
        input: this.handleInput
      },
      attrs: { placeholder: 'my text', type: 'password' }
    }
  },

  methods: {
    handleClick() {
      console.log('input clicked')
    },
    handleInput(event) {
      console.log(event.target.value)
    }
  }
}
</script>

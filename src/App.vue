<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Array: {{ arr }}</p>
  <p>Changed Arr: {{ changedArr }}</p>
  <button @click="handleClick">clicked: {{ click }}</button>
</template>

<script>
import { reactive, computed, ref } from 'vue';
// import _ from 'lodash'
import { partition, debounce } from 'lodash'

export default {
  name: "App",

  data: () => ({
    click: 0,
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }),

  computed: {
    changedArr() {
      return partition(this.arr, n => n % 3)
    }
  },

  methods: {
    handleClick: debounce(function() {
      this.click++
    }, 2000)
  }

  /* setup() {
    const click = ref(0);
    const arr = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const changedArr = computed(
      () => _.partition(arr, n => n % 3)
    );

    const handleClick = _.throttle(() => {
      click.value++;
    }, 1000);


    return {
      click,
      arr,
      changedArr,
      handleClick
    }
  } */
}
</script>

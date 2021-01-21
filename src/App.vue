<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Array: {{ arr }}</p>
  <button @click="handleHide">hide changed array</button>
  <p id="changed-array">Changed Arr: {{ changedArr }}</p>
  <button @click="handleClick">clicked: {{ click }}</button>
</template>

<script>
import { reactive, computed, ref, onMounted } from 'vue';
import _ from 'lodash'
// import { partition, debounce } from 'lodash'
import $ from 'jquery'

export default {
  name: "App",

  /* data: () => ({
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
    }, 2000),
    handleHide() {
      $('#changed-array').hide()
    }
  },

  mounted() {
    $('#changed-array').css('color', 'white').css('background-color', 'red')
  } */

  setup() {
    const click = ref(0);
    const arr = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const changedArr = computed(
      () => _.partition(arr, n => n % 3)
    );

    const handleClick = _.throttle(() => {
      click.value++;
    }, 1000);

    const handleHide = () => {
      $('#changed-array').hide()
    }

    onMounted(() => {
      $('#changed-array')
        .css('color', 'white')
        .css('background-color', 'red')
    })


    return {
      click,
      arr,
      changedArr,
      handleClick,
      handleHide
    }
  }
}
</script>

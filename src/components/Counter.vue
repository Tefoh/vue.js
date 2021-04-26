<script>
import { h } from 'vue'

export default {


  data: () => ({
    counter: 1,
    className: 'success'
  }),

  methods: {
    handleIncrement() {
      this.counter++
    }
  },

  
  render() {

    //<button class="danger" v-on:click="counter++">{{ counter }}</button>

    // h => VNode vitual-node - virtual-dom

    return h(
      'button',
      {
        class: 'danger ' + this.className,
        onClick: this.handleIncrement
      },
      this.counter
    );
  }
}
</script>

<style>
.danger {
  background-color: red;
  color: white;
}
</style>
<script>
import { h } from 'vue'
import BaseBtn from '@/components/BaseBtn.vue'

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

    //<BaseBtn>{{ counter }}</BaseBtn>

    return h(
      BaseBtn,
      {
        class: this.className,
        onClick: () => this.counter++
      },
      'simple btn - ' + this.counter
    );
  }
}
</script>

<style>
.danger {
  background-color: red;
  color: white;
}
.success {
  background-color: green;
  color: white;
}
</style>
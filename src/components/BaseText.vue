<script>
import { h } from 'vue'
import BaseInput from '@/components/BaseInput'

export default {
  props: {
    type: String,
    options: Array
  },
  data: () => ({
    message: 'my message'
  }),
  render() {
    // // v-if
    // if (this.type !== 'p') {
    //   return h('h1', 'title text')
    // } else {
    //   return h('p', {}, 'basic text')
    // }

    // // v-for
    // return h('ul', {}, this.options.map(item => {
    //   return h('li', item)
    // }))

    // v-model
    // return h('input', {
    //   value: this.message,
    //   onInput: ({ target }) => this.message = target.value
    // })
    return h(BaseInput, {
      modelValue: this.message,
      'onUpdate:modelValue': (value) => this.message = value,
    })
  }
}
</script>

<script>
import { h } from 'vue'

export default {
  props: {
    type: String
  },
  render() {
    return h(this.type, {}, 'basic text')
  }
}
</script>

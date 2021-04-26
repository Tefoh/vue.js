<script>
import { h } from 'vue'
// <h1>sdkjfhksjdfh</h1>
// XSS

export default {
  props: {
    type: String
  },
  render() {
    return h(this.type, {}, 'basic text')
  }
}
</script>

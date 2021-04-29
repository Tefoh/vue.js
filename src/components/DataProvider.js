import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'get'
    },
    options: {
      type: Object,
      default: {}
    },
    form: {
      type: Object,
      default: {}
    }
  },

  data: () => ({
    json: [],
    loading: false,
    response: null,
    errorMessage: ''
  }),

  created() {
    if (this.method === 'get') {
      this.loading = true
      
      axios.get(this.url, this.options)
        .then(({ data }) => this.json = data)
        .catch((errors) => this.errorMessage = errors.message)
        .finally(() => this.loading = false)
    }
  },

  methods: {
    handleSubmit() {
      this.loading = true
      axios[this.method](this.url, this.form)
        .then((res) => this.response = res)
        .catch((errors) => this.errorMessage = errors.message)
        .finally(() => this.loading = false)
    }
  },

  render() {
    return this.$slots.default({
      json: this.json,
      loading: this.loading,
      handleSubmit: this.handleSubmit,
      errorMessage: this.errorMessage
    })
  }
}

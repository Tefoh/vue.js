<template>
  <h1>{{ msg }}</h1>

  <button class="btn btn-primary" @click="getPosts">get posts from jsonplaceholder</button>
  <p class="alert alert-danger" v-if="errorText">{{ errorText }}</p>
  <div class="row">
    <div class="card" style="width: 18rem;" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">پست شماره {{ post.id }}</h5>
        <p class="card-text">{{ post.title }}</p>
        <button class="btn btn-primary" @click="showPostModal(post.id)">بیشتر</button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ post.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h3>توضیحات: </h3>
          <p>{{ post.body }}</p>
          <h4>نویسنده: </h4>
          <p>{{ user.name }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { Modal } from 'bootstrap'

export default {
  name: "HelloWorld",
  props: ["msg"],

  /* setup() {
    const posts = reactive([]);
    const post = reactive({ title: '', body: '' })
    const user = reactive({})
    const exampleModal = ref(null);
    const modal = ref(null);

    const getPosts = () => {
      
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => posts.push(...data))
    }

    const showPostModal = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          Object.assign(post, data)
          fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then(res => res.json())
            .then(data => {
              Object.assign(user, data)
              modal.value.show();
            })
        })
    }

    onMounted(() => {
      modal.value = new Modal(exampleModal.value)
    })

    return {
      posts,
      post,
      user,
      getPosts,
      exampleModal,
      showPostModal,
    };
  }, */

  data: () => ({
    posts: null,
    post: {},
    user: {},
    modal: null,
    errorText: ''
  }),
  methods: {
    handleError(res) {
      if (! res.ok) {
        throw new Error('اررور داشتیم')
      }

      return res;
    },
    getPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(this.handleError)
        .then(res => res.json())
        .then(data => this.posts = data)
        .catch(error => this.errorText = error.message)
    },
    showPostModal(id) {
      fetch(`https://jsonplaceholder.typicode.com/fghfgh/${id}`)
        .then(this.handleError)
        .then(res => res.json())
        .then(data => {
          this.post = data

          fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then(this.handleError)
            .then(res => res.json())
            .then(data => {
              this.user = data
              this.modal.show()
            })
            .catch(error => this.errorText = error.message)
        })
        .catch(error => this.errorText = error.message)
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal)
  }
};
</script>

<style scoped>
</style>
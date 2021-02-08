<template>
  <h1>{{ msg }}</h1>
  <form @submit.prevent="isUpdating ? updatePostForm() : savePostForm()">
    <div class="mb-3">
      <label for="title" class="form-label">عنوان پست</label>
      <input type="text" class="form-control" id="title" v-model="postForm.title" />
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">متن پست</label>
      <textarea class="form-control" id="body" rows="3" v-model="postForm.body"></textarea>
    </div>
    <button class="btn btn-success" type="submit">{{ isUpdating ? 'ویرایش پست' : 'ذخیره پست'}}</button>
  </form>

  <p class="alert alert-danger" v-if="errorText">{{ errorText }}</p>
  <div class="row">
    <div class="card" style="width: 18rem;" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">پست شماره {{ post.id }}</h5>
        <p class="card-text">{{ post.title }}</p>
        <p class="card-text">{{ post.body }}</p>
        <button class="me-2 btn btn-primary" @click="showPostModal(post.id)">بیشتر</button>
        <button class="btn btn-primary" @click="fetchUpdatePost(post.id)">ویرایش</button>
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

  setup() {
    const posts = reactive([]);
    const post = reactive({ title: '', body: '' })
    const postForm = reactive({ title: '', body: '', userId: 2 })
    const isUpdating = ref(false);
    const user = reactive({})
    const errorText = ref('');
    const exampleModal = ref(null);
    const modal = ref(null);

    const handleError = (res) => {
      if (! res.ok) {
        throw new Error('اررور داشتیم')
      }

      return res;
    }

    const getPosts = () => {
      
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(handleError)
        .then(res => res.json())
        .then(data => posts.push(...data))
        .catch(error => errorText.value = error.message)
    }

    const showPostModal = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => {
          Object.assign(post, data)
          fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then(handleError)
            .then(res => res.json())
            .then(data => {
              Object.assign(user, data)
              modal.value.show();
            })
            .catch(error => errorText.value = error.message)
        })
        .catch(error => errorText.value = error.message)
    }

    const savePostForm = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset: utf-8;'
        },
        body: JSON.stringify(postForm)
      })
      .then(handleError)
      .then(res => res.json())
      .then(data => {
        posts.push({
          id: data.id,

          ...postForm
        })

        postForm.title = ''
        postForm.body = ''
      })
      .catch(error => errorText.value = error.message)
    }

    const fetchUpdatePost = id => {
      isUpdating.value = true;

      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => {
          postForm.id = data.id
          postForm.title = data.title
          postForm.body = data.body
          postForm.userId = data.userId
        })
        .catch(error => errorText.value = error.message)
    }

    const updatePostForm = () => {

      fetch(`https://jsonplaceholder.typicode.com/posts/${postForm.id}`, {
        method: 'put',
        headers: {
          'Content-type': 'application/json; charset: utf-8;'
        },
        body: JSON.stringify(postForm)
      })
      .then(handleError)
      .then(res => res.json())
      .then(data => {
        posts.map(post => {
          if (post.id === postForm.id) {
            post.title = postForm.title
            post.body = postForm.body
          }
        })

        postForm.title = ''
        postForm.body = ''
      })
      .catch(error => errorText.value = error.message)
    }

    getPosts()

    onMounted(() => {
      modal.value = new Modal(exampleModal.value)
    })

    return {
      posts,
      post,
      postForm,
      savePostForm,
      user,
      exampleModal,
      showPostModal,
      errorText,
      fetchUpdatePost,
      isUpdating,
      updatePostForm
    };
  },

  /* data: () => ({
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
  } */
};
</script>

<style scoped>
</style>
<template>
  <h1>{{ msg }}</h1>
  <PostForm
    @post-saved="savePostForm"
    @post-updated="updatePostForm"
    @error="(message) => errorText = message"
    :data="postForm"
  />

  <p class="alert alert-danger" v-if="errorText">{{ errorText }}</p>
  <div class="row">
    <PostCard
      v-for="(post, index) in posts"
      :key="post.id"
      :post="post"
      :index="index"
      @error="(message) => errorText = message"
      @show-modal="showPostModal"
      @show-update="fetchUpdatePost"
      @post-deleted="deletePost"
    />
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
import PostForm from './PostForm.vue'
import PostCard from './PostCard.vue'

export default {
  name: "HelloWorld",
  props: ["msg"],

  components: {
    PostForm,
    PostCard
  },

  setup() {
    const posts = reactive([]);
    const post = reactive({ title: '', body: '' })
    const postForm = reactive({ title: '', body: '', userId: 2 })
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

    const showPostModal = ({ postData, userData }) => {
      Object.assign(post, postData)
      Object.assign(user, userData)
      modal.value.show();
    }

    const savePostForm = (postForm) => {
      posts.push(postForm)
    }

    const fetchUpdatePost = data => {
      postForm.id = data.id
      postForm.title = data.title
      postForm.body = data.body
      postForm.userId = data.userId
    }

    const updatePostForm = (updatedPost) => {
      posts.map(post => {
        if (post.id === updatedPost.id) {
          post.title = updatedPost.title
          post.body = updatedPost.body
        }
      })
    }

    const deletePost = index => {
      posts.splice(index, 1)
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
      updatePostForm,
      deletePost
    };
  },
};
</script>
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
  <PostModal ref="exampleModal" :post="post" :user="user" />
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { Modal } from 'bootstrap'
import PostForm from './PostForm.vue'
import PostCard from './PostCard.vue'
import PostModal from './PostModal.vue'
import { handleError } from '../utils/helpers.js'
import axios from '../plugins/axios.js'

export default {
  name: "HelloWorld",
  props: ["msg"],

  components: {
    PostForm,
    PostCard,
    PostModal
  },

  setup() {
    const posts = reactive([]);
    const post = reactive({ title: '', body: '' })
    const postForm = reactive({ title: '', body: '', userId: 2 })
    const user = reactive({})
    const errorText = ref('');
    const exampleModal = ref(null);
    const modal = ref(null);

    const getPosts = async() => {
      // axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(({ data }) => posts.push(...data))
      //   .catch(({ response }) => {
      //     console.log(response)
      //     errorText.value = 'اررور داشتیم'
      //   })


      // try {
      //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      //   handleError(res)
      //   const data = await res.json()

      //   posts.push(...data)
      // } catch(error) {
      //   errorText.value = error.message
      // }

      try {
        const { data } = await axios.get('/fghfghfgh')
        posts.push(...data)
      } catch(error) {
        errorText.value = 'اررور داشتیم'
      }
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
      modal.value = new Modal(exampleModal.value.$el)
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
<template>
  <form @submit.prevent="isUpdating ? updatePost() : savePost()">
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
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { handleError } from '../utils/helpers.js'
import axios from 'axios'

export default {
  name: "PostForm",

  props: {
    data: {
      type: Object,
      required: false
    }
  },

  setup(props, context) {
    const postForm = reactive({ title: '', body: '', userId: 2 })
    const isUpdating = ref(false);

    const savePost = async() => {
      
      const config = {
        headers: {
          Authorization: `Bearer jkdgjklnfkln`,
          'Content-type': 'application/json'
        },
        timeout: 3000
      };

      axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        postForm,
        config
      )
        .then((response) => {
          console.log(response)

          context.emit('post-saved', { id: response.data.id, ...postForm })

          postForm.title = ''
          postForm.body = ''
        })
        .catch(() => context.emit('error', 'اررور داشتیم'))




      // try {
      //   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      //     method: 'post',
      //     headers: {
      //       'Content-type': 'application/json; charset: utf-8;'
      //     },
      //     body: JSON.stringify(postForm)
      //   });
      //   handleError(res);
      //   const data = await res.json();
        
      //   context.emit('post-saved', { id: data.id, ...postForm })

      //   postForm.title = ''
      //   postForm.body = ''
      // } catch (error) {
      //   context.emit('error', error.message)
      // }

    }

    const updatePost = () => {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${postForm.id}`, postForm)
      .then(({ data }) => {
        context.emit('post-updated', { ...postForm })

        postForm.title = ''
        postForm.body = ''
      })
      .catch(error => context.emit('error', 'اررور داشتیم'))
    }

    watch(props.data, () => {
      isUpdating.value = true
      postForm.title = props.data.title
      postForm.body = props.data.body
      postForm.id = props.data.id
      postForm.userId = props.data.userId
    }) 


    return {
      postForm,
      isUpdating,
      savePost,
      updatePost
    }
  }
}
</script>

<style>

</style>
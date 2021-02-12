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

    const handleError = (res) => {
      if (! res.ok) {
        throw new Error('اررور داشتیم')
      }

      return res;
    }

    const savePost = () => {
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
        context.emit('post-saved', { id: data.id, ...postForm })

        postForm.title = ''
        postForm.body = ''
      })
      .catch(error => errorText.value = error.message)
    }

    const updatePost = () => {
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
        context.emit('post-updated', { ...postForm })

        postForm.title = ''
        postForm.body = ''
      })
      .catch(error => errorText.value = error.message)
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
<template>
  <DataProvider
    url="https://jsonplaceholder.typicode.com/posts"
    :options="{ params: { _limit: 5 } }"
    v-slot="{ json, loading }"
  >
    <p v-if="loading">data is loading...</p>
    <ul v-else>
      <li v-for="post in json" :key="post.id" style="margin: 2rem; ">
        {{ post.title }}
      </li>
    </ul>
  </DataProvider>
  <DataProvider
    url="https://jsonplaceholder.typicode.com/users"
    v-slot="{ json: users }"
  >
    <ul style="background-color: red; color: white;">
      <li v-for="user in users" :key="user.id" style="margin: 2rem; ">
        {{ user.name }}
      </li>
    </ul>
  </DataProvider>
  <!-- <DataProvider 
    method="put"
    url="https://jsonplaceholder.typicode.com/posts/1"
    :form="form"
    v-slot="{ handleSubmit, loading, errorMessage }"
  >
    <div>
      <p style="background-color: red; color: white;">
        {{ errorMessage }}
      </p>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="form.title">
        <textarea cols="30" rows="10" v-model="form.body"></textarea>
        <button type="submit" :disabled="loading">submit</button>
      </form>
    </div>
  </DataProvider> -->
</template>

<script>
import DataProvider from '@/components/DataProvider.js'

export default {
  name: 'App',
  components: { DataProvider },

  data: () => ({
    form: {
      title: '',
      body: ''
    }
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <button @click="inc">counter: {{ num }}</button>
  <p>{{ user.name }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface UserType {
  name: string;
  role: 'admin' | 'user' | 1 | 2;
}

export default defineComponent({
  data: () => ({
    num: 7 as number | string,
    user: {
      name: 'tofiq',
      role: 'admin'
    } as UserType
  }),
  methods: {
    inc() {
      this.num = 'dgho;;of'
      this.num = 2

      this.user.role = 'user'
    }
  }
})
</script>

<style>

</style>
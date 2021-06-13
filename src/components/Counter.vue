<template>
  <button @click="changeRole('admin')">عوض کردن نقش کاربر</button>
  <p>{{ user.name }}: ({{ user.role }})</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type UserRole = 'admin' | 'user'

interface UserType {
  name: string;
  role: UserRole;
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
    changeRole(role: UserRole): boolean | void {
      this.user.role = role;

      // return 'dt;gkh'
    }
  }
})
</script>

<style>

</style>
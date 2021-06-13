<template>
  <button @click="changeRole('admin')">عوض کردن نقش کاربر</button>
  <p>{{ user.name }}: ({{ user.role }})</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type UserRole = 'admin' | 'user'

interface UserType {
  name: string;
  role: UserRole;
}

export default defineComponent({

  props: {
    msg: {
      required: true,
      type: [Number, String]
    },
    admin: {
      required: true,
      type: Object as PropType<UserType>
    },
    // users: {
    //   required: true,
    //   type: Array as PropType<UserType[]>
    // }
  },

  created() {
    // this.msg = 'e';
    this.num = this.msg;
    // this.admin.name
  },




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
<template>
  <!-- <button @click="changeRole('admin')">عوض کردن نقش کاربر</button> -->
  <p>{{ user.name }}: ({{ user.role }})</p>
  <button @click="num--">counter: {{ num }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

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
  },

  setup() {
    const num = ref<number | string>(5)

    const user = ref<UserType>({name: 'tofiq', role: 'admin'})

    return {
      num,
      user
    }
  }

  // data: () => ({
  //   num: 7 as number | string,
  //   user: {
  //     name: 'tofiq',
  //     role: 'admin'
  //   } as UserType
  // }),
  // methods: {
  //   changeRole(role: UserRole): boolean | void {
  //     this.user.role = role;

  //     // return 'dt;gkh'
  //   }
  // }
})
</script>

<style>

</style>
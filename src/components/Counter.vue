<template>
  <!-- <button @click="changeRole('admin')">عوض کردن نقش کاربر</button> -->
  <p>{{ user.name }}: ({{ user.role }})</p>
  <button @click="num--">counter: {{ num }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, ref } from "vue";

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

    // const user = reactive<UserType>({
    //   name: 'tofiq',
    //   role: 'admin',
    //   email: 'sjlkdfghjklfhkjg'
    // })
    
    // const user: UserType = reactive({
    //   name: 'tofiq',
    //   role: 'admin',
    //   email: 'klsdjh'
    // })
    const user = reactive({
      name: 'tofiq',
      role: 'admin',
      email: 'sljgljfhgh'
    }) as UserType

    user.role = 'user'

    // const state = reactive({
    //   num: 8 as number | string,
    //   user: {
    //     name: 'tofiq',
    //     role: 'admin'
    //   } as UserType
    // })

    // state.user.role = 'user'

    return {
      // ...toRefs(state)
      
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
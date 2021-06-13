<template>
  <button @click="changeName">عوض کردن نام کاربر</button>
  <p>{{ userName }}: ({{ user.role }})</p>
  <button @click="num--">counter: {{ num }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, ref, computed } from "vue";

type UserRole = 'admin' | 'user'

interface UserType {
  name: string;
  role: UserRole;
}

  // esm inja ok shod
interface PropTypes  {
  msg?: string;
  admin?: UserType;
  [key: string]: unknown
}

export default defineComponent({

  // props: {
  //   msg: {
  //     required: true,
  //     type: [Number, String]
  //   },
  //   admin: {
  //     required: true,
  //     type: Object as PropType<UserType>
  //   },
  // },



  // esm inja ok shod
  setup(props: PropTypes) {

    props.admin?.name

    const num = ref(5)

    const user = reactive<UserType>({
      name: 'tofiq',
      role: 'admin',
    })

    const userName = computed((): string[] => user.name.split(''))

    const changeName = (): void | boolean => {
      user.name = 'djtphojdtophjopdtg'
    }
    
    // function changeRole(roleName: UserRole): void | boolean {
    //   user.role = roleName

    //   return true
    // }
    
    return {
      num,
      user,
      changeName,
      userName
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
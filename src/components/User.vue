<template>
  <button @click="changeRole">عوض کردن نقش کاربر</button>
  <p>{{ user.name }}: ({{ user.role }})</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UserType, UserRole } from '@/types/user'

export default defineComponent({
  props: {
    user: {
      required: true,
      type: Object as PropType<UserType>
    }
  },
  emits: {
    changeRole(payload: UserRole) {
      return true
    }
  },
  methods: {
    changeRole() {
      this.$emit('changeRole', 'user')
    }
  }
})
</script>

<style>

</style>
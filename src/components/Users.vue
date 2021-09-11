<template>
  <ul
    v-for="{ name, age } in users"
    :key="name"
    v-memo="[name === selectedUser]"
  >
    <li>{{ `${name} - ${age}` }}</li>
  </ul>
</template>

<script>
import users from "../users.js";

export default {
  data: () => ({
    users,
    selectedUser
  })
};
</script>

<template>
  <div>
    <slot name="title" message="title message" />
    <!-- <h1>{{ message }}</h1> -->


    <slot :message="string" :num="3" />


  </div>
</template>

<script>
export default {
  props: ['message'],

  data: () => ({
    string: 'content from child component'
  })
}
</script>

<style>

</style>
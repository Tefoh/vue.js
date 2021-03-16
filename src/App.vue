<template>
  <div id="app">
    <BaseHeader />
    <router-view/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader'
export default {
    components: {
        BaseHeader
    }
}
</script>

<style>
</style>

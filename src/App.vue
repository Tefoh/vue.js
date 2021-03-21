<template>
  <div id="app">
    <BaseHeader @show-sidebar="handleSidebar" />
    <router-view/>
    <BaseFooter :showSideBar="isShowSideBar" />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader'
import BaseFooter from './components/BaseFooter'
export default {
  data: () => ({
    isShowSideBar: false
  }),

  components: {
    BaseHeader,
    BaseFooter
  },

  methods: {
    handleSidebar(showSideBar) {
      this.isShowSideBar = showSideBar;
    }
  }
}
</script>

<style>
</style>

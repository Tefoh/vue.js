<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="handleAlert">show alert</button>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleAlert() {
      this.$swal({
        title: 'سلام دوستان عزیز',
        icon: 'warning',
        confirmButtonText: 'اوکی',
        showCancelButton: true,
        showDenyButton: true,
        cancelButtonText: 'کنسل',
        denyButtonText: 'ذخیره نکن'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
          this.$swal('Changes are not saved', '', 'info')
        }
      })
    }
  }
}
</script>

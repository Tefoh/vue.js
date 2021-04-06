<template>
  <main class="main">
      <div class="account">
          <div class="container">
              <h1 class="account__title">بازیابی رمز عبور</h1>
              <div class="account__form">
                  <form action="">
                      <input type="text" class="txt txt--left" placeholder="شماره با موبایل">
                      <button class="btn btn--brand btn--boxshadow w--100">بازیابی رمز عبور</button>
                      <div class="account__footer">
                          <span>کاربر جدید هستید ؟ </span>
                          <router-link :to="{ name: 'Login' }" class="account__router">صفحه ورود</router-link>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>
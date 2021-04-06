<template>
  
<main class="main">
    <div class="account">
        <div class="container">
            <h1 class="account__title">ورود به وب سایت</h1>
            <div class="account__form">
                <form action="">
                    <input type="text" class="txt txt--left" placeholder="شماره با موبایل">
                    <input type="text" class="txt txt--left" placeholder="رمز عبور">
                    <label class="ui-checkbox">
                        <input type="checkbox" class="ui-checkbox__input">
                        <span class="ui-checkbox__mark"></span>
                        مرا بخاطر بسپار
                    </label>
                    <router-link :to="{ name: 'ResetPass' }" class="account__recoverpass">بازیابی رمز عبور</router-link>
                    <button class="btn btn--brand btn--boxshadow w--100">ورود به سایت</button>

                    <div class="account__footer">
                        <span>کاربر جدید هستید ؟ </span>
                        <router-link :to="{ name: 'Register' }" class="account__router">صفحه ثبت نام</router-link>
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
<template>
  <main class="main">
    <div class="account">
        <div class="container">
            <h1 class="account__title">ثبت نام در سایت</h1>
            <div class="account__form">
                <form action="">
                    <input type="text" class="txt " placeholder="نام و نام خانوادگی">
                    <input type="text" class="txt txt--left" placeholder="ایمیل">
                    <input type="text" class="txt txt--left" placeholder="شماره موبایل">
                    <input type="text" class="txt txt--left" placeholder="رمز عبور">
                    <select name="" id="">
                        <option value="1">انتخاب استان</option>
                        <option value="1">تهران</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                    </select>
                    <select name="">
                        <option value="1">انتخاب شهر</option>
                        <option value="1">سعادت اباد</option>
                        <option value="1">مشهد</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                        <option value="1">خراسان رضوی</option>
                    </select>
                    <button class="btn btn--brand btn--boxshadow w--100 margin--bottom-10">ورود به سایت</button>
                    <button class="btn btn--cancel btn--cancel w--100">انصراف</button>

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
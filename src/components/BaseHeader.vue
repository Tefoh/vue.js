<template>
  <header class="header header--bg">
        <div class="header__shape">
            <div class="header__shape-inner"></div>
        </div>
        <div class="container">
            <div class="navbar">
                <div class="navbar__row">
                    <div class="header__logo"><router-link :to="{ to: 'Home' }" class="header__logo-img"></router-link></div>
                    <div class="navbar__items" :class="{ 'navbar__items--is-active': showSideBar }">
                        <ul class="navbar__ul">
                            <li class="navbar__item"><router-link :to="{ to: 'Home' }" class="navbar__link navbar__link--is-active">صفحه اصلی</router-link></li>
                            <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">فروشگاه</a>
                                <ul class="navbar__subset">
                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                    <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">زیر منو 3</a>
                                        <ul class="navbar__subset">
                                            <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                            <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                            <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">زیر منو 3</a>
                                                <ul class="navbar__subset">
                                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                                    <li class="navbar__item"><a href="" class="navbar__link">زیر منو 3</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="navbar__item"><router-link :to="{ name: 'About' }" class="navbar__link">درباره ما</router-link></li>
                            <li class="navbar__item"><a href="" class="navbar__link">تماس باما</a></li>
                        </ul>
                    </div>
                    <div class="navbar__action">
                        <div class="header__basket">
                            <span class="header__basket-icon" @click="showDropDownBasket"></span>
                            <span class="header__basket-count">0</span>
                            <div class="header__dropdown" :class="{ 'header__dropdown--is-active': isBasketDropDown }">
                              <div class="header__dropdown-content header__dropdown-content--overflow">
                                  <div class="header__basket-item" v-for="item in 3" :key="item">
                                      <a href="" class="header__basket-link">
                                          <img :src="require('../assets/img/big-pic.jpg')" class="header__basket-img">
                                      </a>
                                      <div class="header__basket-details">
                                          <h5><a class="header__basket-title" href="">محصول شماره یک</a></h5>
                                          <div class="header__basket-price">120000 تومان</div>
                                          <a href="" class="header__basket-remove">حذف</a>
                                      </div>
                                  </div>
                                  <div class="header__basket-btn">
                                      <a href="cart.html" class="btn btn--boxshadow btn--brand w--100">ثبت و نهایی کردن
                                          سفارش</a>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div class="header__account">
                            <span class="header__account-icon" @click="showDropDownAccount"></span>
                            <div class="header__dropdown header__dropdown--w200" :class="{ 'header__dropdown--is-active': isAccountDropDown }">
                                <div class="header__dropdown-content">
                                    <a href="sign-in.html" class="header__account-link">ورود</a>
                                    <a href="sign-up.html" class="header__account-link">ثبت نام</a>
                                </div>
                            </div>
                        </div>
                        <div class="header__menu" :class="{ 'header__menu--is-active': showSideBar }" @click="toggleSidebar"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: "BaseHeader",

  data: () => ({
    isBasketDropDown: false,
    isAccountDropDown: false,
    showSideBar: false
  }),

  methods: {
    showDropDownBasket() {
      this.isAccountDropDown = false;
      this.isBasketDropDown = !this.isBasketDropDown
    },
    showDropDownAccount() {
      this.isBasketDropDown = false;
      this.isAccountDropDown = !this.isAccountDropDown
    },
    eventListener(event) {
      if (! event.target.closest('.header__basket,.header__account')) {
        this.isBasketDropDown = false;
        this.isAccountDropDown = false;
      }
      if (! event.target.closest('.navbar')) {
        this.showSideBar = false;

        this.$emit('show-sidebar', false);
      }
    },
    toggleSidebar() {
        this.showSideBar = !this.showSideBar;

        this.$emit('show-sidebar', this.showSideBar);
    }
  },

  mounted() {
    document.addEventListener('click', this.eventListener);
  },

  destroyed() {
    document.removeEventListener('click', this.eventListener);
  }
}
</script>

<style>

</style>
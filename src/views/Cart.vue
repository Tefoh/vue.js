<template>
  <main class="main">
      <div class="container">
          <div class="cart">
              <h1 class="cart__title">سبد خرید</h1>
              <form action="">
                  <div class="cart__item" v-for="item in 6" :key="item">
                      <div class="cart__row">
                          <div class="cart__image">
                              <a href="" class="cart__image-link"><img :src="require(`../assets/img/slider/${item}.jpg`)" alt=""
                                                                      class="cart__image-img"></a>
                          </div>
                          <div class="cart__details">
                              <h5 class="cart__details-h5"><a href="" target="_blank" class="cart__details-link">نمونه
                                  محصول</a></h5>
                              <div class="cart__deatils-features">رنگ :‌سفید : اندازه : کوچیک :‌حجم : ۳۲ گیگ</div>
                              <div class="cart__deatils-code"> کد :111111111111</div>
                          </div>
                          <div class="cart__amounts">
                              <div class="cart__amounts-div">
                                  <input type="number" class="txt" placeholder="تعداد" max="1000" min="1">
                                  <div class="cart__amounts-price"><span>۱۴۰۰۰ تومان</span></div>
                                  <a href="#" onclick="removeCartItem(this)" class="cart__amounts-remove">حذف</a>
                              </div>
                          </div>
                          <div class="cart__total">
                              <div class="cart__total-div">
                                  <h6 class="cart__total-title">جمع</h6>
                                  ۲,۳۰۰,۰۰۰ تومان
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
              <div class="cart__info">
                  <div class="cart__coupon">
                      <form action="">
                          <div class="cart__coupon-div">
                              <input type="text" placeholder="کوپن خود را بنویسد" class="cart__coupon-input">
                              <button class="btn-coupon">اعمال</button>
                          </div>
                      </form>
                  </div>
                  <div class="cart__table">
                      <table>
                          <tbody>
                          <tr>
                              <th>جمع کل</th>
                              <td>500000 تومان</td>
                          </tr>
                          <tr>
                              <th>وزن</th>
                              <td>700 گرم</td>
                          </tr>
                          <tr>
                              <th>مالیات</th>
                              <td>0 تومان</td>
                          </tr>
                          <tr>
                              <th>تخفیف</th>
                              <td class="text-red">0 تومان</td>
                          </tr>
                          <tr>
                              <th>قابل پرداخت</th>
                              <td class="text-blue">6000000 تومان</td>
                          </tr>
                          </tbody>
                      </table>
                      <button class="btn btn--brand btn--boxshadow">ثبت سفارش</button>
                  </div>
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
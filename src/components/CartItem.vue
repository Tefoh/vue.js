<template>
    <div class="cart__item" >
        <div class="cart__row">
            <div class="cart__image">
                <a href="" class="cart__image-link">
                    <img :src="require(`../assets/img/slider/${item.id}.jpg`)" alt=""
                          class="cart__image-img"
                    >
                  </a>
            </div>
            <div class="cart__details">
                <h5 class="cart__details-h5">
                    <router-link :to="{ name: 'Product', params: { id: item.id } }" class="cart__details-link">
                        {{ item.name }}
                    </router-link>
                  </h5>
                  <p>قیمت: {{ formattedPrice(item.price) }}</p>
                <div class="cart__deatils-code"> تعداد :{{ item.quantity }}</div>
                <div class="cart__deatils-code"> تعداد :{{ quantity }}</div>
            </div>
            <div class="cart__amounts">
                <div class="cart__amounts-div">
                    <input type="number" class="txt" placeholder="تعداد" v-model.number="quantity" max="1000" min="1">
                    <button
                      @click="changeQuantity({ product: item, quantity })"
                      class="btn btn--brand btn--boxshadow" 
                      style="margin-left: 1rem;"
                      type="button"
                    >اضافه به سبد خرید</button>
                    <button 
                      type="button"
                      @click="removeItem(item)"
                      class="cart__amounts-remove"
                      style="cursor: pointer;"
                    >حذف</button>
                </div>
            </div>
            <div class="cart__total">
                <div class="cart__total-div">
                    <h6 class="cart__total-title">جمع</h6>
                    {{ formattedPrice(item.price * item.quantity) }} تومان
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapAction, mapActions } from 'vuex'

export default {
  name: "CartItem",

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      quantity: this.item.quantity
    }
  },

  methods: {
    formattedPrice(price) {
      return new Intl.NumberFormat('ar-EG').format(price)
    },
    ...mapActions('cart', ['changeQuantity', 'removeItem'])
  },
}
</script>

<style>

</style>
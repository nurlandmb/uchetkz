<template>
  <section v-if="cartTotalQuantity > 0" class="cart">
    <h2>My Cart</h2>
    <div class="cart__list">
      <ProductHorizontal v-for="product in cartItems" :key="product.key" :product="product" :horizontal="true" />
    </div>

    <div class="cart__bottom">
      <div>
        <p>Quantity: {{cartTotalQuantity}}</p>
        <p>Total Price: {{cartTotalPrice}}</p>
      </div>
      <button>Confirm</button>
    </div>

  </section>
  <section v-else>
    <p>Cart is empty</p>
    <NuxtLink to="/products">View products</NuxtLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex';

export default Vue.extend({
  name: 'CartPage',
  layout: 'base',
  computed: {
    ...mapGetters({
      cartItems: 'cart.js/getItems',
      cartTotalQuantity: 'cart.js/getTotalQuantity',
      cartTotalPrice: 'cart.js/getTotalPrice'
    })
  }
})
</script>

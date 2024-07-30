<template>
  <div class="product horizontal" v-bind="$attrs">
    <div class="product__img">
      <img height="200px" width="250px" :src="product.thumbnail"/>
    </div>
    <p class="product__title">{{ product.title }}</p>
    <p class="product__price">{{ product.price }}</p>
    <div v-if="inCartQuantity > 0" class="product__cart">
      <button @click="quantityChangeHandler(inCartQuantity - 1)">-</button>
      <input class="product__cart-input" @blur="e => quantityChangeHandler(Number(e.target.value))" type="number"
             :value="inCartQuantity"/>
      <button @click="quantityChangeHandler(inCartQuantity + 1)">+</button>
    </div>
    <button v-else>Add to Cart</button>
    <p v-if="inCartQuantity > 0" class="product__price">{{ productTotalPrice }}$</p>
    <button v-if="inCartQuantity > 0" @click="cartRemoveItem(product.id)">remove</button>


  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  props: ['product'],
  computed: {
    ...mapGetters({
      cartItems: 'cart/getItems'
    }),

    productId() {
      return this.$props.product.id;
    },

    inCartQuantity() {
      return this.cartItem.quantity;

    },

    productTotalPrice(){
      return (this.product.quantity * this.product.price).toFixed(3)
    },

    cartItem() {
      return this.cartItems.find(item => item.id === this.productId)
    }
  },
  methods: {
    ...mapMutations({
      cartAddItem: 'cart/addItem',
      cartRemoveItem: 'cart/removeItem',
      cartQuantityChange: 'cart/changeItemQuantity'
    }),
    addToCartHandler(product) {
      this.cartAddItem({
        name: this.$props.product.name,
        id: this.$props.product.id,
        price: this.$props.product.price,
        thumbnail: this.$props.product.thumbnail

      })
    },

    quantityChangeHandler(newValue) {
      if (newValue < 1 || !newValue) {
        this.cartRemoveItem(this.productId);
        return;
      }

      this.cartQuantityChange({id: this.productId, quantity: newValue})
    }
  }
}
</script>

<style scoped>
.product.horizontal {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 24px;
}

.product__title {
  margin-bottom: 12px;
}

.product__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.product__cart {
  flex: 0 0 60%;
  display: flex;
  align-items: center;
  gap: 4px;
}

.product__cart-input {
  flex-shrink: 1;
}

</style>

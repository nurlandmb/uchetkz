<template>
  <div class="product" v-bind="$attrs">
    <div class="product__img">
      <button class="product__img-favorite" @click="favoriteHandler" :class="{'added': inFavorites}" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
      <img height="200px" width="250px" :src="product.thumbnail" :alt="product.title" />
    </div>
    <p class="product__title" >{{ product.title }}</p>
    <div class="product__wrapper">
      <p class="product__price">{{ product.price }}$</p>
      <div v-if="cartItem" class="product__cart">
        <button @click="quantityChangeHandler(inCartQuantity - 1)">-</button>
        <input class="product__cart-input" @blur="e => quantityChangeHandler(Number(e.target.value))" type="number" :value="inCartQuantity" />
        <button @click="quantityChangeHandler(inCartQuantity + 1)">+</button>
      </div>
      <button v-else @click="addToCartHandler(product)">Add to Cart</button>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  props: ['product'],
  computed: {
    ...mapGetters({
      cartItems: 'cart/getItems',
      favoriteItems: 'favorites/getItems'
    }),

    productId(){
      return this.$props.product.id;
    },

    inFavorites(){
      return this.favoriteItems.find(item => item.id === this.productId)
    },

    inCartQuantity(){
      return this.cartItem.quantity;

    },

    cartItem(){
      return this.cartItems.find(item => item.id === this.productId)
    }
  },
  methods: {
    ...mapMutations({
      cartAddItem: 'cart/addItem',
      cartRemoveItem: 'cart/removeItem',
      cartQuantityChange: 'cart/changeItemQuantity',
      favoritesAddItem: 'favorites/addItem',
      favoritesRemoveItem: 'favorites/removeItem'
    }),
    addToCartHandler(product){
      this.cartAddItem({
        name: this.$props.product.name,
        id: this.$props.product.id,
        price: this.$props.product.price,
        thumbnail: this.$props.product.thumbnail,

      })
    },

    quantityChangeHandler(newValue){
      if(newValue < 1 || !newValue){
        this.cartRemoveItem(this.productId);
        return;
      }

      this.cartQuantityChange({id: this.productId, quantity: newValue})
    },

    favoriteHandler(){
      if(this.inFavorites){
        this.favoritesRemoveItem(this.productId);
      } else{
        const {id, price, thumbnail} = this.$props.product;

        this.favoritesAddItem({id, price, thumbnail})
      }
    }
  }
}
</script>

<style scoped>

.product__title{
  margin-bottom: 12px;
}
.product__img{
  position: relative;
}
.product__img-favorite{
  position: absolute;
  top: 4px;
  left: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.product__img-favorite.added svg{
  fill: #990000;
}
.product__img-favorite svg{
  width: 24px;
  height: 24px;
  stroke: #990000;
  transition: fill .2s;
}

.product__wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.product__cart{
  flex: 0 0 60%;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
}

.product__cart-input{
  flex-shrink: 1;
  display: block;
  max-width: 50px;
  text-align: center;
}

</style>

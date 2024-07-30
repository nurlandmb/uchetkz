<template>
  <section v-if="favoriteItems.length > 0" class="cart">
    <h2>Favorites</h2>
    <div class="cart__list">
      <Product v-for="product in favoriteItems" :key="product.key" :product="product" />
    </div>


  </section>
  <section v-else>
    <p>Favorites are empty</p>
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
      favoriteItems: 'favorites/getItems',
    })
  }
})
</script>

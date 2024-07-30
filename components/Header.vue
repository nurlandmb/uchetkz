<template>
  <header class="header">
    <NuxtLink class="header__logo" to="/products">Logo</NuxtLink>
    <nav class="header__links">
      <NuxtLink class="header__icon" to="/cart">
        <span v-if="cartTotalQuantity > 0" class="header__cart-count">{{cartTotalQuantity}}</span>
        <svg class="header__icon-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
        </svg>

      </NuxtLink>
      <NuxtLink class="header__icon" to="/favorites">
        <svg class="header__icon-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#990000">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>


      </NuxtLink>
    </nav>

  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      cartTotalQuantity: "cart/getTotalQuantity"
    })
  }
}
</script>

<style scoped>

.header {
  padding: 24px;
  display: flex;
  justify-content: space-between;
}

.header__links{
  display: flex;
  gap: 16px;
}

.header__icon {
  display: flex;
  gap: 12px;
}

.header__icon-logo {
  width: 24px;
  height: 24px;
  stroke: black;
}
</style>

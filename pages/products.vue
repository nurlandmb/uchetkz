<template>
<section class="products">
  <template v-if="productsIsLoading">
    <Loader />
  </template>
  <template v-else>
    <aside class="categories">
      <button class="categories__item" v-if="categories.length" @click="setSelectedCategory(null)">All</button>
      <button class="categories__item" @click="setSelectedCategory(category)" v-for="category in categories" :key="category">{{category}}</button>
    </aside>
    <div class="products__wrapper">
      <div class="products__filter">
        <select @change="e => setOrderBy(e.target.value)">
          <option :value="null" disabled selected>Sort by</option>
          <option :value="null">Default</option>
          <option value="priceAsc">Price: Low to high</option>
          <option value="priceDesc">Price: High to low</option>
        </select>

        <input placeholder="Search by name" @input.trim="e => setSearchValue(e.target.value)" />
      </div>
      <div class="products__list">
        <Product v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </template>

</section>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default Vue.extend({
  name: 'ProductsPage',
  layout: 'base',
  computed: {
    products() {
      return this.$store.state.products.products
    },
    ...mapGetters({
      categories: 'products/getAvailableCategories',
      filteredProducts: 'products/getFilteredProducts',
      productsIsLoading: 'products/getIsLoading',
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts'
    }),
    ...mapMutations({
      setSearchValue: 'products/setSearchValue',
      setSelectedCategory: 'products/setSelectedCategory',
      setOrderBy: 'products/setOrderBy'
    })

  },
  mounted() {
    this.fetchProducts()
  }

})

</script>

<style scoped>
.categories {

}

.categories__item {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.products{
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
}

.products__filter{
  margin-bottom: 12px;
  display: flex;
  gap: 8px;
}

.products__list{
  transition: all .3s;
  flex-grow: 1;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
}
</style>

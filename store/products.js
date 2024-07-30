import products from '~/pages/products.vue';
import product from '~/components/Product.vue';

export const state = () => ({
  products: [],
  isLoading: false,
  error: null,
  filters: {
    searchValue: "",
    selectedCategory: null,
    orderBy: null
  }
})

export const actions = {
  async fetchProducts({commit}) {
    try {
      state.isLoading = true;
      const {data} = await this.$axios.get('/products')

      commit('setProducts', data.products);
      // commit('setProducts', data);
      return data;
    } catch (err) {
      state.error = err;
    } finally {
      state.isLoading = false;
    }
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },

  setSearchValue(state, value) {
    state.filters.searchValue = value;
  },

  setSelectedCategory(state, category) {
    state.filters.selectedCategory = category;
  },

  setOrderBy(state, orderBy) {
    state.filters.orderBy = orderBy;
  }
}

export const getters = {
  getAvailableCategories(state) {
    return [...new Set(state.products.map(product => product.category))]
  },

  getFilteredProducts(state) {
    let filteredProducts = JSON.parse(JSON.stringify(state.products));
    const {searchValue, orderBy, selectedCategory} = state.filters

    if (searchValue?.length) {
      filteredProducts = filteredProducts
        .filter(product => product.title
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()))
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory)
    }

    if (orderBy === 'priceAsc') {
      filteredProducts.sort((a, b) => a.price - b.price)
    }

    if (orderBy === 'priceDesc') {
      filteredProducts.sort((a, b) => b.price - a.price)

    }

    return filteredProducts;

  },

  getIsLoading(state){
    return state.isLoading
  }
}

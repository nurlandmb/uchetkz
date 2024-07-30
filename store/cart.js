export const state = () => ({
  items: []
})

export const getters = {
  getItems(state) {
    return state.items
  },

  getTotalQuantity(state) {
    return state.items.reduce((acc, item) => {
      acc += item.quantity;
      return acc;
    }, 0);
  },

  getTotalPrice(state) {
    return state.items.reduce((acc, item) => {
      acc += item.quantity * item.price
      return acc;
    }, 0).toFixed(3)
  }
}

export const mutations = {
  addItem(state, item) {
    state.items.push({...item, quantity: 1});
  },

  removeItem(state, itemId) {
    state.items = state.items.filter(item => item.id !== itemId)
  },

  changeItemQuantity(state, {id, quantity}) {
    const itemIndex = state.items.findIndex(item => item.id === id);
    if (itemIndex === -1) return;

    state.items[itemIndex].quantity = quantity;
  }
}


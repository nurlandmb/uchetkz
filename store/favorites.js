export const state = () => ({
  items: []
})

export const getters = {
  getItems(state) {
    return state.items
  }
}

export const mutations = {
  addItem(state, item) {
    state.items.push({...item});
  },

  removeItem(state, itemId) {
    state.items = state.items.filter(item => item.id !== itemId)
  }
}


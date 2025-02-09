import VuexPersistence from 'vuex-persist'

export default ({ store: any }) => {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ['cart', 'favorites']
    /* your options */
  }).plugin(store);
}

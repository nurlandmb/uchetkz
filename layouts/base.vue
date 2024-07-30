<template>
  <div class="layout">
    <Header />
    <main class="layout__content">
      <Nuxt />
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "base.vue"
})
</script>



<style scoped>
.layout{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.layout__content{
  flex-grow: 1;

  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
}
</style>

<template>
  <div>
    <h1>Hello world!</h1>
    <p>Прошу внимательно прочитать readme</p>
    <NuxtLink to="/cart">cart</NuxtLink>
    <NuxtLink to="/products">products</NuxtLink>
    <NuxtLink to="/favorites">favorites</NuxtLink>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'base'
})
</script>

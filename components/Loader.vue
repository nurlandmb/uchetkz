<template>
  <div class="loader">
    <div class="loader__content"></div>

  </div>

</template>

<script>
export default{
  name: "Loader"
}
</script>

<style scoped>
.loader{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader__content {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  box-shadow: 0 0 0 0 #0004;
  animation: l1 1s infinite;
}
@keyframes l1 {
  100% {box-shadow: 0 0 0 30px #0000}
}
</style>

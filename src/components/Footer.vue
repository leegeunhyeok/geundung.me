<template>
  <footer class="footer">
    Leegeunhyeok
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: 'NanumSquareRound';
  background-color: $matte-black;
  color: #fff;
  width: 100%;
  height: 100px;
  line-height: 100px;
}

</style>

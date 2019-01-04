<template>
  <footer class="footer">
    <div class="footer-info">
      <div>
        하단1
      </div>
      <div>
        하단2
      </div>
    </div>
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

  .footer-info {
    position: absolute;
    top: -300px;
    width: 100%;
    height: 300px;
    background-color: #393e42;
    margin-bottom: 100px;

    div {
      float: left;

      @media only screen and (min-width: 320px) {
        width: 100%;
      }

      @media only screen and (min-width: 768px), (min-width: 1224px) {
        width: 50%;
      }
    }
  }
}

</style>

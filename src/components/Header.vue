<template>
  <div id="navbar">
    <a class="nav-brand">Geundung</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  font-family: 'NanumSquareRound';
  background-color: $matte_black;
  color: #fff;
  width: 100%;
  height: 60px;
  line-height: 60px;
  z-index: 9998;

  .nav-brand {
    font-family: 'Comfortaa';
    margin-left: 16px;
    float: left;

    @media only screen and (min-width: 321px) {
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media only screen  and (min-width : 1224px) {
      font-size: 1.8rem;
    }
  }
}
</style>

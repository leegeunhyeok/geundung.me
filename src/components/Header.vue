<template>
  <nav id="navbar">
    <a class="nav-brand">Geundung</a>
  </nav>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";

// 상단바는 항상 고정
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
    transition: font-size $font-transition;
    opacity: 0;

    @media only screen and (min-width: 320px) {
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media only screen  and (min-width : 1224px) {
      font-size: 1.8rem;
    }

    -webkit-animation: brand 1s 1.5s forwards;
    -moz-animation: brand 1s 1.5s forwards;
    animation: brand 1s 1.5s forwards;
  }
}

@-webkit-keyframes brand {
  100% {
    opacity: 1;
  }
}

@-moz-keyframes brand {
  100% {
    opacity: 1;
  }
}

@keyframes brand {
  100% {
    opacity: 1;
  }
}
</style>

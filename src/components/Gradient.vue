<template>
  <div class="gradient-wrap">
    <div class="gradient"></div>
  </div>
</template>

<script>
export default {
  name: 'gradient'
}
</script>

<style  lang="scss">
.gradient-wrap {
  height: 100%;
  overflow: hidden;
  position: relative;

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #e73c7e, #ee7752, #ebe15e, #a3ee5c, #23d5ab, #23a6d5, #2276d6, #6b4dac, #e73c7e);
    background-repeat: repeat;
    background-size: 1600% 100%;
    background-position: center center;
    -webkit-animation: Gradient 25s linear infinite;
    -moz-animation: Gradient 25s linear infinite;
    -o-animation: Gradient 25s linear infinite;
    animation: Gradient 25s linear infinite;
  }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -8000px;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -8000px;
  }
}

@-o-keyframes Gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -8000px;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -8000px;
  }
}
</style>

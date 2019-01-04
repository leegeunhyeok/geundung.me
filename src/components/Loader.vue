<template>
  <transition name="load">
    <div id="loader">
      <transition name="fade" mode="out-in">
        <div class="loader-area" v-if="!loaded">
          <span></span>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Preloader from '../preloader'

export default {
  name: 'loader',
  data () {
    return {
      loaded: false
    }
  },
  created () {
    // 이미지 프리로드
    Preloader.regist(() => {
      this.load()
    }).preload()
  },
  methods: {
    // vuex 로딩 상태 변경
    load () {
      this.loaded = true
      setTimeout(() => {
        this.$store.commit('LOAD')
      }, 500)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";

#loader {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $matte_black;
  z-index: 9999;

  .loader-area {
    position: relative;
    border-radius: 50%;
    background: linear-gradient(#23a6d5, #23d5ab, #ebe15e, #ebe15e, #ee7752, #e73c7e);

    @media only screen and (min-width: 320px) {
      width: 200px;
      height: 200px;
    }

    @media only screen and (min-width: 768px) {
      width: 250px;
      height: 250px;
    }

    @media only screen  and (min-width: 1224px) {
      width: 300px;
      height: 300px;
    }

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(#23a6d5, #23d5ab, #ebe15e, #ebe15e, #ee7752, #e73c7e);
      left: 0;
      -webkit-animation: loader 1s linear infinite;
      -moz-animation: loader 1s linear infinite;
      animation: loader 1s linear infinite;
      filter: blur(30px);
    }

    &:after {
      content: "L o a d i n g";
      position: absolute;
      border-radius: 50%;
      background-color: $matte_black;
      color: #fff;
      font-weight: bold;

      @media only screen and (min-width: 320px) {
        left: 10px;
        right: 10px;
        top: 10px;
        bottom: 10px;
        font-size: 1.2rem;
        line-height: 180px;
      }

      @media only screen and (min-width: 768px) {
        left: 16px;
        right: 16px;
        top: 16px;
        bottom: 16px;
        font-size: 1.6rem;
        line-height: 218px;
      }

      @media only screen  and (min-width: 1224px) {
        left: 20px;
        right: 20px;
        top: 20px;
        bottom: 20px;
        font-size: 2rem;
        line-height: 260px;
      }

      animation: loader-text 1s alternate infinite;
    }
  }
}

// 로딩 스피너 애니메이션
@-webkit-keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@-moz-keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

// 로딩 텍스트 애니메이션
@-webkit-keyframes loader-text {
  0% {
    text-shadow: 0px 0px 5px #fff;
  }

  100% {
    text-shadow: 0px 0px 20px #fff;
  }
}

@-moz-keyframes loader-text {
  0% {
    text-shadow: 0px 0px 5px #fff;
  }

  100% {
    text-shadow: 0px 0px 20px #fff;
  }
}

@keyframes loader-text {
  0% {
    text-shadow: 0px 0px 5px #fff;
  }

  100% {
    text-shadow: 0px 0px 20px #fff;
  }
}

// load 트랜지션
.load-enter-active, .load-leave-active {
  transition: 1s;
}

.load-enter, .load-leave-to {
  transform: translateY(-100%);
}

</style>

<template>
  <div class="home view">
    <div class="gradient-area">
      <div class="main-title-area">Hello, world!</div>
      <gradient/>
    </div>
    <div class="content-wrap">
      <div class="content view">
        <div class="about slide-right-left">
          <div class="content-title">About me</div>
          <div class="profile-image">
            <img src="@/assets/profile.png">
          </div>
          <ul class="my-information">
            <li>
              <b>이근혁</b>
            </li>
            <br>
            <li class="clickable" @click="mail">
              <font-awesome-icon :icon="['far', 'envelope']"/> lghlove0509@naver.com
            </li>
            <li class="clickable" @click="openUrl('https://github.com/leegeunhyeok')">
              <font-awesome-icon :icon="['fab', 'github']"/> Leegeunhyeok
            </li>
          </ul>
          <div class="my-detail-info">
            Sample
          </div>
        </div>
      </div>
      <div class="content">
        <div class="skills">
          <div class="content-title">Skills</div>
          sample
        </div>
      </div>
      <div class="content">
        <div class="projects">
          <div class="content-title">Projects</div>
          sample
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gradient from '@/components/Gradient'

export default {
  name: 'home',
  components: {
    Gradient
  },
  mounted () {
    // 마운트 이후 스크롤 리스너 등록
    document.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy () {
    // 컴포넌트 파괴 전 등록했던 리스너 제거
    document.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler () {
      // 스크롤 위치
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop

      // 모든 .content 엘리먼트
      const els = document.getElementsByClassName('content')

      for (let i = 0; i < els.length; i++) {
        // content의 top 위치
        let top = els[i].getBoundingClientRect().top

        // 해당 content의 위치가 스크린 위치의 세로 80% 위치인 경우 and
        // view 클래스가 없는 경우 슬라이드 애니메이션 적용
        if (top <= screen.height * 0.8 + scrollOffset && !els[i].classList.contains('view')) {
          els[i].classList.add('view')
          if (i % 2 === 0) {
            els[i].children[0].classList.add('slide-right-left')
          } else {
            els[i].children[0].classList.add('slide-left-right')
          }
        }
      }
    },
    openUrl (url) {
      window.open(url)
    },
    mail () {
      window.open('mailto:lghlove0509@naver.com')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.home {
  position: relative;
}

.main-title-area {
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 27.5rem);
  -webkit-transform: translate(-50%, 27.5rem);
  -moz-transform: translate(-50%, 27.5rem);
  color: #fff;
  font-family: 'Comfortaa', 'Avenir', sans-serif, Tahoma;
  font-size: 1.8rem;

  @media only screen and (min-width: 321px) {
    top: 10.3125rem;
  }

  @media only screen and (min-width: 768px) {
    top: 12.1875rem;
  }

  @media only screen and (min-width : 1224px) {
    top: 14.6875rem;
  }

  animation: slide-up 1s ease forwards;
  -webkit-animation: slide-up 1s ease forwards;
  -moz-animation: slide-up 1s ease forwards;
}

@-webkit-keyframes slide-up {
  100% {
    -webkit-transform: translate(-50%, 0);
  }
}

@-moz-keyframes slide-up {
  100% {
    -moz-transform: translate(-50%, 0);
  }
}

@keyframes slide-up {
  100% {
    transform: translate(-50%, 0);
  }
}

.content-wrap {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  z-index: 5;
  margin-bottom: 100px;
  transition: margin-top .3s;

  @media only screen and (min-width: 321px) {
    margin-top: 300px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 360px;
  }

  @media only screen  and (min-width : 1224px) {
    margin-top: 440px;
  }

  .content {
    font-family: 'NanumSquareRound', 고딕;
    padding: 10px;
    background-color: #fff;
    overflow-x: hidden;

    .content-title {

      @media only screen and (min-width: 321px) {
        font-size: 1.5rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: 1.7rem;
      }

      @media only screen  and (min-width : 1224px) {
        font-size: 1.8rem;
      }

      font-weight: bold;
      font-family: 'Comfortaa', 'Avenir', sans-serif, Tahoma;
      color: #2c3e50;
      transition: $font-transition;
    }

    .about {
      opacity: 0;
      height: 400px;

      .profile-image {
        margin: 25px 0;

        img {
          border-radius: 50%;
          border: 5px solid #fff;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, .5);
        }
      }

      .my-information {
        display: inline-block;
        padding: 0;

        li {
          cursor: default;
          list-style: none;
          line-height: 150%;

          &.clickable {
            cursor: pointer;
            transition: .3s;

            &:hover {
              color: dodgerblue;
            }
          }
        }

        li:nth-child(1) {
          font-size: 1.2rem;
        }
      }

      -webkit-animation: slide-right-left 1s 1.25s ease forwards;
      -moz-animation: slide-right-left 1s 1.25s ease forwards;
      animation: slide-right-left 1s 1.25s ease forwards;
    }

    .skills {
      opacity: 0;
      height: 400px;
    }

    .projects {
      opacity: 0;
      height: 400px;
    }
  }
}

.slide-right-left {
  -webkit-animation: slide-right-left 1s ease forwards;
  -moz-animation: slide-right-left 1s ease forwards;
  animation: slide-right-left 1s ease forwards;
}

.slide-left-right {
  -webkit-animation: slide-left-right 1s ease forwards;
  -moz-animation: slide-left-right 1s ease forwards;
  animation: slide-left-right 1s ease forwards;
}

@keyframes slide-right-left {
  0% {
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes slide-left-right {
  0% {
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

</style>

<template>
  <div class="home view">
    <div class="gradient-area">
      <div class="main-title-area">Hello, world!</div>
      <gradient/>
    </div>
    <div class="content-wrap">
      <div class="content view">
        <div class="about slide-right-left">
          <h1 class="content-title">About me</h1>
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
            <div class="info-item red">
              <font-awesome-icon :icon="['far', 'heart']"/>
              <br>
              <b>Motto</b>
              <p>
                <b>"항상 포기하지 말자"</b>라는 좌우명을 가지고 있습니다. 어떤 일이던 어려움은 항상 있기 마련이죠.
                어려움을 극복하면 스스로에게 큰 보상이 되기 때문에 열정을 잃지 않고 열심히 도전하고 있습니다.
              </p>
            </div>
            <div class="info-item yellow">
              <font-awesome-icon :icon="['fas', 'desktop']"/>
              <br>
              <b>Programming</b>
              <p>
                중학교 때 처음 프로그래밍을 접한 이후로 C, Java, Python 등 다양한 언어를 접하고 배워왔습니다.
                알고리즘을 통해 생각하는 방법을 배웠고, 새로운 기술에 대해 관심이 많습니다.
              </p>
            </div>
            <div class="info-item green">
              <font-awesome-icon :icon="['fas', 'globe']"/>
              <br>
              <b>Web</b>
              <p>
                HTML, CSS, Javascript를 사용한 기본적인 웹 개발을 배우며 웹 분야에 많은 관심이 생겼습니다.
                모바일 환경과 데스크탑 환경을 넘나들기 위해 반응형 웹 디자인을 선호하는 편입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="skills">
          <h1 class="content-title">Skills</h1>
          <div class="skill-content">
            <div class="skill-chart">
              <div class="chart-line" v-for="(skill, i) of skills" :key="i">
                <div class="chart-name">{{ skill.name }}</div>
                <div class="chart-line-color" :class="skill.color" :style="'width:' + skill.value + '%'"></div>
                <div class="chart-point" :class="skill.color" :style="'top: -5px; left:' + skill.value + '%'"></div>
              </div>
            </div>
            <div class="skill-detail">
              <Tab :tabs="tabs" @tabChange="tabChange"/>
              <transition name="fade" mode="out-in">
                <div class="tab-item" :key="0" v-if="activeTab === 0">
                  <h2>Javascript</h2>
                  <p style="line-height: 150%">
                    웹 개발을 배우며 함께 익힌 자바스크립트 입니다.
                    현재 기술의 발전으로 웹 브라우저 뿐만 아니라 <b class="node-js">Node.js</b> 플랫폼에서도
                    자바스크립트를 사용하여 개발할 수 있을만큼 강력한 언어가 되었습니다.
                    <b class="node-js">Node.js</b> 웹 서버를 구축하고, DB를 연동하는 등 기본적인 웹서버를 구축할 수 있습니다.
                    또한 <b class="vue-js">Vue.js</b> 프레임워크를 사용하여 SPA 웹 페이지를 개발할 수 있습니다.
                  </p>
                  <h3>개발 능력</h3>
                  <p>
                    <ul class="list">
                      <li>
                        <font-awesome-icon :icon="['fab', 'js']" class="javascript"/> 
                        기본 개념 (호이스팅, 클로저 등), ES6 문법
                      </li>
                      <li>
                        <font-awesome-icon :icon="['fab', 'node-js']" class="node-js"/> 
                        Express 웹 서버, Rest API 서버, 웹 크롤러
                      </li>
                      <li>
                        <font-awesome-icon :icon="['fab', 'vuejs']" class="vue-js"/> 
                        Vue.js 반응형 SPA (Single Page Application)
                      </li>
                    </ul>
                  </p>
                </div>
                <div class="tab-item" :key="1" v-if="activeTab === 1">
                  <h2>Python</h2>
                  <p>
                    파이썬의 심플함을 보고 접하게 된 언어입니다.
                    많은 경험이 있는 언어는 아니지만, 기본적인 프로그램 정도는 작성할 수 있는 수준입니다.
                    인공지능 분야가 궁금해서 Numpy, Tensorflow를 사용하여 간단한 손글씨 인식 프로그램도 작성 해 보았습니다.
                    주로 간단한 업무 자동화나 웹 크롤링 개발에 사용하고 있습니다.
                  </p>
                  <h3>개발 능력</h3>
                  <p>
                    <ul class="list">
                      <li>
                        <font-awesome-icon :icon="['fab', 'python']" class="python"/> 
                        간단한 자동화 프로그램, 웹 크롤러
                      </li>
                    </ul>
                  </p>
                </div>
                <div class="tab-item" :key="2" v-if="activeTab === 2">
                  <h2>Java</h2>
                  <p>
                    C언어 독학 후 배운 첫 객체지향 언어입니다.
                    객체지향에 대한 개념을 익히는 계기가 되었고, 다양한 개인 프로젝트도 진행했습니다.
                    되돌아보면 별 것 아니지만 지금까지 성장하게 된 중요한 발판이었던 것 같습니다.
                  </p>
                  <h3>개발 능력</h3>
                  <p>
                    <ul class="list">
                      <li>
                        <font-awesome-icon :icon="['fab', 'java']" class="java"/> 
                        Swing 또는 JavaFX를 이용한 GUI 프로그램, 멀티 쓰레드 제어
                      </li>
                    </ul>
                  </p>
                </div>
                <div class="tab-item" :key="3" v-if="activeTab === 3">
                  <h2>C/C++</h2>
                  <p>
                    처음 프로그래밍을 접할 때 배운 언어입니다.
                    변수, 반복문, 포인터 등 중요한 개념을 탄탄히 익혔습니다. 이를 계기로 이후에 프로그래밍 언어를 배울 때
                    빠르게 습득할 수 있었으며 컴퓨터에 대한 이해를 더 쉽게 할 수 있게 되었습니다.
                    또한 알고리즘 문제 풀이는 주로 C언어를 사용하며 종종 사용하고 있습니다.
                  </p>
                  <h3>개발 능력</h3>
                  <p>
                    <ul class="list">
                      <li>알고리즘 문제 풀이</li>
                      <li>CUI 콘솔 게임 개발</li>
                    </ul>
                  </p>
                </div>
                <div class="tab-item" :key="4" v-if="activeTab === 4">
                  <h2>SQL</h2>
                  <p>
                    MySQL (MariaDB), Oracle 등 RDBMS를 접하며 익혀왔습니다.
                    실제 개발 환경에선 데이터베이스가 없으면 안 될 만큼 중요한 핵심 요소 중 하나라는 것을 느껴,
                    다양한 개인 프로젝트를 진행하며 Join, SubQuery 등 기본 문법을 확실하게 다졌습니다.
                  </p>
                  <h3>사용 경험</h3>
                  <p>
                    <ul class="list">
                      <li>MySQL</li>
                      <li>MariaDB</li>
                      <li>Oracle</li>
                      <li>MongoDB (NoSQL)</li>
                    </ul>
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="projects">
          <h1 class="content-title">Projects</h1>
          sample
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gradient from '@/components/Gradient'
import Tab from '@/components/Tab'

export default {
  name: 'home',
  components: {
    Gradient,
    Tab
  },
  data () {
    return {
      skills: [
        { name: 'Javascript', value: 80, color: 'red' },
        { name: 'Python', value: 50, color: 'green' },
        { name: 'Java', value: 60, color: 'orange' },
        { name: 'C/C++', value: 40, color: 'blue' },
        { name: 'SQL', value: 55, color: 'yellow' }
      ],
      tabs: [
        { name: 'Javascript', target: 0 },
        { name: 'Python', target: 1 },
        { name: 'Java', target: 2 },
        { name: 'C/C++', target: 3 },
        { name: 'SQL', target: 4 }
      ],
      activeTab: 0
    }
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
      // 모든 .content 엘리먼트
      const els = document.getElementsByClassName('content')

      for (let i = 0; i < els.length; i++) {
        // content의 top 위치
        let top = els[i].getBoundingClientRect().top + 200

        // 해당 content의 위치가 스크린 위치의 세로 80% 위치인 경우 and
        // view 클래스가 없는 경우 슬라이드 애니메이션 적용
        if (top - screen.height <= 0 && !els[i].classList.contains('view')) {
          els[i].classList.add('view')
          if (i % 2 === 0) {
            els[i].children[0].classList.add('slide-right-left')
          } else {
            els[i].children[0].classList.add('slide-left-right')
          }
        }
      }
    },
    tabChange (target) {
      this.activeTab = target
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
@import "@/assets/styles/common.scss";

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

  @media only screen and (min-width: 320px) {
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

  @media only screen and (min-width: 320px) {
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
    padding: 25px 10px;
    background-color: #fff;
    overflow-x: hidden;

    .content-title {

      @media only screen and (min-width: 320px) {
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
      margin: 0;
      transition: $font-transition;
    }

    .about {
      opacity: 0;

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

      .my-detail-info {
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin-top: 25px;
        
        @media only screen and (min-width: 320px) {
          flex-direction: column;
          padding: 0 5%;
        }

        @media only screen and (min-width: 768px) {
          flex-direction: row;
          padding: 0 5%;
        }

        @media only screen  and (min-width : 1224px) {
          flex-direction: row;
          padding: 0 10%;
        }

        .info-item {
          width: 100%;

          svg { 
            padding: 10px;
            font-size: 2rem;
            width: 4rem;
            height: 4rem;
            line-height: 4.5rem;
            border-radius: 10px;
            border: 3px solid #ddd;
            transition: .3s;
          }

          b {
            margin: 10px 0;
            transition: .3s;
          }

          &.red:hover {
            color: #e73c7e;
          }

          &.yellow:hover {
            color: #e6dd5f;
          }

          &.green:hover {
            color: #23d5ab;
          }

          p {
            color: #888;
            line-height: 150%;

            @media only screen and (min-width: 320px) {
              padding: 5%;
            }

            @media only screen and (min-width: 768px) {
              padding: 0 15%;
            }

            @media only screen  and (min-width : 1224px) {
              padding: 0 22%;
            }
          }
        }
      }

      -webkit-animation: slide-right-left 1s 1.25s ease forwards;
      -moz-animation: slide-right-left 1s 1.25s ease forwards;
      animation: slide-right-left 1s 1.25s ease forwards;
    }

    .skills {
      height: auto;
      opacity: 0;

      .skill-content {
        display: flex;
        justify-content: space-around;
        margin: 25px 0;

        @media only screen and (min-width: 320px) {
          flex-direction: column;
        }

        @media only screen and (min-width: 768px) {
          flex-direction: row;
          padding: 0 10%;
        }

        .skill-chart {
          box-sizing: border-box;
          padding: 10px;
          padding-right: 35px;
          border: 3px solid #eee;
          border-radius: 16px;
          
          @media only screen and (min-width: 320px) {
            width: 100%;
          }

          @media only screen and (min-width: 768px) {
            width: 50%;
          }

          .chart-line {
            float: right;
            position: relative;
            width: 80%;
            height: 5px;
            background-color: #ccc;
            margin: 20px 0;

            .chart-name {
              position: absolute;
              left: -20%;
              top: -6px;
              color: #888;
              font-weight: bold;
            }

            .chart-line-color {
              position: absolute;
              height: 5px;
              left: 0;
              top: 0;

              &.red {
                background-color: #e73c7e;
              }

              &.orange {
                background-color: #ee7752;
              }

              &.yellow {
                background-color: #e6dd5f;
              }

              &.green {
                background-color: #23d5ab;
              }

              &.blue {
                background-color: #2276d6;
              }

              &.purple {
                background-color: #6b4dac;
              }
            }

            .chart-point {
              position: absolute;
              width: 16px;
              height: 16px;
              border-radius: 50%;

              &.red {
                background-color: #e73c7e;
              }

              &.orange {
                background-color: #ee7752;
              }

              &.yellow {
                background-color: #e6dd5f;
              }

              &.green {
                background-color: #23d5ab;
              }

              &.blue {
                background-color: #2276d6;
              }

              &.purple {
                background-color: #6b4dac;
              }
            }
          }
        }

        .skill-detail {
          max-height: 210px;

          @media only screen and (min-width: 320px) {
            width: 100%;
            margin-top: 25px;
          }

          @media only screen and (min-width: 768px) {
            width: 50%;
            margin-top: 0px;
          }

          .tab-item {
            width: 80%;
            padding: 10px;
            box-sizing: bolder-box;
            border: 3px solid #eee;
            border-radius: 10px;
            max-height: 180px;
            margin: auto;
            overflow-y: auto;

            p {
              color: #888;
            }
          }
        }
      }
    }

    .projects {
      opacity: 0;
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



.list {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

</style>

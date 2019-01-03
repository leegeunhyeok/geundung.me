<template>
  <div class="home view">
    <div class="gradient-area">
      <div class="main-title-area">
        {{ HelloWorld }}
        <div class="cursor"></div>
      </div>
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
                모바일 환경과 데스크탑 환경을 넘나들기 위해 <b>반응형 웹 디자인</b>을 선호하는 편입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="ability">
          <div class="ability-content">
            <Tab :tabs="tabs" @tabChange="tabChange"/>
            <transition name="fade-height" mode="out-in">
              <div class="tab-item" :key="0" v-if="activeTab === 0">
                <h2>Language</h2>
                <div class="ability-chart">
                  <div class="chart-line" v-for="(language, i) of language" :key="i">
                    <div class="chart-name">{{ language.name }}</div>
                    <div class="chart-line-color" :class="language.color" :style="'width:' + language.value + '%'"></div>
                    <div class="chart-point" :class="language.color" :style="'top: -5px; left:' + language.value + '%'"></div>
                  </div>
                </div>
              </div>
              <div class="tab-item" :key="1" v-if="activeTab === 1">
                <h2>Development</h2>
                <div class="ability-chart">
                  <div class="chart-line" v-for="(development, i) of development" :key="i">
                    <div class="chart-name">{{ development.name }}</div>
                    <div class="chart-line-color" :class="development.color" :style="'width:' + development.value + '%'"></div>
                    <div class="chart-point" :class="development.color" :style="'top: -5px; left:' + development.value + '%'"></div>
                  </div>
                </div>
              </div>
              <div class="tab-item" :key="2" v-if="activeTab === 2">
                <h2>Skills</h2>
                <div class="ability-chart">
                  <div class="chart-line" v-for="(skill, i) of skills" :key="i">
                    <div class="chart-name">{{ skill.name }}</div>
                    <div class="chart-line-color" :class="skill.color" :style="'width:' + skill.value + '%'"></div>
                    <div class="chart-point" :class="skill.color" :style="'top: -5px; left:' + skill.value + '%'"></div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="projects">
          <h1 class="content-title">Projects</h1>
          <div class="projects-wrap">
            <ProjectItem v-for="(project, i) of projects" :key="i" :data="project" :index="i + 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectModel from '@/model/project'

import Gradient from '@/components/Gradient'
import Tab from '@/components/Tab'
import ProjectItem from '@/components/ProjectItem'

export default {
  name: 'home',
  components: {
    Gradient,
    Tab,
    ProjectItem
  },
  data () {
    return {
      write: false,
      HelloWorld: '',
      HelloWorldList: [
        'Hello, World!',
        'Mobile & Desktop support',
        'Responsive design!',
        'Vue.js + Vuex + Vue-Router'
      ],
      HelloWorldIndex: 0,
      language: [
        { name: 'Javascript', value: 80, color: 'red' },
        { name: 'Python', value: 55, color: 'green' },
        { name: 'Java', value: 65, color: 'orange' },
        { name: 'C/C++', value: 45, color: 'blue' },
        { name: 'SQL', value: 50, color: 'yellow' }
      ],
      development: [
        { name: 'Vue.js', value: 85, color: 'vue' },
        { name: 'Node.js', value: 80, color: 'node' },
        { name: 'Electron Web App', value: 60, color: 'electron' },
        { name: 'Reponsive Design', value: 65, color: 'red' }
      ],
      skills: [
        { name: 'Git', value: 80, color: 'black' },
        { name: 'Docker', value: 40, color: 'blue' },
        { name: 'Linux', value: 50, color: 'orange' },
        { name: 'Docs', value: 60, color: 'purple' },
        { name: 'Algorithm', value: 50, color: 'green' }
      ],
      tabs: [
        { name: 'Language', target: 0 },
        { name: 'Development', target: 1 },
        { name: 'Skills', target: 2 }
      ],
      activeTab: 0,
      abilityTitle: 'Skills',
      projects: ProjectModel
    }
  },
  created () {
    this.HelloWorld = this.HelloWorldList[this.HelloWorldIndex++]
  },
  mounted () {
    // 마운트 이후 스크롤 리스너 등록
    document.addEventListener('scroll', this.scrollHandler)

    // 타이틀 글자 타이핑
    setTimeout(this.titleType, 2000)
  },
  beforeDestroy () {
    // 컴포넌트 파괴 전 등록했던 리스너 제거
    document.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    titleType () {
      let str = this.HelloWorld
      if (this.write) {
        if (str.length !== this.HelloWorldList[this.HelloWorldIndex].length) {
          this.HelloWorld = this.HelloWorldList[this.HelloWorldIndex].substring(0, str.length + 1)
          setTimeout(this.titleType, 150)
        } else {
          this.HelloWorldIndex++
          this.write = false
          setTimeout(this.titleType, 750)
        }
      } else {
        if (str.length === 0) {
          if (this.HelloWorldList.length === this.HelloWorldIndex) {
            this.HelloWorldIndex = 0
          }
          this.write = true
        } else {
          this.HelloWorld = str.substring(0, str.length - 1)
        }
        setTimeout(this.titleType, 150)
      }
    },
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

  @media only screen and (min-width: 320px) {
    top: 10.3125rem;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    top: 12.1875rem;
    font-size: 1.8rem;
  }

  @media only screen and (min-width : 1224px) {
    top: 14.6875rem;
    font-size: 1.8rem;
  }

  .cursor {
    display: inline-block;
    position: absolute;
    top: .2rem;
    width: 3px;
    height: 1.6rem;
    margin-left: 4px;
    background-color: #fff;
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
    overflow: hidden;

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
            color: #f7b438;
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

    .ability {
      height: auto;
      opacity: 0;

      .ability-content {
        margin: 25px 0;

        @media only screen and (min-width: 320px) {
          padding: 0;
        }

        @media only screen and (min-width: 768px) {
          padding: 0 10%;
        }

        .ability-chart {
          display: inline-block;
          box-sizing: border-box;

          @media only screen and (min-width: 320px), (min-width: 768px) {
            padding: 10px 25px;
            padding-top: 25px;
          }

          @media only screen and (min-width: 1224px) {
            padding: 10px;
            padding-right: 35px;
          }

          border: 3px solid #eee;
          border-radius: 16px;
          width: 100%;

          .chart-line {
            float: right;
            position: relative;
            height: 5px;
            background-color: #ccc;
            margin: 20px 0;

            @media only screen and (min-width: 320px), (min-width: 768px) {
              width: 100%;
            }

            @media only screen and (min-width: 1224px) {
              width: 80%;
            }

            .chart-name {
              position: absolute;
              color: #888;
              font-weight: bold;

              @media only screen and (min-width: 320px), (min-width: 768px) {
                left: 0;
                top: -20px;
              }

              @media only screen and (min-width: 1224px) {
                left: -20%;
                top: -6px;
              }
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

              &.black {
                background-color: $matte-black;
              }

              &.vue {
                background-color: #41b883;
              }

              &.node {
                background-color: #5f9b5d;
              }

              &.electron {
                background-color: #9feaf9;
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

              &.black {
                background-color: $matte-black;
              }

              &.vue {
                background-color: #41b883;
              }

              &.node {
                background-color: #5f9b5d;
              }

              &.electron {
                background-color: #9feaf9;
              }
            }
          }
        }

        .ability-detail {
          margin: auto;

          @media only screen and (min-width: 320px) {
            width: 100%;
            margin-top: 25px;
          }

          @media only screen and (min-width: 768px) {
            width: 70%;
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

      .projects-wrap {
        display: flex;
        flex-wrap: wrap;
        
        @media only screen and (min-width: 320px) {
          flex-direction: column;
        }

        @media only screen and (min-width: 768px), (min-width : 1224px) {
          flex-direction: row;
          justify-content: space-around;
        }
      }
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

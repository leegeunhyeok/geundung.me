<template>
  <div class="tab-menu">
    <div v-for="(tab, i) in tabs" :key="i" @click="$emit('tabChange', tab.target)">{{ tab.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: ['tabs']
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";

.tab-menu {
  font-family: 'NanumSquareRound';
  margin-bottom: 5px;

  div {
    cursor: pointer;
    display: inline-block;
    padding: 5px 10px;
    border: 3px solid #ccc;
    border-radius: 5px;
    margin: 5px 5px;
    transition: .3s;

    &:hover {
      background-color: #ddd;
    }
  }
}
</style>

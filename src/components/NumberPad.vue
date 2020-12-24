<template>
  <div class="numberPad">
    <button @click="inputContent">1</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">3</button>
    <button>删除</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">6</button>
    <button>清空</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">9</button>
    <button class="ok">ok</button>
    <button class="zero" @click="inputContent">0</button>
    <button @click="inputContent">.</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  // output:string = '';
  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent
    console.log(input);

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.numberPad {
  @extend %clearFix;

  > button {
    width: 25%;
    height: 10.4vh;
    float: left;
    background: #FFF;
    border: 1px solid #F8F8F8;

    &.ok {
      height: 10.4vh*2;
      float: right;
    }

    &.zero {
      width: 50%;
    }
  }
}
</style>

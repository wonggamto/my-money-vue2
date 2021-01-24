<template>
  <div class="numberPad">
    <button @click="inputContent">1</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">3</button>
    <button @click="remove">删除</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">6</button>
    <button @click="clear">清空</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">9</button>
    <button @click="ok" class="ok">ok</button>
    <button class="zero" @click="inputContent">0</button>
    <button @click="inputContent">.</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop() readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const value = button.textContent as string;
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0213456789'.indexOf(value) >= 0) {
        this.output = value;
        this.$emit('update:value', this.output);
      } else {
        this.output += value;
        this.$emit('update:value', this.output);
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && value === '.') {
      return;
    }
    this.output += value;
    this.$emit('update:value', this.output);
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.substring(0, this.output.length - 1);
    }
    this.$emit('update:value', this.output);
  }

  clear() {
    this.output = '0';
    this.$emit('update:value', this.output);
  }

  ok() {
    const number = parseFloat(this.output);
    this.$emit('update:value', number);
    this.$emit('submit', number);
    this.output = '0';
    this.$emit('update:value', this.output);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.numberPad {
  @extend %clearFix;
  $button-height: 10vh;

  > button {
    width: 25%;
    height: $button-height;
    float: left;
    background: #FFF;
    border: 1px solid #F8F8F8;

    &.ok {
      height: $button-height*2;
      float: right;
    }

    &.zero {
      width: 50%;
    }
  }

  > button:active {
    background: #F4F4F4;
  }

}
</style>

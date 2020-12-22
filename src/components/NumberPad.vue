<template>
  <div class="numberPad">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>删除</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>清空</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="ok">ok</button>
    <button class="zero">0</button>
    <button>.</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NumberPad'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
.numberPad{
  @extend %clearFix;
  > button{
    width: 25%;
    height: 10.4vh;
    float: left;
    background: #FFF;
    border:1px solid #F8F8F8;
    &.ok{
      height: 10.4vh*2;
      float: right;
    }
    &.zero{
      width: 50%;
    }
  }
}
</style>

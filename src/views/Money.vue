<template>
  <Layout>
    <div class="topBar">
      <Icon name="back"/>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
      <Icon name=""/>
    </div>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button>
          <Icon name="add" class="add"/>
        </button>
      </div>
    </div>
    <div class="output">
      <Icon name="rmb"/>
      <span>100</span>
    </div>
    <div class="date">
      <Icon name="calendar"/>
      <span>2020.12.22</span>
    </div>
    <div>
      <label class="notes">
        <span class="name">
          <Icon name="note"/>
        </span>
        <input type="text" placeholder="输入备注">
      </label>
    </div>
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
  </Layout>
</template>
<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Money',
  components: {Icon, Layout},
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
.tags {
  > .current {
    display: flex;
    justify-content: space-between;
    margin: 24px;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      width: 64px;
      border-radius: 30%;
      background: #F5F5F5;

    }
  }
}

.new {
  > button {
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    border-radius: 30%;
    margin: 24px;
    background: #F5F5F5;

    > .add {
      width: 68px;
      height: 68px;
    }
  }
}

.topBar {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 24px;
  background: #464699;
  color: #FFF;
  font-size: 18px;

  > .types {
    display: flex;
    justify-content: center;
    background: #5A5AA3;
    width: 168px;
    margin: 8px 56px;
    border-radius: 48px;
    padding: 4px 0;

    > li {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 4px;

      &.selected {
        background: #FFF;
        border-radius: 16px;
        color: black;
      }
    }
  }
}

.notes {
  background: #FFF;
  font-size: 18px;
  padding-left: 18px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  input {
    padding: 4px 16px 4px 0;
    flex-grow: 1;
    background: transparent;
    border: none;
  }

}

.output {
  font-size: 24px;
  display: flex;
  align-items: center;
  background: #F4F6F9;
  font-family: Consolas, monospace;
  padding: 8px 16px;
  justify-content: space-between;

  > span {
    text-align: right;
  }
}

.date{
  background: #FFF;
  font-size: 18px;
  display: flex;
  padding-left: 18px;
  align-items: center;
  > span{
    padding-left: 16px;
  }
}

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


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
      100
    </div>
    <div class="date">
      2020.12.17
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text">
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
      <button>ok</button>
      <button>0</button>
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
.tags {
  > .current {
    display: flex;
    justify-content: space-between;
    margin: 24px;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      //border: 1px solid red;
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
    margin:24px ;
    background: #F5F5F5;
    > .add{
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
  padding: 8px 24px;
  background: #464699;
  color:black;
  font-size: 18px;
  >.types {
    display: flex;
    justify-content: center;
    background: #5A5AA3;
    width: 168px;
    margin:8px 56px;
    border-radius: 48px;
    padding: 4px 0;
    > li {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 4px;
      border-radius: 16px;
      background: #FFF;
      //border: 1px solid green;
    }
  }
}
</style>

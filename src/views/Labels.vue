<template>
  <Layout>
    <div class="topBar">
      <Icon name="back" class="back"/>
      <Icon name="logo" class="logo"/>
      <Icon/>
    </div>
    <ol class="tags">
      <li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li>
      <li>
        <Icon name="add" class="add"/>
      </li>

    </ol>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Labels',
  components: {Layout, Icon}
};
</script>

<style lang="scss" scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  background: #464699;
  align-items: center;
  height: 68px;

  > .logo {
    width: 120px;
    height: 120px;
  }

  > .back {
    margin-left: 16px;
  }
}

.tags {
  display: flex;
  margin: 6px 0;
  flex-wrap: wrap;
  overflow: auto;
  flex-grow: 1;
  padding-left: 12px;

  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    border-radius: 30%;
    background: #F5F5F5;
    margin: 6px 12px;
    flex-direction: column;
    > .add{
      width: 48px;
      height: 48px;
    }
  }
}


</style>

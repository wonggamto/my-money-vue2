<template>
  <Layout>
    <div class="wrapper">
      <Icon name="back" class="back"/>
      <Icon name="logo" class="logo"/>
      <Icon/>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'TopBar',
  components: {Icon, Layout}
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid red;
  background: #464699;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  > .icon{
    width: 33.333333%;
    > .back{
    }
  }
  //> .logo{
  //  width: 96px;
  //}
  //> .back{
  //  padding-left: 12px;
  //}
}
</style>

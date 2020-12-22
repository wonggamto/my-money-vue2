<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <OutPut/>
    <Date/>
    <Notes/>
    <Tags/>
    <div class="topBar">
      <Icon name="back"/>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
      <Icon name=""/>
    </div>
  </Layout>
</template>
<script lang="ts">
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/NumberPad.vue';
import OutPut from '@/components/OutPut.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
import Date from '@/components/Date.vue';
export default {
  name: 'Money',
  components: {Tags, Notes, OutPut, NumberPad, Layout,Date},
};
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
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

</style>


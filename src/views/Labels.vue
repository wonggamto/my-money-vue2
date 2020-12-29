<template>
  <Layout>
    <div class="topBar">
      <Icon/>
      <Icon name="logo" class="logo"/>
      <Icon/>
    </div>
    <ol class="tags">
      <li v-for="tag in tags " :key="tag"><span>{{ tag }}</span></li>
      <li @click="createTag">
        <Icon name="add" class="add"/>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {tagListModel} from '@/models/tagListModel';


tagListModel.fetch();
@Component({
  components: {
    Layout, Icon
  }
})
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复，请重新输入')
      }else if(message==='success'){
        window.alert('标签添加成功')
      }
    }
  }
}
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

    > .add {
      width: 48px;
      height: 48px;
    }
  }
}


</style>

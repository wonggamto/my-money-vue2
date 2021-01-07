<template>
  <Layout>
    <div class="topBar">
      <Icon/>
      <Icon name="logo" class="logo"/>
      <Icon/>
    </div>
    <div class="tags">
      <router-link :to="`/labels/edit/${tag.id}`"
                   v-for="tag in tags " :key="tag.id"
                   class="tag-link">
        <span>{{ tag.name }}</span></router-link>
      <div @click="createTag"
           class="tag-link">
        <Icon name="add" class="add"/>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {tagListModel} from '@/models/tagListModel';


@Component({
  components: {
    Layout, Icon
  }
})
export default class Labels extends Vue {
  tags = window.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复，请重新输入');
      } else if (message === 'success') {
        window.alert('标签添加成功');
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

  > .tag-link {
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

<template>
  <Layout>
    <div class="topBar">
      <Icon name="back" class="back"/>
      <Icon name="logo" class="logo"/>
      <Icon/>
    </div>
    <Notes icon-name="name" placeholder="请输入标签名" field-name="修改标签"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Layout from '../../money-vue2-2/src/components/Layout.vue';
import {tagListModel} from '@/models/tagListModel';
import Icon from '@/components/Icon.vue';
import Nav from '@/components/Nav.vue';
import Notes from '@/components/Notes.vue';

@Component({
  components: {Notes, Layout, Icon, Nav}
})
export default class EditLabel extends Vue {
  @Prop() value!: string;
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
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

  > .back {
    margin-left: 18px;
  }
}

.edit {
  background: #FFF;
  font-size: 18px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  max-height: 100%;

  > .name {
    padding-right: 16px;
  }

  input {
    padding: 14px 16px 14px 0;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
  button{
    width: 64px;
    height: 64px;
  }
}
</style>

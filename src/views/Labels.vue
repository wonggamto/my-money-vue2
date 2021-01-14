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


@Component({
  components: {
    Layout, Icon
  },
  computed: {
    tags() {
      return this.$store.state.tagList;
    }
  }
})
export default class Labels extends Vue {
  created() {
    this.$store.commit('fetchTags');
  }

  createTag() {
    const tagName = window.prompt('请输入标签名');
    if (!tagName) {return window.alert('标签名不能为空！');}
    this.$store.commit('createTag', tagName);
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

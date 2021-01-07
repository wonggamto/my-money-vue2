<template>
  <Layout>
    <div class="topBar">
      <Icon name="back" class="back" @click="goBack"/>
      <Icon name="logo" class="logo"/>
      <Icon/>
    </div>
    <div class="formWrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                icon-name="name" placeholder="请输入标签名" field-name="修改标签"/>
      <div class="removeTag">
        <button @click="remove">
          <Icon name="remove"/>
        </button>
      </div>
    </div>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Layout from '../../money-vue2-2/src/components/Layout.vue';
import {tagListModel} from '@/models/tagListModel';
import Icon from '@/components/Icon.vue';
import Nav from '@/components/Nav.vue';
import FormItem from '@/components/FormItem.vue';

@Component({
  components: {FormItem, Layout, Icon, Nav}
})
export default class EditLabel extends Vue {
  @Prop() value!: string;
  tag?: Tag = undefined;

  created() {
    this.tag = window.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (tagListModel.remove(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert('删除失败');
      }
    }
  }

  goBack() {
    this.$router.back();
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

.formWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .removeTag {
    display: flex;
    justify-content: center;

    > button {
      width: 64px;
      height: 64px;
      border-radius: 30%;
      margin-top: 24px;
    }
  }
}


</style>

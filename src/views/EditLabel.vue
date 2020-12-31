<template>
  <Layout>
    e
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from '../../money-vue2-2/src/components/Layout.vue';
import {tagListModel} from '@/models/tagListModel';

@Component({
  components: {Layout}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if(tag){
      console.log(tag);
    }else{
      this.$router.replace('/404')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

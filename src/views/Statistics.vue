<template>
  <Layout>
    <Category :value.sync="type" :data-source="categoryList"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{ type }}
      <hr>
      interval:{{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Category from '@/components/Category.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import {intervalList} from '@/constants/intervalList';
import {categoryList} from '@/constants/categoryList';

@Component({
  components: {
    Layout, Category, Tabs
  }
})
export default class Statistics extends Vue {
  type = '-';

  interval = 'day';
  categoryList = categoryList;
  intervalList = intervalList;
}
</script>

<style lang="scss" scoped>
::v-deep .interval-tabs-item{
  //border:1px solid red;
}
</style>

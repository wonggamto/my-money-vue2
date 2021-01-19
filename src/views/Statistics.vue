<template>
  <Layout>
    <Category :value.sync="type" :data-source="categoryList"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{type}}
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

@Component({
  components: {
    Layout, Category, Tabs
  }
})
export default class Statistics extends Vue {
  type = '-';
  categoryList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ];
  interval = 'day';
  intervalList = [{text: '天', value: 'day'},
    {text: '周', value: 'week'},
    {text: '月', value: 'month'}];
}
</script>

<style lang="scss" scoped>

</style>

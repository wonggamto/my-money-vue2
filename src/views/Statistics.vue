<template>
  <Layout>
    <Category :value.sync="type" :data-source="categoryList"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{ tagString(item.tags) }} </span>
            <span class="notes" >{{ item.notes }}</span>
            <span>¥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
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

  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string; items: RecordItem[] }
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style lang="scss" scoped>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  overflow:auto;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  background: white;
}
.notes{
  margin-left: 16px;
  margin-right: auto;
  color:#999;
}

</style>

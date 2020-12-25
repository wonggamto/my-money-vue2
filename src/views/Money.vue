<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onGetNumber"/>
    <OutPut :record="record.amount"/>
    <Date/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Category @update:value="onUpdateType"/>
    {{ record }}
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/NumberPad.vue';
import OutPut from '@/components/OutPut.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
import Date from '@/components/Date.vue';
import Category from '@/components/Category.vue';
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  output: string;
  type: string;
  date: string;
  amount: string;
}
@Component(
    {
      components: {
        Category, Tags, Notes,
        OutPut, NumberPad, Layout, Date
      }
    })
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {tags: [], notes: '', type: '-', amount: '0', output: '0', date: ''};
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }

  onGetNumber(value: string) {
    this.record.amount = value;
  }



}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

</style>


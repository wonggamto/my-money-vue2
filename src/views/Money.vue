<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <OutPut :record="record.amount"/>
    <GetDate @update:value="pick"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Category :value.sync="record.type"/>
    {{ recordList }}
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/NumberPad.vue';
import OutPut from '@/components/OutPut.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
import GetDate from '@/components/GetDate.vue';
import Category from '@/components/Category.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  output: string;
  type: string;
  createAt?: Date;
  amount: number;

}
@Component(
    {
      components: {
        Category, Tags, Notes,
        OutPut, NumberPad, Layout, GetDate
      }
    })
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {tags: [], notes: '', type: '-', amount: 0, output: '0'};
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }


  onGetNumber(value: string) {
    this.record.amount = parseFloat(value);
  }

  pick(value: Date) {
    this.record.createAt = value;
    console.log(this.record.createAt);
  }

  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
    // console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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


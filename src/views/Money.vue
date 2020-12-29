<template>
  <div class="layout">
    <Category :value.sync="record.type"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <OutPut :record="record.amount"/>
    <Notes @update:value="onUpdateNotes"/>
    <GetDate @update:value="pick"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </div>
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
import {recordListModel} from '@/models/recordListModel';
import {tagListModel} from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();
@Component(
    {
      components: {
        Category, Tags, Notes,
        OutPut, NumberPad, Layout, GetDate
      }
    })
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0, output: '0'
  };

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
    const record2: RecordItem = recordListModel.clone(this.record);
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }


}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

</style>


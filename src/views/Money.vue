<template>
  <div class="layout">
    <Category :data-source="categoryList" :value.sync="record.type" icon-name="back"/>
    <Tags/>
    <OutPut :record="record.amount"/>
    <FormItem @update:value="onUpdateNotes" icon-name="note"
              placeholder="请输入备注"/>
    <GetDate @update:value="pick"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/NumberPad.vue';
import OutPut from '@/components/OutPut.vue';
import FormItem from '@/components/FormItem.vue';
import Tags from '@/components/Tags.vue';
import GetDate from '@/components/GetDate.vue';
import Category from '@/components/Category.vue';
import {Component} from 'vue-property-decorator';
import {categoryList} from '@/constants/categoryList';

@Component(
    {
      components: {
        FormItem,
        Category, Tags,
        OutPut, NumberPad, Layout, GetDate
      },
    })
export default class Money extends Vue {
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0, output: '0'
  };
  categoryList = categoryList;

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onGetNumber(value: string) {
    this.record.amount = parseFloat(value);
  }

  pick(value: string) {
    this.record.createAt = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
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


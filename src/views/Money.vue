<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount"/>
    <OutPut/>
    <Date/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Category @update:value="onUpdateCategory"/>
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
@Component(
    {components: {Category, Tags, Notes,
    OutPut, NumberPad, Layout, Date}})
export default class Money extends Vue{
      tags= ['衣', '食', '住', '行'];
      onUpdateTags(value: string[]){
        console.log(value);
      }
      onUpdateNotes(value: string){
        console.log(value);
      }
      onUpdateCategory( value: string){
        console.log(value);
      }
      onUpdateAmount(value: string){
        console.log(value);
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


<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <OutPut/>
    <Date/>
    <Notes/>
    <Tags/>
    <Category/>
  </Layout>
</template>
<script lang="ts">
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/NumberPad.vue';
import OutPut from '@/components/OutPut.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
import Date from '@/components/Date.vue';
import Category from '@/components/Category.vue';
export default {
  name: 'Money',
  components: {Category, Tags, Notes, OutPut, NumberPad, Layout,Date},
};
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

</style>


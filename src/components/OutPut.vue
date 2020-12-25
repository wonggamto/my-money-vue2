<template>
  <div class="output">
    <Icon name="rmb"/>
    <span>0</span>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({components: {Icon}})
export default class OutPut extends Vue {


}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.output {
  font-size: 24px;
  display: flex;
  align-items: center;
  background: #F4F6F9;
  font-family: Consolas, monospace;
  padding: 8px 16px;
  justify-content: space-between;

  > span {
    text-align: right;
  }
}
</style>

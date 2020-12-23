<template>
  <div class="output">
    <Icon name="rmb"/>
    <span>100</span>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';

export default {
  name: 'outPut',
  components:{Icon}
};
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

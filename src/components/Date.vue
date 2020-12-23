<template>
  <div class="date">
    <Icon name="calendar"/>
    <span>2020.12.22</span>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
export default {
  name: 'Date',
  components:{Icon}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
.date {
  background: #FFF;
  font-size: 18px;
  display: flex;
  padding-left: 18px;
  align-items: center;

  > span {
    padding-left: 16px;
  }
}
</style>

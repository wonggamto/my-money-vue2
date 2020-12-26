<template>
  <div class="date">
    <Icon name="calendar"/>
    <div class="timeBlock">
      <el-date-picker
          v-model="value"
          type="datetime"
          :change="pickerOptions.onClick"
          size="mini"
          placeholder="选择日期时间">
      </el-date-picker>
        {{value}}
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'GetDate',
  components: {Icon},
  data() {
    return {
      pickerOptions: {
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
      },
      value:''
    }
  },
}
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

  > .timeBlock {
    padding-left: 14px;
  }
}
</style>

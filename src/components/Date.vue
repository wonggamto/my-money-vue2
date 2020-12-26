<template>
  <div class="date">
    <Icon name="calendar"/>
    <div class="timeBlock">
      <el-date-picker
          v-model="value"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00"
          size="mini"
          value-format="yyyy-MM-dd-HH-mm-ss">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Date',
  components: {Icon},
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value: '',
    };
  }
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

  > .timeBlock {
    padding-left: 14px;
  }
}
</style>

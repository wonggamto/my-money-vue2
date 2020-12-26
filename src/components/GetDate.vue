<template>
  <div class="date">
    <Icon name="calendar"/>
    <div class="timeBlock">
      <el-date-picker
          v-model="value"
          type="datetime"
          @change="onClick"
          size="mini"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间">
      </el-date-picker>
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
      value:''
    }
  },
  methods:{
      onClick() {
        this.$emit('update:value', this.value);

    },
  }
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

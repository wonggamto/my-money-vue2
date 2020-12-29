<template>
    <label class="notes">
        <span class="name">
          <Icon name="note"/>
        </span>
      <input type="text"
             v-model="value"
             placeholder="输入备注">
    </label>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
@Component({components: {Icon}})
export default class Notes extends Vue {
  value = '';
  @Watch('value')
  onValueChange(value: string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.notes {
  background: #FFF;
  font-size: 18px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  max-height: 100%;

  > .name {
    padding-right: 16px;
  }

  input {
    padding: 14px 16px 14px 0;
    flex-grow: 1;
    background: transparent;
    border: none;
  }

}
</style>

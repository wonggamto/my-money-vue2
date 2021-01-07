<template>
  <label class="notes">
        <span class="name">
          <Icon :name="iconName"/>
        </span>
    <input type="text"
           :value="value"
           :placeholder="placeholder"
           @input="onValueChange($event.target.value)">
  </label>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({components: {Nav, Icon}})
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) iconName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChange(value: string) {
    this.$emit('update:value', value);
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

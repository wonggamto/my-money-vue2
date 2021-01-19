<template>
  <ul class="types" :class="{[classPrefix+'-tab']:classPrefix}">
    <li v-for="item in dataSource"
        @click="select(item)"
        :class="liClass(item)"
        :key="item.value">{{ item.text }}
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string; value: string }
@Component
export default class Tabs extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    };
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>
<style lang="scss" scoped>
.types {
  display: flex;
  justify-content: center;
  background: #DDD;
  width: 100%;


  > li {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0;

    &.selected {
      background: #5A5AA9;
      color: white;

      ::after {
        display: none;
      }
    }
  }
}
</style>

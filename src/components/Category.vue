<template>
  <div class="category">
    <router-link to="/statistics">
      <Icon name="back"/>
    </router-link>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
    <Icon name=""/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';


@Component({components:{Icon}})
export default class Category extends Vue {
  type = '-';
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 24px;
  background: #464699;
  color: #FFF;
  font-size: 18px;

  > .types {
    display: flex;
    justify-content: center;
    background: #5A5AA3;
    width: 168px;
    margin: 8px 56px;
    border-radius: 48px;
    padding: 4px 0;

    > li {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 4px;

      &.selected {
        background: #FFF;
        border-radius: 16px;
        color: black;
      }
    }
  }
}

</style>

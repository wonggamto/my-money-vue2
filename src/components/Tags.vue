<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li>行</li>
      <li class="new">
        <button>
          <Icon name="add" class="add"/>
        </button>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';

export default {
  name: 'Tags',
  comments: {Icon}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
.tags {
  height: 30%;
  overflow: auto;
  > .current {
    display: flex;
    margin: 6px 0;
    flex-wrap: wrap;
    overflow: auto;
    flex-grow: 1;
    padding-left: 12px;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      width: 64px;
      border-radius: 30%;
      background: #F5F5F5;
      margin: 6px 12px;

      .new {
        > button {
          display: flex;
          width: 64px;
          height: 64px;
          justify-content: center;
          align-items: center;
          border-radius: 30%;
          margin: 24px;
          background: #F5F5F5;

          > .add {
            width: 68px;
            height: 68px;
          }
        }
      }
    }
  }
}

</style>

<template>
    <nav>
      <router-link to="/labels" class="item" active-class="selected">
        <Icon name="labels"/>
        标签
      </router-link>
      <router-link to="/money" class="item" active-class="selected">
        <Icon name="money"/>
        记账
      </router-link>
      <router-link to="/statistics" class="item" active-class="selected">
        <Icon name="statistics"/>
        统计
      </router-link>
    </nav>
</template>

<script lang="ts">

    import Icon from '@/components/Icon.vue';
    export default{
        name:"Nav",
      components: {Icon}
    }
</script>
<style lang="scss" scoped>
nav{
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  align-items: center;
  > .item{
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4px 0;
    font-size: 12px;
    .icon{
      height: 36px;
      width: 36px;
    }
  }
  > .item.selected{
    background: #F8FAFB;
  }
}
</style>

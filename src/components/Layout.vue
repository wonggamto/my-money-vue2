<template>
  <div class="nav-wrappers">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '../../money-vue2-2/src/components/Nav.vue';
export default {
  components: {Nav},
  props:['classPrefix'],
  name: 'Layout',
};
</script>

<style lang="scss" scoped>
.nav-wrappers {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>

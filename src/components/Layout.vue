<template>
  <div class="nav-wrappers">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
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

<template>
    <div>statistics
      <Nav/>
    </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue';

export default {
  name: 'Statistics',
  components: {Nav}
};
</script>

<style lang="scss" scoped>
.nav-wrappers {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .content{
    border: 1px solid red;
    flex-grow: 1;
    overflow: auto;
  }
}
</style>

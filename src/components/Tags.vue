<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
      <li class="new" @click="createTag">
        <Icon name="add"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/TagHelper';

@Component({
  components: {Icon},
},)
export default class Tags extends mixins(TagHelper){
  selectedTags: string[] = [];
  get tagList(){
      return this.$store.state.tagList;

  }
  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.tags {
  height: 164px;
  overflow: auto;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;

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
      flex-direction: column;

      &.selected {
        background: #DDD;
      }

      > .new {
        font-size: 12px;
      }
    }
  }
}

</style>

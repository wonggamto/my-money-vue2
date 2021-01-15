import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag() {
    const tagName = window.prompt('请输入标签名');
    if (!tagName) {return window.alert('标签名不能为空！');}
    this.$store.commit('createTag', tagName);
  }
}

export default {TagHelper};
